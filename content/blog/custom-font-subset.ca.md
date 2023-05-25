+++
title = "Optimitza la càrrega amb un subconjunt de font personalitzat"
date = 2023-04-29
updated = 2023-05-25
description = "Aprèn com crear un subconjunt personalitzat que només inclogui els glifs necessaris."

[taxonomies]
tags = ["funcionalitat", "tutorial"]
+++

## El problema

Les fonts personalitzades causen parpelleig de text a Firefox. Per veure un gif i més detalls, mira [aquesta issue](https://github.com/welpo/tabi/issues/75).

## La solució

Per solucionar això, tabi carrega un subconjunt de glifs per a l'encapçalament. Donat que això augmenta lleugerament el temps de càrrega inicial, és una bona idea intentar minimitzar la mida d'aquest subconjunt.

Per defecte, tabi inclou fitxers de subconjunts per a caràcters en anglès i espanyol (amb alguns símbols). Aquests fitxers es carreguen quan la pàgina o el lloc web de Zola està en aquest idioma.

Per a una optimització addicional, pots crear un subconjunt de fonts personalitzat que només inclogui els caràcters utilitzats en el teu encapçalament.

## Requisits

Instal·la aquestes eines:

- [fonttools](https://github.com/fonttools/fonttools)

- [brotli](https://github.com/google/brotli)

Executa `pip install fonttools brotli` per instal·lar totes dues.

## L'script

El següent script pren un fitxer `config.toml` i un fitxer de font com a entrada, extreu els caràcters necessaris, crea un subconjunt de la font i genera un fitxer CSS que conté el subconjunt codificat en base64.

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

# La sortida per defecte és el directori actual.
output_path="."

# Opcions de la línia de comandes.
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

# Comprova si s'han proporcionat les opcions -c i -f.
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

# Comprova si els fitxers de configuració i de font existeixen.
if [ ! -f "$config_file" ]; then
    echo "Error: Config file '$config_file' not found."
    exit 1
fi

if [ ! -f "$font_file" ]; then
    echo "Error: Font file '$font_file' not found."
    exit 1
fi

# Extreu el títol i els noms del menú del fitxer de configuració.
title=$(awk -F' = ' '/^title/{print $2}' "$config_file" | tr -d '"' | grep -v "atom feed")
menu_names=$(awk -F' = ' '/^menu/{f=1;next} /socials/{f=0} f && /name/{print $2}' "$config_file" | cut -d',' -f1 | tr -d '"' )
language_names=$(awk -F' = ' '/^language_name\./{print $2}' "$config_file" | tr -d '"' )

# Si el lloc web és multilingüe, obté les traduccions del menú.
if [ -n "$language_names" ]; then
    for menu_name in $menu_names; do
        # Find the line with the menu name inside a [languages.*.translations] section and get the translated menus.
        menu_translation=$(awk -F' = ' "/\\[languages.*\\.translations\\]/{f=1;next} /^\\[/ {f=0} f && /$menu_name =/{print \$2}" "$config_file" | tr -d '"' )
        # Add the found menu value to the translations string
        menu_names+="$menu_translation"
    done
fi

# Combina les cadenes extretes.
combined="$title$menu_names$language_names"

# Obté els caràcters únics.
unique_chars=$(echo "$combined" | grep -o . | sort -u | tr -d '\n')

# Crea un fitxer temporal per a subset.woff2.
temp_subset=$(mktemp)

# Crea el subconjunto.
pyftsubset "$font_file" \
    --text="$unique_chars" \
    --layout-features="*" --flavor="woff2" --output-file="$temp_subset" --with-zopfli

# Codifica en base64 el fitxer temporal subset.woff2 i crea el fitxer CSS.
base64_encoded_font=$(base64 -i "$temp_subset")
echo "@font-face{font-family:\"Inter Subset\";src:url(data:application/font-woff2;base64,$base64_encoded_font);}" > "$output_path/custom_subset.css"

# Elimina el fitxer temporal subset.woff2.
rm "$temp_subset"
```

## Ús

Guarda l'script a algun lloc com `~/bin/subset_font`. Fes-lo executable amb `chmod +x ~/bin/subset_font`.

Ara pots executar-lo amb les opcions requerides `--config` i `--font`:

```
~/bin/subset_font --config path/to/config.toml --font path/to/font.woff2
```

De forma predeterminada, això generarà un fitxer `custom_subset.css` al directori actual. Utilitza `-o` o `--output` per especificar una ruta diferent:

```
~/bin/subset_font -c path/to/config.toml -f path/to/font.woff2 -o path/to/output
```

Col·loca aquest fitxer `custom_subset.css` dins del directori `static/` del teu projecte de Zola.

## Automatització amb un Pre-commit Hook

És possible que canviïs el títol o les opcions del menú del teu lloc web, la qual cosa faria que el subconjunt personalitzat deixés de ser útil.

Per automatitzar el procés de creació d'aquest fitxer, pots integrar l'script en un ganxo (hook) pre-commit de Git que s'activi en detectar canvis al fitxer `config.toml`, executi l'script i guardi el fitxer CSS resultant al directori `static/` del teu lloc web.

1. Crea un fitxer `.git/hooks/pre-commit` al teu projecte de Git, si encara no existeix.

2. Fes-lo executable amb `chmod +x .git/hooks/pre-commit`.

3. Afegeix el següent codi al fitxer:

```bash
# Comprova si config.toml s'ha modificat.
if git diff --cached --name-only | grep -q "config.toml"; then
    echo "config.toml modified. Running subset_font…"

    # Executa l'script subset_font.
    ~/bin/subset_font -c config.toml -f static/fonts/Inter4.woff2 -o static/

    # Afegeix el fitxer subset.css generat al commit.
    git add static/custom_subset.css
fi
```

Asegura't de modificar l'script perquè coincideixi amb la ruta on has guardat l'script `subset_font`. Les rutes de configuració i font haurien de funcionar correctament amb la configuració predeterminada de tabi.

Ara, cada vegada que facis canvis al teu projecte de Git i facis commit, el ganxo pre-commit verificarà les modificacions al fitxer `config.toml` i executarà automàticament l'script `subset_font` per actualitzar el fitxer `custom_subset.css`.

Per cert, si t'interessa una forma d'actualitzar automàticament la data de les teves publicacions a Zola o comprimir automàticament els teus fitxers PNG, fes un cop d'ull a [aquesta publicació](https://osc.garden/ca/blog/zola-date-git-hook/).

Si desitges utilitzar tots els scripts alhora (compressió de fitxers PNG, actualització de la data i creació del subconjunt de fonts), combina el seu codi en un sol fitxer `.git/hooks/pre-commit`.
