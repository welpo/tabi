+++
title = "Customise tabi with skins and a default theme"
date = 2023-08-09
updated = 2023-11-24
description = "Learn how to customise tabi using skins and setting a default theme, making your site uniquely yours."

[taxonomies]
tags = ["showcase", "tutorial"]

[extra]
toc = true
quick_navigation_buttons = true
social_media_card = "social_cards/blog_customise_tabi.jpg"
+++

tabi can be customised in two ways: by setting the default theme (dark or light) and by choosing the main colour for the theme (skins).

## Default theme

Use `default_theme = "dark"` to set the dark theme as the default, or `default_theme = "light"` to set the light theme as the default.

Setting `default_theme = ""` (or commenting out the variable) will follow the user's system preference (light or dark mode).

To permanently set your site to either the dark or light theme, you need to disable the theme switcher in `config.toml` and set your preferred theme as the `default_theme`.

For example, to have a permanent dark theme:

```toml
[extra]
theme_switcher = false
default_theme = "dark"
```

## Skins

Not a fan of teal? No problem! tabi has 12 skins for you to choose from. If none of these work for you, you can [create your own](#create-your-own-skin).

A skin is a CSS file with two variables: the primary colour for the light theme, and the primary colour for the dark theme.

Enabling a skin is as easy as setting the `skin` variable in your `config.toml` with the name of the skin. For example:

```toml
[extra]
skin = "sakura"
```

Take a look below at the available skins below.

**Click on the images** to switch between dark and light themes.

<hr>

### Teal

The default skin. If the `skin` variable is unset (or set to `"teal"`), this is what tabi looks like:

{{ image_toggler(default_src="blog/customise-tabi/skins/teal_light.webp", toggled_src="blog/customise-tabi/skins/teal_dark.webp", default_alt="teal skin in light mode", toggled_alt="teal skin in dark mode", full_width=true) }}

<hr>

### Lavender

{{ image_toggler(default_src="blog/customise-tabi/skins/lavender_light.webp", toggled_src="blog/customise-tabi/skins/lavender_dark.webp", default_alt="lavender skin in light mode", toggled_alt="lavender skin in dark mode", full_width=true) }}

To apply, use `skin = "lavender"`.


<hr>

### Red

{{ image_toggler(default_src="blog/customise-tabi/skins/red_light.webp", toggled_src="blog/customise-tabi/skins/red_dark.webp", default_alt="red skin in light mode", toggled_alt="red skin in dark mode", full_width=true) }}

Switch to this by setting `skin = "red"`.


<hr>

### Mint

A skin designed by 🅿️.

{{ image_toggler(default_src="blog/customise-tabi/skins/mint_light.webp", toggled_src="blog/customise-tabi/skins/mint_dark.webp", default_alt="mint skin in light mode", toggled_alt="mint skin in dark mode", full_width=true) }}

Activate it with `skin = "mint"`.


<hr>

### Sakura

Inspired by the Japanese cherry blossom season.

{{ image_toggler(default_src="blog/customise-tabi/skins/sakura_light.webp", toggled_src="blog/customise-tabi/skins/sakura_dark.webp", default_alt="sakura skin in light mode", toggled_alt="sakura skin in dark mode", full_width=true) }}

To enable this skin, adjust `skin = "sakura"`.


<hr>

### Blue

{{ image_toggler(default_src="blog/customise-tabi/skins/blue_light.webp", toggled_src="blog/customise-tabi/skins/blue_dark.webp", default_alt="blue skin in light mode", toggled_alt="blue skin in dark mode", full_width=true) }}

For this appearance, set `skin = "blue"`.


<hr>

### Indigo Ingot

*Indigo* for blue (in light theme) and *ingot* for gold (in dark theme).

{{ image_toggler(default_src="blog/customise-tabi/skins/indigo_ingot_light.webp", toggled_src="blog/customise-tabi/skins/indigo_ingot_dark.webp", default_alt="indigo ingot skin in light mode", toggled_alt="indigo ingot skin in dark mode", full_width=true) }}

To activate this skin, use `skin = "indigo_ingot"`.


<hr>

### Evangelion

Inspired by the colours of Evangelion Unit-01 (in dark theme) and Unit-02 (in light theme).

{{ image_toggler(default_src="blog/customise-tabi/skins/evangelion_light.webp", toggled_src="blog/customise-tabi/skins/evangelion_dark.webp", default_alt="evangelion skin in light mode", toggled_alt="evangelion skin in dark mode", full_width=true) }}


<hr>

### Monochrome

{{ image_toggler(default_src="blog/customise-tabi/skins/monochrome_light.webp", toggled_src="blog/customise-tabi/skins/monochrome_dark.webp", default_alt="monochrome skin in light mode", toggled_alt="monochrome skin in dark mode", full_width=true) }}

To achieve this look, set `skin = "monochrome"`.


<hr>

### Low contrast orange

**WARNING!** This skin's light theme may have [low contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), affecting accessibility and Lighthouse rating. (Dark theme is fine.)

{{ image_toggler(default_src="blog/customise-tabi/skins/lowcontrast_orange_light.webp", toggled_src="blog/customise-tabi/skins/lowcontrast_orange_dark.webp", default_alt="low contrast orange skin in light mode", toggled_alt="low contrast orange skin in dark mode", full_width=true) }}

To use, set `skin = "lowcontrast_orange"`.


<hr>

### Low contrast peach

**WARNING!** This skin's light theme may have [low contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), affecting accessibility and Lighthouse rating. (Dark theme is fine.)

{{ image_toggler(default_src="blog/customise-tabi/skins/lowcontrast_peach_light.webp", toggled_src="blog/customise-tabi/skins/lowcontrast_peach_dark.webp", default_alt="low contrast peach skin in light mode", toggled_alt="low contrast peach skin in dark mode", full_width=true) }}

To enable it, specify `skin = "lowcontrast_peach"`.


<hr>

### Low contrast pink

**WARNING!** This skin's light theme may have [low contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), affecting accessibility and Lighthouse rating. (Dark theme is fine.)

{{ image_toggler(default_src="blog/customise-tabi/skins/lowcontrast_pink_light.webp", toggled_src="blog/customise-tabi/skins/lowcontrast_pink_dark.webp", default_alt="low contrast pink skin in light mode", toggled_alt="low contrast pink skin in dark mode", full_width=true) }}

For this colourscheme, choose `skin = "lowcontrast_pink"`.


<hr>

### Create your own skin

You're not just limited to predefined skins. Why not create a look that's distinctively tailored to your preferences?

You can save your new skin it in either of these two directories:
1. Inside the theme's directory: `themes/tabi/sass/skins`
2. Inside your main site's directory: `sass/skins` (you'll need to create this folder)

Create a new `.scss` file (for example, `your_skin.scss`) in your preferred location. This file needs to have these two variables (this is the default skin, "teal"):

```scss
:root {
    --primary-color: #087e96;
}

[data-theme='dark'] {
    --primary-color: #91e0ee;
}
```

Modify the colours to your taste. Once you're satisfied, update the `skin` variable to match your filename.

Remember to consider the accessibility of the colours you choose. Here's a link that can help you: [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/). The background of the light theme is `#fff`, and the dark one is `#1f1f1f`.
