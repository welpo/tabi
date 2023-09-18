+++
title = "nani"
description = "Bash script to create public URLs from files or text on remote servers."
weight = 3

[extra]
local_image = "img/nani.webp"
canonical_url = "https://osc.garden/projects/tabi/"
social_media_card = "img/social_cards/projects_nani.jpg"
+++

If you're working on a remote server, you know that sharing files with others can often involve multiple steps. `nani` is a Bash script designed to streamline this process. By executing a single command, you can convert local files or URLs into accessible links, allowing for easier sharing right from your server.

#### [View on GitHub](https://github.com/welpo/nani) {.centered-text}

## Key Features

- **Multiple File Types**: Handles directories, FLAC files, text files, and even URLs to videos.
- **Customisable**: Tailor settings via a config file or runtime flags.
- **Notifications**: Desktop notifications and clipboard integration for a better experience.

## Quick Start

1. Place `nani` in a directory within your PATH.
2. Make the script executable.

For detailed installation steps, [read the full documentation](https://github.com/welpo/nani#install).

## Usage

```bash
nani Path/To/picture.png
https://example.com/nani/hjRGLZB.png
```

**Share a directory keeping its original name**:

```bash
nani -o Path/To/Directory
https://example.com/nani/Directory.zip
```

Additional control is available through flags. Here's the output of `nani --help`:

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
