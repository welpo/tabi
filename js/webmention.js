/* webmention.js

Simple thing for embedding webmentions from webmention.io into a page, client-side.

(c)2018-2022 fluffy (http://beesbuzz.biz)
2025 mmai (https://misc.rhumbs.fr)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Basic usage:

<script src="/path/to/webmention.js" data-param="val" ... async />
<div id="webmentions"></div>

Allowed parameters:

    page-url:

        The base URL to use for this page. Defaults to window.location

    add-urls:

        Additional URLs to check, separated by |s

    id:

        The HTML ID for the object to fill in with the webmention data.
        Defaults to "webmentions"

    wordcount:

        The maximum number of words to render in reply mentions.

    max-webmentions:

        The maximum number of mentions to retrieve. Defaults to 30.

    prevent-spoofing:

        By default, Webmentions render using the mf2 'url' element, which plays
        nicely with webmention bridges (such as brid.gy and telegraph)
        but allows certain spoofing attacks. If you would like to prevent
        spoofing, set this to a non-empty string (e.g. "true").

    sort-by:

        What to order the responses by; defaults to 'published'. See
        https://github.com/aaronpk/webmention.io#api

    sort-dir:

        The order to sort the responses by; defaults to 'up' (i.e. oldest
        first). See https://github.com/aaronpk/webmention.io#api

    comments-are-reactions:

        If set to a non-empty string (e.g. "true"), will display comment-type responses
        (replies/mentions/etc.) as being part of the reactions
        (favorites/bookmarks/etc.) instead of in a separate comment list.

A more detailed example:

<!-- If you want to translate the UI -->
<script src="/path/to/umd/i18next.js"></script>
<script>
    // Setup i18next as described in https://www.i18next.com/overview/getting-started#basic-sample
</script>
<!-- Otherwise, only using the following is fine -->
<script src="/path/to/webmention.min.js"
    data-id="webmentionContainer"
    data-wordcount="30"
    data-prevent-spoofing="true"
    data-comments-are-reactions="true"
    />

*/

// Begin LibreJS code licensing
// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt

(function () {
  "use strict";

  // Shim i18next
  window.i18next = window.i18next || {
    t: function t(/** @type {string} */key) { return key; }
  }
  const t = window.i18next.t.bind(window.i18next);

  /**
   * Read the configuration value.
   *
   * @param {string} key The configuration key.
   * @param {string} dfl The default value.
   * @returns {string}
   */
  function getCfg(key, dfl) {
    return document.currentScript.getAttribute("data-" + key) || dfl;
  }

  const refurl = getCfg("page-url", window.location.href.replace(/#.*$/, ""));
  const addurls = getCfg("add-urls", undefined);
  const containerID = getCfg("id", "webmentions");
  /** @type {Number} */
  const textMaxWords = getCfg("wordcount");
  const maxWebmentions = getCfg("max-webmentions", 30);
  const mentionSource = getCfg("prevent-spoofing") ? "wm-source" : "url";
  const sortBy = getCfg("sort-by", "published");
  const sortDir = getCfg("sort-dir", "up");

  /**
   * Strip the protocol off a URL.
   *
   * @param {string} url The URL to strip protocol off.
   * @returns {string}
   */
  function stripurl(url) {
    return url.substr(url.indexOf('//'));
  }

  /**
   * Deduplicate multiple mentions from the same source URL.
   *
   * @param {Array<Reaction>} mentions Mentions of the source URL.
   * @return {Array<Reaction>}
   */
  function dedupe(mentions) {
    /** @type {Array<Reaction>} */
    const filtered = [];
    /** @type {Record<string, boolean>} */
    const seen = {};

    mentions.forEach(function (r) {
      // Strip off the protocol (i.e. treat http and https the same)
      const source = stripurl(r.url);
      if (!seen[source]) {
        filtered.push(r);
        seen[source] = true;
      }
    });

    return filtered;
  }

  /**
   * Format comments as HTML.
   *
   * @param {Array<Reaction>} comments The comments to format.
   * @returns string
   */
  function formatComments(type, comments) {

    let html = `
  <div class="webcomments">
    <h3 id="replies-header">` + getIcon('comment') + `&nbsp;<span>` + comments.length + `</span> ` + type + `s </h3>
    <ol aria-labelledby="replies-header" role="list">`;
    comments.forEach(function (comment) {
      let content = '';
      if (comment.hasOwnProperty('content')) {
        if (comment.content.hasOwnProperty('html')) {
          content = comment.content.html;
        } else if (comment.content.hasOwnProperty('text')) {
          content = comment.content.text;
        }
      }

      html += `
  <li class="comment h-entry">
    <div>
      <a class="comment_author u-author"
         href="`+ comment.author.url + `"
         target="_blank"
         title="`+ comment.author.name + `"
         rel="noreferrer">
        <img
          src="`+ comment.author.photo + `"
          alt=""
          class="u-photo"
          loading="lazy"
          decoding="async"
          width="48"
          height="48"
        >
        <span class="p-author">`+ comment.author.name + `</span>
      </a>`;
      if (comment.published) {
        const published = new Date(comment.published);
        html += `
      <time class="dt-published" datetime="`+ comment.published + `">` + published.toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" }) + `</time>`;
      }
      html += `
    </div>

    <p class="e-entry">`+ content + `
      <a class="u-url"
         href="`+ comment.url + `"
         target="_blank"
         rel="noreferrer">
        source
      </a>
    </p>
  </li>
`;
    });
    html += `
    </ol >
  </div >
      `;

    return html;
  }

  /**
   * @typedef {Object} Reaction
   * @property {string}      url
   * @property {Object?}     author
   * @property {string?}     author.name
   * @property {string?}     author.photo
   * @property {Object?}     content
   * @property {string?}     content.text
   * @property {RSVPEmoji?}  rsvp
   * @property {MentionType?} wm-property
   * @property {string?}     wm-source
   */

  function getIcon(name) {

    if (name == 'like') {
      return `<svg focusable = "false" width = "24" height = "24" viewBox = "0 0 192 192" xmlns = "http://www.w3.org/2000/svg" > <path d="M95.997 41.986l-.026-.035C85.746 28.36 68.428 21.423 51.165 24.881 30.138 29.094 15.004 47.558 15 69.003c0 24.413 14.906 47.964 39.486 70.086 8.43 7.586 17.437 14.468 26.444 20.533.728.49 1.444.967 2.148 1.43l1.39.909 1.355.872 1.317.835.645.403 1.259.78 1.194.726 1.032.619 1.38.807.418.236a6 6 0 005.864 0l1.138-.654 1.154-.684 1.118-.675.614-.376 1.26-.779a212 212 0 00.644-.403l1.317-.835 1.355-.872 1.39-.909c.704-.463 1.42-.94 2.148-1.43 9.007-6.065 18.015-12.947 26.444-20.533C162.094 116.967 177 93.416 177 69.004c-.004-21.446-15.138-39.91-36.165-44.123-17.07-3.42-34.174 3.323-44.43 16.568l-.408.537zm42.48-5.338c15.421 3.09 26.52 16.63 26.523 32.357 0 19.607-12.438 39.847-33.532 59.357l-1.316 1.205c-.22.201-.443.402-.666.603-7.977 7.18-16.548 13.727-25.118 19.498l-.745.5c-.74.494-1.466.973-2.177 1.437l-1.402.906-1.359.864-.662.416-1.292.8-.732.446-.73-.446-1.292-.8-.662-.416-1.36-.864-1.4-.906a235.406 235.406 0 01-2.923-1.937c-8.57-5.77-17.14-12.319-25.118-19.498l-.666-.603-1.316-1.205C39.438 108.852 27 88.612 27 69.004c.003-15.726 11.102-29.267 26.523-32.356 15.253-3.056 30.565 4.954 36.756 19.208l.204.478c2.084 4.878 9.009 4.85 11.053-.045 6.062-14.511 21.52-22.73 36.941-19.641z" fill="currentColor" /></svg> `;
    } else if (name == 'repost') {
      return `<svg focusable = "false" width = "24" height = "24" viewBox = "0 0 192 192" xmlns = "http://www.w3.org/2000/svg" > <path d="M18.472 146.335l-.075-.184a5.968 5.968 0 01-.216-.684l-.014-.056a5.643 5.643 0 01-.082-.397l-.013-.083a5.886 5.886 0 01-.072-.96V144c0-.157.006-.313.018-.467l.006-.075c.012-.132.028-.261.048-.39l.016-.095c.008-.05.017-.1.027-.149.005-.019.008-.038.012-.058.028-.133.06-.264.096-.393l.026-.088a5.86 5.86 0 01.482-1.159l.043-.077a5.642 5.642 0 01.31-.49l.015-.022.076-.104.044-.059a3.856 3.856 0 01.165-.208l.052-.061c.102-.12.21-.236.321-.348l18-18a6 6 0 018.661 8.303l-.175.183L38.484 138H120c23.196 0 42-18.804 42-42a6 6 0 0112 0c0 29.525-23.696 53.516-53.107 53.993L120 150H38.486l7.757 7.757a6 6 0 01.175 8.303l-.175.183a6 6 0 01-8.303.175l-.183-.175-18-18-.145-.151a6.036 6.036 0 01-.829-1.125l-.058-.105a4.08 4.08 0 01-.06-.114l-.04-.077a4.409 4.409 0 01-.139-.3l-.014-.036zM154.06 25.582l.183.175 18 18a6.036 6.036 0 01.974 1.276l.058.105c.02.035.038.07.056.105l.043.086a4.411 4.411 0 01.14.3l.014.036a5.965 5.965 0 01.291.868l.014.056c.032.13.059.263.082.397l.013.083a5.886 5.886 0 01.067.692v.014a6.11 6.11 0 01-.013.692l-.006.075a5.856 5.856 0 01-.048.39l-.016.095c-.008.05-.017.1-.027.149-.005.019-.008.038-.012.058-.028.133-.06.264-.096.393l-.026.088a5.86 5.86 0 01-.482 1.159l-.043.077-.052.09-.029.048a6.006 6.006 0 01-.32.478l-.044.059a3.857 3.857 0 01-.165.208l-.052.061a6.34 6.34 0 01-.176.197l-.145.15-18 18a6 6 0 01-8.661-8.302l.175-.183L153.514 54H72c-23.196 0-42 18.804-42 42a6 6 0 11-12 0c0-29.525 23.696-53.516 53.107-53.993L72 42h81.516l-7.759-7.757a6 6 0 01-.175-8.303l.175-.183a6 6 0 018.303-.175z" fill="currentColor" /></svg> `;
    } else if (name == 'comment') {
      return `<svg width = "24" height = "24" viewBox = "0 0 150 150" xmlns = "http://www.w3.org/2000/svg" > <path d="M75-.006a75 75 0 0174.997 74.31l.003.69c0 41.422-33.579 75-75 75H11.75c-6.49 0-11.75-5.26-11.75-11.75v-63.25a75 75 0 0175-75zm0 12a63 63 0 00-63 63v63h63c34.446 0 62.435-27.645 62.992-61.93l.008-1.041-.003-.633A63 63 0 0075 11.994zm21 72a6 6 0 01.225 11.996l-.225.004H51a6 6 0 01-.225-11.996l.225-.004h45zm0-24a6 6 0 01.225 11.996l-.225.004H51a6 6 0 01-.225-11.996l.225-.004h45z" fill="currentColor" /></svg> `;
    } else if (name == 'bookmark') {
      return `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
<path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor"></path>
</svg>`
    }
  }

  /**
   * Formats a list of reactions as HTML.
   *
   * @param {Array<Reaction>} reacts List of reactions to format
   * @returns string
   */
  function formatReactions(type, reacts) {
    let html = `
      <div class="color--primary" >
        <h3 id=`+ type + ` - header"> ` + getIcon(type) + `&nbsp; <span>` + reacts.length + `</span> ` + type + `s </h3>

          <ol class="likes" role = "list" aria - labelledby="`+ type + `-header"> `;

    reacts.forEach(function (react) {
      html += `
            <li class="h-card">
              <a class="u-url"
                href="`+ react.author.url + `
       target="_blank"
    rel = "noreferrer"
    title = "`+ react.author.name + `" >
      <img
        alt=""
        class="lazy mentions__image u-photo"
        src="`+ react.author.photo + `"
        loading="lazy"
        decoding="async"
        width="48"
        height="48"
      >
        <span class="p-author visually-hidden" aria-hidden="true">{{ author }}</span>
      </a>
  </li>
      `;
    });

    html += `
    </ol >
  </div >
      `;
    return html;
  }

  /**
   * @typedef WebmentionResponse
   * @type {Object}
   * @property {Array<Reaction>} children
   */

  /**
   * Register event listener.
   */
  window.addEventListener("load", async function () {
    const container = document.getElementById(containerID);
    if (!container) {
      // no container, so do nothing
      return;
    }

    const pages = [stripurl(refurl)];
    if (!!addurls) {
      addurls.split('|').forEach(function (url) {
        pages.push(stripurl(url));
      });
    }

    let apiURL = `https://webmention.io/api/mentions.jf2?per-page=${maxWebmentions}&sort-by=${sortBy}&sort-dir=${sortDir}`;

    pages.forEach(function (path) {
      apiURL += `&target[]=${encodeURIComponent('http:' + path)}&target[]=${encodeURIComponent('https:' + path)}`;
    });

    // apiURL = 'http://127.0.0.1:1111/test_webmentions.jf2';
    /** @type {WebmentionResponse} */
    let json = {};
    try {
      // const response = await window.fetch(apiURL);
      const response = await window.fetch(apiURL);
      if (response.status >= 200 && response.status < 300) {
        json = await response.json();
      } else {
        console.error("Could not parse response");
        new Error(response.statusText);
      }
    } catch (error) {
      // Purposefully not escalate further, i.e. no UI update
      console.error("Request failed", error);
    }

    /** @type {Array<Reaction>} */
    let comments = [];
    /** @type {Array<Reaction>} */
    let mentions = [];
    /** @type {Array<Reaction>} */
    const bookmarks = [];
    /** @type {Array<Reaction>} */
    const likes = [];
    /** @type {Array<Reaction>} */
    const reposts = [];
    /** @type {Array<Reaction>} */
    const follows = [];

    /** @type {Record<MentionType, Array<Reaction>>} */
    const mapping = {
      "in-reply-to": comments,
      "like-of": likes,
      "repost-of": reposts,
      "bookmark-of": bookmarks,
      "follow-of": follows,
      "mention-of": mentions,
      "rsvp": comments
    };

    json.children.forEach(function (child) {
      // Map each mention into its respective container
      const store = mapping[child['wm-property']];
      if (store) {
        store.push(child);
      }
    });

    // format the comment-type things
    let formattedMentions = '';
    if (mentions.length > 0) {
      formattedMentions = formatComments('mention', dedupe(mentions));
    }

    let formattedComments = '';
    if (comments.length > 0) {
      formattedComments = formatComments('comment', dedupe(comments));
    }

    // format likes
    let likesStr = '';
    if (likes.length > 0) {
      likesStr = formatReactions('like', dedupe(likes));
    }

    // format reposts
    let repostsStr = '';
    if (reposts.length > 0) {
      repostsStr = formatReactions('repost', dedupe(reposts));
    }

    // format bookmarks
    let bookmarksStr = '';
    if (bookmarks.length > 0) {
      bookmarksStr = formatReactions('bookmark', dedupe(bookmarks));
    }

    container.innerHTML = `<div id="webmentions">${repostsStr}${likesStr}${bookmarksStr}${formattedComments}${formattedMentions}</div>`;
  });
}());

// End-of-file marker for LibreJS
// @license-end
