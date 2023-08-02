+++
title = "Exemples de Markdown"
date = 2023-01-31
updated = 2023-08-02
description = "Aquesta publicació mostra alguns exemples de format en Markdown, incloent-hi una taula, blocs de codi i etiquetes, citacions, taules i notes a peu de pàgina."

[taxonomies]
tags = ["markdown", "funcionalitat"]

[extra]
katex = true
footnote_backlinks = true
+++

## $\KaTeX$

[$\KaTeX$](https://katex.org/) és una llibreria ràpida i fàcil d'usar que permet representar notació matemàtica mitjançant la sintaxi LaTeX.

Pots utilitzar $\KaTeX$ **en línia** embolcallant l'expressió entre `$` o entre `\\(` i `\\)`.

Per exemple, `$ \sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n + 1)!} x^{2n + 1} $` es renderitzarà com: $ \sin(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n + 1)!} x^{2n + 1} $

Per mostrar l'expressió **en una línia pròpia i centrada**, embolcalla-la amb `$$` o entre `\\[` i `\\]`.

Per exemple, `\\[ r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2}\sqrt{\sum_{i=1}^{n}(y_i - \bar{y})^2}} \\]` es renderitzarà com: \\[ r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2}\sqrt{\sum_{i=1}^{n}(y_i - \bar{y})^2}} \\]

Per activar $\KaTeX$ en una publicació, inclou `katex = true` dins de la secció `[extra]` dels metadades de la publicació. Per exemple:

```toml,hl_lines=5-6
+++
title = "Provant KaTeX"
date = 2002-11-30

[extra]
katex = true
+++
```

Per activar-lo globalment, afeigeix `katex = true` a la secció `[extra]` del teu `config.toml`.

Per obtenir un millor rendiment i seguretat, els fitxers JavaScript, CSS i les tipografies de $\KaTeX$ s'allotgen localment.

**Nota**: Després d'activar $\KaTeX$, si vols utilitzar el caràcter \$ sense renderitzar-lo com a expressió matemàtica, escapa'l amb una barra inversa: `\$`.

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

## Etiquetes de codi

Lorem ipsum `dolor` sit amet, `consectetur adipiscing` elit.
`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

## Quote

> "La vida, perquè sigui vida, s'ha de viure a poc a poc…"
>
> — Mercè Rodoreda, La plaça del Diamant

<hr>

[^1]: I aquí tens un exemple de nota a peu de pàgina!
