+++
title = "shuku"
description = "Condensa películas y series para quedarte solo con el diálogo. Diseñado para aprender idiomas."
weight = 20

[taxonomies]
tags = ["Python", "media", "linguistics", "CLI"]

[extra]
local_image = "projects/shuku/shuku_logo.webp"
social_media_card = "social_cards/projects_shuku.jpg"
canonical_url = "https://osc.garden/es/projects/shuku/"
+++

**shuku** (<ruby><rb>縮</rb><rt>しゅく</rt></ruby><ruby><rb>小</rb><rt>しょう</rt></ruby>: «minificación») crea versiones condensadas de películas y series conservando solo los diálogos.

<video class="invertible-image" controls muted width="800" loop="true" autoplay="autoplay" title="demo de shuku" src="https://cdn.jsdelivr.net/gh/welpo/shuku/assets/animation_demo/shuku_demo.mov"></video>

#### [GitHub](https://github.com/welpo/shuku) • [Blog](https://osc.garden/es/blog/shuku-condensed-media-language-learning/) • [Documentación](https://github.com/welpo/shuku#readme) • [PyPI](https://pypi.org/project/shuku/) {.centered-text}

## Características

### Manejo inteligente de medios

- Detección y correspondencia automática de subtítulos con búsqueda difusa (fuzzy matching)
- Selección inteligente de pistas de audio/subtítulos
- Extracción de metadatos (título, temporada, número de episodio)

### Output flexible

- Audio condensado (MP3, FLAC, AAC, Opus…)
- Video condensado
- Subtítulos sincronizados (SRT, ASS, o LRC para apps tipo karaoke)

### Alta personalización

- Calidad y códecs de audio/video configurables
- Ajuste de tiempo de subtítulos y relleno
- Filtra subtítulos (efectos de sonido, letras, capítulos específicos)
- Soporte para argumentos personalizados de FFmpeg

### Experiencia del usuario

- Multiplataforma: GNU+Linux, macOS y Windows
- Logging detallado con indicadores de progreso
- Soporte para procesamiento por lotes

[![tarjeta social de shuku](/img/social_cards/projects_shuku.jpg)](https://github.com/welpo/shuku)
