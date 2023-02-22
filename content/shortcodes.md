+++
title = "Custom shortcodes"
date = "2023-02-19"
[taxonomies]
tags = ["showcase", "shortcodes"]
+++

## Image shortcodes

### Invertible image

You can use this shortcode for graphs, line drawings, diagrams…

{{ invertible_image(src="$BASE_URL/img/graph.webp", alt="Invertible graph") }}

Usage:

```
{{/* invertible_image(src="img/graph.webp", alt="Invertible graph") */}}
```

### Dimmable image

Images with too much brightness or contrast can be jarring against a dark background. Here's an example of a photograph that dims when the dark theme is active.

{{ dimmable_image(src="$BASE_URL/img/desert_by_oskerwyld.webp", alt="Photograph of a desert, heavenly sky") }}

Usage:

```
{{/* dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Photograph of a desert, heavenly sky") */}}
```
