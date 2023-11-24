+++
title = "Custom shortcodes"
date = 2023-02-19
updated = 2023-11-24
description = "This theme includes some useful custom shortcodes that you can use to enhance your posts. Whether you want to display images that adapt to light and dark themes, or format a professional-looking reference section, these custom shortcodes have got you covered."

[taxonomies]
tags = ["showcase", "shortcodes"]

[extra]
toc = true
toc_levels = 2
quick_navigation_buttons = true
social_media_card = "social_cards/blog_shortcodes.jpg"
+++

## Image shortcodes

**Note**: all image shortcodes have two optional parameters: `full_width`, which defaults to `false` (see [below](#full-width-image)), and `lazy_loading`, which defaults to `true`.

**Note 2**: as of commit XXX, all image shortcodes support relative paths in the `src` parameter.

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

## Text shortcodes

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
