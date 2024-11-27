+++
title = "dōteki"
description = "Afegeix contingut dinàmic al teu perfil de GitHub amb un sistema intuïtiu de plugins."
weight = 30

[taxonomies]
tags = ["GitHub Actions", "automatització", "Python"]

[extra]
local_image = "projects/doteki/doteki_logo.webp"
social_media_card = "social_cards/projects_doteki.jpg"
canonical_url = "https://osc.garden/ca/projects/doteki/"
add_src_to_code_block = true
+++

**dōteki** actualitza el teu perfil de GitHub automàticament. Afegeix les teves últimes publicacions del blog, la música que escoltes o qualsevol altre contingut dinàmic mitjançant plugins.

![logo de dōteki: un riu passant per un bosc de bambú](https://cdn.jsdelivr.net/gh/welpo/doteki@main/website/static/img/logo.png)

#### [GitHub](https://github.com/welpo/doteki) • [Lloc web](https://doteki.org/) • [Documentació](https://doteki.org/docs/) {.centered-text}

## Com funciona

1. Afegeix marcadors al teu README:

{{ add_src_to_code_block(src="README.md") }}
```md
<!-- blog start -->
<!-- blog end -->
```

2. Configura què hi va:

{{ add_src_to_code_block(src="doteki.toml") }}
```toml
[sections.blog]
plugin = "feed"
url = "https://osc.garden/atom.xml"  # Substitueix amb el teu feed.

[sections.last_updated]
plugin = "current_date"
inline = true
```

3. Configura l'[Acció de GitHub](https://github.com/welpo/doteki-action).

Això és tot! El teu README s'actualitzarà automàticament.

## Característiques

- **Sistema de plugins**: Mostra [entrades del blog](https://doteki.org/docs/plugins/feed), [música](https://doteki.org/docs/plugins/lastfm), o [crea el teu propi plugin](https://doteki.org/docs/developer-guide/plugin-standard)
- **Configuració simple**: Un arxiu TOML, una Acció de GitHub
- **Flexible**: Cada plugin té les seves pròpies opcions (ordre, entrades màximes, format…)
- **[Documentació detallada](https://doteki.org/docs/)**: Informació detallada sobre com configurar i utilitzar **dōteki** i els seus plugins. Inclou [instruccions clares per als desenvolupadors](https://doteki.org/docs/developer-guide/) que vulguin contribuir.

## Documentació

Consulta la [documentació](https://doteki.org/docs/) per a:

- [Guia d'inici](https://doteki.org/docs/)
- [Plugins disponibles](https://doteki.org/docs/category/plugins)
- [Desenvolupament de plugins](https://doteki.org/docs/developer-guide/)
- [Opcions de configuració](https://doteki.org/docs/configuration/)
