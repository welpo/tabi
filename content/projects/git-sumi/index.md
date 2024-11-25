+++
title = "git-sumi"
description = "The non-opinionated Rust-based commit message linter."
weight = 10

[taxonomies]
tags = ["Git", "Rust", "Continuous Integration", "GitHub Actions", "CLI", "automation"]

[extra]
local_image = "projects/git-sumi/git-sumi_logo.webp"
social_media_card = "social_cards/projects_git-sumi.jpg"
canonical_url = "https://osc.garden/projects/git-sumi/"
+++

**git-sumi** is the non-opinionated commit message linter written in Rust.

{% wide_container() %}
<video controls src="https://cdn.jsdelivr.net/gh/welpo/git-sumi@main/assets/git-sumi_demo.mp4" title="git-sumi demo"></video>
{% end %}

#### [GitHub](https://github.com/welpo/git-sumi) • [Website](https://sumi.rs/) • [Documentation](https://sumi.rs/docs/) {.centered-text}

## Main features

- **Customizable rules**: Configure rules to enforce [Conventional Commits](https://www.conventionalcommits.org/), length limits, [Gitmoji](https://gitmoji.dev/) usage, and [more](https://sumi.rs/docs/rules).
- **Clear error reporting**: Provides detailed error reporting, making fixing commit messages straightforward and educational.
- **Seamless integration**: As a single binary, git-sumi easily integrates into your existing workflow with minimal setup. You can even use the [GitHub Action](https://github.com/welpo/git-sumi-action) to lint your commits (or PR titles) without installing anything.

## Development best practices

- **Comprehensive code coverage**: 98% test coverage; linting needs to be reliable.
- **Continuous [integration](https://github.com/welpo/git-sumi/blob/main/.github/workflows/ci.yml) and [deployment](https://github.com/welpo/git-sumi/blob/main/.github/workflows/release.yml)**: Automated workflows for testing and releasing cross-compiled binaries to crates.io, PyPI and GitHub releases.
- **Documentation**: [Comprehensive documentation](https://sumi.rs/docs/) with a [quick start guide](https://sumi.rs/docs/), [examples](https://sumi.rs/docs/examples), [rules](https://sumi.rs/docs/rules), [integration](https://sumi.rs/docs/integration), [FAQ](https://sumi.rs/docs/faq)…
