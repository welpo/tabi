# tabi

A fast, lightweight, and modern [Zola](https://getzola.org) theme with multi-language support. It aims to be a personal page and home to blog posts.

See a live preview (and the theme's documentation) [here](https://welpo.github.io/tabi).

> tabi (旅): Journey.

![tabi](https://github.com/welpo/tabi/raw/main/light_dark_screenshot.png)

tabi has a perfect score on Google's Lighthouse audit:

![lighthouse](https://raw.githubusercontent.com/welpo/tabi/main/lighthouse_score.png)

## Features

- [X] Multi-language support.
- [X] Dark and light themes. Defaults to the OS setting, with a switcher in the navigation bar.
- [X] Support for [comments using giscus, utterances, Hyvor Talk, or Isso](https://welpo.github.io/tabi/blog/comments/).
- [X] Perfect Lighthouse score (Performance, Accessibility, Best Practices and SEO).
- [X] [KaTeX](https://katex.org/) support.
- [X] All JavaScript can be [fully disabled](https://welpo.github.io/tabi/blog/javascript/).
- [X] [Customizable skins](https://welpo.github.io/tabi/blog/customise-tabi/).
- [X] [Stylized feed](https://welpo.github.io/tabi/atom.xml).
- [X] [Projects page](https://welpo.github.io/tabi/projects/).
- [X] [Archive page](https://welpo.github.io/tabi/archive/).
- [x] [Table of Contents](https://welpo.github.io/tabi/blog/toc/).
- [x] Tags.
- [x] Social links.
- [X] Responsive design.
- [X] Code syntax highlighting.
- [X] [Customizable secure headers](https://welpo.github.io/tabi/blog/security/).
- [X] [Custom shortcodes](https://welpo.github.io/tabi/blog/shortcodes/).

## Quick start

Once you have installed Zola 0.17.0 or newer:

```bash
git clone https://github.com/welpo/tabi.git
cd tabi
zola serve
```

Open http://127.0.0.1:1111/ in the browser.

## Installation

To add tabi to you existing Zola site:

0. Initialize a Git repository in your project directory (if you haven't already):

```
git init
```

1. Add the theme as a git submodule:

```
git submodule add https://github.com/welpo/tabi.git themes/tabi
```

Or clone the theme into your themes directory:

```
git clone https://github.com/welpo/tabi.git themes/tabi
```

### Required configuration

2. Enable the theme in your `config.toml`:

```
theme = "tabi"
```

3. Set a `title` in your `config.toml`:

```
title = "Your Site Title"
```

4. Create a `content/_index.md` file with the following content:

```
+++
title = "Home"
paginate_by = 5 # Set the number of posts per page
template = "index.html"
+++
```

If you want to serve your blog posts from a different path, such as `blog/`, add a `section_path` in the `[extra]` section of `content/_index.md` (this file will need pagination):

```
[extra]
section_path = "blog/_index.md"
```

5. If you want an introduction section (see screenshot above), add these lines to `content/_index.md`:

```
[extra]
header = {title = "Hello! I'm tabi~", img = "img/main.webp" }
```

The content outside the front matter will be rendered between the header title and the posts listing. In the screenshot above, it's the text that reads "tabi is a fast, lightweight, and modern Zola theme…".

6. If you want a multilingual site, you will need to set up each language. In `config.toml`:

- set the translations for a few strings;
- set the title and taxonomies for each language;
- add the `language_name.{code}` in `[extra]`. This is the text shown in the language switcher.

See [these lines in the provided `config.toml`](https://github.com/welpo/tabi/blob/main/config.toml#L22-L134) for an example.

You will need an `_index.{language_code}.md` per language for each section (e.g. /blog or /projects) that you want to enable in that language.

The same is true for individual posts, which should have the exact same name as the default language, with an extra `.{code}` before the extension (e.g. the Spanish version of `security.md` would be `security.es.md`).

This configuration allows the language switcher to take the user to the translation of the current URL. If a translation doesn't exist, the 404 page will be displayed, with an explanation in each language set in the config.

## Inspiration

This theme was inspired by:
- [shadharon](https://github.com/syedzayyan/shadharon) — tabi started as a fork of [syedzayyan](https://github.com/syedzayyan)'s theme;
- [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog);
- [abridge](https://github.com/Jieiku/abridge);
- [internetVin's blog](https://internetvin.ghost.io).

## Contributing

Please do! Take a look at the [Contributing Guidelines](/CONTRIBUTING.md) to learn more.

## License

The code is available under the [MIT license](./LICENSE).
