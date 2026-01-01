+++
title = "Exemples de Markdown"
date = 2023-01-31
updated = 2026-01-01
description = "Aquesta publicació mostra alguns exemples de format en Markdown, incloent-hi una taula, blocs de codi i etiquetes, citacions, taules i notes a peu de pàgina."

[taxonomies]
tags = ["markdown", "funcionalitat"]

[extra]
katex = true
social_media_card = "social_cards/ca_blog_markdown.jpg"
+++

## $\KaTeX$

[$\KaTeX$](https://katex.org/) és una llibreria ràpida i fàcil d'usar que permet representar notació matemàtica mitjançant la sintaxi LaTeX.

Pots utilitzar $\KaTeX$ **en línia** embolcallant l'expressió entre `$` o entre `\\(` i `\\)`.

Per exemple, `$ \sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n + 1)!} x^{2n + 1} $` es renderitzarà com: $ \sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n + 1)!} x^{2n + 1} $

Per mostrar l'expressió **en una línia pròpia i centrada**, embolcalla-la amb `$$` o entre `\\[` i `\\]`.

Per exemple, `\\[ r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2}\sqrt{\sum_{i=1}^{n}(y_i - \bar{y})^2}} \\]` es renderitzarà com: \\[ r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2}\sqrt{\sum_{i=1}^{n}(y_i - \bar{y})^2}} \\]

Activa $\KaTeX$ afegint `katex = true` a `[extra]`:

```toml,hl_lines=5-6
title = "Provant KaTeX"
date = 2002-11-30

[extra]
katex = true
```

Funciona a: metadades de pàgina, `_index.md` de secció, o globalment a `config.toml`.

Per obtenir un millor rendiment i seguretat, els fitxers JavaScript, CSS i les tipografies de $\KaTeX$ s'allotgen localment.

**Nota**: Després d'activar $\KaTeX$, si vols utilitzar el caràcter \$ sense renderitzar-lo com a expressió matemàtica, escapa'l amb una barra inversa: `\$`.

### Fórmules químiques

Les fórmules químiques estan suportades mitjançant l'[extensió mhchem](https://mhchem.github.io/MathJax-mhchem/), que es carrega automàticament en utilitzar `\ce{}` o `\pu{}`.

`\ce{}` per química: $\ce{H2O}$, $\ce{CO2 + H2O -> H2CO3}$

`\pu{}` per unitats: $\pu{25 °C}$, $\pu{1.2 mol/L}$

## Taula

Aquí tens un exemple de taula[^1]. Els seus colors canvien en funció del tema actual.

| Símbol  | Element | Nombre atòmic |
|---------|---------|---------------|
| H       | Hidrogen| 1             |
| C       | Carboni | 6             |
| Fe      | Ferro   | 26            |
| Au      | Or      | 79            |

## Bloc de codi

```rust
fn main() {
    println!("Hola, món!") -> ();
}
```

### Amb numeració de línies

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

## Etiquetes de codi

A Rust, declares una variable mutable amb `let mut x = 5;`, mentre que a Python, simplement fas `x = 5`. De manera similar, per imprimir un valor a Rust, utilitzaries `println!("Valor: {}", x);`, però a Python, és tan senzill com `print(f"Valor: {x}")`.

## Quote

> «La vida, perquè sigui vida, s'ha de viure a poc a poc…»
>
> — Mercè Rodoreda, La plaça del Diamant

---

[^1]: I aquí tens un exemple de nota a peu de pàgina!
