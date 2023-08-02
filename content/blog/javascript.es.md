+++
title = "Sin JavaScript obligatorio"
date = 2023-01-06
updated = 2023-08-02
description = "JavaScript solo se utiliza cuando HTML y CSS no son suficientes."

[taxonomies]
tags = ["funcionalidad", "tutorial"]
+++

Este tema no tiene JavaScript obligatorio. Opcionalmente, puede cargar una cantidad mínima para agregar algunas características que son imposibles de lograr con HTML y CSS.

## Opciones habilitadas globalmente

El **interruptor de modo claro/oscuro** puede habilitarse configurando `theme_switcher = true` en la sección `[extra]` de tu `config.toml` (~900 bytes de JavaScript).

## Configuraciones que pueden habilitarse tanto globalmente como en publicaciones individuales

Las siguientes configuraciones pueden habilitarse globalmente para todas las páginas o específicamente para publicaciones individuales:

- [**KaTeX**](@/blog/markdown.es.md#katex). Habilitado configurando `katex = true` (274 KB).
- [**Copia de bloques de código con un solo clic**](@/blog/markdown.es.md#bloque-de-codigo). Habilitada configurando `copy_button = true`. (~700 bytes)
- [**Enlaces de retorno de notas al pie**](@/blog/markdown.es.md#1). Habilitados configurando `footnote_backlinks = true` (~500 bytes).

Para habilitar estas configuraciones globalmente, añádelas en la sección `[extra]` de tu `config.toml`. Para habilitarlas en publicaciones individuales, establece las variables correspondientes en el apartado `[extra]` del front matter de la publicación.

- [**Comentarios**](@/blog/comments.es.md). giscus (2 KB), utterances (1 KB), Hyvor Talk (~800 bytes) o Isso (1KB) se pueden habilitar globalmente configurando `enabled_for_all_posts = true` en el apartado apropiado de tu archivo `config.toml` (`[extra.giscus]`, `[extra.utterances]`, `[extra.hyvortalk]` o `[extra.isso]`). Para habilitar comentarios en publicaciones individuales, configura el nombre del sistema `= true` (por ejemplo, `hyvortalk = true`) en el front matter del post.

Aparte de eso, es un tema rápido con HTML y CSS que funciona con JavaScript deshabilitado. Justo como debería ser (en su mayoría) la web :-)
