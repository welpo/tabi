+++
title = "dōteki"
description = "Añade contenido dinámico a tu perfil de GitHub con un sistema intuitivo de plugins."
weight = 30

[taxonomies]
tags = ["GitHub Actions", "automatización", "Python"]

[extra]
local_image = "projects/doteki/doteki_logo.webp"
social_media_card = "social_cards/projects_doteki.jpg"
canonical_url = "https://osc.garden/es/projects/doteki/"
add_src_to_code_block = true
+++

**dōteki** actualiza tu perfil de GitHub automáticamente. Añade tus últimas publicaciones del blog, la música que escuchas o cualquier otro contenido dinámico mediante plugins.

![logo de dōteki: un río pasando por un bosque de bambú](https://cdn.jsdelivr.net/gh/welpo/doteki@main/website/static/img/logo.png)

#### [GitHub](https://github.com/welpo/doteki) • [Sitio web](https://doteki.org/) • [Documentación](https://doteki.org/docs/) {.centered-text}

## Cómo funciona

1. Añade marcadores a tu README:

{{ add_src_to_code_block(src="README.md") }}
```md
<!-- blog start -->
<!-- blog end -->
```

2. Configura qué va ahí:

{{ add_src_to_code_block(src="doteki.toml") }}
```toml
[sections.blog]
plugin = "feed"
url = "https://osc.garden/atom.xml"  # Reemplaza con tu feed.

[sections.last_updated]
plugin = "current_date"
inline = true
```

3. Configura la [Acción de GitHub](https://github.com/welpo/doteki-action).

¡Eso es todo! Tu README se actualizará automáticamente.

## Características

- **Sistema de plugins**: Muestra [entradas del blog](https://doteki.org/docs/plugins/feed), [música](https://doteki.org/docs/plugins/lastfm), o [crea tu propio plugin](https://doteki.org/docs/developer-guide/plugin-standard)
- **Configuración simple**: Un archivo TOML, una Acción de GitHub
- **Flexible**: Cada plugin tiene sus propias opciones (orden, entradas máximas, formato…)
- **[Documentación detallada](https://doteki.org/docs/)**: Información detallada sobre cómo configurar y usar **dōteki** y sus plugins. Incluye [instrucciones claras para los desarrolladores](https://doteki.org/docs/developer-guide/) que quieran contribuir.

## Documentación

Consulta la [documentación](https://doteki.org/docs/) para:

- [Guía de inicio rápido](https://doteki.org/docs/)
- [Plugins disponibles](https://doteki.org/docs/plugins/)
- [Desarrollo de plugins](https://doteki.org/docs/developer-guide/)
- [Opciones de configuración](https://doteki.org/docs/configuration/)
