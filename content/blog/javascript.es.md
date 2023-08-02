+++
title = "Sin JavaScript obligatorio"
date = 2023-01-06
updated = 2023-08-02
description = "JavaScript solo se utiliza cuando HTML y CSS no son suficientes."

[taxonomies]
tags = ["funcionalidad", "tutorial"]
+++

Este tema no tiene JavaScript obligatorio. Opcionalmente, puede cargar una cantidad mínima para agregar algunas características que son imposibles de lograr con HTML y CSS.

## Opciones globales

Puedes habilitar las siguientes opciones en todas las páginas:

- **Interruptor de modo claro/oscuro**. Habilitado configurando `theme_switcher = true`. (~900 bytes)
- **Copia de bloques de código con un solo clic**. Habilitado configurando `copy_button = true`. (~700 bytes)
- **Enlaces de retorno de notas al pie**. Habilitados configurando `footnote_backlinks = true` (~500 bytes).

Estas dos configuraciones se pueden aplicar en la sección `[extra]` de tu `config.toml`.

- [**Comentarios**](@/blog/comments.es.md). giscus (2 KB), utterances (1 KB), Hyvor Talk (~800 bytes) o Isso (1KB) se pueden habilitar globalmente configurando `enabled_for_all_posts = true` en la sección apropiada de tu archivo `config.toml` (`[extra.giscus]`, `[extra.utterances]`, `[extra.hyvortalk]` o `[extra.isso]`).

## Opciones para publicaciones individuales

Las siguientes configuraciones se pueden habilitar en publicaciones específicas configurando ciertas variables en la sección `[extra]` del front matter del post.

- [**KaTeX**](@/blog/markdown.es.md#katex) (274 KB) se puede habilitar con `katex = true`.
- [**Comentarios**](@/blog/comments.es.md). Se pueden habilitar con el nombre del sistema `= true` (por ejemplo, `hyvortalk = true`).
- **Enlaces de retorno de notas al pie**. Se pueden habilitar con `footnote_backlinks = true`.

Aparte de eso, es un tema rápido con HTML y CSS que funciona con JavaScript deshabilitado. Como debería ser (en su mayoría) la web :-)
