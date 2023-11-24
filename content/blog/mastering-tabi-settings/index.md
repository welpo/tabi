+++
title = "Mastering tabi Settings: A Comprehensive Guide"
date = 2023-09-18
updated = 2023-11-24
description = "Discover the many ways you can customise your tabi site."

[taxonomies]
tags = ["showcase", "tutorial", "FAQ"]

[extra]
giscus = true
footnote_backlinks = true
quick_navigation_buttons = true
social_media_card = "social_cards/blog_mastering_tabi_settings.jpg"
+++

This aims to be a comprehensive guide to every setting in tabi. If you have any questions, feel free to ask in the [comments below](#comments) or [open an issue on GitHub](https://github.com/welpo/tabi/issues/new).

<details>
    <summary><b>Table of Contents</b></summary>
    <!-- toc -->
</details>

## Settings Hierarchy

tabi has a hierarchy that allows you to customise your site at different levels. The hierarchy (from low to high priority) is as follows:

1. **Global settings**: These are the settings that apply to your entire site. They are set in `config.toml`.
2. **Section settings**: These are the settings that apply to a section of your site (e.g.`/blog` or `/projects`). They are set in the front matter of the `_index.md` file of the section.
3. **Page settings**: These are the settings that apply to a single page. They are set in the front matter of the page.

In all cases, tabi's settings are set in the `[extra]` section.

For settings which follow this hierarchy, the value set on a page overrides the value for a section, which overrides the global value. In short: the more specific the setting, the higher priority it has, or `page > section > config.toml`.

---

## Multilingual Support

tabi offers comprehensive multilingual support for your Zola site, from setting a default language to adding as many as you wish. Refer to the [multilingual FAQ](blog/faq-languages/) for more information.

---

## Appearance

### Home Page

The [main page](/) of this demo has a header with an image, a title and description:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/header_light.webp", dark_src="blog/mastering-tabi-settings/img/header_dark.webp", alt="Main page header") }}

To set the image and title, you can use the `header` variable in the front matter of the section's `_index.md` file. For example:

```toml
[extra]
header = {title = "Hello! I'm tabi~", img = "img/main.webp", img_alt = "Óscar Fernández, the theme's author" }
```

The description is regular Markdown content, set outside the front matter.

If you'd like to show posts on the main page, you first need to decide whether their path will be `/` or something like `/blog`.

If you want to serve the posts from `/`, you need to set `paginate_by = 5` in the front matter of your `_index.md` file. **Note**: this is not in the `[extra]` section, but in the main front matter. Example:

```toml
sort_by = "date"
template = "section.html"
paginate_by = 5

[extra]
header = {title = "Hello! I'm tabi~", img = "img/main.webp", img_alt = "Óscar Fernández, the theme's author" }
```

If you'd rather serve the posts from `/blog`, you can set `section_path = "/blog"` in the `[extra]` section. This is the setup or this demo:

```toml
title = "Latest posts"
sort_by = "date"
template = "section.html"

[extra]
header = {title = "Hello! I'm tabi~", img = "img/main.webp", img_alt = "Óscar Fernández, the theme's author" }
section_path = "blog/_index.md"
max_posts = 4
```

Notice how if you set `section_path`, you don't need to set `paginate_by`. You can set `max_posts` to the determine the number of posts you want to show on the main page.

The `title` is the header that appears above the posts.

### Light and Dark Mode Switcher

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ✅          |

The light and dark mode switcher (the moon/sun icon on the top right) can be enabled by setting `theme_switcher = true` in  `config.toml`.

### Default (Light/Dark) Mode

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

The default theme can be specified with the `default_theme` variable, which accepts either `"dark"` or `"light"`. If you don't set it, the default theme will be the one set in the user's browser.

### Custom Skins

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

tabi's skins change the main colour of the site. You can set the skin in `config.toml` with `skin = "skin_name"`. For example, `skin = "lavender"` looks like this (click to switch between light and dark mode):

{{ image_toggler(default_src="blog/customise-tabi/skins/lavender_light.webp", toggled_src="blog/customise-tabi/skins/lavender_dark.webp", default_alt="lavender skin in light mode", toggled_alt="lavender skin in dark mode", full_width=true) }}

Explore the available skins and learn how to create your own reading [the documentation](/blog/customise-tabi/#skins).

### Custom CSS

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ❌    |      ✅       |         ❌        |         ❌          |

You can load custom CSS for the entire site or on specific pages with `stylesheets`, which takes a list of paths to CSS files. For example:

```toml
stylesheets = ["css/custom.css", "css/another.css"]
```

### Browser Theme Colour

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

The browser theme colour is the colour that appears in the browser's tab bar:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/browser_theme_colour_light.webp", dark_src="blog/mastering-tabi-settings/img/browser_theme_colour_dark.webp" alt="tabi with a coloured browser theme") }}

You can set it in `config.toml` like `browser_theme_colour = "#087e96"`. If you'd like different colours for dark/light mode, you can set an array of colours with `browser_theme_colour = ["#ffffff", "#000000"]`. The first colour will be used for light mode, the second for dark mode.

This variable accepts any valid CSS colour, so you can use keywords (e.g. `blue`), hex codes (e.g. `#087e96`) or RGB/HSL values (e.g. `rgb(8, 126, 150)`).

---

## Git Repository Integration

| Page  | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:-----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❓   |   ❓    |      ✅       |         ❓        |         ❌          |

❓: `show_remote_source` does follow [the hierarchy](#settings-hierarchy) and can be set on a page, section or globally. The rest of the settings can only be set in `config.toml`.

These settings allow you to link your tabi website with a public Git repository in GitHub, GitLab, Gitea or Codeberg. Example settings:

```toml
remote_repository_url = "https://github.com/welpo/tabi"
remote_repository_git_platform = "auto"
remote_repository_branch = "main"
show_remote_changes = true
show_remote_source = true
```

This enables two features:

1. `show_remote_source = true` adds a link to the source code of your site (your `remote_repository_url`) will be displayed on the footer:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/site_source_light.webp", dark_src="blog/mastering-tabi-settings/img/site_source_dark.webp" alt="Page footer, showing a 'Site source' link") }}

1. `show_remote_changes = true` adds a "See changes ↗" link to the commit history of updated posts, next to the last updated date [^1]:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/see_changes_light.webp", dark_src="blog/mastering-tabi-settings/img/see_changes_dark.webp" alt="Post title and metadata, showing a 'See changes' link") }}

Clicking on this link will take you to the commit history of the post, where you can see the changes made to it:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/commit_history_light.webp", dark_src="blog/mastering-tabi-settings/img/commit_history_dark.webp" alt="Commit history of a post", full_width=true) }}

---

## Pages

### Projects

tabi has a built-in projects template. To enable it, you can create a directory in `content/projects/`. There, you can create a `_index.md` file with the following front matter:

```toml
title = "Projects"
sort_by = "weight"
template = "cards.html"
insert_anchor_links = "left"

[extra]
show_reading_time = false
quick_navigation_buttons = true
```

- The `title` is the title of the page.
- `sort_by` determines how the projects are sorted. You can sort by "date", "update_date", "title", "title_bytes", "weight", "slug" or "none".
- `template = "cards.html"` sets the template to render the projects page.
- `insert_anchor_links = "left"` adds anchor links to headers.
- `show_reading_time = false` hides the [reading time](#reading-time).
- `quick_navigation_buttons = true` shows the [quick navigation buttons](#quick-navigation-buttons) are shown.

Alongside the `_index.md` file, you can create a file for each project. For example, this is the front matter for the [tabi project page](/projects/tabi/):

```toml
title = "tabi"
description = "A fast, lightweight, and modern Zola theme with multi-language support."
weight = 1

[extra]
local_image = "img/tabi.webp"
```

- `title` is the title of the project.
- `description` is the description of the project.
- `weight` determines the order in which the projects are shown. The lower the weight, the higher the project will appear.
- `local_image` is the path to the image of the project. This image is shown on the projects page.

When a user clicks on the image or title of a project, they will be taken to the project's page. If you'd rather have users go to an external link, you can set `link_to = "https://example.com` in the `[extra]` section of the project's `.md` file.

The individual project's page is rendered with the default template, unless you set another one, e.g. `template = "info-page.html"`.

### Archive

Adding an archive page is similar to adding a projects page. You can create a directory in `content/archive/`. There, you can create a `_index.md` file with the following front matter:

```toml
title = "Archive"
template = "archive.html"
```

By default, the archive will list posts located in `/blog/`. If you'd like to change this, you can set `section_path = "/another-path/"` in the `[extra]` section of the `_index.md` file. Make sure to include the trailing slash.

### Tags

tabi has built-in support for tags. To enable them, simply add the taxonomy to your `config.toml`:

```toml
taxonomies = [{name = "tags", feed = true}]
```

You can then add tags to your posts by adding them to the `tags` array in the front matter of your post. For example:

```toml,hl_lines=05-06
title = "Bears, Beets, Battlestar Galactica: The Dwight Schrute Guide to Life"
date = 2007-04-26
description = "Lessons learned from beet farming and paper sales."

[taxonomies]
tags = ["personal", "beets"]
```

### About Page

If you'd like to have a non-article page for an "About" section, a "Contact" or "Copyright" page, etc., you can use the `info-page.html` template.

First, create a directory inside `content/` with any name you like. For example, `content/pages/`. Then, create a `_index.md` file inside that directory. The file should look like this:

```markdown
+++
render = false
insert_anchor_links = "left"
+++
```

- `render = false` tells Zola not to render the section.
- `insert_anchor_links = "left"` adds anchor links to headers. This is optional.

Inside the directory, you can create any number of `.md` files.

In this demo, the [about](about/) page uses the `info-page.html` template. The front matter is as follows:

```toml
title = "About"
template = "info-page.html"
path = "about"
```

Notice how the `path` is set to `about`. Zola will place the page at `$base_url/about/`. If you'd like to have the page available at `/contact/`, you'd set `path = "contact"`.

---

## SEO

tabi takes care of most of the SEO for you (like Open Graph protocol tags, description, color-scheme…), but there are a few things you can customise.

### Favicon

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

The favicon is the small icon that appears in the browser tab. You can set it in `config.toml` with `favicon = "img/favicon.png"`.

### Emoji Favicon

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

You can also set an emoji as your favicon with `favicon_emoji`. For example, `favicon_emoji = "👾"`.

Note: Some browsers don't support emoji favicons. See the compatibility table in [caniuse](https://caniuse.com/link-icon-svg).

### Canonical URL

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ✅    |      ✅       |         ❌        |         ❌          |

The canonical URL is a way to indicate to search engines what the preferred URL is for your website content. This is useful for SEO and avoiding duplicate content issues.

By default, the canonical URL is the URL of the page you're on. However, you can override this by setting `canonical_url` in the front matter of your page or section.

If you have a site with an identical structure and matching content, you can set `base_canonical_url` in your `config.toml`. The canonical URL will be crafted by replacing the `$base_url` of the current URL with the `$base_canonical_url` you set.

For example, if you set `base_canonical_url = "https://example.com"`, the canonical URL of the page `$base_url/blog/post1` will be `https://example.com/blog/post1`. This is useful if you have a site with multiple domains that share the same content.

**Note**: to ensure that the canonical URL is correct, it's probably best to set `canonical_url` individually for each page.

### Social media cards

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ✅    |      ✅       |         ✅        |         ❌          |

Social media cards are the images that are displayed when you share a link on social media:

![A screenshot of WhatsApp showing a link with a social media card](/blog/mastering-tabi-settings/img/with_social_media_card.webp)

You can set the social media image with `social_media_card = "img/social_media_card.png"`.

You can specify both relative and absolute paths.

- **Relative Path**: Place the image in the same folder as your blog post and specify its name. For example, `social_media_card = "relative_image.png"`.

- **Absolute Path**: Put the image in a specific folder and specify the path from the root. For example, `social_media_card = "/img/absolute_image.png"`.

If both relative and absolute paths are valid, the relative path will take precedence.

Since it follows the [hierarchy](#settings-hierarchy), if it's not set on a page, but is set on a section, the section's image will be used. If it's not set on a page or section, but is set in `config.toml`, the global image will be used.

**Protip**: automate their creation with a [script](https://github.com/welpo/osc.garden/blob/main/static/code/social-cards-zola): [From Bashful to Social Butterfly: Automating Link Previews for Zola Sites](https://osc.garden/blog/automating-social-media-cards-zola/).

---

## Navigation

### Navigation Bar

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

The navigation bar is the bar at the top of the page that contains the site title and the navigation menu. You can customise which items appear by setting `menu` in `config.toml`. For example:

```toml
menu = [
    { name = "blog", url = "blog", trailing_slash = true },
    { name = "archive", url = "archive", trailing_slash = true },
    { name = "tags", url = "tags", trailing_slash = true },
    { name = "projects", url = "projects", trailing_slash = true },
    { name = "about", url = "about", trailing_slash = true },
]
```

### Quick Navigation Buttons

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ✅    |      ✅       |         ✅        |         ❌          |

Quick navigation buttons are the buttons that appear on the bottom right of the screen. You should see them on this page, if you're not on mobile. They look like this:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/quick_navigation_buttons_light.webp", dark_src="blog/mastering-tabi-settings/img/quick_navigation_buttons_dark.webp" alt="Quick navigation buttons") }}

The buttons allow you to quickly navigate through an expandable mini-table of contents, to the comment section (if enabled), as well as to the top of the page.

To enable them, set `quick_navigation_buttons = true`.

### Table of Contents

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ✅    |      ✅       |         ✅        |         ❌          |

Enable the table of contents right below the post's title and metadata with `toc = true`.

Read more about the table of contents and how to customise it by reading [the docs](/blog/toc/).

### Footnote Backlinks

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ✅    |      ✅       |         ✅        |         ✅          |

Setting `footnote_backlinks = true` will add backlinks to the footnotes of your posts, like this:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/footnote_backlinks_light.webp", dark_src="blog/mastering-tabi-settings/img/footnote_backlinks_dark.webp" alt="Footnote backlinks", full_width=true) }}

When you click on a backlink (the arrow ↩), it will take you back to the text where the footnote was referenced.

---

## Usability

### Copy Button on Code Blocks

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ✅    |      ✅       |         ✅        |         ✅          |

Setting `copy_button = true` will add a small copy button to the top right of code blocks, like this:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/copy_button_on_code_blocks_light.webp", dark_src="blog/mastering-tabi-settings/img/copy_button_on_code_blocks_dark.webp" alt="Copy button on code blocks", full_width=true) }}

### KaTeX Support

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ✅    |      ✅       |         ✅        |         ✅          |

KaTeX is a fast, easy-to-use JavaScript library for TeX math rendering on the web. You can enable it with `katex = true`. See what it looks like in tabi [here](/blog/markdown/#katex).

### Custom Font Subset

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

Custom fonts cause flashing text in Firefox. To amend this, tabi loads a subset of glyphs for the header. Since this (slightly) increases the initial load time, it's a good idea to try and minimise the size of this subset.

You can create a custom subset tailored to your site, save it as `static/custom_subset.css`, and have it load with `custom_subset = true`.

For more information, including instructions on how to create a custom subset, see the [docs](/blog/custom-font-subset/).

### Full Content in Feed

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

By default, the Atom feed only contains the summary/description of your posts. You can include the entire posts' content by setting `full_content_in_feed = true` in `config.toml`.

### Comments {#adding-comments}

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ❌    |      ✅       |         ❌        |         ✅          |

To enable comments on an individual page, set the name of the system you want to enable to `true` in the front matter. For example, `utterances = true`.

To enable a system globally (on all pages), set `enabled_for_all_posts = true` in the correct section of your `config.toml` (e.g. inside `[extra.giscus]`).

If you have enabled a system globally, but want to disable it on a specific page, set the name of the system to `false` in the front matter of that page. For example, `utterances = false`.

Read [the docs](/blog/comments/) for more information on the available systems and their setup.

### Analytics

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ✅          |

tabi supports 3 privacy-friendly analytics systems: [Plausible](https://plausible.io/), [GoatCounter](https://www.goatcounter.com/) and [Umami](https://umami.is/).

You can set them up in the `[extra.analytics]` section of your `config.toml`.

- `service`: Specifies which analytics service to use. Supported options are `"goatcounter"`, `"umami"`, and `"plausible"`.

- `id`: The unique identifier for your analytics service. This varies based on the service:
  - For GoatCounter, it's the code chosen during signup. Self-hosted instances don't require this field.
  - For Umami, it's the website ID.
  - For Plausible, it's the domain name.

- `self_hosted_url`: Optional. Use this field to specify the URL for self-hosted instances of your chosen analytics service. The base URL differs based on your specific setup. Some examples:
  - For GoatCounter: `"https://stats.example.com"`
  - For Umami: `"https://umami.example.com"`
  - For Plausible: `"https://plausible.example.com"`

An example configuration for non-self-hosted GoatCounter would look like this:

```toml
[extra.analytics]
service = "goatcounter"
id = "tabi"
self_hosted_url = ""
```

---

## Footer

### Social Media Icons

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

You can add social media icons to the footer with `socials`, which takes a list of social media objects. For example:

```toml
socials = [
    { name = "github", url = "https://github.com/welpo/", icon = "github" },
    { name = "soundcloud", url = "https://soundcloud.com/oskerwyld", icon = "soundcloud" },
    { name = "instagram", url = "https://instagram.com/oskerwyld", icon = "instagram" },
    { name = "youtube", url = "https://youtube.com/@oskerwyld", icon = "youtube" },
    { name = "spotify", url = "https://open.spotify.com/artist/5Hv2bYBhMp1lUHFri06xkE", icon = "spotify" },
]
```

The icons are from Font Awesome. To see a list of all the available icons, take a look at the [`static/social_icons` directory](https://github.com/welpo/tabi/tree/main/static/social_icons).

### Feed Icon

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

You can add a link to your RSS/Atom feed to the footer with `feed_icon = true`.

### Footer Menu

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

You can add a menu to the footer with `footer_menu`, which takes a list of menu items. For example:

```toml
footer_menu = [
    {url = "about", name = "about", trailing_slash = true},
    {url = "privacy", name = "privacy", trailing_slash = true},
    {url = "sitemap.xml", name = "sitemap", trailing_slash = false},
    {url = "https://example.com", name = "external link", trailing_slash = true},
]
```

### Copyright

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

To add a copyright notice to your site, set `copyright`:

```toml
copyright = "© $CURRENT_YEAR Your Name $SEPARATOR Unless otherwise noted, the content in this website is available under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license."
```

You can use the following variables:

- `$TITLE` will be replaced by `title` variable set in `config.toml`
- `$CURRENT_YEAR` will be replaced by the current year
- `$AUTHOR` will be replaced by the `author` variable
- `$SEPARATOR` will be replaced by the [`separator` variable](#custom-separator)

Markdown is rendered. The example above:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/copyright_light.webp", dark_src="blog/mastering-tabi-settings/img/copyright_dark.webp" alt="Copyright section", full_width=true) }}

If you have a multilingual site and want to set different copyright notices for different languages, you can add the corresponding translation to `copyright_translations.{language_code}` for each language you want to support. The language code must match [tabi's language code](https://welpo.github.io/tabi/blog/faq-languages/#what-are-these-two-letter-codes). For example, for Spanish:

```toml
copyright_translations.es = "© $CURRENT_YEAR $AUTHOR $SEPARATOR A menos que se indique lo contrario, el contenido de esta web está disponible bajo la licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)."
```

---

## Metadata

### Reading Time

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ✅    |      ✅       |         ✅        |         ❌          |

You can enable or hide the reading time of a post with `show_reading_time`. If you set it to `true`, it will be displayed in the post's metadata, like this:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/see_changes_light.webp", dark_src="blog/mastering-tabi-settings/img/see_changes_dark.webp" alt="Post title and metadata, showing a 'See changes' link") }}

Since it follows [the hierarchy](#settings-hierarchy), you can enable it or hide it for specific pages or sections. For example, this demo sets `show_reading_time = false` in the [projects](https://welpo.github.io/tabi/projects/) section's [`_index.md`](https://github.com/welpo/tabi/blob/main/content/projects/_index.md?plain=1), so their individual posts don't show the reading time.

### Date Format

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

tabi has two date formats: `long_date_format` and `short_date_format`. The short format is used in a post's metadata, while the long format is used when listing posts (i.e. on the [blog section](/blog/) or the [main page](/)).

The default is "6th July 2049" for both formats in English. For other languages, the defaut is `"%d %B %Y"` for the long format and `"%-d %b %Y"` for the short format.

In Zola, time formatting syntax is inspired fom strftime. A full reference is available in the [chrono docs](https://docs.rs/chrono/0.4.31/chrono/format/strftime/index.html).

### Custom Separator

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

The separator appears in various places: in the title tag, between the metadata of a post…

The default separator is a bullet point (`•`), but you can change by setting something like `separator = "|"`.

### Title Tag Order

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

The title tag is the text that appears in the browser tab. By default, it's the site title followed by the page title. For example, the title tag of the blog section is "~/tabi • Blog".

By setting `invert_title_order = true`, you can invert the order of the site title and page title in the browser tab. For example, the title tag of the blog section would become "Blog • ~/tabi".

---

## Security

### Encoded Email

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ✅          |

To protect your email address from spambots, you can encode it in the footer. You can do this by setting `email` to a base64 encoded version of your email address[^2]. For example, `email = "bWFpbEBleGFtcGxlLmNvbQ=="` is the base64 encoded version of "mail@example.com".

If you don't want to encode your email yourself, tabi can encode it for you if you set `encode_plaintext_email = true`. This allows you to set a plaintext email on the config. Note that this only protects your email address on your site, not in public repositories.

If the email is encoded (either by you or by tabi), users with JavaScript disabled will not see the email icon.

### CSP (Content Security Policy)

| Page | Section | `config.toml` | Follows Hierarchy | Requires JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ❌  |   ❌    |      ✅       |         ❌        |         ❌          |

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement to distribution of malware.

tabi has a default CSP that allows for remote images and videos, as well as YouTube and Vimeo embeds. You can customise it with `allowed_domains`, which takes a list of CSP directives. This is the default CSP:

```toml
allowed_domains = [
    { directive = "font-src", domains = ["'self'", "data:"] },
    { directive = "img-src", domains = ["'self'", "https://*", "data:"] },
    { directive = "script-src", domains = ["'self'"] },
    { directive = "style-src", domains = ["'self'"] },
    { directive = "frame-src", domains = ["player.vimeo.com", "https://www.youtube-nocookie.com"] },
]
```

See the [CSP documentation page](/blog/security/) for more information.

---

[^1]: If you're using a remote Git repository, you might want to automate the process of updating the `updated` field. Here's a guide for that: [Zola Git Pre-Commit Hook: Updating Post Dates](https://osc.garden/blog/zola-date-git-hook/).

[^2]: To encode your email in base64 you can use [online tools](https://www.base64encode.org/) or, on your terminal, run: `printf 'mail@example.com' | base64`.
