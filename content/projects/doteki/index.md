+++
title = "dōteki"
description = "Add dynamic content to your GitHub profile through an intuitive plugin system."
weight = 30

[taxonomies]
tags = ["GitHub Actions", "automation", "Python"]

[extra]
local_image = "projects/doteki/doteki_logo.webp"
social_media_card = "social_cards/projects_doteki.jpg"
canonical_url = "https://osc.garden/projects/doteki/"
add_src_to_code_block = true
+++

**dōteki** updates your GitHub profile README automatically. Add your latest blog posts, music you're listening to, or any other dynamic content using plugins.

![doteki logo: a river passing through a bamboo forest](https://cdn.jsdelivr.net/gh/welpo/doteki@main/website/static/img/logo.png)

#### [GitHub](https://github.com/welpo/doteki) • [Website](https://doteki.org/) • [Documentation](https://doteki.org/docs/) {.centered-text}

## How it works

1. Add markers to your README:

{{ add_src_to_code_block(src="README.md") }}

```md
<!-- blog start -->
<!-- blog end -->
```

2. Configure what goes there:

{{ add_src_to_code_block(src="doteki.toml") }}

```toml
[sections.blog]
plugin = "feed"
url = "https://osc.garden/atom.xml"  # Replace with your feed.

[sections.last_updated]
plugin = "current_date"
inline = true
```

3. Set up the [GitHub Action](https://github.com/welpo/doteki-action).

That's it! Your README will stay updated automatically.

## Features

- **Plugin system**: Show [blog posts](https://doteki.org/docs/plugins/feed), [music](https://doteki.org/docs/plugins/lastfm), or [build your own plugin](https://doteki.org/docs/developer-guide/plugin-standard)
- **Simple setup**: One TOML file, one GitHub Action
- **Flexible**: Each plugin has its own options (sort order, max entries, format…)
- **[Extensive documentation](https://doteki.org/docs/)**: Detailed information on how to set up and use **dōteki** and its plugins. It includes [clear instructions for developers](https://doteki.org/docs/developer-guide/) looking to contribute.

## Documentation

Check the [docs](https://doteki.org/docs/) for:

- [Getting started guide](https://doteki.org/docs/)
- [Available plugins](https://doteki.org/docs/category/plugins)
- [Plugin development](https://doteki.org/docs/developer-guide/)
- [Configuration options](https://doteki.org/docs/configuration/)
