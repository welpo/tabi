+++
title = "Markdown Test"
date = "2023-01-31"
[taxonomies]
tags = ["markdown", "test"]
+++

## Image shortcodes

### Invertable image

You can use this shortcode for graphs, line drawings, diagrams…

{{ invertable_image(src="$BASE_URL/img/graph.webp", alt="Invertable graph") }}

Usage:

```
{{/* invertable_image(src="img/graph.webp", alt="Invertable graph") */}}
```

### Dimmable image

Images with too much brightness or contrast can be jarring against a dark background. Here's an example of a photograph that dims when the dark theme is active.

{{ dimmable_image(src="$BASE_URL/img/desert_by_oskerwyld.webp", alt="Photograph of a desert, heavenly sky") }}

Usage:

```
{{/* dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Photograph of a desert, heavenly sky") */}}
```

## Table

Here's an example of a table. Its colours change depending on the current theme.

| Symbol  | Element | Atomic Number |
|---------|---------|---------------|
| H       | Hydrogen| 1             |
| C       | Carbon  | 6             |
| Fe      | Iron    | 26            |
| Au      | Gold    | 79            |


## Code Block

```rust
fn main() {
    println!("Hello, world!") -> ();
}
```

## Code tags

Lorem ipsum `dolor` sit amet, `consectetur adipiscing` elit.
`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

## Quote

> We're all hurtling towards death. Yet here we are, for the moment, alive. Each of us knowing we're going to die. Each of us secretly believing we won't.
>
> — Charlie Kaufman, Synecdoche, New York
