+++
title = "A Complete Guide to Series"
date = 2024-11-08
updated = 2025-02-21
description = "Learn how to organize your posts into sequential series, perfect for tutorials, courses, and multi-part stories."

[taxonomies]
tags = ["showcase", "tutorial", "FAQ", "series"]

[extra]
quick_navigation_buttons = true
toc = true
mermaid = true
social_media_card = "social_cards/es_blog_series.jpg"
+++

A series organizes related posts in a sequential order, similar to chapters in a book. Unlike tags, which simply group related content, series suggest a specific reading order from start to finish.

Posts within a series do not need to be published consecutively; the series feature brings together thematically linked posts in a coherent sequence.

The diagram below illustrates how series posts (3, 5, and 8) exist within the main blog flow while maintaining their own ordered sequence within Series 1.

{% mermaid(full_width=true) %}
flowchart
    subgraph main[BLOG]
        P1[Post 1]
        P2[P2]
        P3[P3]
        P4[P4]
        P5[P5]
        P6[P6]
        P7[P7]
        P8[P8]
        P9[P9]
    end
    subgraph series1[SERIES 1]
        PS1["Series Post 1 (=P3)"]
        PS2["Series Post 2 (=P5)"]
        PS3["Series Post 3 (=P8)"]
    end
    P3 o-.-o PS1
    P5 o-.-o PS2
    P8 o-.-o PS3
{% end %}

## Quick Start

1. Create a directory for your series.
2. Create `_index.md` in the series directory.
3. Set up the `_index.md` front matter:

    ```toml,name=series/_index.md
    title = "Learning Rust"
    template = "series.html"
    sort_by = "slug"
    transparent = true

    [extra]
    series = true
    ```

4. Create your series articles in this directory.

Want more? Keep reading!

## How Do Series Work?

A series is just a section which is handled in a special way by tabi. For more details on sections, see the [Zola documentation](https://www.getzola.org/documentation/content/section/).

Taking the example from the diagram above, the directory structure would be as follow:

```txt
content/
    _index.md
    blog/
        _index.md
        post1/
            index.md
        post2/
            index.md
        post4/
            index.md
        post6/
            index.md
        post7/
            index.md
        post9/
            index.md
        series1/
            _index.md
            post3/
                index.md
            post5/
                index.md
            post8/
                index.md
```

To create a series, you need to:

1. Use the `series.html` template
2. Set `series = true` in the section's `[extra]` configuration
3. Enable `transparent = true` to integrate series posts with the parent blog section

The series main page displays an overview followed by a list of all posts in the series:

{{ dual_theme_image(light_src="blog/series/img/series_light.webp", dark_src="blog/series/img/series_dark.webp" alt="a series", full_width=true) }}

## Jump to Posts

If the content of a series (the Markdown after the front matter in `_index.md`) is over 2000 characters, a "Jump to posts" link appears next to the series title.

{{ dual_theme_image(light_src="blog/series/img/jump_to_series_posts_light.webp", dark_src="blog/series/img/jump_to_series_posts_dark.webp" alt="jump to series posts link", full_width=true) }}

To force the feature on or off, set `show_jump_to_posts` in the `[extra]` section of your series section or in `config.toml`. This setting follows [the hierarchy](@/blog/mastering-tabi-settings/index.md#settings-hierarchy).

## Series Pages and Order

All pages in the series section will be a series page. The series pages will be ordered as per the series section `sort_by`.

While series maintain their own internal order, they remain independent from the main section's (e.g. `blog/`) chronological flow thanks to the `transparent` setting.

### Sorting Options

Choose from these sorting methods, each with its own advantages:

{% wide_container() %}

`sort_by` | pros                                                                                                                                      | cons
---------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 `slug`    | The series pages order is made explicit in the path (e.g. `example.com/blog/series1/01-series-post-one`).                        | Each series page must be prefixed accordingly.
 `weight`  | The series pages order is easy to set up transparently.<br>First series post has weight `1`, second series post has weight `2` and so on. | Each series page must have its weight set accordingly.
 `date`    | The series pages order can be configured once in the series section configuration. No need to do anything on each series page.            | The series pages order has to be reversed because the first page is usually the oldest. This can only be achieved by paginating the series section (`paginate_by = 9999`) and reversing its order (`paginate_reversed = true`).

{% end %}

{{ admonition(type="danger", title="Zola version to sort by date", text="In order to properly reverse dates, Zola v0.19.3+ (unreleased) is required so that pagination information is available through the `get_section` function. Anything relying on the series pages order won't be correct in a series page otherwise (e.g. previous/next series page, ordered and unordered list…) See [Zola PR #2653](https://github.com/getzola/zola/pull/2653).") }}

### Page Indexing

Pages in a series are indexed starting from 1, following their `sort_by` order. To reverse the indexing (making the first page have the highest index instead), add this setting to `_index.md` or `config.toml`:

```toml
[extra]
post_listing_index_reversed = true  # Defaults to false if unset.
```

{{ dual_theme_image(light_src="blog/series/img/series_reversed_light.webp", dark_src="blog/series/img/series_reversed_dark.webp" alt="a series with indexes reversed", full_width=true) }}

This setting follows [the hierarchy](@/blog/mastering-tabi-settings/index.md#settings-hierarchy).

## Intro and Outro Templates

Series articles can have automatic introduction and conclusion sections. These are configured in your series' `_index.md`. A basic example:

```toml,name=series/_index.md
[extra.series_intro_templates]
default = "This article is part of the $SERIES_HTML_LINK series."

[extra.series_outro_templates]
default = "Thanks for reading part $SERIES_PAGE_INDEX of $SERIES_HTML_LINK!"
```

The intro and outro sections each have their own CSS classes (`series-page-intro` and `series-page-outro`), allowing you to customize their appearance through [custom CSS](@/blog/mastering-tabi-settings/index.md#custom-css).

### Template Types

The series system uses different templates based on an article's position in the series:

- `next_only` - Used for the first article (has next article but no previous)
- `middle` - Used for articles with both previous and next articles
- `prev_only` - Used for the last article (has previous article but no next)
- `default` - Fallback template used when a specific position template isn't defined

The system automatically determines which template to use based on the article's position. The templates are defined in the series configuration (`_index.md`), as `extra.series_intro_templates` and `extra.series_outro_templates`.:

```toml,name=series/_index.md
[extra.series_intro_templates]
next_only = "Welcome to part 1! Next up: $NEXT_HTML_LINK"
middle = "Previous: $PREV_HTML_LINK | Next: $NEXT_HTML_LINK"
prev_only = "The final chapter! Previously: $PREV_HTML_LINK"
default = "Part $SERIES_PAGE_INDEX of $SERIES_PAGES_NUMBER"
```

All templates are optional. Template selection follows a priority system:

1. If a position-specific template exists (`next_only`, `middle`, or `prev_only`), it will be used
2. Otherwise, the `default` template is used
3. If no templates are defined at all, no series information will be displayed

See the [template example](#template-example) for a more elaborate example.

### Placement in Content

By default:

- Series introductions appear at the start of your article
- Series outro appears at the end (before footnotes, if any)

You can control exactly where these appear using `<!-- series_intro -->` and `<!-- series_outro -->` in your Markdown:

```markdown
This paragraph appears before the series introduction.

<!-- series_intro -->

Main content of the article.

<!-- series_outro -->

## Learning Resources

Extra content…

[^1]: Footnotes will always appear at the end.
```

## Variables

Series templates use a flexible variable system that lets you:

1. Reference series information (title, links)
2. Add navigation between articles
3. Show progress indicators
4. Include custom information using your own variables

Variables are placeholders starting with `$` that get replaced with actual content when your site builds. For example, `$SERIES_HTML_LINK` becomes a clickable link to your series index page.

There are three types of variables:

- [**Basic Series Variables**](#basic-series-variables): General information about the series
- [**Navigation Variables**](#navigation-variables): Links to previous/next articles
- [**Custom Variables**](#custom-variables): Your own placeholders for additional information

### Basic Series Variables

{% wide_container() %}

| Variable | Availability | Returns | Description | Example Usage | Example Output |
|----------|-------------|---------|-------------|---------------|----------------|
| `$SERIES_TITLE` | Always | Text | Plain text title of the series | `Part of $SERIES_TITLE` | Part of Learn Rust |
| `$SERIES_PERMALINK` | Always | Text | URL to series index | `[See all posts]($SERIES_PERMALINK)` | [See all posts](/series/learn-rust) |
| `$SERIES_HTML_LINK` | Always | HTML | Ready-to-use link to series | `Welcome to $SERIES_HTML_LINK!` | Welcome to <a href="/series/learn-rust">Learn Rust</a>! |
| `$SERIES_PAGES_NUMBER` | Always | Number | Total articles in series | `A $SERIES_PAGES_NUMBER part series` | A 5 part series |
| `$SERIES_PAGE_INDEX` | Always | Number | Current article's position | `Part $SERIES_PAGE_INDEX of $SERIES_PAGES_NUMBER` | Part 3 of 5 |
| `$SERIES_PAGES_OLIST` | Always | HTML | Ordered list of all articles | `Articles in series: $SERIES_PAGES_OLIST` | Articles in series: <ol><li>Current article</li><li><a href="...">Other articles</a></li></ol> |
| `$SERIES_PAGES_ULIST` | Always | HTML | Unordered list of all articles | `Articles in series: $SERIES_PAGES_ULIST` | Articles in series: <ul><li>Current article</li><li><a href="...">Other articles</a></li></ul> |

{% end %}

{{ admonition(type="tip", title="TIP: Custom text with permalinks", text='Markdown links like `[text]($SERIES_PERMALINK)` will be marked (and [styled](@/blog/mastering-tabi-settings/index.md#external-link-indicator)) as external. If you need custom text and want to avoid external styling, use HTML: `<a href=\"$SERIES_PERMALINK\">your text</a>`.') }}

### Navigation Variables

{% wide_container() %}

| Variable | Availability | Returns | Description | Example Usage | Example Output |
|----------|-------------|---------|-------------|---------------|----------------|
| `$PREV_TITLE` | Previous exists | Text | Previous article's title | `Previously: $PREV_TITLE` | Previously: Setting Up Your Environment |
| `$PREV_PERMALINK` | Previous exists | Text | URL to previous article | `[← Back]($PREV_PERMALINK)` | [← Back](/series/learn-rust/setup) |
| `$PREV_HTML_LINK` | Previous exists | HTML | Ready-to-use link to previous | `Read $PREV_HTML_LINK first` | Read <a href="/series/learn-rust/setup">Setting Up Your Environment</a> first |
| `$PREV_DESCRIPTION` | Previous exists | Text | Description of previous article | `Recap: $PREV_DESCRIPTION` | Recap: Setting up Rust |
| `$NEXT_TITLE` | Next exists | Text | Next article's title | `Next up: $NEXT_TITLE` | Next up: Advanced Patterns |
| `$NEXT_PERMALINK` | Next exists | Text | URL to next article | `[Continue →]($NEXT_PERMALINK)` | [Continue →](/series/learn-rust/patterns) |
| `$NEXT_HTML_LINK` | Next exists | HTML | Ready-to-use link to next | `Continue with $NEXT_HTML_LINK` | Continue with <a href="/series/learn-rust/patterns">Advanced Patterns</a> |
| `$NEXT_DESCRIPTION` | Next exists | Text | Description of next article | `Coming up: $NEXT_DESCRIPTION` | Coming up: Learn about Rust's advanced pattern matching features |

{% end %}

### First Article Reference

{% wide_container() %}

| Variable | Availability | Returns | Description | Example Usage | Example Output |
|----------|-------------|---------|-------------|---------------|----------------|
| `$FIRST_TITLE` | Always | Text | First article's title | `Start with $FIRST_TITLE` | Start with Introduction to Rust |
| `$FIRST_HTML_LINK` | Always | HTML | Ready-to-use link to first article | `Begin at $FIRST_HTML_LINK` | Begin at <a href="/series/learn-rust/intro">Introduction to Rust</a> |

{% end %}

### Template Example

{{ admonition(type="tip", title="HTML vs text variables", text="Use HTML variables (ending in `_HTML_LINK`) when you want ready-made links. Use text variables (ending in `_TITLE` or `_PERMALINK`) when you want more control over the formatting.") }}

```toml,name=series/_index.md
# Introduction.
[extra.series_intro_templates]
next_only = """
Welcome to $SERIES_HTML_LINK! This $SERIES_PAGES_NUMBER-part series will teach you Rust from scratch.

Up next: $NEXT_HTML_LINK - $NEXT_DESCRIPTION
"""

middle = """
📚 Part $SERIES_PAGE_INDEX of $SERIES_PAGES_NUMBER in $SERIES_HTML_LINK

Previously: $PREV_HTML_LINK
Next up: $NEXT_HTML_LINK
"""

prev_only = """
Welcome to the final part of $SERIES_HTML_LINK!
New here? Start with $FIRST_HTML_LINK to build a strong foundation.

Previously: $PREV_HTML_LINK
"""

# Fallback template.
default = "This article is part of the $SERIES_HTML_LINK series."

# Outro.
[extra.series_outro_templates]
next_only = """
Thanks for reading! 🙌

Continue your journey with $NEXT_HTML_LINK, where $NEXT_DESCRIPTION
Or check out the complete [$SERIES_TITLE]($SERIES_PERMALINK) series outline.
"""

middle = """
---
📝 Series Navigation

- Previous: $PREV_HTML_LINK
- Next: $NEXT_HTML_LINK
- [Series Overview]($SERIES_PERMALINK)
"""

prev_only = """
🎉 Congratulations! You've completed $SERIES_HTML_LINK.

Want to review? Here's where we started: $FIRST_HTML_LINK
Or check what we just covered in $PREV_HTML_LINK.
"""

# Fallback.
default = """
---
This article is part $SERIES_PAGE_INDEX of $SERIES_PAGES_NUMBER in $SERIES_HTML_LINK.
"""
```

### Custom Variables

Series templates support custom variables for additional information you want to include across your series. The process takes two steps:

1. First, define your **placeholders** in your series configuration (`_index.md`):

```toml,name=series/_index.md
[extra]
series = true
series_template_placeholders = ["$POSITION", "$TOPIC", "$DIFFICULTY"]
```

2. Then, in each series article, provide the values for these placeholders in `series_template_variables`:

```toml,name=series/article.md
[extra.series_template_variables]
position = "first"
topic = "Variables and Types"
difficulty = "Beginner"
```

### Using Custom Variables

You can use your custom variables in any template, alongside the built-in variables:

```toml,name=series/_index.md
[extra.series_intro_templates]
default = """
This is the $POSITION article in $SERIES_HTML_LINK.
Today's topic: $TOPIC
Difficulty level: $DIFFICULTY
"""
```

{{ admonition(type="warning", text="While placeholders are defined with uppercase (`$POSITION`), the variable names in `series_template_variables` must be lowercase (`position`).") }}

### Example with Custom Variables

```toml,name=series/_index.md
# In the series configuration.
[extra]
series = true
series_template_placeholders = ["$LEARNING_TIME", "$KEY_CONCEPTS"]

series_intro_templates.default = """
📚 Part $SERIES_PAGE_INDEX of $SERIES_PAGES_NUMBER
⏱️ Estimated time: $LEARNING_TIME
🔑 Key concepts: $KEY_CONCEPTS
"""
```

```toml,name=series/02-learning-rust/index.md
# In an article of the series.
[extra.series_template_variables]
learning_time = "30 minutes"
key_concepts = "Functions, Error Handling, Pattern Matching"
```

This will output:

```txt
📚 Part 2 of 5
⏱️ Estimated time: 30 minutes
🔑 Key concepts: Functions, Error Handling, Pattern Matching
```

{{ admonition(type="warning", title="Missing Variables", text="If you use a placeholder in your templates but don't provide its value in `series_template_variables`, the build will fail with an error listing the missing variables.") }}
