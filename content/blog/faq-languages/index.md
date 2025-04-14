+++
title = "Lost in Translation? Not with tabi's Multilingual Capabilities"
date = 2023-09-12
updated = 2025-04-02
description = "Master the art of serving a global audience through tabi's built-in multilingual features. Learn how to change the default language, add multilingual support, and contribute your own translations."

[taxonomies]
tags = ["showcase", "tutorial", "FAQ"]

[extra]
quick_navigation_buttons = true
toc_ignore_pattern = "^(Frequently Asked Questions)"
social_media_card = "social_cards/blog_faq_languages.jpg"
+++

To broaden your reach to a global audience, tabi streamlines the process of building multilingual websites. In this guide, we'll walk you through everything you need to know—from setting a default language for your site to contributing your own translations. Let's get started!

### Frequently Asked Questions

<!-- toc -->

## What languages does tabi support?

tabi supports the following languages:

- Arabic
- Catalan
- Chinese (Simplified)
- Chinese (Traditional)
- English
- Estonian
- Finnish
- French
- German
- Hindi
- Italian
- Japanese
- Korean
- Odia
- Persian
- Portuguese (European)
- Russian
- Spanish
- Ukranian

For an always up to date list of supported languages, refer to the [`i18n` directory](https://github.com/welpo/tabi/tree/main/i18n) in the tabi repository.

## How do I set a default language for my site?

You can set the default language for your site by defining the `default_language` variable in your `config.toml` file.

For instance, if you want (Simplified) Chinese to be the primary language, simply add this line to  `config.toml`:

```toml, hl_lines=03
base_url = "https://welpo.github.io/tabi"
title = "~/tabi"
default_language = "zh-Hans"
```

If the value of `default_language` matches the name of a TOML file in the [`i18n` directory](https://github.com/welpo/tabi/tree/main/i18n), all of tabi's text strings will be translated to that language.

## How does tabi handle multilingual support?

Zola automatically generates URLs for each non-default language like this: `{base_url}/{language_code}/{post}`.

tabi facilitates the navigation between languages by adding a language switcher to the navigation bar (only shown when there's more than one language enabled).

If you [scroll up](#) to the navigation bar, you'll see the language switcher (the globe icon). Clicking on it will display a dropdown with the available languages. Clicking on a language's name will take you to the same page in that language.

If a specific page is not available in a language, tabi will display a 404 page with the text:

> The page you've requested seems to be missing or hasn't been translated into your language yet. Check the URL for errors or go back to the homepage.

This text will be shown once for each language enabled on your site. You can see this page in action [here](https://welpo.github.io/tabi/404.html).

## How do I enable multilingual support?

To enable multilingual support, you need to set the `languages` variable in your `config.toml` file. For example, if want an English-default site with support for Hindi and Spanish, you can set up your `config.toml` like so:

```toml
base_url = "https://example.com"
title = "My Site"
default_language = "en"

[languages.hi]
title = "मेरी वेबसाइट"

[languages.es]
title = "Mi web"
```

On each language's section, you can set other variables like `taxonomies`, `description`, whether to generate a feed… Refer to Zola's [multilingual support documentation](https://www.getzola.org/documentation/content/multilingual/) for more information.

## What are these two letter codes?

The two letter codes are [ISO 639-1 language codes](https://localizely.com/iso-639-1-list/) (or [IETF BCP 47](https://en.wikipedia.org/wiki/IETF_language_tag), when necessary). They are used to identify languages in a standardised way.

tabi uses these codes to allow navigation between languages and translate the theme.

## How do I customise or override a specific text string on my website?

tabi looks for the strings files in the following order. `$base_directory` is where your Zola site resides (where `config.toml` is stored):

1. `$base_directory + "i18n"`
2. `$base_directory + "themes/tabi/i18n"`

So if you create  `i18n/en.toml` in your base directory, tabi will read the strings from that file instead of the default English strings. You can do this for any language, supported or not.

Make sure to copy the entire file for that language first, or the theme will fall back to the default English strings.

## What happens if a translation is missing or incomplete?

If a string is not found in the language file, tabi will fall back to the default English string.

## My language is not supported. Can I contribute a translation?

Please do! We are always looking to add support for more languages. You can contribute a translation by creating a pull request in the [tabi repository](https://github.com/welpo/tabi).

You can use the [English file](https://github.com/welpo/tabi/blob/main/i18n/en.toml) as a base to translate the strings to your language. Please make sure to follow the same structure.

The file should be named after the two letter code of your language, and should be a TOML file. For example, if you want to add support for Swahili, you can create a file named `sw.toml` in the `i18n` directory.

Note: when testing your translation, you might need to restart `zola serve` to see the changes, as Zola doesn't always detect changes in the TOML files.

## I've found an error in a translation. How do I fix it?

If you find an error in a translation, you can create an issue or a pull request in the [tabi repository](https://github.com/welpo/tabi).

## How do I update the translations after a theme update?

If you didn't customise the translations, simply updating the theme will update the translations.

If you did, you will need to manually update the translations. You can do this by copying the new strings from the corresponding files, and pasting them in your custom file.

## Does tabi translate my content?

No. tabi only translates the theme's text strings. You will need to translate your content yourself.
