+++
title = "No mandatory JavaScript"
date = 2023-01-06
updated = 2023-08-18
description = "JavaScript is only used when HTML and CSS aren't enough."

[taxonomies]
tags = ["showcase", "tutorial"]

[extra]
footnote_backlinks = true
+++

This theme has no mandatory JavaScript. Optionally, it can load a minimal amount to add some features that are impossible to achieve with HTML and CSS.

## Globally enabled settings

- The **light/dark mode switch** can be enabled by setting `theme_switcher = true` in the `[extra]` section of your `config.toml` (~900 bytes of JavaScript).

- **E-mail decoding** (~400 bytes). To protect against spambots scraping your e-mail from your website, you can set `encode_plaintext_email = true`. If your site is on a public repository, for extra protection, consider setting your `email` as a base64-encoded string[^1] directly.

## Settings that can be enabled globally and for individual posts

The following settings can be enabled globally for all pages or specifically for individual posts:

- [**KaTeX support**](@/blog/markdown.md#katex). Enabled by setting `katex = true` (274 KB).
- [**One-click copy of code blocks**](@/blog/markdown.md#code-block). Enabled by setting `copy_button = true`. (~700 bytes)
- [**Footnote backlinks**](@/blog/markdown.md#1). Enabled by setting `footnote_backlinks = true` (~500 bytes).

To enable these settings globally, add them in the `[extra]` section of your `config.toml` file. To enable for individual posts, set the corresponding variables in the `[extra]` section of the post's front matter.

- [**Comments**](@/blog/comments.md). giscus (2 KB), utterances (1 KB), Hyvor Talk (~800 bytes) or Isso (1KB) can be globally enabled by setting `enabled_for_all_posts = true` in the right section of your  `config.toml` (i.e. `[extra.giscus]`, `[extra.utterances]`, `[extra.hyvortalk]` or `[extra.isso]`). To enable comments on individual posts, set the name of the system `= true` (e.g. `hyvortalk = true`) in the post's front matter.

Other than that, it's a fast theme with HTML and CSS which works with JavaScript disabled. Just the way (most of) the web should be :-)

<hr>

[^1]: To encode your email in base64 you can use [online tools](https://www.base64encode.org/) or, on your terminal, run: `printf 'mail@example.com' | base64`.
