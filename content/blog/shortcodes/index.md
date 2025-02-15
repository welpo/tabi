+++
title = "Custom shortcodes"
date = 2023-02-19
updated = 2025-02-15
description = "This theme includes some useful custom shortcodes that you can use to enhance your posts. Whether you want to display images that adapt to light and dark themes, or format a professional-looking reference section, these custom shortcodes have got you covered."

[taxonomies]
tags = ["showcase", "shortcodes"]

[extra]
toc = true
toc_levels = 2
quick_navigation_buttons = true
clickable_code_block_names = true
mermaid = true
social_media_card = "social_cards/blog_shortcodes.jpg"
+++

## Diagram shortcode

### Mermaid diagrams

[Mermaid](https://github.com/mermaid-js/mermaid) is a a diagramming and charting tool that uses text and code to generate diagrams. It supports flowcharts, sequence diagrams, Gantt charts, and more.

To include a Mermaid diagram in your post, there are two steps:

1. Set `mermaid = true` in the `[extra]` section of the front matter of your page, section or `config.toml`. This will load the JavaScript needed to render the diagrams.

2. Use the `mermaid()` shortcode to define your diagram in your posts. For example:

```txt
{%/* mermaid() */%}
classDiagram
    class CognitiveDistortions {
        +AllOrNothingThinking()
        +Overgeneralization()
        +MentalFilter()
        +JumpingToConclusions()
    }
    class AllOrNothingThinking {
        +SeeInExtremes()
    }
    class Overgeneralization {
        +GeneralizeFromSingle()
    }
    class MentalFilter {
        +FocusOnNegative()
    }
    class JumpingToConclusions {
        +MakeAssumptions()
    }
    CognitiveDistortions *-- AllOrNothingThinking
    CognitiveDistortions *-- Overgeneralization
    CognitiveDistortions *-- MentalFilter
    CognitiveDistortions *-- JumpingToConclusions
{%/* end */%}
```

The diagram will be rendered as follows:

{% mermaid() %}
classDiagram
    class CognitiveDistortions {
        +AllOrNothingThinking()
        +Overgeneralization()
        +MentalFilter()
        +JumpingToConclusions()
    }
    class AllOrNothingThinking {
        +SeeInExtremes()
    }
    class Overgeneralization {
        +GeneralizeFromSingle()
    }
    class MentalFilter {
        +FocusOnNegative()
    }
    class JumpingToConclusions {
        +MakeAssumptions()
    }
    CognitiveDistortions *-- AllOrNothingThinking
    CognitiveDistortions *-- Overgeneralization
    CognitiveDistortions *-- MentalFilter
    CognitiveDistortions *-- JumpingToConclusions
{% end %}

The Mermaid shortcode supports two parameters:

- `invertible`: If set to `true` (default), the diagram will be inverted in dark mode, just like [invertible images](#invertible-image).
- `full_width`: Allows the diagram to take up the width of the header. See [full-width image](#full-width-image).

{{ admonition(type="tip", text="You can use the [Mermaid Live Editor](https://mermaid.live/) to create and preview your diagrams.") }}

#### Usage

```
{%/* mermaid(invertible=true, full_width=false) */%}

Your diagram goes here.

`invertible` or `full_width` can be omitted if default values are used.

{%/* end */%}
```

## Image shortcodes

All image shortcodes support absolute paths, relative paths, and remote sources in the `src` parameter.

All image shortcodes have these optional parameters:

- `raw_path`. Defaults to `false`. If set to `true`, the `src` parameter will be used as is. Useful for colocated assets with a custom slug (see [Zola issue #2598](https://github.com/getzola/zola/issues/2598)).
- `inline`. Defaults to `false`. If set to `true`, the image will be displayed inline with the text.
- `full_width`. Defaults to `false` (see [below](#full-width-image))
- `lazy_loading`. Defaults to `true`.

### Dual theme images

Useful if you want to use a different image for the light and dark themes:

{{ dual_theme_image(light_src="img/paris_day.webp", dark_src="img/paris_night.webp" alt="The Eiffel tower") }}

#### Usage
```
{{/* dual_theme_image(light_src="img/paris_day.webp", dark_src="img/paris_night.webp" alt="The Eiffel tower") */}}
```

### Invertible image

Good for graphs, line drawings, diagrams… Inverts the colours of the image. The source image will be used for the light theme.

{{ invertible_image(src="img/graph.webp", alt="Invertible graph") }}

#### Usage

```
{{/* invertible_image(src="img/graph.webp", alt="Invertible graph") */}}
```

### Dimmable image

Images with too much brightness or contrast can be jarring against a dark background. Here's an example of a photograph that dims when the dark theme is active.

{{ dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Photograph of a desert, heavenly sky") }}

#### Usage

```
{{/* dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Photograph of a desert, heavenly sky") */}}
```

### Swap image on hover

Povides an interaction where the image displayed changes as the user hovers over it. Useful for before-after comparisons, for example.

{{ image_hover(default_src="img/edited.webp", hovered_src="img/raw.webp", default_alt="Edited picture", hovered_alt="Original shot") }}

#### Usage

```
{{/* image_hover(default_src="img/before.webp", hovered_src="img/after.webp", default_alt="Edited picture", hovered_alt="Original shot") */}}
```

### Interactive image toggle

Display an image and switch to a different one on click. Ideal for highlighting differences or drawing attention to details.

{{ image_toggler(default_src="img/mojave_day.webp", toggled_src="img/mojave_night.webp", default_alt="Mojave during the day", toggled_alt="Mojave at night") }}

#### Usage

```
{{/* image_toggler(default_src="img/mojave_day.webp", toggled_src="img/mojave_night.webp", default_alt="Mojave during the day", toggled_alt="Mojave at night") */}}
```

### Full-width image

The image will expand to match the width of the header, which is usually wider than the article text (except on mobile/small windows).

All other image shortcodes can be made into full-width by setting the optional parameter `full_width` to `true`.

{{ full_width_image(src="img/amsterdam_by_oskerwyld.webp", alt="Photograph of a canal in Amsterdam") }}

#### Usage

```
{{/* full_width_image(src="img/amsterdam_by_oskerwyld.webp", alt="Photograph of a canal in Amsterdam") */}}
```

## Code shortcodes

### Show source or path

You can display a path or URL for a code block using Zola's native syntax:

{{ aside(text="Requires Zola 0.20.0 or later.") }}

````
```rust,name=src/main.rs
fn main() {
    println!("Hello, world!");
}
```
````

This renders:

```rust,name=src/main.rs
fn main() {
    println!("Hello, world!");
}
```

If you set the `name` to a URL (i.e. it starts with `http` or `https`), you can turn it into a clickable link. This is particularly useful when used in conjunction with the [remote text shortcode](#remote-text).

{{ admonition(type="warning", title="JavaScript required", text="The clickable URL feature requires JavaScript. To enable it, set `clickable_code_block_names = true` on the `[extra]` section of your page, section, or `config.toml`.") }}

```.gitignore,name=https://github.com/welpo/doteki/blob/main/.gitignore
__pycache__/
*coverage*
.vscode/
dist/
```

### Legacy shortcode support

The `add_src_to_code_block` shortcode is still supported for backward compatibility but will be deprecated in a future release. Please use Zola's native syntax shown above instead:

```
# Old way (deprecated):
{{/* add_src_to_code_block(src="path/to/file.rs") */}}

# New way (preferred):
```rust,name=path/to/file.rs
```

## Text shortcodes

### Aside (side/margin note)

Add supplementary content in the margins on wide screens, or as distinct blocks on mobile.

{{ aside(text="*Sidenote* comes from Latin *nota* ('mark') + Old English *síde* ('side').") }}

The shortcode accepts two parameters:

- `position`: Set to `"right"` to place in right margin (defaults to left)
- Content can be provided via `text` parameter or between shortcode tags

#### Usage

{{ admonition(type="warning", text="Place the aside shortcode on its own line to prevent formatting issues.") }}

Using the `text` parameter:

```
{{/* aside(text="*Sidenote* comes from Latin *nota* ('mark') + Old English *síde* ('side').") */}}
```

Using the content body and setting the position to right:

```
{%/* aside(position="right") */%}
A longer note that
can span multiple lines.

*Markdown* is supported.
{%/* end */%}
```

### Remote text

Embed text from a remote URL or a local file. To display the path or URL on the code block, see the [show source or path shortcode](#show-source-or-path).

The shortcode accepts three parameters:

- `src`: The source URL or file path (required)
- `start`: First line to display (optional, starts at 1)
- `end`: The ending line number (optional, defaults to 0, meaning the last line)

{{ admonition(type="info", text="`start` and `end` are inclusive. `start=3, end=3` will display only the third line.") }}

**Important**:

- **Remote VS local files**: If `src` starts with "http", it will be treated as a remote file. Otherwise, it assumes a local file path.
- **Files access**: As it uses Zola's [`load_data`](https://www.getzola.org/documentation/templates/overview/#load-data), local files must be inside the Zola directory—see [File searching logic](https://www.getzola.org/documentation/templates/overview/#file-searching-logic). As of [tabi 2.16.0](https://github.com/welpo/tabi/releases/tag/v2.16.0), the shortcode supports both relative and absolute paths.
- **Code block formatting**: To display the text as a code block, you must manually add the Markdown code fences (backticks) and, optionally, specify the programming language for syntax highlighting.

#### Usage

Embedding a remote Python script within a code block with syntax highlighting:

````
```python
{{/* remote_text(src="https://example.com/script.py") */}}
```
````

Displaying text from a local file:

```
{{/* remote_text(src="path/to/file.txt") */}}
```

Display lines 3 to 7 (both inclusive) of a local file:

```
{{/* remote_text(src="path/to/file.txt", start=3, end=7) */}}
```

### Admonitions

Bring attention to information with these admonition shortcodes. They come in five `type`s: `note`, `tip`, `info`, `warning`, and `danger`.

{{ admonition(type="note", text="Some **content** with _Markdown_ `syntax`. Check [this `api`](#).") }}

{{ admonition(type="tip", text="Some **content** with _Markdown_ `syntax`. Check [this `api`](#).") }}

{{ admonition(type="info", text="Some **content** with _Markdown_ `syntax`. Check [this `api`](#).") }}

{{ admonition(type="warning", text="Some **content** with _Markdown_ `syntax`. Check [this `api`](#).") }}

{{ admonition(type="danger", text="Some **content** with _Markdown_ `syntax`. Check [this `api`](#).") }}

You can change the `title` and `icon` of the admonition. Both parameters take a string and default to the type of admonition. `icon` can be any of the available admonition types.

{{ admonition(type="note", icon="tip", title="Custom title and icon", text="Some **content** with _Markdown_ `syntax`. Check [this `api`](#).") }}

#### Usage

You can use admonitions in two ways:

1. Inline with parameters:

```md
{{/* admonition(type="danger", icon="tip", title="An important tip", text="Stay hydrated~") */}}
```

2. With a content body:

```md
{%/* admonition(type="danger", icon="tip", title="An important tip") */%}
Stay hydrated~

This method is particularly useful for longer content or multiple paragraphs.
{%/* end */%}
```

Both methods support the same parameters (`type`, `icon`, and `title`), with the content either passed as the `text` parameter or as the body between tags.

### Multilingual quotes

This shortcode allows you to display both the translated and original text for a quote. The quotation marks will be added automatically:

{{ multilingual_quote(original="Qué sosiego, ir por la vida en silencio, saludando sólo a los amigos.", translated="What tranquility, to go through life in silence, greeting only friends.", author="Francisco Umbral") }}

#### Usage

```
{{/* multilingual_quote(original="Qué sosiego, ir por la vida en silencio, saludando sólo a los amigos.", translated="What tranquility, to go through life in silence, greeting only friends.", author="Francisco Umbral") */}}
```

### References with hanging indent

This shortcode formats a reference section with a hanging indent like so:

{% references() %}

Alderson, E. (2015). Cybersecurity and Social Justice: A Critique of Corporate Hegemony in a Digital World. *New York Journal of Technology, 11*(2), 24-39. [https://doi.org/10.1007/s10198-022-01497-6](https://doi.org/10.1007/s10198-022-01497-6).

Funkhouser, M. (2012). The Social Norms of Indecency: An Analysis of Deviant Behavior in Contemporary Society. *Los Angeles Journal of Sociology, 16*(3), 41-58. [https://doi.org/10.1093/jmp/jhx037](https://doi.org/10.1093/jmp/jhx037).

Schrute, D. (2005). The Beet Farming Revolution: An Analysis of Agricultural Innovation. *Scranton Agricultural Quarterly, 38*(3), 67-81.

Steinbrenner, G. (1997). The Cost-Benefit Analysis of George Costanza: An Examination of Risk-Taking Behavior in the Workplace. *New York Journal of Business, 12*(4), 112-125.

Winger, J. A. (2010). The Art of Debate: An Examination of Rhetoric in Greendale Community College's Model United Nations. *Colorado Journal of Communication Studies, 19*(2), 73-86. [https://doi.org/10.1093/6seaons/1movie](https://doi.org/10.1093/6seaons/1movie).

{% end %}

#### Usage

```
{%/* references() */%}

Your references go here.

Each in a new line. Markdown (links, italics…) will be rendered.

{%/* end */%}
```

### Spoiler

This shortcode allows you to blur text until the user clicks on it. Like this: Goldfish have a memory span of a few {{ spoiler(text="months. Yes, [really](https://en.wikipedia.org/wiki/Goldfish#Cognitive_abilities).") }}

As you can see, Markdown is rendered. You can even add newlines with `<br>`.

This shortcode has the optional flag `fixed_blur` to blur a fixed placeholder ("SPOILER"), instead of blurring the actual contents. Like this: it is {{ spoiler(text="not necessary", fixed_blur=true)}} to wait 24 hours before filing a missing person report.

#### Usage

```
{{/* spoiler(text="text to hide", fixed_blur=false) */}}
```

## Containers

### Wide container

Use this shortcode if you want to have a wider table, paragraph, code block… On desktop, it will take up the width of the header. It will have no effect on mobile, except for tables, which will get a horizontal scroll.

{% wide_container() %}

| Title             |  Year | Director             | Cinematographer       | Genre         | IMDb  | Duration     |
|-------------------|-------|----------------------|-----------------------|---------------|-------|--------------|
| Beoning           | 2018  | Lee Chang-dong       | Hong Kyung-pyo        | Drama/Mystery | 7.5   | 148 min      |
| The Master        | 2012  | Paul Thomas Anderson | Mihai Mălaimare Jr.   | Drama/History | 7.1   | 137 min      |
| The Tree of Life  | 2011  | Terrence Malick      | Emmanuel Lubezki      | Drama         | 6.8   | 139 min      |

{% end %}

#### Usage

```
{%/* wide_container() */%}

Place your code block, paragraph, table… here.

Markdown will of course be rendered.

{%/* end */%}
```

### Force text direction

Force the text direction of a content block. Overrides both the global `force_codeblock_ltr` setting and the document's overall direction.

Accepts the parameter `direction`: the desired text direction. This can be either "ltr" (left-to-right) or "rtl" (right-to-left). Defaults to "ltr".

{% force_text_direction(direction="rtl") %}
```python
def مرحبا_بالعالم():
    print("مرحبا بالعالم!")
```
{% end %}

#### Usage

In a LTR page we can force a code block to be RTL (as shown above) like so:

````
{%/* force_text_direction(direction="rtl") */%}

```python
def مرحبا_بالعالم():
    print("مرحبا بالعالم!")
```

{%/* end */%}
````
