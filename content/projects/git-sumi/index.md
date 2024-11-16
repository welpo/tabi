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

**git-sumi** is a non-opinionated commit message linter written in Rust. It's a flexible tool to enforce commit message standards, ensuring consistent and automation-friendly commit messages.

{% wide_container() %}
<video controls src="https://cdn.jsdelivr.net/gh/welpo/git-sumi@main/assets/git-sumi_demo.mp4" title="git-sumi demo"></video>
{% end %}

#### [GitHub](https://github.com/welpo/git-sumi) • [Website](https://sumi.rs/) • [Documentation](https://sumi.rs/docs/) {.centered-text}

## Main Features

- **Customizable rules**: Tailor git-sumi to meet the specific requirements of each project. Configure rules to enforce Conventional Commits, length limits, Gitmoji usage, and more through a simple TOML configuration file.
- **Clear error reporting**: Provides detailed error reporting, making fixing commit messages straightforward and educational.
- **Seamless integration**: As a single binary, git-sumi integrates easily into your existing workflow with minimal setup. You can even use the [GitHub Action](https://github.com/welpo/git-sumi-action) to lint your commits (or PR titles) without installing anything locally.

## Development Best Practices

- **Comprehensive code coverage**: Over 95% line coverage and thorough feature coverage ensures that git-sumi is reliable, robust, and ready for use.
- **Continuous [integration](https://github.com/welpo/git-sumi/blob/main/.github/workflows/ci.yml) and [deployment](https://github.com/welpo/git-sumi/blob/main/.github/workflows/release.yml)**: Automated workflows for testing, releasing, and deploying, ensuring that each version of git-sumi is thoroughly tested and ready for use.
- **Community contributions**: Encourages contributions from the community, including feature requests, bug reports, and enhancements, with a welcoming approach to both newcomers and seasoned developers.
- **Documentation**: [Comprehensive documentation](https://sumi.rs/docs/) to help users get started with git-sumi and understand its features and capabilities.

## Start Enhancing Your Commit Practices Today

Take the first step towards transforming your commit practices. git-sumi's blend of flexibility, detailed feedback, and ease of integration makes it the perfect choice for teams and individuals looking to improve their Git commit messages.

[Discover **git-sumi**](https://sumi.rs/) and make it a part of your development toolkit.

[![git-sumi social media card](social_cards/projects_git-sumi.jpg)](https://sumi.rs/)
