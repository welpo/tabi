+++
title = "spectro"
description = "Bash script to generate spectrograms, compare them, upload them to Imgur, and provide the corresponding URLs for sharing."
weight = 4

[extra]
local_image = "projects/spectro/spectro.webp"
canonical_url = "https://osc.garden/projects/spectro/"
social_media_card = "social_cards/projects_spectro.jpg"
+++

Transform audio files into BBCode-formatted spectrograms effortlessly with `spectro`. This Bash script supports a wide array of audio formats such as Ogg, MP3, FLAC, AAC, and more.

{{ full_width_image(src="projects/spectro/spectrogram.webp", alt="Spectrogram of Jardin du Sommeil Chant d'Amour Sur La Nuit Grandissante, by Tourette") }}

#### [View on GitHub](https://github.com/welpo/spectro) {.centered-text}

## Features

- **Versatile Format Support**: Ogg, MP3, FLAC, AAC, ape, WMA, MP4, and WAV.
- **BBCode Output**: Automatically generates BBCode for forums or websites.
- **Batch Processing**: Can handle entire directories or specific files.
- **Extensible**: Options for customisation including local storage and imgur uploading.

## Quick Start

1. Download `spectro` to a directory within your PATH, for example, `~/bin`.
2. Grant execute permissions: `chmod +x spectro`.

For a complete installation guide, [read the full documentation](https://github.com/welpo/spectro#install).

## Usage

**Generate BBCode for an Entire Directory:**

```bash
spectro Path/To/Directory/
```

Output:

```
[hide=Spectrograms][size=3]
[url=https://i.imgur.com/ClzzbP8.png]01. Jardin Du Sommeil.flac[/url]
[/size][/hide]
```

**Generate BBCode for Specific Files:**

```bash
spectro file1.flac file2.mp3
```

Additional options and configurations are available. See `spectro --help`:

{% wide_container() %}

```
Usage: spectro [options] <audio_files>
Generate BBCode-formatted spectrograms from audio files.

Options:
    -c, --compare     Create a .gif comparison of spectrograms (requires ImageMagick)
    -d, --double      Create both zoomed and full spectrograms
    -h, --help        Display this help and exit
    -l, --local       Save spectrograms locally
    -o, --optipng     Reverse optipng setting
    -p, --parallel    Compatible with 'parallel'
    -q, --quiet       Suppress 'Uploading' text
    -s, --sha         Display SHA value
    -t, --text        Use [url] or [img] tags
    -z, --zoom        Create zoomed-in spectrogram

Examples:
    spectro -ol DirectoryWithMusic/
    printf "[hide=Spectrograms][size=3]" && ls | parallel -k spectro -p; printf "[/size][/hide]"
```

{% end %}
