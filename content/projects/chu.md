+++
title = "chu"
description = "Python-based file uploader using Flask and uWSGI, focused on efficiency and security."
weight = 2

[extra]
local_image = "img/chu.webp"
social_media_card = "img/projects_chu.jpg"
+++

[**chu**](https://github.com/welpo/chu) is a Python-based file uploader built using Python, Flask, and uWSGI. It integrates multiple optimization techniques to make file uploads not just simpler, but smarter.

#### [View on GitHub](https://github.com/welpo/chu) {.centered-text}

### Technical Features

- **Efficiency Through Compression**: Uses [Lepton JPEG Compression](https://github.com/microsoft/lepton_jpeg_rust) and [optipng](http://optipng.sourceforge.net/) to achieve up to 22% space savings.

- **Security Measures**: Implements upload size limits, extension controls, and password-based authentication.

- **Ease of Use**: Generates a URL for each successfully uploaded file, accommodates either random or user-defined filenames.

- **Metadata Purging**: Removes metadata from files for enhanced privacy.

- **Configurable Upload Size**: Allows users to set limits on the size of uploaded files.

- **Extension-Specific Controls**: Provides settings to restrict uploads to specific file extensions.

- **Direct URL Response**: After each successful upload, returns a URL pointing to the file.
