+++
title = "Add comments to your posts with these 4 comment systems"
date = 2023-07-14
updated = 2023-07-26
description = "Discover how to enable a comments section on your posts using giscus, utterances, Hyvor Talk, or Isso, enabling reader interaction and feedback."

[taxonomies]
tags = ["showcase", "tutorial"]

[extra]
giscus = true
quick_navigation_buttons = true
toc = true
+++

tabi currently supports four comment systems: [giscus](https://giscus.app/), [utterances](https://utteranc.es/), [Hyvor Talk](https://talk.hyvor.com/), and [Isso](https://isso-comments.de/).

giscus and utterances are open-source projects that let you add a comments section to your website using GitHub issues (utterances) or discussions (giscus). They are perfect for static site generators like Zola, since they enable your readers to interact and leave comments on your posts without requiring a traditional backend or database.

As they are based on GitHub, giscus and utterances require users to have a GitHub account and authorize the respective app. Alternatively, visitors can also comment directly on the corresponding GitHub discussion or issue.

Both are great tools for adding comments to your blog, but giscus has a few advantages:
- More themes.
- Support for reactions.
- Comment replies and conversation view.
- Safer: utterances requires enabling unsafe inline styles to set the height of the frame; giscus doesn't.
- Multilanguage support: utterances is only available in English; giscus supports over 20 languages.
- More active development: giscus' last commit, as of this post, was a two days ago. utterances' last commit was over a year ago.

Hyvor Talk is a paid privacy-focused commenting platform. It offers all of the giscus' advantages, and a few more, like moderation and spam detection.

Isso is an open-source self-hosted commenting system that stores comments in its own database. One of its main advantages is privacy; it does not share user data with third parties. It also has a lightweight and clean interface, making it easy for your visitors to leave comments. Isso also allows anonymous comments, potentially increasing user engagement on your website.

## Setup

### GitHub based systems

The configuration of both giscus and utterances is quite similar. First, visit the website of the system you want to enable: [giscus.app](https://giscus.app/) or [utteranc.es](https://utteranc.es/).

Follow the instructions on the **Configuration** section of the website, and set it up it to your liking. Then, set the values shown on the **Enable giscus/utterances** section (the `script` codeblock) on the proper section of your `config.toml`: `[extra.giscus]` or `[extra.utterances]`.

#### giscus

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

#### utterances

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

### Hyvor Talk

Set up your website from the [Hyvor Talk console](https://talk.hyvor.com/console) and fill in the settings in `config.toml`:

```toml
[extra.hyvortalk]
enabled_for_all_posts = false
automatic_loading = true
website_id = "1234"
page_id_is_slug = true
lang = ""
page_author = ""  # Email (or base64 encoded email) of the author.
lazy_loading = true
```

### Isso

To enable Isso, you'll first need to install and run an Isso server ([here's a useful guide](https://blog.phusion.nl/2018/08/16/isso-simple-self-hosted-commenting-system/#1installingisso)). Then, complete these settings in `config.toml`:

```toml
[extra.isso]
enabled_for_all_posts = false
automatic_loading = true
endpoint_url = "https://example.com/comments/"  # URL to Isso host.
page_id_is_slug = true
lang = ""
max_comments_top = "inf"
max_comments_nested = "5"
avatar = true
voting = true
page_author_hashes = ""
lazy_loading = true
```

### Common settings

Setting `enabled_for_all_posts = true` for a comment system will enable it globally.

Alternatively, enable comments on an individual post's front matter by adding the name of the system (`utterances`, `giscus`, `hyvortalk`, or `isso`) `= true`. For example, this is how you would enable giscus:

```toml,hl_lines=09-10
+++
title = "Bears, Beets, Battlestar Galactica: The Dwight Schrute Guide to Life"
date = 2007-04-26
description = "Lessons learned from beet farming and paper sales."

[taxonomies]
tags = ["personal", "beets"]

[extra]
giscus = true
+++
```

If you accidentally enable more than one system, your site will fail to build with an error.

If your site has multiple languages with matching posts (like this demo), and you'd like to share comments between languages, you must use `issue_term = "slug"` (for giscus and utterances) or `page_id_is_slug = true` (for Hyvor Talk or Isso). This will use the name of the Markdown file (sans the language tag) as the identifier. All other options will create different comment sections for each language.

## Live example

Below you'll find the giscus widget using the settings shown [above](#giscus).
