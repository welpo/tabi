+++
title = "How to deal with series"
date = 2023-09-13
updated = 2024-10-19
description = "tabi is able to deals with series to better organize your posts."

[taxonomies]
tags = ["showcase", "tutorial", "FAQ"]

[extra]
quick_navigation_buttons = true
mermaid=true
#social_media_card = "social_cards/blog_series.jpg"
+++

A series of posts is a succession of posts linked with each others, like a story.

It is different from just tags in the sense that a series is ordered, a bit like a book.
You should start reading the first post of the series then the second and so on until the end.

Series' posts might not be consecutive in the normal flow of all the posts of the blog.
This is exactly the point of the feature: bring together, in a cohesive way, posts which would be distinct otherwise.
{% mermaid() %}
flowchart
    subgraph main[BLOG]
        P1[Post 1]
        P2[Post 2]
        P3[Post 3]
        P4[Post 4]
        P5[Post 5]
        P6[Post 6]
        P7[Post 7]
        P8[Post 8]
        P9[Post 9]
    end
    subgraph series1[SERIES 1]
        PS1["Series Post 1 (Post 3)"]
        PS2["Series Post 2 (Post 5)"]
        PS3["Series Post 3 (Post 8)"]
    end
    P3 o-.-o PS1
    P5 o-.-o PS2
    P8 o-.-o PS3
{% end %}

## Quick Start

1. Create a directory for your series.
2. Create `_index.md` in the series directory.
3. Set up the `_index.md` front matter:

    {{ add_src_to_code_block(src="series/_index.md") }}

    ```toml
    title = "Learning Rust"
    template = "series.html"
    sort_by = "slug"
    transparent = true

    [extra]
    series = true
    ```

4. Create your series articles in this directory.

Want more? Keep reading!

## How does series work

A series is just a section which is handled in a special way by tabi.
It may be declared alongside your other blog posts.
You can refer to [Zola documentation about sections](https://www.getzola.org/documentation/content/section/) to get more details.

Taking the example from the diagram above, the folder organisation would be as follow:
```
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

To be considered a series, a section must use the `series.html` template and have an extra settings `series` set to true.
To mix up its posts with the section above (`blog` in our example), it must also be declared `transparent`.

The series' main page displays all the infos about the series followed by a list of all its posts.

##### TODO: Add screenshot with final design
{#
{{ dual_theme_image(light_src="blog/series/img/series_light.webp", dark_src="blog/series/img/series_dark.webp", alt="Main series page") }}
#}

## Jump to Posts

When a series has a content over 2000 characters, a "Jump to posts" link automatically appears next to the series title:

##### TODO: Add screenshot with final design

To force the feature on or off, use the `show_jump_to_posts` option in the `[extra]` section of your series section or in `config.toml`.
This setting follows [the hierarchy](@blog/mastering-tabi-settings/index.md#settings-hierarchy).

## Series pages and ordering

All pages in the series section will be a series page.
The series pages will be ordered as per the series section `sort_by`.

Whatever the series section `sort_by` is, it has no impact on the order of the pages in the main section (`blog` in our example).
As series section is transparent, its order is ignored in the section above which applies its own `sort_by` (usually sorted by dates).

Each type of `sort_by` will have its own pros and cons and the most common ones are:

{% wide_container() %}
 sort_by | pros                                                                                                                                      | cons
---------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 slug    | The series pages order is made explicit in the path (e.g. `https://yourweb.site/blog/series1/01-series-post-one`).                        | Each series page must be prefixed accordingly.
 weight  | The series pages order is easy to set up transparently.<br>First series post has weight `1`, second series post has weight `2` and so on. | Each series page must have its weight set accordingly.
 date    | The series pages order can be configured once in the series section configuration. No need to do anything on each series page.            | The series pages order has to be reversed because the first page is usually the oldest. This can only be achieved by paginating the series section (`paginate_by = 9999`) and reversing its order (`paginate_reversed = true`).
{% end %}

{{ admonition(type="danger", title="Zola version to sort by date", text="In order to properly reverse dates, Zola v0.19.3+ is required so that pagination information is available thourgh the `get_section` function. Anything relying on the series pages order won't be correct in a series page otherwise (e.g. previous/next series page, ordered and unordered list ...)") }}

A 1-based indexing is used to provide an index to each series page as per their order according to the series section `sort_by`.
The first series page will have 1, the second 2 and so on so forth.
To reverse this index (i.e. the first series page will have the greatest index), set the `post_listing_index_reversed` option to `true` (default is `false`) in the `[extra]` section of your series sections or in `config.toml`.
This setting follows [the hierarchy](@blog/mastering-tabi-settings/index.md#settings-hierarchy).

## Intro and Outro Templates

Series articles can have automatic introduction and conclusion sections. These are configured in your series' `_index.md`. A basic example:

{{ add_src_to_code_block(src="series/_index.md") }}

```toml
[extra.series_intro_templates]
default = "This article is part of the $SERIES_HTML_LINK series."

[extra.series_outro_templates]
default = "Thanks for reading part $SERIES_PAGE_INDEX of $SERIES_HTML_LINK!"
```

Both intro and outro will have CSS class applied, respectively `series-page-intro` and `series-page-outro`.
They can be used for styling purpose.

### Template Types

The series system uses different templates based on an article's position in the series:

- `next_only` - Used for the first article (has next article but no previous)
- `middle` - Used for articles with both previous and next articles
- `prev_only` - Used for the last article (has previous article but no next)
- `default` - Fallback template used when a specific position template isn't defined

The system automatically determines which template to use based on the article's position. The templates are defined in the series configuration (`_index.md`), as `extra.series_intro_templates` and `extra.series_outro_templates`.:

{{ add_src_to_code_block(src="series/_index.md") }}

```toml
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

{{ add_src_to_code_block(src="series/_index.md") }}

```toml
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

{{ add_src_to_code_block(src="series/_index.md") }}

```toml
[extra]
series = true
series_template_placeholders = ["$POSITION", "$TOPIC", "$DIFFICULTY"]
```

2. Then, in each series article, provide the values for these placeholders in `series_template_variables`:

{{ add_src_to_code_block(src="series/article.md") }}

```toml
[extra.series_template_variables]
position = "first"
topic = "Variables and Types"
difficulty = "Beginner"
```

### Using Custom Variables

You can use your custom variables in any template, alongside the built-in variables:

{{ add_src_to_code_block(src="series/_index.md") }}

```toml
[extra.series_intro_templates]
default = """
This is the $POSITION article in $SERIES_HTML_LINK.
Today's topic: $TOPIC
Difficulty level: $DIFFICULTY
"""
```

{{ admonition(type="warning", text="While placeholders are defined with uppercase (`$POSITION`), the variable names in `series_template_variables` must be lowercase (`position`).") }}

### Example with Custom Variables

{{ add_src_to_code_block(src="series/_index.md") }}

```toml
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

{{ add_src_to_code_block(src="series/02-learning-rust/index.md") }}

```toml
# In an article of the series.
[extra.series_template_variables]
learning_time = "30 minutes"
key_concepts = "Functions, Error Handling, Pattern Matching"
```

This will output:

```text
📚 Part 2 of 5
⏱️ Estimated time: 30 minutes
🔑 Key concepts: Functions, Error Handling, Pattern Matching
```

{{ admonition(type="warning", title="Missing Variables", text="If you use a placeholder in your templates but don't provide its value in `series_template_variables`, the build will fail with an error listing the missing variables.") }}
