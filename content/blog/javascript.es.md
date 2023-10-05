+++
title = "Sin JavaScript obligatorio"
date = 2023-01-06
updated = 2023-10-06
description = "JavaScript solo se utiliza cuando HTML y CSS no son suficientes."

[taxonomies]
tags = ["funcionalidad", "tutorial"]

[extra]
footnote_backlinks = true
social_media_card = "img/social_cards/es_blog_javascript.jpg"
+++

Este tema no requiere JavaScript de manera obligatoria. Opcionalmente, puede cargar una cantidad mínima de JavaScript para añadir algunas características que son imposibles de lograr con solo HTML y CSS.

## Opciones habilitadas globalmente

- El **interruptor de modo claro/oscuro** puede habilitarse configurando `theme_switcher = true` en la sección `[extra]` de tu `config.toml` (~1KB de JavaScript).

- **Descodificación de correo electrónico** (~400 bytes). Para proteger contra bots que recopilan correos electrónicos desde tu sitio web, puedes configurar `encode_plaintext_email = true`. Si tu sitio está en un repositorio público, para mayor protección, considera configurar tu `email` como una cadena codificada en base64[^1].

## Opciones que se pueden sobreescribir de forma jerárquica

Las siguientes opciones pueden especificarse para publicaciones, secciones y a nivel global, siguiendo la jerarquía de `página > sección > config.toml`:

- [**Soporte de KaTeX**](@/blog/markdown.es.md#katex). Habilitado al configurar `katex = true` (274 KB).
- [**Copia de bloques de código con un solo clic**](@/blog/markdown.es.md#bloque-de-codigo). Habilitado al configurar `copy_button = true` (~700 bytes).
- [**Enlaces de retorno de notas al pie**](@/blog/markdown.es.md#1). Habilitado al configurar `footnote_backlinks = true` (~500 bytes).

Para especificar estas opciones:

- **Globalmente**: Añádelas en la sección `[extra]` de tu `config.toml`.
- **Para una sección**: Añádelas en la sección `[extra]` del front matter del `_index.md` de la sección.
- **Para una publicación individual**: Configura las variables correspondientes en la sección `[extra]` del front matter de la publicación.

## Opciones que pueden habilitarse globalmente o para publicaciones individuales

- [**Comentarios**](@/blog/comments.es.md). giscus (2 KB), utterances (1 KB), Hyvor Talk (~800 bytes) o Isso (1KB) pueden habilitarse globalmente configurando `enabled_for_all_posts = true` en la sección apropiada de tu `config.toml` (`[extra.giscus]`, `[extra.utterances]`, `[extra.hyvortalk]` o `[extra.isso]`). Para habilitar comentarios en publicaciones individuales, configura el nombre del sistema `= true` (por ejemplo, `hyvortalk = true`) en el front matter de la publicación.

Aparte de eso, es un tema rápido con HTML y CSS que funciona con JavaScript deshabilitado. Justo como debería ser (la mayoría de) la web :-)

---

[^1]: Para codificar tu correo electrónico en base64 puedes usar [herramientas en línea](https://www.base64encode.org/) o, en tu terminal, ejecutar: `printf 'mail@example.com' | base64`.
