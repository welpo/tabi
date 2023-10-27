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

## How to submit a pull request?

- Follow the [GitHub flow](https://guides.github.com/introduction/flow/).
- Follow the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/).
- Use [gitmoji](https://gitmoji.dev/) – it's fun! 🫶

## Coding Style Guidelines

While we don't enforce a strict coding style, we appreciate it when contributions follow the existing code style of the project (e.g. indenting with 4 spaces). This makes the codebase easier to read and maintain. If you are making significant changes or additions, please try to maintain consistency with the current coding patterns and idioms.

For JavaScript files, you can use [Biome](https://biomejs.dev/) to format your code.

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
