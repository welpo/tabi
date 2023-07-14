+++
title = "Secure by default"
date = 2023-02-22
updated = 2023-07-14
description = "tabi has an easily customizable Content Security Policy (CSP) with safe defaults. Get peace of mind and an A+ on Mozilla Observatory."

[taxonomies]
tags = ["security", "showcase"]
+++

The default configuration of the theme gets an A+ score on [Mozilla Observatory](https://observatory.mozilla.org).[^1]

This is accomplished by programatically configuring Content Security Policy (CSP) headers based on a user-defined list of allowed domains in the `config.toml` file. Here's the default and recommended setup (you could remove the last directive if you don't want to embed YouTube videos):

```
[extra]
allowed_domains = [
    { directive = "font-src", domains = ["'self'", "data:"] },
    { directive = "img-src", domains = ["'self'", "https://*", "data:"] },
    { directive = "script-src", domains = ["'self'"] },
    { directive = "style-src", domains = ["'self'"] },
    { directive = "frame-src", domains = ["https://www.youtube-nocookie.com"] },
]
```

The `allowed_domains` list specifies the URLs that the website should be able to connect to, and each domain in the list is associated with a CSP directive such as `frame-src`, `connect-src`, or `script-src`. The `templates/partials/header.html` file dynamically generates the CSP header based on this list.

This feature allows you to easily customize the website's security headers to allow for specific use cases, such as embedding YouTube videos, loading scripts or remote fonts ([not recommended](https://www.albertovarela.net/blog/2022/11/stop-using-google-fonts/)).

**Note**: [enabling comments](@/blog/comments.md) automatically allows scripts and frames from either utterances/giscus, as well as unsafe-inline styles when using utterances (required so that the frame can adjust its size based on the number of comments).

[^1]: Requires proper webserver configuration (e.g. redirecting HTTP traffic to HTTPS).
