+++
title = "Markdown Test"
date = "2023-01-31"
[taxonomies]
tags = ["markdown", "test"]
+++

## Table

Here's an example of a table. Its colours change depending on the current theme.

| Symbol  | Element | Atomic Number |
|---------|---------|---------------|
| H       | Hydrogen| 1             |
| C       | Carbon  | 6             |
| Fe      | Iron    | 26            |
| Au      | Gold    | 79            |

## Invertable image

This image inverts when switching to dark mode. This isn't very useful for photographs, but works great for diagrams, line drawings, graphs…

{{ invertable_image(src="$BASE_URL/img/graph.webp", alt="Invertable graph") }}

## Code Block

```rust
fn main() {
    println!("Hello, world!") -> ();
}
```
## Quote

> We're all hurtling towards death. Yet here we are, for the moment, alive. Each of us knowing we're going to die. Each of us secretly believing we won't.
>
> — Charlie Kaufman, Synecdoche, New York

## Code tags

Lorem ipsum `dolor` sit amet, `consectetur adipiscing` elit.
`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
