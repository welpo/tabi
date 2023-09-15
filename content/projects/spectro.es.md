+++
title = "spectro"
description = "Script en Bash para generar espectrogramas, compararlos, subirlos a Imgur y proporcionar las URL correspondientes para compartir."
weight = 4

[extra]
local_image = "img/spectro.webp"
social_media_card = "img/es_projects_spectro.jpg"
+++

Transforma archivos de audio en espectrogramas con formato BBCode de manera sencilla con `spectro`. Este script en Bash soporta una amplia variedad de formatos de audio como Ogg, MP3, FLAC, AAC y más.

{{ full_width_image(src="img/spectrogram.webp", alt="Espectrograma de Jardin du Sommeil Chant d'Amour Sur La Nuit Grandissante, de Tourette") }}

#### [Ver en GitHub](https://github.com/welpo/spectro) {.centered-text}

## Características

- **Soporte de múltiples formatos**: Ogg, MP3, FLAC, AAC, ape, WMA, MP4 y WAV.
- **Salida en BBCode**: Genera automáticamente BBCode para foros o sitios web.
- **Procesamiento por lotes**: Puede manejar directorios enteros o archivos específicos.
- **Extensible**: Opciones para personalización, incluido el almacenamiento local y la subida a Imgur.

## Inicio rápido

1. Descarga `spectro` en un directorio dentro de tu PATH, por ejemplo, `~/bin`.
2. Otorga permisos de ejecución: `chmod +x spectro`.

Para una guía completa de instalación, [lee la documentación completa](https://github.com/welpo/spectro#install).

## Uso

**Generar BBCode para un directorio completo:**

```bash
spectro Path/To/Directory/
```

Salida:

```
[hide=Spectrograms][size=3]
[url=https://i.imgur.com/ClzzbP8.png]01. Jardin Du Sommeil.flac[/url]
[/size][/hide]
```

**Generar BBCode para archivos específicos:**

```bash
spectro archivo1.flac archivo2.mp3
```

Opciones adicionales y configuraciones están disponibles. Consulta `spectro --help`:

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
