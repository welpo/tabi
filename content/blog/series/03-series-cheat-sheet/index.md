+++
title = "Series cheat sheet"
date = 2024-08-08
description = "This last article provides an overview of series and describe all possible parameters."

[taxonomies]
tags = ["showcase", "tutorial", "FAQ"]

[extra]
series_template_variables = { position = "third", foo = "FOO FOO FOO!!!"}
toc = true

+++

## Quick Start

1. Create a directory for your series.
2. Create `_index.md` in the series directory.
3. Set up the `_index.md` front matter:

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

## Jump to Posts

When a series has a description over 2000 characters, a "Jump to posts" link automatically appears next to the series title:

##### TODO: Add screenshot with final design

To force the feature on or off, use the `show_jump_to_posts` option in the `[extra]` section of your section (series) or in `config.toml`. This setting follows [the hierarchy](@blog/mastering-tabi-settings/index.md#settings-hierarchy).

## Intro and Outro Templates

Series articles can have automatic introduction and conclusion sections. These are configured in your series' `_index.md`:

```toml
[extra.series_intro_templates]
default = "This article is part of the $SERIES_HTML_LINK series."

[extra.series_outro_templates]
default = "Thanks for reading part $SERIES_PAGE_INDEX of $SERIES_HTML_LINK!"
```

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

1. Define your placeholders once in the series configuration with `series_template_placeholders`.
2. Provide their values in each article with `series_template_variables` (note the different name).

3. First, define your **placeholders** in your series configuration (`_index.md`):

```toml
[extra]
series = true
series_template_placeholders = ["$POSITION", "$TOPIC", "$DIFFICULTY"]
```

2. Then, in each series article, provide the values for these placeholders in `series_template_variables`:

```toml
[extra.series_template_variables]
position = "first"
topic = "Variables and Types"
difficulty = "Beginner"
```

### Using Custom Variables

You can use your custom variables in any template, alongside the built-in variables:

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

Here's a complete example showing how to use custom variables in a series:

```toml
# In series _index.md
[extra]
series = true
series_template_placeholders = ["$LEARNING_TIME", "$KEY_CONCEPTS"]

series_intro_templates.default = """
📚 Part $SERIES_PAGE_INDEX of $SERIES_PAGES_NUMBER
⏱️ Estimated time: $LEARNING_TIME
🔑 Key concepts: $KEY_CONCEPTS
"""

# In an article of the series
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
