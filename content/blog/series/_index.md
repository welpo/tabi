+++
title = "How to deal with series"
template = "series.html"
sort_by = "slug"

description = "This series explains how to properly configure a series."

transparent = true

[extra]
series = true
quick_navigation_buttons = true
show_jump_to_posts = true
post_listing_index_reversed = false

series_template_placeholders = ["$POSITION", "$FOO", "$BAR"]
series_page_introduction = """
You can put whatever you want in a custom description.

**All** variable are accessibles, including custom ones.

Markdown is rendered.
"""

[extra.series_intro_templates]
prev_only = "Welcome back to $SERIES_HTML_LINK! This is article the $POSITION of $SERIES_PAGES_NUMBER, following $PREV_HTML_LINK."
next_only = "Welcome to $SERIES_HTML_LINK! This is the $POSITION article in a $SERIES_PAGES_NUMBER-part series."
middle = "Welcome to the $POSITION of $SERIES_PAGES_NUMBER articles in $SERIES_HTML_LINK. We previously covered $PREV_HTML_LINK."
default = "This article is part $SERIES_PAGE_INDEX of $SERIES_PAGES_NUMBER in the $SERIES_HTML_LINK series."

[extra.series_outro_templates]
prev_only = "Check out the previous post in the $SERIES_HTML_LINK series: [$PREV_TITLE]($PREV_PERMALINK)."
next_only = "This is the start of the [series]($SERIES_PERMALINK). Continue with $NEXT_HTML_LINK!"
middle = "Previously: $PREV_HTML_LINK. Up next: $NEXT_HTML_LINK."
default = "This article is part of the $SERIES_HTML_LINK series."
+++

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
