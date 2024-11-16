+++
title = "Streaming Royalties Calculator"
description = "A tool to calculate streaming royalties for musicians."
weight = 45

[taxonomies]
tags = ["music", "web app", "web", "JavaScript", "data analysis"]

[extra]
local_image = "projects/streaming-royalties-calculator/streaming-royalties-calculator_logo.webp"
canonical_url = "https://osc.garden/projects/streaming-royalties-calculator/"
social_media_card = "social_cards/projects_streaming_royalties_calculator.jpg"
+++

The Streaming Royalties Calculator allows musicians to estimate their earnings from platforms like Spotify, Apple Music, Instagram, TikTok, and more.

You can either input a target earnings amount to see how many streams are needed on each platform, or enter the number of streams per service to calculate the expected royalties. Here's a screenshot:

<a href="https://osc.garden/royalties-calculator/" target="_blank">
    {{ dual_theme_image(light_src="https://cdn.jsdelivr.net/gh/welpo/osc.garden@main/content/blog/data-analysis-music-streaming/img/calculator_light.webp", dark_src="https://cdn.jsdelivr.net/gh/welpo/osc.garden@main/content/blog/data-analysis-music-streaming/img/calculator_dark.webp" alt="Streaming Royalties Calculator") }}
</a>

#### [Try it!](https://osc.garden/royalties-calculator/) • [JavaScript Source](https://github.com/welpo/osc.garden/blob/main/content/pages/royalties-calculator/js/streamsMonthCalculator.js) {.centered-text}

## Main Features

- **Accurate data**: Based on the last year of [my own royalties data](https://osc.garden/blog/data-analysis-music-streaming/).
- **Multiple platforms**: Includes Tidal, Spotify, Apple Music, Facebook, Deezer, TikTok, and more.
- **Calculation modes**: Use the mean, median, minimum or maximum values to estimate the earnings.
