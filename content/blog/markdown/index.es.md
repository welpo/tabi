+++
title = "Ejemplos de Markdown"
date = 2023-01-31
updated = 2024-11-23
description = "Esta publicación muestra algunos ejemplos de formato Markdown, incluyendo una tabla, bloques de código y etiquetas, citas, tablas y notas al pie de página."

[taxonomies]
tags = ["markdown", "funcionalidad"]

[extra]
katex = true
social_media_card = "social_cards/es_blog_markdown.jpg"
+++

## $\KaTeX$

[$\KaTeX$](https://katex.org/) es una biblioteca rápida y fácil de usar que permite la representación de notación matemática utilizando sintaxis LaTeX.

Puedes usar $\KaTeX$ **en línea** al envolver la expresión entre `$` o entre `\\(` y `\\)`.

Por ejemplo, `$ \sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n + 1)!} x^{2n + 1} $` se mostraría como: $ \sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n + 1)!} x^{2n + 1} $

Para mostrar la expresión **en su propia línea y centrada**, envuélvela entre `$$` o entre `\\[` y `\\]`.

Por ejemplo, `\\[ r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2}\sqrt{\sum_{i=1}^{n}(y_i - \bar{y})^2}} \\]` se mostraría como: \\[ r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2}\sqrt{\sum_{i=1}^{n}(y_i - \bar{y})^2}} \\]

Para activar $\KaTeX$ en una publicación o sección entera, incluye `katex = true` dentro de la sección `[extra]` del encabezado. Por ejemplo:

```toml,hl_lines=5-6
title = "Probando KaTeX"
date = 2002-11-30

[extra]
katex = true
```

Para activarlo globalmente, añade `katex = true` en la sección `[extra]` de tu `config.toml`.

Para un mejor rendimiento y seguridad, el JavaScript, CSS y las fuentes de $\KaTeX$ se alojan localmente.

**Nota**: Después de habilitar $\KaTeX$, si deseas usar \$ sin representar una expresión matemática, escápalo con una sola barra invertida: `\$`.

## Tabla

Aquí tienes un ejemplo de una tabla[^1]. Los colores cambian dependiendo del tema actual.

| Símbolo | Elemento | Número atómico |
|---------|----------|----------------|
| H       | Hidrógeno| 1              |
| C       | Carbono  | 6              |
| Fe      | Hierro   | 26             |
| Au      | Oro      | 79             |

## Bloque de código

```rust
fn main() {
    println!("¡Hola, mundo!") -> ();
}
```

### Con números de línea

```rust,linenos
use std::collections::HashMap;

#[derive(Debug)]
struct TwinPeaksCharacter {
    name: String,
    coffee_rating: f32,
    pie_preference: String,
}

fn main() {
    let mut black_lodge = HashMap::new();

    black_lodge.insert("agent", TwinPeaksCharacter {
        name: String::from("Dale Cooper"),
        coffee_rating: 9999.99,
        pie_preference: String::from("Damn Fine Cherry"),
    });

    black_lodge.insert("giant", TwinPeaksCharacter {
        name: String::from("The Fireman"),
        coffee_rating: 42.424242,
        pie_preference: String::from("Garmonbozia"),
    });

    // Calculate total appreciation of damn fine coffee
    let total_coffee: f32 = black_lodge.values()
        .map(|character| character.coffee_rating)
        .sum();

    println!("☕ Total coffee appreciation: {:.2} cups", total_coffee);
}
```

## Etiquetas de código

En Rust, declaras una variable mutable con `let mut x = 5;`, mientras que en Python, simplemente usas `x = 5`. De manera similar, para imprimir un valor en Rust, utilizarías `println!("Valor: {}", x);`, pero en Python, es tan sencillo como `print(f"Valor: {x}")`.

## Cita

> «A mí me sobra el cuerpo, Orfeo, me sobra el cuerpo porque me falta alma.»
>
> — Miguel de Unamuno, Niebla

[^1]: ¡Y aquí tienes un ejemplo de una nota al pie de página!
