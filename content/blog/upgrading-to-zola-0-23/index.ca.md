+++
title = "Actualitza el teu lloc tabi a Zola 0.23"
description = "Zola 0.23 trenca moltes coses; tabi 5.0.0 també."
date = 2026-09-13
updated = 2026-09-13

[taxonomies]
tags = ["tutorial", "preguntes freqüents", "components"]

[extra]
quick_navigation_buttons = true
+++

Zola 0.23.0 ha canviat moltes coses, sobretot per l'actualització a Tera 2.

Com que això obliga els usuaris a fer canvis, he aprofitat per retirar opcions que només existien per compatibilitat amb versions anteriors. Aquest document pretén facilitar la transició.

---

tabi requereix **Zola 0.23.6 o superior**. Comprova la versió que fas servir en local, a CI i al desplegament:

```bash
zola --version
```

Si necessites quedar-te en una versió de Zola anterior a la 0.23.0, fixa tabi a `v4.2.0`, l'última versió compatible.

Si ja tens un clon:

```bash
git -C themes/tabi fetch --tags
git -C themes/tabi checkout --detach v4.2.0
git -C themes/tabi describe --tags --exact-match
```

Com a submòdul:

```bash
git submodule update --init themes/tabi
git -C themes/tabi fetch --tags
git -C themes/tabi checkout --detach v4.2.0
git add themes/tabi
git diff --cached --submodule=log -- themes/tabi
git commit -m "Pin tabi v4.2.0 for pre-0.23 Zola"
```

El repositori pare desa el commit del submòdul, no el nom de l'etiqueta. Per a un clon nou:

```bash
git clone --branch v4.2.0 --depth 1 https://github.com/welpo/tabi.git themes/tabi
```

---

## Índex

<!-- toc -->

---

## Elimina les opcions retirades

- `footnote_backlinks`: fes servir `[markdown].bottom_footnotes = true`.
- `add_src_to_code_block`: fes servir blocs de codi amb nom i `code_block_name_links`.
- `[extra].index_format`: mou-la a `[search]` i a la taula de cerca de cada llengua activada.
- `translate_copyright` i `translated_copyright`: fes servir `copyright_translations`.

## Actualitza els formats de data

Si has configurat `long_date_format`, `short_date_format`, `archive_date_format` o `date_formats`, reescriu cada valor amb [patrons UTS-35](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). Les directives `%` de strftime fallen quan tabi aplica la configuració regional de l'idioma.

```toml
# Abans
long_date_format = "%d %B %Y"

# Després
long_date_format = "dd MMMM y"
```

Les substitucions més comunes són `%-d` → `d`, `%d` → `dd`, `%b` → `MMM`, `%B` → `MMMM` i `%Y` → `y`. Escriu el text literal entre apòstrofs: `d 'de' MMMM 'de' y`.

## Localitza què cal canviar

Cerca les crides a shortcodes en línia:

{% raw %}
```bash
grep -rEn --include='*.md' '[{][{][[:space:]]*[A-Za-z_][A-Za-z0-9_]*[[:space:]]*[(]' content
```
{% endraw %}

Cerca les crides a shortcodes de bloc:

{% raw %}
```bash
grep -rEn --include='*.md' '[{]%[[:space:]]*[A-Za-z_][A-Za-z0-9_]*[[:space:]]*[(]' content
```
{% endraw %}

Cada resultat indica un fitxer, un número de línia i la crida. N'apareixeran de dos tipus:

- Shortcodes com ara `admonition`, `toc` o `dual_theme_image`. Converteix-los a la sintaxi de components, tal com s'explica [més avall](#converteix-els-shortcodes-en-components).
- Funcions integrades com ara `get_url`, `resize_image` o `get_taxonomy_url`. Aquestes continuen funcionant a la 0.23. No les toquis.

Si vas envoltar exemples amb `{% raw %}{% raw %}{% endraw %}`, aquests resultats són text literal. Tampoc no els toquis.

Llista els teus shortcodes i macros propis:

{% raw %}
```bash
ls templates/shortcodes templates/macros
```
{% endraw %}

Tot el que hi aparegui és teu, no de tabi, i cal migrar-ho a `templates/components/`.

Revisa la configuració per trobar opcions retirades:

{% raw %}
```bash
grep -En 'footnote_backlinks|add_src_to_code_block|translate_copyright|translated_copyright|index_format|highlight_code|highlight_theme' config.toml
```
{% endraw %}

## Actualitza el realçat de sintaxi

Mou les opcions de realçat de `[markdown]` a `[markdown.highlighting]`:

```toml
[markdown]
smart_punctuation = true

[markdown.highlighting]
theme = "catppuccin-frappe"
style = "class"
error_on_missing_language = true
```

Per fer servir temes diferents:

```toml
[markdown.highlighting]
light_theme = "catppuccin-latte"
dark_theme = "catppuccin-frappe"
style = "class"
error_on_missing_language = true
```

tabi requereix `style = "class"`. Zola genera `giallo.css`, o bé `giallo-light.css` i `giallo-dark.css`.

## Configura la cerca multilingüe

La taula `[search]` de l'arrel configura la llengua per defecte. Cada llengua addicional amb `build_search_index = true` necessita la seva pròpia taula:

```toml
build_search_index = true

[search]
include_title = true
include_description = true
include_path = true
include_content = true
index_format = "elasticlunr_json"

[languages.ca]
title = "El meu lloc"
build_search_index = true

[languages.ca.search]
include_title = true
include_description = true
include_path = true
include_content = true
index_format = "elasticlunr_json"
```

## Converteix els shortcodes en components

Les crides en línia perden els parèntesis i les comes:

{% raw %}
```diff
-{{ admonition(type="tip", text="Stay hydrated") }}
+{{< admonition type="tip" text="Stay hydrated" />}}
```
{% endraw %}

Les crides de bloc fan servir etiquetes de tancament amb nom:

{% raw %}
```diff
-{% admonition(type="tip") %}
+{% <admonition type="tip"> %}
 Stay hydrated.
-{% end %}
+{% </admonition> %}
```
{% endraw %}

Envolta entre claus les expressions, els booleans, els nombres, els arrays i els mapes. Per defecte, els paràmetres dels components són explícits. Prefixa amb `@` els paràmetres de context ambiental a la definició del component perquè Tera els resolgui des del cridador:

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

## Migra els teus shortcodes propis

Mou les plantilles del teu lloc de `templates/shortcodes/` a `templates/components/` i defineix un component. Aquest exemple està adaptat d'un lloc que fa servir tabi:

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

Fes servir paràmetres normals per a les entrades del component i paràmetres implícits per a valors ambientals com `lang`, `config` o `page`. Un valor implícit encara es pot sobreescriure explícitament al lloc de la crida.

## Protegeix els exemples literals

El markdown es processa com a plantilla abans de renderitzar els blocs de codi. Envolta els exemples literals entre <code>&#123;% raw %&#125;</code> i <code>&#123;% endraw %&#125;</code> al fitxer font.

Els identificadors d'encapçalament personalitzats no necessiten blocs raw:

{% raw %}
```md
## Comprovacions de desplegament {#comprovacions-de-desplegament}
```
{% endraw %}

Fes servir `skip_content_templating` només quan el fitxer sencer hagi de saltar-se el processament de plantilles.

## Revisa les teves plantilles personalitzades

Les plantilles pròpies que sobreescriuen les del tema, a `templates/`, no s'actualitzen amb el tema.

<table>
<thead><tr><th>Abans</th><th>Ara</th></tr></thead>
<tbody>
<tr><td>macros i <code>{% raw %}{% import %}{% endraw %}</code></td><td>components</td></tr>
<tr><td><code>items | concat(with=item)</code></td><td><code>[...items, item]</code></td></tr>
<tr><td><code>items | slice(start=1)</code></td><td><code>items[1:]</code></td></tr>
<tr><td><code>value | as_str</code></td><td><code>value | str</code></td></tr>
<tr><td><code>trim_start_matches</code> / <code>trim_end_matches</code></td><td><code>trim_start</code> / <code>trim_end</code></td></tr>
<tr><td><code>item.0</code></td><td><code>item[0]</code></td></tr>
<tr><td><code>is starting_with("http")</code></td><td><code>is starting_with(pat="http")</code></td></tr>
<tr><td><code>is iterable</code> per a arrays</td><td><code>is array</code></td></tr>
<tr><td><code>get_taxonomy_url(..., name=term)</code></td><td><code>get_taxonomy_url(..., term=term)</code></td></tr>
<tr><td><code>{% raw %}{% include "x" ignore missing %}{% endraw %}</code></td><td>inclou un fitxer per defecte que existeixi</td></tr>
</tbody>
</table>

L'accés a valors indefinits és més estricte. Fes servir encadenament opcional, com ara `page?.extra?.setting`, i comprova els valors nuls explícits abans d'aplicar-hi filtres. `default(value=...)` gestiona els valors indefinits, no els nuls.

`get_page` i `get_section` reben una ruta canònica i `lang`. Els arguments dels components fan servir literals de cadena o expressions entre claus; `page` és la forma abreujada de `page={page}`.

Consulta la [guia de migració de Tera](https://github.com/Keats/tera/blob/master/MIGRATION.md) per veure tots els canvis del llenguatge.

## Diferències esperades a la sortida

- **Notes al peu:** etiquetes entre claudàtors i enllaços absoluts amb fragments `#fn-*` i `#fr-*`.
- **Realçat:** classes de tokens numerades `z-*`, o bé `z-l-*`/`z-d-*`.
- **Espais en blanc:** hi ha diferències al voltant de la sortida dels components; revisa el contingut en línia i els aniuaments.
- **Ordre de les llengües:** pot canviar l'ordre del selector de llengua i dels `hreflang`; les destinacions no haurien de canviar.
- **XML:** l'escapament pot variar, tot i que els valors descodificats continuïn sent equivalents.
