+++
title = "Shortcodes personalizados"
date = 2023-02-19
updated = 2025-08-01
description = "Este tema incluye algunos shortcodes personalizados útiles que puedes utilizar para mejorar tus publicaciones. Puedes mostrar imágenes que se adapten a los temas claro y oscuro, dar formato a una sección de referencias con un aspecto profesional, y más."

[taxonomies]
tags = ["funcionalidad", "shortcodes"]

[extra]
toc = true
toc_levels = 2
quick_navigation_buttons = true
code_block_name_links = true
mermaid = true
social_media_card = "social_cards/es_blog_shortcodes.jpg"
+++

## Shortcodes de diagramas

### Diagramas de Mermaid

[Mermaid](https://github.com/mermaid-js/mermaid) es una herramienta de diagramación y gráficos que usa texto y código para generar diagramas. Admite diagramas de flujo, diagramas de secuencia, gráficos de Gantt y más.

Para incluir un diagrama Mermaid en tu publicación, sigue estos dos pasos:

1. Establece `mermaid = true` en la sección `[extra]` del front matter de tu página, sección o `config.toml`. Esto cargará el JavaScript necesario para renderizar los diagramas.

2. Usa el shortcode `mermaid()` para definir tu diagrama. Por ejemplo:

```txt
{%/* mermaid() */%}
classDiagram
    class DistorsionesCognitivas {
        +PensamientoTodoONada()
        +Sobregeneralizacion()
        +FiltroMental()
        +SacarConclusionesPrecipitadas()
    }
    class PensamientoTodoONada {
        +VerEnExtremos()
    }
    class Sobregeneralizacion {
        +GeneralizarDeUnicoEjemplo()
    }
    class FiltroMental {
        +EnfocarseEnNegativo()
    }
    class SacarConclusionesPrecipitadas {
        +HacerSuposiciones()
    }
    DistorsionesCognitivas *-- PensamientoTodoONada
    DistorsionesCognitivas *-- Sobregeneralizacion
    DistorsionesCognitivas *-- FiltroMental
    DistorsionesCognitivas *-- SacarConclusionesPrecipitadas
{%/* end */%}
```

El diagrama se renderizará así:

{% mermaid() %}
classDiagram
    class DistorsionesCognitivas {
        +PensamientoTodoONada()
        +Sobregeneralizacion()
        +FiltroMental()
        +SacarConclusionesPrecipitadas()
    }
    class PensamientoTodoONada {
        +VerEnExtremos()
    }
    class Sobregeneralizacion {
        +GeneralizarDeUnicoEjemplo()
    }
    class FiltroMental {
        +EnfocarseEnNegativo()
    }
    class SacarConclusionesPrecipitadas {
        +HacerSuposiciones()
    }
    DistorsionesCognitivas *-- PensamientoTodoONada
    DistorsionesCognitivas *-- Sobregeneralizacion
    DistorsionesCognitivas *-- FiltroMental
    DistorsionesCognitivas *-- SacarConclusionesPrecipitadas
{% end %}

El shortcode de Mermaid admite dos parámetros:

- `invertible`: Si se establece en `true` (por defecto), el diagrama se invertirá en modo oscuro, igual que las [imágenes invertibles](#imagen-invertible).
- `full_width`: Permite que el diagrama ocupe el ancho del encabezado. Mira [imagen a ancho completo](#imagen-a-ancho-completo).

{{ admonition(type="tip", title="CONSEJO", text="Puedes usar el [editor de Mermaid](https://mermaid.live/) para crear y previsualizar tus diagramas.") }}

#### Uso

```
{%/* mermaid(invertible=true, full_width=false) */%}

Tu diagrama Mermaid va aquí. Puedes omitir los parámetros para usar los valores predeterminados.

{%/* end */%}
```

## Shortcodes de imagen

Todos los shortcodes de imagen admiten rutas absolutas, rutas relativas, y fuentes remotas en el parámetro `src`.

Todos los shortcodes de imagen tienen los siguientes parámetros opcionales:

- `raw_path`. Por defecto es `false`. Si se establece en `true`, el parámetro `src` se usará tal cual. Útil para activos ubicados en la misma carpeta que tienen un slug personalizado (ver [Zola issue #2598](https://github.com/getzola/zola/issues/2598)).
- `inline`. Valor predeterminado: `false`. Si se establece `true`, la imagen se mostrará en línea con el texto.
- `full_width`. Valor predeterminado: `false` (ver [más abajo](#imagen-a-ancho-completo)).
- `lazy_loading`. Valor predeterminado: `true`.

### Imágenes de doble tema

Útil si deseas usar una imagen diferente para los temas claro y oscuro:

{{ dual_theme_image(light_src="img/paris_day.webp", dark_src="img/paris_night.webp" alt="La Torre Eiffel") }}

#### Uso
```
{{/* dual_theme_image(light_src="img/paris_day.webp", dark_src="img/paris_night.webp" alt="La Torre Eiffel") */}}
```

### Imagen invertible

Ideal para gráficos, dibujos lineales, diagramas... Invierte los colores de la imagen. La imagen de origen se utilizará para el tema claro.

{{ invertible_image(src="img/graph.webp", alt="Gráfico invertible") }}

#### Uso

```
{{/* invertible_image(src="img/graph.webp", alt="Gráfico invertible") */}}
```


### Imagen atenuable

Las imágenes con demasiado brillo o contraste pueden ser demasiado discordantes en un fondo oscuro. Aquí tienes un ejemplo de una fotografía que se atenúa cuando el tema oscuro está activo.

{{ dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Fotografía de un desierto, cielo celestial") }}

#### Uso

```
{{/* dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Fotografía de un desierto, cielo celestial") */}}
```

### Cambio de imagen al pasar el cursor

La imagen mostrada cambia cuando el usuario pasa el cursor por encima. Útil para comparaciones de antes y después, por ejemplo.

{{ image_hover(default_src="img/edited.webp", hovered_src="img/raw.webp", default_alt="Foto editada", hovered_alt="Foto original") }}

#### Uso

```
{{/* image_hover(default_src="img/before.webp", hovered_src="img/after.webp", default_alt="Imagen editada", hovered_alt="Toma original") */}}
```

### Cambio de imagen vía click

Muestra una imagen y cambia a una diferente al hacer clic. Ideal para destacar diferencias o llamar la atención sobre detalles.

{{ image_toggler(default_src="img/mojave_day.webp", toggled_src="img/mojave_night.webp", default_alt="Mojave durante el día", toggled_alt="Mojave durante la noche") }}

#### Uso

```
{{/* image_toggler(default_src="img/mojave_day.webp", toggled_src="img/mojave_night.webp", default_alt="Mojave durante el día", toggled_alt="Mojave durante la noche") */}}
```

### Imagen a ancho completo

La imagen se expandirá para coincidir con el ancho del encabezado, que generalmente es más ancho que el texto del artículo (excepto en móvil/ventanas pequeñas).

Todos los otros shortcodes de imágenes pueden usar el ancho completo asignando el valor `true` al parámetro opcional `full_width`.

{{ full_width_image(src="img/amsterdam_by_oskerwyld.webp", alt="Fotografía de un canal en Ámsterdam") }}

#### Uso

```
{{/* full_width_image(src="img/amsterdam_by_oskerwyld.webp", alt="Fotografía de un canal en Ámsterdam") */}}
```

## Shortcodes sociales

### iine

{{ aside(text="Para añadirlo a todas las publicaciones, establece `iine = true` en la sección `[extra]` de tu `config.toml`.") }}

Este shortcode te permite añadir botones adicionales de [iine.to](https://iine.to) a tus publicaciones, como este:

{{ iine(slug="/blog/shortcodes/demo-button") }}

#### Uso

```
{{/* iine(icon="heart", slug="/post/mi-slug-de-post/like", label="Me gusta esta publicación") */}}
```

El shortcode acepta los siguientes parámetros opcionales:

- `icon`: El icono a mostrar. Puede ser `heart`, `thumbs_up`, `upvote`, o cualquier emoji.
- `slug`: Un identificador único. Por defecto es la ruta de la página actual. Útil si quieres más de un botón en la misma página.
- `label`: La etiqueta de accesibilidad para el botón. Por defecto es "Me gusta esta publicación".

## Shortcodes de código

### Mostrar ruta o URL

Puedes mostrar una ruta o URL para un bloque de código usando la sintaxis nativa de Zola:

{{ aside(text="Requiere Zola 0.20.0 o superior.") }}

````
```rust,name=src/main.rs
fn main() {
    println!("¡Hola, mundo!");
}
```
````

Esto renderiza:

```rust,name=src/main.rs
fn main() {
    println!("¡Hola, mundo!");
}
```

Si estableces el `name` como una URL (es decir, comienza con `http` o `https`), puedes convertirlo en un enlace clickable. Esto es particularmente útil cuando se usa junto con el [shortcode de texto remoto](#texto-remoto).

{{ admonition(type="warning", title="JavaScript requerido", text="La función de URLs clickables requiere JavaScript. Para habilitarla, configura `code_block_name_links = true` en la sección `[extra]` de tu página, sección, o `config.toml`.") }}

```.gitignore,name=https://github.com/welpo/doteki/blob/main/.gitignore
__pycache__/
*coverage*
.vscode/
dist/
```

### Soporte de shortcode heredado

El shortcode `add_src_to_code_block` sigue funcionando por retrocompatibilidad, pero será descontinuado en una versión futura. Por favor, usa la sintaxis nativa de Zola:

```
# Forma antigua (descontinuada):
{{/* add_src_to_code_block(src="ruta/al/archivo.rs") */}}

# Forma nueva (recomendada):
```rust,name=ruta/al/archivo.rs
```

## Shortcodes de texto

### Aside (nota al margen)

Añade contenido complementario en los márgenes en pantallas anchas, o como bloques distintivos en móvil.

{{ aside(text="*Nota al margen* viene de *nota* (del latín, 'marca' o 'señal') y *margen* (del latín *margo*, 'borde' o 'límite').") }}

El shortcode acepta dos parámetros:

- `position`: Establecer como `"right"` para colocar en el margen derecho (por defecto, izquierdo)
- El contenido puede proporcionarse mediante el parámetro `text` o entre las etiquetas del shortcode

#### Uso

{{ admonition(type="warning", text="Separa la llamada al shortcode con saltos de línea para evitar errores de renderizado.") }}

Usando el parámetro `text`:

```
{{/* aside(text="*Nota al margen* viene de *nota* (del latín, 'marca' o 'señal') y *margen* (del latín *margo*, 'borde' o 'límite').") */}}
```

Usando el cuerpo del contenido e indicando la posición:

```
{%/* aside(position="right") */%}
Una nota más larga que
puede ocupar varias líneas.

Se admite *Markdown*.
{%/* end */%}
```

### Texto remoto

Añade texto desde una URL remota o un archivo local.

El shortcode acepta tres parámetros:

- `src`: La URL de origen o ruta del archivo (obligatorio)
- `start`: Primera línea a mostrar (opcional, empieza en 1)
- `end`: Número de la última línea (opcional, por defecto es 0, la última línea)

{{ admonition(type="info", text="`start` y `end` son inclusivos. `start=3, end=3` mostrará solo la tercera línea.") }}

**Importante**:

- **Archivos remotos VS archivos locales**: Si `src` empieza con "http", se tratará como un archivo remoto. De lo contrario, se asume que es una ruta de archivo local.
- **Acceso a archivos**: Dado que utiliza la función [`load_data`](https://www.getzola.org/documentation/templates/overview/#load-data) de Zola, los archivos locales deben estar dentro del directorio de Zola —ver la [lógica de búsqueda de archivos](https://www.getzola.org/documentation/templates/overview/#file-searching-logic). Desde [tabi 2.16.0](https://github.com/welpo/tabi/releases/tag/v2.16.0), el shortcode admite también rutas relativas.
- **Formateo de bloques de código**: Para mostrar el texto como un bloque de código, debes añadir manualmente las cercas de código Markdown (comillas invertidas) y, opcionalmente, especificar el lenguaje de programación para el resaltado sintáctico.

#### Uso

Añade un script de Python remoto dentro de un bloque de código con resaltado sintáctico:

````
```python
{{/* remote_text(src="https://example.com/script.py") */}}
```
````

Visualización de texto de un archivo local:

```
{{/* remote_text(src="ruta/a/archivo.txt") */}}
```

Mostar sólo las líneas 3 a 5 de un archivo remoto:

```
{{/* remote_text(src="https://example.com/script.py", start=3, end=5) */}}
```

### Advertencias

Destaca información con estos shortcodes. Hay cinco tipos (`type`): `note`, `tip`, `info`, `warning`, y `danger`.

{{ admonition(type="note", text="Contenido con **sintaxis** *Markdown*. Consulta [esta `api`](#).") }}

{{ admonition(type="tip", text="Contenido con **sintaxis** *Markdown*. Consulta [esta `api`](#).") }}

{{ admonition(type="info", text="Contenido con **sintaxis** *Markdown*. Consulta [esta `api`](#).") }}

{{ admonition(type="warning", text="Contenido con **sintaxis** *Markdown*. Consulta [esta `api`](#).") }}

{{ admonition(type="danger", text="Contenido con **sintaxis** *Markdown*. Consulta [esta `api`](#).") }}

Puedes cambiar el `title` y el `icon` de la advertencia. Ambos parámetros aceptan texto y por defecto coinciden con el tipo de advertencia. `icon` puede ser cualquiera de los tipos de advertencia disponibles.

{{ admonition(type="note", icon="tip", title="Título e icono personalizados", text="Contenido con **sintaxis** *Markdown*. Consulta [esta `api`](#).") }}

#### Uso

Puedes usar las advertencias de dos formas:

1. En línea con parámetros:

```md
{{/* admonition(type="danger", icon="tip", title="Un consejo importante", text="Mantente hidratado") */}}
```

2. Con contenido en el cuerpo:

```md
{%/* admonition(type="danger", icon="tip", title="Un consejo importante") */%}
Mantente hidratado

Este método es especialmente útil para contenido largo o múltiples párrafos.
{%/* end */%}
```

Ambos métodos admiten los mismos parámetros (`type`, `icon`, y `title`).

### Citas multilenguaje

Este shortcode permite mostrar una cita traducida y en su lenguaje original:

{{ multilingual_quote(original="Ce qui est terrible, ce n’est pas de souffrir ni de mourir, mais de mourir en vain.", translated="Lo terrible no es sufrir o morir, sino morir en vano.", author="Jean-Paul Sartre") }}

#### Uso

```
{{/* multilingual_quote(original="Ce qui est terrible, ce n’est pas de souffrir ni de mourir, mais de mourir en vain.", translated="Lo terrible no es sufrir o morir, sino morir en vano.", author="Jean-Paul Sartre") */}}
```

### Referencias con sangría francesa

Este shortcode formatea una sección de referencias con sangría francesa de la siguiente manera:

{% references() %}

Alderson, E. (2015). Ciberseguridad y justicia social: Una crítica a la hegemonía corporativa en un mundo digital. *New York Journal of Technology, 11*(2), 24-39. [https://doi.org/10.1007/s10198-022-01497-6](https://doi.org/10.1007/s10198-022-01497-6).

Funkhouser, M. (2012). Las normas sociales de indecencia: Un análisis del comportamiento desviado en la sociedad contemporánea. *Los Angeles Journal of Sociology, 16*(3), 41-58. [https://doi.org/10.1093/jmp/jhx037](https://doi.org/10.1093/jmp/jhx037).

Schrute, D. (2005). La revolución de la agricultura de remolacha: Un análisis de la innovación agrícola. *Scranton Agricultural Quarterly, 38*(3), 67-81.

Steinbrenner, G. (1997). El análisis costo-beneficio de George Costanza: Un examen del comportamiento de toma de riesgos en el lugar de trabajo. *New York Journal of Business, 12*(4), 112-125.

Winger, J. A. (2010). El arte del debate: Un examen de la retórica en el modelo de las Naciones Unidas del Greendale Community College. *Colorado Journal of Communication Studies, 19*(2), 73-86. [https://doi.org/10.1093/6seaons/1movie](https://doi.org/10.1093/6seaons/1movie).

{% end %}

#### Uso

```
{%/* references() */%}

Tus referencias van aquí.

Cada una en una línea nueva. Se renderizará Markdown (enlaces, cursivas…).

{%/* end */%}
```

### Spoilers

Este shortcode permite ocultar texto que se revelará al hacer clic. Por ejemplo: las galletas de la fortuna tiene su origen en {{ spoiler(text="Japón. Sí, [en serio](https://es.wikipedia.org/wiki/Galleta_de_la_suerte#Historia_y_origen).") }}

Como ves, el Markdown se renderiza.

Este shortcode tiene la opción `fixed_blur` para difuminar el texto "SPOILER", en lugar de difuminar el contenido real. Por ejemplo: es {{ spoiler(text="innecesario", fixed_blur=true)}} esperar 24 horas antes de denunciar la desaparición de una persona.


#### Uso

```
{{/* spoiler(text="texto que ocultar", fixed_blur=false) */}}
```

## Contenedores

### Contenedor ancho

Utiliza este código corto si deseas tener una tabla, párrafo, bloque de código… más ancho. En escritorio, ocupará el ancho del encabezado. En móviles no tendrá efecto, excepto para las tablas, que ganarán scroll horizontal.

{% wide_container() %}

| Título            |  Año  | Director             | Director de Fotografía| Género        | IMDb  | Duración     |
|-------------------|-------|----------------------|-----------------------|---------------|-------|--------------|
| Beoning           | 2018  | Lee Chang-dong       | Hong Kyung-pyo        | Drama/Misterio| 7.5   | 148 min      |
| The Master        | 2012  | Paul Thomas Anderson | Mihai Mălaimare Jr.   | Drama/Historia| 7.1   | 137 min      |
| The Tree of Life  | 2011  | Terrence Malick      | Emmanuel Lubezki      | Drama         | 6.8   | 139 min      |

{% end %}

#### Uso

```
{%/* wide_container() */%}

Coloca tu bloque de código, párrafo, tabla… aquí.

El Markdown, por supuesto, será interpretado.

{%/* end */%}
```

### Forzar dirección del texto

Fuerza la dirección del texto de un bloque de contenido. Anula tanto la configuración global `force_codeblock_ltr` como la dirección general del documento.

Acepta el parámetro `direction`: la dirección de texto deseada. Puede ser "ltr" (de izquierda a derecha) o "rtl" (de derecha a izquierda). Por defecto es "ltr".

{% force_text_direction(direction="rtl") %}
```python
def مرحبا_بالعالم():
    print("مرحبا بالعالم!")
```
{% end %}

#### Uso

En una página LTR podemos forzar que un bloque de código sea RTL (como se muestra arriba) de la siguiente manera:

````
{%/* force_text_direction(direction="rtl") */%}

```python
def مرحبا_بالعالم():
    print("مرحبا بالعالم!")
```

{%/* end */%}
````
