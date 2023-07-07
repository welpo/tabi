+++
title = "No mandatory JavaScript"
date = 2023-01-06
updated = 2023-07-07
description = "JavaScript is only used when HTML and CSS aren't enough."

[taxonomies]
tags = ["showcase"]
+++

## JavaScript?

This theme has no mandatory JavaScript. Optionally, it can load a minimal amount to add some features that are impossible to achieve with HTML and CSS:

- **Light/dark mode switch**. Enabled by setting `theme_switcher = true`. (~900 bytes)
- **One-click copy of code blocks**. Enabled by setting `copy_button = true`. (~700 bytes)

These two settings can be applied in the `[extra]` section of your `config.toml` file.

KaTex support, which requires loading a 274 KB JavaScript file, can be activated for specific posts. This can be done by setting `katex = true` in the post's `[extra]` section of the post's front matter.

Other than that, it's a fast site with HTML and CSS. Just the way (most of) the web should be :-)
