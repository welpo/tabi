+++
title = "Sin JavaScript obligatorio"
date = 2023-01-06
updated = 2023-07-13
description = "JavaScript solo se utiliza cuando HTML y CSS no son suficientes."

[taxonomies]
tags = ["funcionalidad", "tutorial"]
+++

Este tema no tiene JavaScript obligatorio. Opcionalmente, puede cargar una cantidad mínima para agregar algunas características que son imposibles de lograr con HTML y CSS.

### Opciones globales

- **Interruptor de modo claro/oscuro**. Habilitado configurando `theme_switcher = true`. (~900 bytes)
- **Copia de bloques de código con un solo clic**. Habilitado configurando `copy_button = true`. (~700 bytes)

Estas dos configuraciones se pueden aplicar en la sección `[extra]` de tu `config.toml`.

- [**Comentarios**](@/blog/comments.es.md). giscus (2 KB) o utterances (1 KB) se pueden habilitar globalmente configurando `enabled_for_all_posts = true` en la sección apropiada de tu archivo `config.toml` (`[extra.giscus]` o `[extra.utterances]`).

### Opciones para publicaciones individuales

Las siguientes configuraciones se pueden habilitar en publicaciones específicas configurando ciertas variables en la sección `[extra]` del front matter del post.

- [**KaTeX**](@/blog/markdown.es.md#katex) (274 KB) se puede habilitar con `katex = true`.
- [**Comentarios**](@/blog/comments.es.md). Se pueden habilitar en posts específicos configurando `utterances = true` o `giscus = true`.

Aparte de eso, es un tema rápido con HTML y CSS que funciona con JavaScript deshabilitado. Como debería ser (en su mayoría) la web :-)
