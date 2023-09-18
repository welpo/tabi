+++
title = "nani"
description = "Script Bash para crear URLs públicas a partir de archivos o texto en servidores remotos."
weight = 3

[extra]
local_image = "img/nani.webp"
canonical_url = "https://osc.garden/es/projects/tabi/"
social_media_card = "img/social_cards/es_projects_nani.jpg"
+++

Si trabajas en un servidor remoto, sabrás que compartir archivos con otras personas puede ser un proceso tedioso. `nani` es un script en Bash diseñado para simplificar esta tarea. Con un solo comando, puedes convertir archivos locales en enlaces públicos, facilitando el proceso de compartir directamente desde tu servidor.

#### [Ver en GitHub](https://github.com/welpo/nani) {.centered-text}

## Características clave

- **Todo tipo de archivos**: maneja directorios, archivos FLAC, archivos de texto e incluso URLs a vídeos.

- **Personalizable**: adapta los ajustes editando el script o un archivo de configuración.

- **Notificaciones**: notificaciones en el escritorio e integración con el portapapeles para una mejor experiencia.

## Inicio rápido

1. Coloca `nani` en un directorio dentro de tu PATH.
2. Haz el script ejecutable.

Para pasos de instalación más detallados, [consulta la documentación completa](https://github.com/welpo/nani#install).

## Uso

```bash
nani Ruta/A/foto.png
https://example.com/nani/hjRGLZB.png
```

Compartir un directorio manteniendo su nombre original:

```bash
nani -o Ruta/A/Directorio
https://example.com/nani/Directorio.zip
```

Puedes configurar varias opciones a través de los parámetros. Aquí tienes la salida de `nani` --help:
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
