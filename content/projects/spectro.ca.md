+++
title = "spectro"
description = "Script en Bash per generar espectrogrames, comparar-los, pujar-los a Imgur i proporcionar les URL corresponents per compartir."
weight = 4

[extra]
local_image = "img/spectro.webp"
canonical_url = "https://osc.garden/ca/projects/spectro/"
social_media_card = "img/social_cards/ca_projects_spectro.jpg"
+++

Transforma fitxers d'àudio en espectrogrames amb format BBCode de manera senzilla amb `spectro`. Aquest script en Bash suporta una àmplia varietat de formats d'àudio com Ogg, MP3, FLAC, AAC i més.

{{ full_width_image(src="img/spectrogram.webp", alt="Espectrograma de Jardin du Sommeil Chant d'Amour Sur La Nuit Grandissante, de Tourette") }}

#### [Veure a GitHub](https://github.com/welpo/spectro) {.centered-text}

## Característiques

- **Suport de múltiples formats**: Ogg, MP3, FLAC, AAC, ape, WMA, MP4 i WAV.
- **Sortida en BBCode**: Genera automàticament BBCode per a fòrums o llocs web.
- **Processament per lots**: Pot gestionar directoris sencers o fitxers específics.
- **Extensible**: Opcions per a personalització, incloent l'emmagatzemament local i la pujada a Imgur.

## Inici ràpid

1. Descarrega `spectro` en un directori dins del teu PATH, per exemple, `~/bin`.
2. Atorga permisos d'execució: `chmod +x spectro`.

## Ús

**Generar BBCode per a un directori complet:**

```bash
spectro Path/To/Directory/
```

Sortida:

```
[hide=Spectrograms][size=3]
[url=https://i.imgur.com/ClzzbP8.png]01. Jardin Du Sommeil.flac[/url]
[/size][/hide]
```

**Generar BBCode per a fitxers específics:**

```bash
spectro arxiu1.flac arxiu2.mp3
```

Opcions addicionals i configuracions estan disponibles. Consulta `spectro --help`:

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
