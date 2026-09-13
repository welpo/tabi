+++
title = "Actualiza tu sitio tabi a Zola 0.23"
description = "Zola 0.23 rompe muchas cosas; tabi 5.0.0 también."
date = 2026-09-13
updated = 2026-09-13

[taxonomies]
tags = ["tutorial", "preguntas frecuentes", "componentes"]

[extra]
quick_navigation_buttons = true
+++

Zola 0.23.0 ha cambiado muchas cosas, sobre todo por la actualización a Tera 2.

Como esto obliga a los usuarios a hacer cambios, he aprovechado para retirar ajustes que solo existían por retrocompatibilidad. Este documento pretende facilitar la transición.

---

tabi requiere **Zola 0.23.6 o superior**. Comprueba la versión que usas en local, en CI y en el despliegue:

```bash
zola --version
```

Si necesitas quedarte en una versión de Zola anterior a la 0.23.0, fija tabi en `v4.2.0`, la última versión compatible.

Si ya tienes un clon:

```bash
git -C themes/tabi fetch --tags
git -C themes/tabi checkout --detach v4.2.0
git -C themes/tabi describe --tags --exact-match
```

Como submódulo:

```bash
git submodule update --init themes/tabi
git -C themes/tabi fetch --tags
git -C themes/tabi checkout --detach v4.2.0
git add themes/tabi
git diff --cached --submodule=log -- themes/tabi
git commit -m "Pin tabi v4.2.0 for pre-0.23 Zola"
```

El repositorio padre guarda el commit del submódulo, no el nombre de la etiqueta. Para un clon nuevo:

```bash
git clone --branch v4.2.0 --depth 1 https://github.com/welpo/tabi.git themes/tabi
```

---

## Índice

<!-- toc -->

---

## Elimina los ajustes retirados

- `footnote_backlinks`: usa `[markdown].bottom_footnotes = true`.
- `add_src_to_code_block`: usa bloques de código con nombre y `code_block_name_links`.
- `[extra].index_format`: muévelo a `[search]` y a la tabla de búsqueda de cada idioma activado.
- `translate_copyright` y `translated_copyright`: usa `copyright_translations`.

## Actualiza los formatos de fecha

Si has configurado `long_date_format`, `short_date_format`, `archive_date_format` o `date_formats`, reescribe cada valor usando [patrones UTS-35](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). Las directivas `%` de strftime fallan cuando tabi aplica la configuración regional del idioma.

```toml
# Antes
long_date_format = "%d %B %Y"

# Después
long_date_format = "dd MMMM y"
```

Las sustituciones más comunes son `%-d` → `d`, `%d` → `dd`, `%b` → `MMM`, `%B` → `MMMM` y `%Y` → `y`. Escribe el texto literal entre apóstrofos: `d 'de' MMMM 'de' y`.

## Localiza lo que hay que cambiar

Busca llamadas a shortcodes en línea:

{% raw %}
```bash
grep -rEn --include='*.md' '[{][{][[:space:]]*[A-Za-z_][A-Za-z0-9_]*[[:space:]]*[(]' content
```
{% endraw %}

Busca llamadas a shortcodes de bloque:

{% raw %}
```bash
grep -rEn --include='*.md' '[{]%[[:space:]]*[A-Za-z_][A-Za-z0-9_]*[[:space:]]*[(]' content
```
{% endraw %}

Cada resultado indica un archivo, un número de línea y la llamada. Aparecerán dos tipos:

- Shortcodes como `admonition`, `toc` o `dual_theme_image`. Conviértelos a la sintaxis de componentes, como se explica [más abajo](#convierte-los-shortcodes-en-componentes).
- Funciones integradas como `get_url`, `resize_image` o `get_taxonomy_url`. Estas siguen funcionando en la 0.23. No las toques.

Si envolviste ejemplos en `{% raw %}{% raw %}{% endraw %}`, esos resultados son texto literal. Tampoco los toques.

Lista tus shortcodes y macros propios:

{% raw %}
```bash
ls templates/shortcodes templates/macros
```
{% endraw %}

Todo lo que aparezca es tuyo, no de tabi, y hay que migrarlo a `templates/components/`.

Revisa la configuración en busca de ajustes retirados:

{% raw %}
```bash
grep -En 'footnote_backlinks|add_src_to_code_block|translate_copyright|translated_copyright|index_format|highlight_code|highlight_theme' config.toml
```
{% endraw %}

## Actualiza el resaltado de sintaxis

Mueve los ajustes de resaltado de `[markdown]` a `[markdown.highlighting]`:

```toml
[markdown]
smart_punctuation = true

[markdown.highlighting]
theme = "catppuccin-frappe"
style = "class"
error_on_missing_language = true
```

Para usar temas distintos:

```toml
[markdown.highlighting]
light_theme = "catppuccin-latte"
dark_theme = "catppuccin-frappe"
style = "class"
error_on_missing_language = true
```

tabi requiere `style = "class"`. Zola genera `giallo.css`, o bien `giallo-light.css` y `giallo-dark.css`.

## Configura la búsqueda multilingüe

La tabla `[search]` de la raíz configura el idioma por defecto. Cada idioma adicional con `build_search_index = true` necesita su propia tabla:

```toml
build_search_index = true

[search]
include_title = true
include_description = true
include_path = true
include_content = true
index_format = "elasticlunr_json"

[languages.es]
title = "Mi sitio"
build_search_index = true

[languages.es.search]
include_title = true
include_description = true
include_path = true
include_content = true
index_format = "elasticlunr_json"
```

## Convierte los shortcodes en componentes

Las llamadas en línea pierden los paréntesis y las comas:

{% raw %}
```diff
-{{ admonition(type="tip", text="Stay hydrated") }}
+{{< admonition type="tip" text="Stay hydrated" />}}
```
{% endraw %}

Las llamadas de bloque usan etiquetas de cierre con nombre:

{% raw %}
```diff
-{% admonition(type="tip") %}
+{% <admonition type="tip"> %}
 Stay hydrated.
-{% end %}
+{% </admonition> %}
```
{% endraw %}

Envuelve entre llaves las expresiones, los booleanos, los números, los arrays y los mapas. Por defecto, los parámetros de los componentes son explícitos. Prefija con `@` los parámetros de contexto ambiental en la definición del componente para que Tera los resuelva desde el llamador:

{% raw %}
```jinja
{% component post_language(@lang: string) %}
{{ lang }}
{% endcomponent post_language %}
```

```md
{{< dual_theme_image light_src="light.webp" dark_src="dark.webp" full_width={true} />}}
{{< multilingual_quote original="Hola" translated="Hello" />}}
{{< iine />}}
```
{% endraw %}

## Migra tus shortcodes propios

Mueve las plantillas de tu sitio de `templates/shortcodes/` a `templates/components/` y define un componente. Este ejemplo está adaptado de un sitio que usa tabi:

{% raw %}
```jinja
{% component youtube(id: string, class = "", playlist = "", autoplay = false) %}
<div{% if class %} class="{{ class }}"{% endif %}>
    <iframe src="https://www.youtube-nocookie.com/embed/{{ id }}{% if playlist %}?list={{ playlist }}{% if autoplay %}&amp;autoplay=1{% endif %}{% elif autoplay %}?autoplay=1{% endif %}" allowfullscreen></iframe>
</div>
{% endcomponent youtube %}
```

```md
{{< youtube id="dQw4w9WgXcQ" class="video" autoplay={true} />}}
```
{% endraw %}

Usa parámetros normales para las entradas del componente y parámetros implícitos para valores ambientales como `lang`, `config` o `page`. Un valor implícito todavía puede sobrescribirse explícitamente en el lugar de la llamada.

## Protege los ejemplos literales

El markdown se procesa como plantilla antes de renderizar los bloques de código. Envuelve los ejemplos literales entre <code>&#123;% raw %&#125;</code> y <code>&#123;% endraw %&#125;</code> en el archivo fuente.

Los identificadores de encabezado personalizados no necesitan bloques raw:

{% raw %}
```md
## Comprobaciones de despliegue {#comprobaciones-de-despliegue}
```
{% endraw %}

Usa `skip_content_templating` solo cuando el archivo completo deba saltarse el procesado de plantillas.

## Revisa tus plantillas personalizadas

Las plantillas propias que sobrescriben las del tema, en `templates/`, no se actualizan junto al tema.

<table>
<thead><tr><th>Antes</th><th>Ahora</th></tr></thead>
<tbody>
<tr><td>macros e <code>{% raw %}{% import %}{% endraw %}</code></td><td>componentes</td></tr>
<tr><td><code>items | concat(with=item)</code></td><td><code>[...items, item]</code></td></tr>
<tr><td><code>items | slice(start=1)</code></td><td><code>items[1:]</code></td></tr>
<tr><td><code>value | as_str</code></td><td><code>value | str</code></td></tr>
<tr><td><code>trim_start_matches</code> / <code>trim_end_matches</code></td><td><code>trim_start</code> / <code>trim_end</code></td></tr>
<tr><td><code>item.0</code></td><td><code>item[0]</code></td></tr>
<tr><td><code>is starting_with("http")</code></td><td><code>is starting_with(pat="http")</code></td></tr>
<tr><td><code>is iterable</code> para arrays</td><td><code>is array</code></td></tr>
<tr><td><code>get_taxonomy_url(..., name=term)</code></td><td><code>get_taxonomy_url(..., term=term)</code></td></tr>
<tr><td><code>{% raw %}{% include "x" ignore missing %}{% endraw %}</code></td><td>incluye un archivo por defecto que exista</td></tr>
</tbody>
</table>

El acceso a valores indefinidos es más estricto. Usa encadenamiento opcional, como `page?.extra?.setting`, y comprueba los valores nulos explícitos antes de aplicarles filtros. `default(value=...)` gestiona los valores indefinidos, no los nulos.

`get_page` y `get_section` reciben una ruta canónica y `lang`. Los argumentos de los componentes usan literales de cadena o expresiones entre llaves; `page` es la forma abreviada de `page={page}`.

Consulta la [guía de migración de Tera](https://github.com/Keats/tera/blob/master/MIGRATION.md) para ver todos los cambios del lenguaje.

## Diferencias esperadas en la salida

- **Notas al pie:** etiquetas entre corchetes y enlaces absolutos con fragmentos `#fn-*` y `#fr-*`.
- **Resaltado:** clases de tokens numeradas `z-*`, o bien `z-l-*`/`z-d-*`.
- **Espacios en blanco:** hay diferencias alrededor de la salida de los componentes; revisa el contenido en línea y los anidamientos.
- **Orden de los idiomas:** puede cambiar el orden del selector de idioma y de los `hreflang`; los destinos no deberían cambiar.
- **XML:** el escapado puede variar, aunque los valores descodificados sigan siendo equivalentes.
