+++
title = "No mandatory JavaScript"
date = 2023-01-06
updated = 2023-08-02
description = "JavaScript is only used when HTML and CSS aren't enough."

[taxonomies]
tags = ["showcase", "tutorial"]
+++

This theme has no mandatory JavaScript. Optionally, it can load a minimal amount to add some features that are impossible to achieve with HTML and CSS.

## Globally enabled settings

You can enable the following settings for all pages:

- **Light/dark mode switch**. Enabled by setting `theme_switcher = true`. (~900 bytes)
- **One-click copy of code blocks**. Enabled by setting `copy_button = true`. (~700 bytes)
- **Footnote backlinks**. Enabled by setting `footnote_backlinks = true` (~500 bytes).

These settings can be applied in the `[extra]` section of your `config.toml` file.

- [**Comments**](@/blog/comments.md). giscus (2 KB), utterances (1 KB), Hyvor Talk (~800 bytes) or Isso (1KB) can be globally enabled by setting `enabled_for_all_posts = true` in the right section of your  `config.toml` (i.e. `[extra.giscus]`, `[extra.utterances]`, `[extra.hyvortalk]` or `[extra.isso]`).

## Page-specific settings

The following settings can be enabled on specific posts by setting certain variables in the `[extra]` section of the post's front matter.

- [**KaTeX** support](@/blog/markdown.md#katex) (274 KB) can be enabled by setting `katex = true`.
- [**Comments**](@/blog/comments.md) can be enabled by setting the name of the system `= true` (e.g. `hyvortalk = true`).
- **Footnote backlinks** can be enabled by setting `footnote_backlinks = true`.

Other than that, it's a fast theme with HTML and CSS which works with JavaScript disabled. Just the way (most of) the web should be :-)
