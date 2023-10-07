+++
title = "Optimiza la carga con un subconjunto de fuente personalizado"
date = 2023-04-29
updated = 2023-07-08
description = "Aprende cómo crear un subconjunto personalizado que solo incluya los glifos necesarios."

[taxonomies]
tags = ["funcionalidad", "tutorial"]

[extra]
social_media_card = "social_cards/es_blog_custom_font_subset.jpg"
+++

## El problema

Las fuentes personalizadas causan parpadeo de texto en Firefox. Para ver un gif y más detalles, mira [esta issue](https://github.com/welpo/tabi/issues/75).

## La solución

Para solucionar esto, tabi carga un subconjunto de glifos para el encabezado. Dado que esto aumenta ligeramente el tiempo de carga inicial, es una buena idea tratar de minimizar el tamaño de este subconjunto.

Por defecto, tabi incluye archivos de subconjuntos para caracteres en inglés y español (con algunos símbolos). Estos archivos se cargan cuando la página o el sitio de Zola está en ese idioma.

Para una optimización adicional, puedes crear un subconjunto de fuentes personalizado que solo incluya los caracteres utilizados en tu encabezado.

## Requisitos

Instala estas herramientas:

- [fonttools](https://github.com/fonttools/fonttools)

- [brotli](https://github.com/google/brotli)

Ejecuta `pip install fonttools brotli` para instalar ambas.

## El script

El script que sigue toma un archivo `config.toml` y un archivo de fuente como entrada, extrae los caracteres necesarios, crea un subconjunto de la fuente y genera un archivo CSS que contiene el subconjunto codificado en base64.

```bash
#!/usr/bin/env bash

usage() {
    echo "Usage: $0 [--config | -c CONFIG_FILE] [--font | -f FONT_FILE] [--output | -o OUTPUT_PATH]"
    echo
    echo "Options:"
    echo "  --config, -c   Path to the config.toml file."
    echo "  --font, -f     Path to the font file."
    echo "  --output, -o   Output path for the generated custom_subset.css file (default: current directory)"
    echo "  --help, -h     Show this help message and exit"
}

# La salida predeterminada es el directorio actual.
output_path="."

# Analiza las opciones de la línea de comandos.
while [ "$#" -gt 0 ]; do
    case "$1" in
        --config|-c)
            config_file="$2"
            shift 2
            ;;
        --font|-f)
            font_file="$2"
            shift 2
            ;;
        --output|-o)
            output_path="$2"
            shift 2
            ;;
        --help|-h)
            usage
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            usage
            exit 1
            ;;
    esac
done

# Comprueba si se proporcionan las opciones -c y -f.
if [ -z "$config_file" ]; then
    echo "Error: --config|-c option is required."
    usage
    exit 1
fi

if [ -z "$font_file" ]; then
    echo "Error: --font|-f option is required."
    usage
    exit 1
fi

# Comprueba si existen los archivos de configuración y de fuentes.
if [ ! -f "$config_file" ]; then
    echo "Error: Config file '$config_file' not found."
    exit 1
fi

if [ ! -f "$font_file" ]; then
    echo "Error: Font file '$font_file' not found."
    exit 1
fi

# Extrae el título y los nombres de los menús del archivo de configuración.
title=$(awk -F' = ' '/^title/{print $2}' "$config_file" | tr -d '"')
menu_names=$(awk -F' = ' '/^menu/{f=1;next} /socials/{f=0} f && /name/{print $2}' "$config_file" | cut -d',' -f1 | tr -d '"' )
language_names=$(awk -F' = ' '/^language_name\./{print $2}' "$config_file" | tr -d '"' )

# Si el sitio es multilingüe, obtiene las traducciones de los menús.
if [ -n "$language_names" ]; then
    for menu_name in $menu_names; do
        # Find the line with the menu name inside a [languages.*.translations] section and get the translated menus.
        menu_translation=$(awk -F' = ' "/\\[languages.*\\.translations\\]/{f=1;next} /^\\[/ {f=0} f && /$menu_name =/{print \$2}" "$config_file" | tr -d '"' )
        # Add the found menu value to the translations string
        menu_names+="$menu_translation"
    done
fi

# Combina las cadenas extraídas.
combined="$title$menu_names$language_names"

# Obtiene los caracteres únicos.
unique_chars=$(echo "$combined" | grep -o . | sort -u | tr -d '\n')

# Crea un archivo temporal para subset.woff2.
temp_subset=$(mktemp)

# Crea el subconjunto.
pyftsubset "$font_file" \
    --text="$unique_chars" \
    --layout-features="*" --flavor="woff2" --output-file="$temp_subset" --with-zopfli

# Codifica en Base64 el archivo temporal subset.woff2 y crea el archivo CSS.
base64_encoded_font=$(base64 -i "$temp_subset")
echo "@font-face{font-family:\"Inter Subset\";src:url(data:application/font-woff2;base64,$base64_encoded_font);}" > "$output_path/custom_subset.css"

# Elimina el archivo temporal subset.woff2.
rm "$temp_subset"
```

## Uso

Guarda el script en algún lugar como `~/bin/subset_font`. Hazlo ejecutable con `chmod +x ~/bin/subset_font`.

Ahora puedes ejecutarlo con las opciones requeridas `--config` y `--font`:

```bash
~/bin/subset_font --config path/to/config.toml --font path/to/font.woff2
```

De forma predeterminada, esto generará un archivo `custom_subset.css` en el directorio actual. Usa `-o` o `--output` para especificar una ruta diferente:

```bash
~/bin/subset_font -c path/to/config.toml -f path/to/font.woff2 -o path/to/output
```

Coloca este archivo `custom_subset.css` dentro del directorio `static/`.


## Automatización con un Pre-commit Hook

Es posible que cambies el título o las opciones del menú de tu sitio, lo que haría que el subconjunto personalizado deje de ser útil.

Para automatizar el proceso de creación de este archivo, puedes integrar el script en un gancho (hook) pre-commit de Git que se active al detectar cambios en el archivo `config.toml`, ejecute el script y guarde el archivo CSS resultante en el directorio `static/` de tu sitio.

1. Crea un archivo `.git/hooks/pre-commit` en tu proyecto de Git, si aún no existe.

2. Hazlo ejecutable con `chmod +x .git/hooks/pre-commit`.

3. Agrega el siguiente código al archivo:

```bash
# Comprueba si config.toml se ha modificado.
if git diff --cached --name-only | grep -q "config.toml"; then
    echo "config.toml modified. Running subset_font…"

    # Ejecuta el script subset_font.
    ~/bin/subset_font -c config.toml -f static/fonts/Inter4.woff2 -o static/

    # Añadie el subset.css recién generado al commit.
    git add static/custom_subset.css
fi
```

Asegúrate de modificar el script para que coincida con la ruta donde has guardado el script `subset_font`. Las rutas de configuración y fuente deberían funcionar correctamente con la configuración predeterminada de tabi.

Ahora, cada vez que hagas cambios en tu proyecto de Git y los confirmes, el gancho pre-commit verificará las modificaciones en el archivo `config.toml` y ejecutará automáticamente el script `subset_font` para actualizar el archivo `custom_subset.css`.

Por cierto, si te interesa una forma de actualizar automáticamente la fecha de tus publicaciones en Zola o comprimir automáticamente tus archivos PNG, echa un vistazo a [esta publicación](https://osc.garden/es/blog/zola-date-git-hook/).

Si deseas utilizar todos los scripts a la vez (compresión de archivos PNG, actualización de la fecha y creación del subconjunto de fuentes), combina su código en un solo archivo `.git/hooks/pre-commit`.
