+++
title = "shuku"
description = "Shrink media to keep only the dialogue. For immersion language learning."
weight = 20

[taxonomies]
tags = ["Python", "media", "linguistics", "CLI"]

[extra]
local_image = "projects/shuku/shuku_logo.webp"
social_media_card = "social_cards/projects_shuku.jpg"
canonical_url = "https://osc.garden/projects/shuku/"
+++

**shuku** (<ruby><rb>縮</rb><rt>しゅく</rt></ruby><ruby><rb>小</rb><rt>しょう</rt></ruby>: "minification") creates condensed versions of films and TV shows by keeping only the dialogue.

<video class="invertible-image" controls muted width="800" loop="true" autoplay="autoplay" title="shuku demo" src="https://cdn.jsdelivr.net/gh/welpo/shuku/assets/animation_demo/shuku_demo.mov"></video>

#### [GitHub](https://github.com/welpo/shuku) • [Blog post](https://osc.garden/blog/shuku-condensed-media-language-learning/) • [Documentation](https://github.com/welpo/shuku#readme) • [PyPI](https://pypi.org/project/shuku/) {.centered-text}

## Features

### Smart media handling

- Automatic subtitle detection and matching with fuzzy search
- Intelligent audio/subtitle track selection
- Metadata extraction (title, season, episode number)

### Flexible output

- Condensed audio (MP3, FLAC, AAC, Opus...)
- Condensed video
- Synchronized subtitles (including LRC for karaoke-style review)
- Clean filenames in output

### High customization

- Configurable audio/video quality and codecs
- Subtitle timing adjustment and padding
- Skip unwanted content (sound effects, lyrics, specific chapters)
- Custom FFmpeg arguments support

### User experience

- Cross-platform: GNU+Linux, macOS, and Windows
- Detailed logging with progress indicators
- Batch processing support

## Development best practices

- Comprehensive testing: 100% code coverage
- Clean code: Type-hinted Python with clear responsibilities
- Continuous Integration/Deployment
- Comprehensive documentation

[![shuku social media card](/img/social_cards/projects_shuku.jpg)](https://github.com/welpo/shuku)
