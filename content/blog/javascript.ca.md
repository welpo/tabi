+++
title = "Sense JavaScript obligatori"
date = 2023-01-06
updated = 2023-04-28
description = "JavaScript només s'utilitza quan HTML i CSS no són suficients."

[taxonomies]
tags = ["funcionalitat"]
+++

## JavaScript?

Aquest tema funciona perfectament sense JavaScript. Opcionalment, pot carregar una quantitat mínima per afegir algunes funcionalitats que no són possibles utilitzant només HTML i CSS:

- **Canvi de mode clar/fosc**. S'activa establint `theme_switcher = true`. (~900 bytes)
- **Còpia de blocs de codi amb un sol clic**. S'activa establint `copy_button = true`. (~700 bytes)

Aquestes dues configuracions cal aplicar-les a la secció `[extra]` del fitxer `config.toml`.

La funcionalitat de KaTex, que requereix carregar un fitxer JavaScript de 274 KB, es pot activar per a publicacions específiques. Això es pot fer establint `katex = true` a la secció `[extra]` de l'encapçalament de la publicació.

A part d'això, és un tema ràpid amb HTML i CSS. Tal i com hauria de ser (la major part de) la web :-)
