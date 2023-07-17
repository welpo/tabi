+++
title = "No mandatory JavaScript"
date = 2023-01-06
updated = 2023-07-13
description = "JavaScript is only used when HTML and CSS aren't enough."

[taxonomies]
tags = ["showcase", "tutorial"]
+++

This theme has no mandatory JavaScript. Optionally, it can load a minimal amount to add some features that are impossible to achieve with HTML and CSS.

### Globally enabled settings

- **Light/dark mode switch**. Enabled by setting `theme_switcher = true`. (~900 bytes)
- **One-click copy of code blocks**. Enabled by setting `copy_button = true`. (~700 bytes)

These two settings can be applied in the `[extra]` section of your `config.toml` file.

- [**Comments**](@/blog/comments.md). giscus (2 KB), utterances (1 KB) or Hyvor Talk (~800 bytes) can be globally enabled by setting `enabled_for_all_posts = true` in the right section of your  `config.toml` (i.e. `[extra.giscus]`, `[extra.utterances]` or `[extra.hyvortalk]`).

### Page-specific settings

The following settings can be enabled on specific posts by setting certain variables in the `[extra]` section of the post's front matter.

- [**KaTeX** support](@/blog/markdown.md#katex) (274 KB) can be enabled it by setting `katex = true`.
- [**Comments**](@/blog/comments.md) can be enabled on individual posts by setting the name of the system `= true` (e.g. `hyvortalk = true`).

Other than that, it's a fast theme with HTML and CSS which works with JavaScript disabled. Just the way (most of) the web should be :-)
