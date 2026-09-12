+++
title = "Upgrade your tabi site to Zola 0.23"
description = "Zola 0.23 breaks many things; so does tabi 5.0.0."
date = 2026-09-13
updated = 2026-09-13

[taxonomies]
tags = ["tutorial", "FAQ", "components"]

[extra]
quick_navigation_buttons = true
+++

Zola 0.23.0 changed many things, mostly due to the upgrade to Tera 2.

Since this required users making changes, I've taken the opportunity to deprecate existing settings that only existed for backwards compatibility. This documents aims to facilitate the transition.

---

tabi requires **Zola 0.23.6 or newer**. Check the version used locally, in CI, and for deployment:

```bash
zola --version
```

If you must stay on Zola older than 0.23.0, pin tabi to `v4.2.0`, the final compatible release.

Existing clone:

```bash
git -C themes/tabi fetch --tags
git -C themes/tabi checkout --detach v4.2.0
git -C themes/tabi describe --tags --exact-match
```

Submodule:

```bash
git submodule update --init themes/tabi
git -C themes/tabi fetch --tags
git -C themes/tabi checkout --detach v4.2.0
git add themes/tabi
git diff --cached --submodule=log -- themes/tabi
git commit -m "Pin tabi v4.2.0 for pre-0.23 Zola"
```

The parent repository records the submodule commit, not the tag name. For a new clone:

```bash
git clone --branch v4.2.0 --depth 1 https://github.com/welpo/tabi.git themes/tabi
```

---

## Table of Contents

<!-- toc -->

---

## Remove retired settings

- `footnote_backlinks`: use `[markdown].bottom_footnotes = true`.
- `add_src_to_code_block`: use named code fences and `code_block_name_links`.
- `[extra].index_format`: move it to `[search]` and each enabled language search table.
- `translate_copyright` and `translated_copyright`: use `copyright_translations`.

## Update date formats

If you set `long_date_format`, `short_date_format`, `archive_date_format`, or `date_formats`, rewrite each value using [UTS-35 patterns](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). Strftime `%` directives fail when tabi applies the language locale.

```toml
# Before
long_date_format = "%d %B %Y"

# After
long_date_format = "dd MMMM y"
```

Common replacements are `%-d` → `d`, `%d` → `dd`, `%b` → `MMM`, `%B` → `MMMM`, and `%Y` → `y`. Quote literal text: `d 'de' MMMM 'de' y`.

## Find what needs changing

Find inline shortcode calls:

{% raw %}
```bash
grep -rEn --include='*.md' '[{][{][[:space:]]*[A-Za-z_][A-Za-z0-9_]*[[:space:]]*[(]' content
```
{% endraw %}

Find block shortcode calls:

{% raw %}
```bash
grep -rEn --include='*.md' '[{]%[[:space:]]*[A-Za-z_][A-Za-z0-9_]*[[:space:]]*[(]' content
```
{% endraw %}

Each hit is a file, line number, and the call. Two kinds show up:

- Shortcodes like `admonition`, `toc`, or `dual_theme_image`. Convert these to component syntax, as shown [below](#convert-shortcodes-to-components).
- Built-in functions like `get_url`, `resize_image`, or `get_taxonomy_url`. These still work in 0.23. Leave them alone.

If you wrapped examples in `{% raw %}{% raw %}{% endraw %}`, those hits are literal text. Leave them too.

List custom shortcodes and macros:

{% raw %}
```bash
ls templates/shortcodes templates/macros
```
{% endraw %}

Anything listed is yours, not tabi's, and needs porting to `templates/components/`.

Check the config for retired settings:

{% raw %}
```bash
grep -En 'footnote_backlinks|add_src_to_code_block|translate_copyright|translated_copyright|index_format|highlight_code|highlight_theme' config.toml
```
{% endraw %}

## Update syntax highlighting

Move highlighting settings from `[markdown]` to `[markdown.highlighting]`:

```toml
[markdown]
smart_punctuation = true

[markdown.highlighting]
theme = "catppuccin-frappe"
style = "class"
error_on_missing_language = true
```

For separate themes:

```toml
[markdown.highlighting]
light_theme = "catppuccin-latte"
dark_theme = "catppuccin-frappe"
style = "class"
error_on_missing_language = true
```

tabi requires `style = "class"`. Zola generates `giallo.css`, or `giallo-light.css` and `giallo-dark.css`.

## Configure multilingual search

The root `[search]` table configures the default language. Every other language with `build_search_index = true` needs its own table:

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

## Convert shortcodes to components

Inline calls lose parentheses and commas:

{% raw %}
```diff
-{{ admonition(type="tip", text="Stay hydrated") }}
+{{< admonition type="tip" text="Stay hydrated" />}}
```
{% endraw %}

Block calls use named closing tags:

{% raw %}
```diff
-{% admonition(type="tip") %}
+{% <admonition type="tip"> %}
 Stay hydrated.
-{% end %}
+{% </admonition> %}
```
{% endraw %}

Wrap expressions, booleans, numbers, arrays, and maps in braces. Component parameters are explicit by default. Prefix ambient context parameters with `@` in the component definition so Tera resolves them from the caller:

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

## Move custom shortcodes

Move site-local templates from `templates/shortcodes/` to `templates/components/` and define a component. This example is adapted from a tabi consumer:

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

Use ordinary parameters for the component's inputs and implicit parameters for ambient values such as `lang`, `config`, or `page`. An implicit value can still be overridden explicitly at the call site.

## Protect literal examples

Markdown is templated before fenced code is rendered. Wrap literal examples in <code>&#123;% raw %&#125;</code> and <code>&#123;% endraw %&#125;</code> in the source file.

Custom heading IDs do not need raw blocks:

{% raw %}
```md
## Deployment checks {#deployment-checks}
```
{% endraw %}

Use `skip_content_templating` only when the complete file should bypass templating.

## Review custom templates

Site overrides under `templates/` are not updated with the theme.

<table>
<thead><tr><th>Old</th><th>Current</th></tr></thead>
<tbody>
<tr><td>macros and <code>{% raw %}{% import %}{% endraw %}</code></td><td>components</td></tr>
<tr><td><code>items | concat(with=item)</code></td><td><code>[...items, item]</code></td></tr>
<tr><td><code>items | slice(start=1)</code></td><td><code>items[1:]</code></td></tr>
<tr><td><code>value | as_str</code></td><td><code>value | str</code></td></tr>
<tr><td><code>trim_start_matches</code> / <code>trim_end_matches</code></td><td><code>trim_start</code> / <code>trim_end</code></td></tr>
<tr><td><code>item.0</code></td><td><code>item[0]</code></td></tr>
<tr><td><code>is starting_with("http")</code></td><td><code>is starting_with(pat="http")</code></td></tr>
<tr><td><code>is iterable</code> for arrays</td><td><code>is array</code></td></tr>
<tr><td><code>get_taxonomy_url(..., name=term)</code></td><td><code>get_taxonomy_url(..., term=term)</code></td></tr>
<tr><td><code>{% raw %}{% include "x" ignore missing %}{% endraw %}</code></td><td>include an existing default file</td></tr>
</tbody>
</table>

Undefined access is stricter. Use optional chaining such as `page?.extra?.setting`, and guard explicit null values before applying filters. `default(value=...)` handles undefined values, not null values.

`get_page` and `get_section` take a canonical path plus `lang`. Component arguments use string literals or braced expressions; `page` is shorthand for `page={page}`.

See the [Tera migration guide](https://github.com/Keats/tera/blob/master/MIGRATION.md) for the complete language changes.

## Expected output differences

- **Footnotes:** bracketed labels and absolute links with `#fn-*` and `#fr-*` fragments.
- **Highlighting:** numbered `z-*`, or `z-l-*`/`z-d-*`, token classes.
- **Whitespace:** differences around component output; check inline content and nesting.
- **Language order:** switcher and `hreflang` order can change; destinations should not.
- **XML:** escaping can differ while decoded values remain equivalent.
