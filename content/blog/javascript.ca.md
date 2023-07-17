+++
title = "Sense JavaScript obligatori"
date = 2023-01-06
updated = 2023-07-13
description = "JavaScript només s'utilitza quan HTML i CSS no són suficients."

[taxonomies]
tags = ["funcionalitat", "tutorial"]
+++

Aquest tema no requereix JavaScript obligatori. Opcionalment, pot carregar una quantitat mínima per afegir algunes característiques que són impossibles d'aconseguir amb HTML i CSS.

### Opcions globals

- **Canvi de mode clar/fosc**. Habilitat configurant `theme_switcher = true`. (~900 bytes)
- **Còpia de blocs de codi amb un sol clic**. Habilitat configurant `copy_button = true`. (~700 bytes)

Aquestes dues configuracions es poden aplicar a la secció `[extra]` del teu fitxer `config.toml`.

- [**Comentaris**](@/blog/comments.ca.md). giscus (2 KB), utterances (1 KB) o Hyvor Talk (~800 bytes) es poden habilitar globalment configurant `enabled_for_all_posts = true` a la secció correcta de `config.toml` (`[extra.giscus]`, `[extra.utterances]` o `[extra.hyvortalk]`).

### Configuracions específiques de la pàgina

Les següents configuracions es poden habilitar en posts específics configurant certes variables a la secció `[extra]` del front matter de la publicació.

- [**KaTeX**](@/blog/markdown.ca.md#katex) (274 KB) es pot habilitar amb `katex = true`.
- [**Comentaris**](@/blog/comments.ca.md). Es poden habilitar a publicacions específiques assignant el nom del sistema `= true` (per exemple, `hyvortalk = true`).

A part d'això, és un tema ràpid amb HTML i CSS que funciona sense JavaScript. Just com hauria de ser (la majoria de) la web :-)
