+++
title = "No mandatory JavaScript"
date = 2023-01-06
updated = 2024-08-28
description = "JavaScript is only used when HTML and CSS aren't enough."

[taxonomies]
tags = ["showcase", "tutorial"]

[extra]
social_media_card = "social_cards/blog_javascript.jpg"
+++

This theme has no mandatory JavaScript. Optionally, it can load a minimal amount to add some features that are impossible to achieve with HTML and CSS.

## Globally enabled settings

- [**Search**](@/blog/mastering-tabi-settings/index.md#search). Enabled by setting a default language and `build_search_index = true` on the main section of `config.toml`. (~23KB of JavaScript)

- The **light/dark mode switch** can be enabled by setting `theme_switcher = true` in the `[extra]` section of your `config.toml` (~1KB of JavaScript).

- **E-mail decoding** (~400 bytes). To protect against spambots scraping your e-mail from your website, you can set `encode_plaintext_email = true`. If your site is on a public repository, for extra protection, consider setting your `email` as a base64-encoded string[^1] directly.

## Settings with hierarchical override capability

The following settings can be specified for posts, sections and globally, following the hierarchy of `page > section > config.toml`:

- [**KaTeX support**](@/blog/markdown/index.md#katex). Enabled by setting `katex = true` (274 KB).
- [**Mermaid diagrams**](@/blog/shortcodes/index.md#mermaid-diagrams). Enabled by setting `mermaid = true` (~2.5 MB).
- [**One-click copy of code blocks**](@/blog/markdown/index.md#code-block). Enabled by setting `copy_button = true`. (~700 bytes)
- [**Showing source (path or URL) in code blocks**](@/blog/shortcodes/index.md#show-source-or-path). Enabled by setting `add_src_to_code_block = true`. (~300 bytes)

To specify these settings:

- **Globally**: Add them under the `[extra]` section in your `config.toml` file.
- **For a section**: Add them under the `[extra]` section in the front matter of the section's `_index.md`.
- **For an individual post**: Set the corresponding variables in the `[extra]` section of the post's front matter.

## Settings that can be enabled globally or for individual posts

- [**Comments**](@/blog/comments/index.md). giscus (2 KB), utterances (1 KB), Hyvor Talk (~800 bytes) or Isso (1KB) can be globally enabled by setting `enabled_for_all_posts = true` in the right section of your  `config.toml` (i.e. `[extra.giscus]`, `[extra.utterances]`, `[extra.hyvortalk]` or `[extra.isso]`). To enable comments on individual posts, set the name of the system `= true` (e.g. `hyvortalk = true`) in the post's front matter.

Other than that, it's a fast theme with HTML and CSS which works with JavaScript disabled. Just the way (most of) the web should be :-)

[^1]: To encode your email in base64 you can use [online tools](https://www.base64encode.org/) or, on your terminal, run: `printf 'mail@example.com' | base64`.
