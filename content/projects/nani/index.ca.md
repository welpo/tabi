+++
title = "nani"
description = "Script Bash per crear URLs públiques a partir d'arxius o text en servidors remots."
weight = 50

[taxonomies]
tags = ["bash", "CLI"]

[extra]
local_image = "projects/nani/nani_logo.webp"
canonical_url = "https://osc.garden/ca/projects/tabi/"
social_media_card = "social_cards/ca_projects_nani.jpg"
+++

Si treballes en un servidor remot, saps que compartir arxius amb altres persones pot ser un procés feixuc. `nani` és un script en Bash dissenyat per simplificar aquesta tasca. Amb una sola comanda, pots convertir arxius locals o URLs en enllaços accessibles, facilitant el procés de compartir directament des del teu servidor.

[![nani logo](nani_logo.webp)](https://github.com/welpo/nani/)

#### [Veure a GitHub](https://github.com/welpo/nani) {.centered-text}

## Característiques clau

- **Tot tipus d'arxius**: gestiona directoris, arxius FLAC, arxius de text i fins i tot URLs a vídeos.
- **Personalitzable**: adapta els ajustos editant l'script o un arxiu de configuració.
- **Notificacions**: notificacions a l'escriptori i integració amb el portaretrats per a una millor experiència.

## Inici ràpid

1. Col·loca `nani` en un directori dins del teu PATH.
2. Fes que l'script sigui executable.

Per a passos d'instal·lació més detallats, [consulta la documentació completa](https://github.com/welpo/nani#-install).

## Ús

```bash
$ nani Ruta/A/foto.png
https://example.com/nani/hjRGLZB.png
```

Compartir un directori mantenint el seu nom original:

```bash
$ nani -o Ruta/A/Directori
https://example.com/nani/Directori.zip
```

Pots configurar diverses opcions a través dels paràmetres. Aquí tens la sortida de `nani --help`:

{% wide_container() %}

```
Usage: nani [options] <infile>
Provides public URL from input.

Input handling:
    Directory                       Will be stored using zip (or symbolic link)
    FLAC                            Can be transcoded to MP3
    Text (html, php...)             Extension can be set to .txt
    Other files                     New copy/hard link/symbolic link at output directory
    URL to video (e.g: youtube)     Downloaded using yt-dlp
    Other URLs                      Downloaded using wget

Modify the first lines of the script to change how nani behaves: quiet mode,
enabling/disabling transcoding, length of the string, extension truncation...

Settings and options:
    -a, --alias      Revert the hard link setting
    -c, --cleanup    Remove all files on /nani/ except index.html
    -h, --help       Display this help and exit
    -i, --insert     Open nano to enter text. Saved in output directory as .txt
    -k, --keep       Output dir becomes /nani/k/, to set different cleanup rules
    -l, --list       List files in output directory /nani/
    -n, --name       Use custom name (e.g. nani -n DesiredName <file>)
    -N, --notify     Revert the notify option
    -o, --original   Preserve original file name
    -p, --push       Send push notification
    -q, --quiet      Revert the quiet setting
    -s, --string     Force a certain string length (e.g. nani -s 32 <file>)
    -t, --transcode  Revert the transcode setting
    -x, --xclip      Revert the xclip setting
    -y, --symbolic   Create a symbolic link for files and directories
```

{% end %}
