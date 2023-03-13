+++
title = "Secure by default"
date = 2023-02-22
updated = 2023-03-13
description = "tabi has an easily customizable Content Security Policy (CSP) with safe defaults. Get peace of mind and an A+ on Mozilla Observatory."

[taxonomies]
tags = ["security", "showcase"]
+++

The default configuration of the theme gets an A+ score on [Mozilla Observatory](https://observatory.mozilla.org).

This is accomplished by programatically configuring Content Security Policy (CSP) headers based on a user-defined list of allowed domains in the theme's `config.toml` file. Here's the default and recommended setup (you could remove the last directive if you don't want to embed videos):

```
[extra]
allowed_domains = [
    { directive = "img-src", domains = ["'self'", "https://*"] },
    { directive = "script-src", domains = ["'self'"] },
    { directive = "style-src", domains = ["'self'"] },
    { directive = "frame-src", domains = ["player.vimeo.com", "https://www.youtube-nocookie.com"] },
]
```

The allowed_domains list specifies the URLs that the website should be able to connect to, and each domain in the list is associated with a CSP directive such as `frame-src`, `connect-src`, or `script-src`. The `templates/partials/header.html` file dynamically generates the CSP header based on this list.

This feature allows you to easily customize the website's security headers to allow for specific use cases, such as embedding YouTube videos, loading remote fonts ([not recommended](https://www.albertovarela.net/blog/2022/11/stop-using-google-fonts/)) or scripts.
