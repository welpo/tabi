+++
title = "git-sumi"
description = "El linter de mensajes de commit no opinado basado en Rust."
weight = 10

[extra]
local_image = "projects/git-sumi/git-sumi_logo.webp"
social_media_card = "social_cards/projects_git-sumi.jpg"
canonical_url = "https://osc.garden/es/projects/git-sumi/"
+++

**git-sumi** es un linter de mensajes de commit no opinado escrito en Rust. Es una herramienta flexible para cumplir tus estándares de mensajes de commit, facilitando mensajes consistentes y fácilmente automatizables.

{% wide_container() %}
<video controls src="git-sumi demo.mp4" title="git-sumi demo"></video>
{% end %}

#### [GitHub](https://github.com/welpo/git-sumi) • [Sitio web](https://sumi.rs/) • [Documentación](https://sumi.rs/docs/) {.centered-text}

## Características principales

- **Reglas personalizables**: Configura git-**sumi** para satisfacer los requisitos específicos de cada proyecto. Configura reglas para Conventional Commits, límites de longitud, uso de Gitmoji y más a través de un archivo de un sencillo archivo de configuración TOML.
- **Reporte de errores claro**: Proporciona un reporte de errores detallado, haciendo que la corrección sea sencilla y educativa.
- **Integración sin fisuras**: Al ser único binario, git-**sumi** se integra fácilmente en tu flujo de trabajo. Incluso puedes usar la [Acción de GitHub](https://github.com/welpo/git-sumi-action) para validar tus commits (o títulos de PR) sin necesidad de instalar nada localmente.

## Buenas prácticas de desarrollo

- **Amplia cobertura del código**: Más del 95% de cobertura de líneas y una cobertura de características exhaustiva garantizan la robustez de git-**sumi**.
- **Integración [continua](https://github.com/welpo/git-sumi/blob/main/.github/workflows/ci.yml) y [publicación](https://github.com/welpo/git-sumi/blob/main/.github/workflows/release.yml)**: Flujos de trabajo automatizados para probar, integrar y publicar aseguran que cada versión de git-**sumi** esté completamente probada y lista para su uso.
- **Contribuciones de la comunidad**: Fomenta las contribuciones de la comunidad de todo tipo, con un enfoque acogedor tanto para los recién llegados como para los desarrolladores experimentados.
- [**Documentación exhaustiva**](https://sumi.rs/docs/) para empezar con git-**sumi** y comprender sus características y capacidades.

## Empieza a mejorar tus prácticas de commit hoy

Da el primer paso hacia la transformación de tus prácticas de commit. La combinación de flexibilidad, retroalimentación detallada y fácil integración de git-**sumi** lo convierte en la opción perfecta para equipos e individuos que buscan mejorar sus mensajes de commit.

[Descubre **git-sumi**](https://sumi.rs/) y hazlo parte de tu kit de herramientas de desarrollo.

[![tarjeta de redes sociales de git-sumi](social_cards/projects_git-sumi.jpg)](https://sumi.rs/)
