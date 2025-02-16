# Contributing to tabi

Halló!

Thanks for contributing to [tabi](https://github.com/welpo/tabi). Before implementing new features and changes, please [submit an issue](https://github.com/welpo/tabi/issues/new) so that we can discuss it.

We welcome contributions in many forms, including:

- Bug reports;
- New translations;
- Improvements to existing translations;
- Feature requests;
- Code patches;
- Documentation improvements;
- UI/UX suggestions.

If you're not sure how to contribute or need help with something, please don't hesitate to reach out via the [issue tracker](https://github.com/welpo/tabi/issues) or [mail](mailto:tabi@osc.garden?subject=[GitHub]%20tabi).

## Pull Requests

Working on your first Pull Request? You can learn how from this free video series:

[**How to Contribute to an Open Source Project on GitHub**](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

Please make sure the following is done when submitting a pull request:

1. **Keep your PR small**. Small pull requests are much easier to review and more likely to get merged. Make sure the PR does only one thing, otherwise please split it.
2. **Use descriptive titles**. It is recommended to follow this [commit message style](#conventional-commit-messages-with-gitmoji).
3. **Test your changes**. Make sure to test different configurations that might affect your changes.
4. **Fill the PR template**. The template will guide you through the process of submitting a PR.

### Conventional Commit Messages with Gitmoji

See how a minor change to your commit message style can make you a better programmer.

Format: `<gitmoji> <type>(<scope>): <description>`

`<gitmoji>` is an emoji from the [gitmoji](https://gitmoji.dev/) list. It makes it easier to visually scan the commit history and quickly grasp the purpose of changes.

`<scope>` is optional. If your change affects a specific part of the codebase, consider adding the scope. Scopes should be brief but recognizable, e.g. `config`, `feed`, or `search`.

The various types of commits:

- `feat`: a new API or behaviour **for the end user**.
- `fix`: a bug fix **for the end user**.
- `style`: changes to the visual appearance of the theme, e.g. CSS, fonts, images…
- `docs`: a change to the website or other Markdown documents.
- `refactor`: a change to code that doesn't change behaviour, e.g. splitting files, renaming internal variables, improving code style…
- `chore`: upgrading dependencies, releasing new versions… Chores that are **regularly done** for maintenance purposes.
- `misc`: anything else that doesn't change production code, yet is not `chore`. e.g. updating GitHub actions workflow.

The commits within your PR don't need to follow this convention (we'll [squash them](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/configuring-commit-squashing-for-pull-requests)). However, the PR title should be in this format. If you're not sure about the title, don't worry, we'll help you fix it. Your code is more important than conventions!

Example:

```text
🐛 fix(i18n): localise date in single taxonomy listing
^  ^-^^----^  ^--------------------------------------^
|  |  |       |
|  |  |       +-> Description in imperative and lowercase.
|  |  |
|  |  +-> The scope of the change.
|  |
|  +-------> Type: see above for the list we use.
|
+----------> A valid gitmoji.
```

## Coding Style Guidelines

While we don't enforce a strict coding style, we appreciate it when contributions follow the existing code style of the project (e.g. indenting with 4 spaces). This makes the codebase easier to read and maintain. If you are making significant changes or additions, please try to maintain consistency with the current coding patterns and idioms.

For JavaScript files, we use [Prettier](https://prettier.io/) to format the code.

The CSS properties are sorted following [Concentric-CSS](https://github.com/brandon-rhodes/Concentric-CSS). If you use VSCode, the [Sort CSS](https://marketplace.visualstudio.com/items?itemName=piyushsarkar.sort-css-properties) extension makes this super easy.

## Pre-commit Githook

### Introduction

We use a pre-commit githook to maintain code and file quality. [This script](https://github.com/welpo/tabi/blob/main/.githooks/pre-commit) performs a series of checks and updates before a commit is made.

### Setting Up

To use the pre-commit githook, run the following command from the root of the repository to configure the git hooks path and make the script executable:

```bash
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
```

### Features

The pre-commit githook performs the following actions:

#### Automatic Updates

- **Front Matter in Markdown Files**: Automatically updates the "updated" field in the front matter of `.md` files.
- **PNG Compression**: Compresses PNG files using either [`oxipng`](https://github.com/shssoichiro/oxipng) or [`optipng`](https://optipng.sourceforge.net/), whichever is available on your system.
- **Font Subsetting**: Runs `subset_font` if `config.toml` has been modified.

#### Commit Checks

The script prevents you from committing if:

- The `.md` file is marked as a draft.
- Any file contains a "TODO".
- A JavaScript file is being committed without a corresponding minified version.
- A minified JavaScript file is not as small as it could be. Requires installing [UglifyJS](https://github.com/mishoo/UglifyJS) and/or [terser](https://github.com/terser/terser).
- `config.toml` and `theme.toml` have different numbers of lines in their `[extra]` sections.

These checks are in place to ensure code quality and consistency throughout the project.

## Code of Conduct

We expect all contributors to follow our [Code of Conduct](./CODE_OF_CONDUCT.md). Please be respectful and professional when interacting with other contributors.

## License

The code is available under the [MIT license](./LICENSE).

Thank you for your contributions!
