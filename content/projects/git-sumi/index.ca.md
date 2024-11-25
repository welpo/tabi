+++
title = "git-sumi"
description = "El linter de missatges de commit no opinat basat en Rust."
weight = 10

[taxonomies]
tags = ["Git", "Rust", "Continuous Integration", "GitHub Actions", "CLI", "automatització"]

[extra]
local_image = "projects/git-sumi/git-sumi_logo.webp"
social_media_card = "social_cards/projects_git-sumi.jpg"
canonical_url = "https://osc.garden/ca/projects/git-sumi/"
+++

**git-sumi** és el linter de missatges de commit no opinat escrit en Rust.

{% wide_container() %}
<video controls src="https://cdn.jsdelivr.net/gh/welpo/git-sumi@main/assets/git-sumi_demo.mp4" title="demo de git-sumi"></video>
{% end %}

#### [GitHub](https://github.com/welpo/git-sumi) • [Lloc web](https://sumi.rs/) • [Documentació](https://sumi.rs/docs/) {.centered-text}

## Característiques principals

- **Regles personalitzables**: Configura regles per a Conventional Commits, límits de longitud, ús de [Gitmoji](https://gitmoji.dev/) i [més](https://sumi.rs/docs/rules).
- **Informe d'errors clar**: Proporciona errors detallats, fent que la correcció sigui senzilla i educativa.
- **Integració senzilla**: Com a binari únic, git-sumi s'integra fàcilment al teu flux de treball. També pots fer servir l'[Acció de GitHub](https://github.com/welpo/git-sumi-action) per validar commits (o títols de PR) sense instal·lar res.

## Bones pràctiques de desenvolupament

- **Cobertura de codi**: 98% de cobertura en tests; un linter ha de ser fiable.
- **[Integració](https://github.com/welpo/git-sumi/blob/main/.github/workflows/ci.yml) i [publicació](https://github.com/welpo/git-sumi/blob/main/.github/workflows/release.yml) contínua**: Fluxos automatitzats per a testing i publicació de binaris multiplataforma a crates.io, PyPI i GitHub releases.
- **Documentació**: [Documentació completa](https://sumi.rs/docs/) amb [guia ràpida](https://sumi.rs/docs/), [exemples](https://sumi.rs/docs/examples), [regles](https://sumi.rs/docs/rules), [integració](https://sumi.rs/docs/integration), [FAQ](https://sumi.rs/docs/faq)...
