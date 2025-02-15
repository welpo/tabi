+++
title = "Optimise loading times with a custom font subset"
date = 2023-04-29
updated = 2025-01-12
description = "Learn how to create a custom subset that only includes the necessary glyphs."

[taxonomies]
tags = ["showcase", "tutorial"]

[extra]
social_media_card = "social_cards/blog_custom_font_subset.jpg"
+++

## The problem

Custom fonts cause flashing text in Firefox. For a gif and more details, see [this issue](https://github.com/welpo/tabi/issues/75).

## The solution

To fix this, tabi loads a subset of glyphs for the header. Since this (slightly) increases the initial load time, it's a good idea to try and minimise the size of this subset.

By default, there are subset files for English and Spanish characters (with a few symbols). These files are loaded when the Zola page/site is set to that language.

{% admonition(type="tip") %}
If you're using a custom font, either create your custom subset (see below) or disable the built-in subsets completely with `enable_subset = false` in your `config.toml`.
{% end %}

Here's how you can create a custom font subset that only includes the characters used in your header, for maximum efficiency.

## Requirements

Install these tools:

- [fonttools](https://github.com/fonttools/fonttools)

- [brotli](https://github.com/google/brotli)

Run `pip install fonttools brotli` to install both.

## The script

The script below takes a `config.toml` file and a font file as input, extracts the necessary characters, creates a subset of the font, and generates a CSS file containing the base64 encoded subset.

```bash
#!/usr/bin/env bash

usage() {
    echo "Usage: $0 [--config | -c CONFIG_FILE] [--font | -f FONT_FILE] [--output | -o OUTPUT_PATH]"
    echo
    echo "Options:"
    echo "  --config, -c   Path to the config.toml file."
    echo "  --font, -f     Path to the font file."
    echo "  --output, -o   Output path for the generated subset.css file (default: current directory)"
    echo "  --help, -h     Show this help message and exit"
}

# Default output is current directory.
output_path="."

# Parse command line options
while [ "$#" -gt 0 ]; do
    case "$1" in
        --config|-c)
            config_file="$2"
            shift 2
            ;;
        --font|-f)
            font_file="$2"
            shift 2
            ;;
        --output|-o)
            output_path="$2"
            shift 2
            ;;
        --help|-h)
            usage
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            usage
            exit 1
            ;;
    esac
done

# Check if -c and -f options are provided
if [ -z "$config_file" ]; then
    echo "Error: --config|-c option is required."
    usage
    exit 1
fi

if [ -z "$font_file" ]; then
    echo "Error: --font|-f option is required."
    usage
    exit 1
fi

# Check if config and font files exist.
if [ ! -f "$config_file" ]; then
    echo "Error: Config file '$config_file' not found."
    exit 1
fi

if [ ! -f "$font_file" ]; then
    echo "Error: Font file '$font_file' not found."
    exit 1
fi

# Extract the title and menu names from the config file.
title=$(awk -F' = ' '/^title/{print $2}' "$config_file" | tr -d '"')
menu_names=$(awk -F' = ' '/^menu/{f=1;next} /socials/{f=0} f && /name/{print $2}' "$config_file" | cut -d',' -f1 | tr -d '"' )
language_names=$(awk -F' = ' '/^language_name\./{print $2}' "$config_file" | tr -d '"' )

# If the site is multilingual, get the menu translations.
if [ -n "$language_names" ]; then
    for menu_name in $menu_names; do
        # Find the line with the menu name inside a [languages.*.translations] section and get the translated menus.
        menu_translation=$(awk -F' = ' "/\\[languages.*\\.translations\\]/{f=1;next} /^\\[/ {f=0} f && /$menu_name =/{print \$2}" "$config_file" | tr -d '"' )
        # Add the found menu value to the translations string
        menu_names+="$menu_translation"
    done
fi

# Combine the extracted strings.
combined="$title$menu_names$language_names"

# Get unique characters.
unique_chars=$(echo "$combined" | grep -o . | sort -u | tr -d '\n')

# Create a temporary file for subset.woff2.
temp_subset=$(mktemp)

# Create the subset.
pyftsubset "$font_file" \
    --text="$unique_chars" \
    --layout-features="*" --flavor="woff2" --output-file="$temp_subset" --with-zopfli

# Remove trailing slash from output path, if present.
output_path=${output_path%/}

# Base64 encode the temporary subset.woff2 file and create the CSS file.
base64_encoded_font=$(base64 -i "$temp_subset")
echo "@font-face{font-family:\"Inter Subset\";src:url(data:application/font-woff2;base64,$base64_encoded_font);}" > "$output_path/custom_subset.css"

# Remove the temporary subset.woff2 file.
rm "$temp_subset"
```

## Usage

Save the script somewhere like `~/bin/subset_font`. Make it executable with `chmod +x ~/bin/subset_font`.

Now you can run it with the required `--config` and `--font` options:

```bash
~/bin/subset_font --config path/to/config.toml --font path/to/font.woff2
```
By default, this generates a `custom_subset.css` file in the current directory. Use `-o` or `--output` to specify a different path:

```bash
~/bin/subset_font -c path/to/config.toml -f path/to/font.woff2 -o path/to/output
```

You should place this `custom_subset.css` file inside the `static/` directory.


## Automating with Pre-commit Hook

You might change the title or menu options of your site, making the custom subset no longer useful.

To automate the process of creating this file, you can integrate the script into a Git pre-commit hook that checks for changes in the `config.toml` file, runs the script, and stores the resulting CSS file in the `static/` directory of your site.

1. Create a `.git/hooks/pre-commit` file in your Git project, if it doesn't already exist.

2. Make it executable with `chmod +x .git/hooks/pre-commit`.

3. Add the following code to the file:

```bash
# Check if config.toml has been modified.
if git diff --cached --name-only | grep -q "config.toml"; then
    echo "config.toml modified. Running subset_font…"

    # Call the subset_font script.
    ~/bin/subset_font -c config.toml -f static/fonts/Inter4.woff2 -o static/

    # Add the generated subset.css file to the commit.
    git add static/custom_subset.css
fi
```

Make sure to modify the script to match the path where you stored the `subset_font` script. The config and font paths should work fine with tabi's default setup.

Now, every time you commit changes to your Git project, the pre-commit hook will check for modifications in the `config.toml` file and automatically run the `subset_font` script to update the `custom_subset.css` file.

By the way, if you're interested in a way to automatically update the date of your Zola posts or compress your PNG files, check out [this post](https://osc.garden/blog/zola-date-git-hook/).

If you want to use all scripts at once (compressing PNG files, updating the date, and creating the font subset), combine their code into a single `.git/hooks/pre-commit` file.
