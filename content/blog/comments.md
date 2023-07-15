+++
title = "Add comments to your posts with giscus or utterances"
date = 2023-07-14
updated = 2023-07-16
description = "Discover how to enable a comments section on your posts using giscus or utterances, enabling reader interaction and feedback."

[taxonomies]
tags = ["showcase", "tutorial"]

[extra]
giscus = true
quick_navigation_buttons = true
+++

tabi currently supports two comment systems: [giscus](https://giscus.app/) and [utterances](https://utteranc.es/).

giscus and utterances are open-source projects that let you add a comments section to your website using GitHub issues (utterances) or discussions (giscus). They are perfect for static site generators like Zola, since they enable your readers to interact and leave comments on your posts without requiring a traditional backend or database.

As they are based on GitHub, giscus and utterances require users to have a GitHub account and authorize the respective app. Alternatively, visitors can also comment directly on the corresponding GitHub discussion or issue.

Both are great tools for adding comments to your blog, but giscus has a few advantages:
- More themes.
- Support for reactions.
- Comment replies and conversation view.
- Safer: utterances requires enabling unsafe inline styles to set the height of the frame; giscus doesn't.
- Multilanguage support: utterances is only available in English; giscus supports over 20 languages.
- More active development: giscus' last commit, as of this post, was a week ago. utterances' last commit was over a year ago.

## Setup

The configuration of both systems is quite similar. First, visit the website of the system you want to enable: [giscus.app](https://giscus.app/) or [utteranc.es](https://utteranc.es/).

Follow the instructions on the **Configuration** section of the website, and set it up it to your liking. Then, set the values shown on the **Enable giscus/utterances** section (the `script` codeblock) on the proper section of your `config.toml`: `[extra.giscus]` or `[extra.utterances]`.

### giscus

giscus has a few more settings than utterances:

```toml
[extra.giscus]
enabled_for_all_posts = false
automatic_loading = true
repo = "yourGithubUsername/yourRepo"
repo_id = "YourRepoID"
category = "Announcements"
category_id = "YourCategoryID"
mapping = "slug"
strict_title_matching = 1  # 1 to enable, 0 to disable.
enable_reactions = 1  # 1 to enable, 0 to disable.
comment_box_above_comments = true
light_theme = "noborder_light"
dark_theme = "noborder_dark"
lang = ""  # Leave blank to match the page's language.
lazy_loading = true
```

### utterances

```toml
[extra.utterances]
enabled_for_all_posts = false
automatic_loading = true
repo = "yourgithubuser/yourrepo"
issue_term = "slug"
label = "💬"
light_theme = "github-light"
dark_theme = "photon-dark"
lazy_loading = true
```

### Common settings

Setting `enabled_for_all_posts = true` for either comment system will enable it globally.

Alternatively, enable comments on an individual post's front matter by adding `utterances = true` or `giscus = true`. For example, this is how you would enable giscus:

```toml,hl_lines=09-10
+++
title = "Bears, Beets, Battlestar Galactica: The Dwight Schrute Guide to Life"
date = 2007-04-26
updated = 2023-07-16
description = "Lessons learned from beet farming and paper sales."

[taxonomies]
tags = ["personal", "beets"]

[extra]
giscus = true
+++
```

If you accidentally enable both systems, your site will fail to build with an error.

If your site has multiple languages with matching posts (like this demo), and you'd like to share comments between languages, you must use `issue_term = "slug"`. This will use the name of the Markdown file (sans the language tag) as the identifier. All other options will create different comment sections for each language.

## Live example

Below you'll find the giscus widget using the settings shown [above](#giscus).
