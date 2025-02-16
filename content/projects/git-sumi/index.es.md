+++
title = "git-sumi"
description = "El linter de mensajes de commit no opinado basado en Rust."
weight = 10

[taxonomies]
tags = ["Git", "Rust", "Continuous Integration", "GitHub Actions", "CLI", "automatización"]

[extra]
local_image = "projects/git-sumi/git-sumi_logo.webp"
social_media_card = "social_cards/projects_git-sumi.jpg"
canonical_url = "https://osc.garden/es/projects/git-sumi/"
+++

**git-sumi** es el linter de mensajes de commit no opinado escrito en Rust.

{% wide_container() %}
<video controls src="https://cdn.jsdelivr.net/gh/welpo/git-sumi@main/assets/git-sumi_demo.mp4" title="git-sumi demo"></video>
{% end %}

#### [GitHub](https://github.com/welpo/git-sumi) • [Sitio web](https://sumi.rs/) • [Documentación](https://sumi.rs/docs/) {.centered-text}

## Características principales

- **Reglas personalizables**: Configura reglas para [Conventional Commits](https://www.conventionalcommits.org/), límites de longitud, uso de [Gitmoji](https://gitmoji.dev/) y [más](https://sumi.rs/docs/rules).
- **Reporte de errores claro**: Proporciona errores detallados, haciendo que la corrección sea sencilla y educativa.
- **Integración sencilla**: Al ser único binario, git-sumi se integra fácilmente en tu flujo de trabajo. Puedes usar la [Acción de GitHub](https://github.com/welpo/git-sumi-action) para validar commits (o títulos de PR) sin instalar nada.

## Buenas prácticas de desarrollo

- **Cobertura de código**: 98% de cobertura de código; un linter debe ser robusto.
- **[Integración](https://github.com/welpo/git-sumi/blob/main/.github/workflows/ci.yml) y [publicación](https://github.com/welpo/git-sumi/blob/main/.github/workflows/release.yml) continua**: Flujos automatizados para testing y publicación de binarios multiplataforma en crates.io, PyPI y GitHub releases.
- **Documentación**: [Documentación completa](https://sumi.rs/docs/) con [guía rápida](https://sumi.rs/docs/), [ejemplos](https://sumi.rs/docs/examples), [reglas](https://sumi.rs/docs/rules), [integración](https://sumi.rs/docs/integration), [FAQ](https://sumi.rs/docs/faq)...
