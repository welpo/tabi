+++
title = "Table of Contents"
date = 2022-11-01
updated = 2023-08-14
description = "A post showcasing the optional Table of Contents and its options."

[taxonomies]
tags = ["showcase", "markdown", "tutorial"]

[extra]
toc = true
quick_navigation_buttons = true
social_media_card = "img/social_cards/blog_toc.jpg"
+++

## Documentation
### Enabling (and positioning) the Table of Contents

There are two ways to enable the Table of Contents (ToC). If you want it to be right below the header (like in this page) set this variable on the post's front matter:

```toml
[extra]
toc = true
```
If you'd rather show the ToC elsewhere on your post (e.g. after an introduction), you can do so by adding a line with this content wherever you'd like the ToC to appear:

```markdown
<!-- toc -->
```

You can also use the simple `{{/* toc() */}}` shortcode, which will simply write that string for you, effectively inserting the ToC ([Michael Clayton's idea](https://github.com/getzola/zola/issues/584#issuecomment-1546086781)).

This method will render the ToC without the "Table of Contents" header. This allows you to use a different (or no) header for the ToC, or hide it like this:

<details>
    <summary>Hidden ToC</summary>
    <!-- toc -->
</details>

The code to achieve this:

```markdown
<details>
    <summary>Hidden ToC</summary>
    <!-- toc -->
</details>
```

*Note*: If you both set `toc = true` and have `<!-- toc -->` somewhere in your text, you'll get multiple ToCs.

If you set a custom position and a custom header for the ToC, you'll probably want to hide it (see the [section below](#hiding-headers-from-the-toc)) like this:

```markdown,hl_lines=06 11-13
+++
title = "Your Post's Title"
date = 2034-01-11

[extra]
toc_ignore_pattern = "^(Table of Contents)"
+++

Here goes some introductory text.

### Table of Contents

<!-- toc -->

## First content header
```

### Setting a maximum depth

You can set the maximum depth for the ToC by specifying the `toc_levels` variable, which takes an integer between 1 and 4:

```toml
[extra]
toc_levels = 2
```

In this example, only the first two levels of headers would be included in the ToC, regardless of their actual HTML tags (`h1`, `h2`, `h3`, etc.). If you want to include only the main level of headers, set `toc_levels = 1`. The default `toc_levels` value is `3`.

Keep your readers in mind when setting the `toc_levels`. While it can be tempting to include many nested levels for detailed navigation, a shorter and simpler ToC can often be more reader-friendly and less overwhelming. Adjust the depth according to the complexity and length of your content for the best reader experience.

### Hiding headers from the ToC

You might want to hide certain headers. For example, if your article has many Figures or Tables, they might clutter the ToC. You can hide specific headers in the ToC with the `toc_ignore_pattern` variable.

This variable expects a regular expression (regex), as it's using Tera's [matching](https://tera.netlify.app/docs/#matching) test. The `toc_ignore_pattern` is tested against the text of the header, excluding the `#` character(s). For example, for the header `### Further reading`, the text `Further reading` would be checked against.

Here are some example values for `toc_ignore_pattern` along with the headers they can hide:

| `toc_ignore_pattern`             | Excludes headers which…                           |
|----------------------------------|---------------------------------------------------|
| `Table`                          | contain "Table"                                   |
| `^Figure`                        | start with "Figure"                               |
| <code>(?i)(table\|figure)</code> | start with "Table" or "Figure" (case insensitive) |
| `\[Draft\]$`                     | end with "[Draft]".                               |

You can test your regular expression on a site like [regex101](https://regex101.com/r/2dI7U2/1) to ensure it works as expected.

*Note*: "Look-around" capabilities, including look-ahead and look-behind, are not supported.

# Heading 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

## Heading 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
### Heading 3.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Heading 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Heading 4.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

### Heading 3.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Heading 4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Heading 4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

## Heading 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
### Heading 3.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Heading 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Heading 4.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

### Heading 3.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Heading 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Heading 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
