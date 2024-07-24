<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom" xmlns:base="http://purl.org/atompub/base/1.0/" xmlns:str="https://github.com/welpo/tabi">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <xsl:attribute name="data-theme">
        <xsl:value-of select="/atom:feed/str:translations/str:default_theme"/>
      </xsl:attribute>
      <head>
        <title>
          <xsl:value-of select="/atom:feed/atom:title"/> • Feed
        </title>
        <meta charset="utf-8"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="{/atom:feed/@xml:base}/main.css"/>
        <link rel="stylesheet" href="{/atom:feed/atom:link[@rel='extra-stylesheet']/@href}" />

      </head>
      <body dir="auto">
        <div class="content">
          <main>
            <div class="info-box">
              <!-- This block replaces the text "About Feeds" with a hyperlink in the translated string -->
              <xsl:choose>
                <xsl:when test="contains(/atom:feed/str:translations/str:about_feeds, 'About Feeds')">
                  <xsl:value-of select="substring-before(/atom:feed/str:translations/str:about_feeds, 'About Feeds')"/>
                  <a href="https://aboutfeeds.com/" target="_blank">About Feeds</a>
                  <xsl:value-of select="substring-after(/atom:feed/str:translations/str:about_feeds, 'About Feeds')"/>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="/atom:feed/str:translations/str:about_feeds"/>
                </xsl:otherwise>
              </xsl:choose>
            </div>
            <section id="banner-home-subtitle">
              <div class="padding-top home-title">
                <xsl:value-of select="/atom:feed/atom:title"/>
              </div>
              <p>
                <xsl:value-of select="/atom:feed/atom:subtitle"/>
              </p>
              <a class="readmore">
                <xsl:attribute name="href">
                  <xsl:value-of select="/atom:feed/@xml:base"/>
                </xsl:attribute>
                <xsl:value-of select="/atom:feed/str:translations/str:visit_the_site" />&#160;<span class="arrow">→</span>
              </a>
              <p></p>
            </section>
            <div class="padding-top listing-title bottom-divider">
              <h1><xsl:value-of select="/atom:feed/str:translations/str:recent_posts" /></h1>
            </div>
            <xsl:variable name="post_listing_date" select="/atom:feed/atom:post_listing_date"/>
            <div class="bloglist-container">
              <xsl:for-each select="/atom:feed/atom:entry">
                <section class="bloglist-row bottom-divider">
                  <ul class="bloglist-meta">
                    <xsl:variable name="show_date" select="$post_listing_date = 'date' or $post_listing_date = 'both'"/>
                    <xsl:variable name="show_updated" select="$post_listing_date = 'updated' or $post_listing_date = 'both'"/>

                    <xsl:if test="$show_date">
                      <li class="date">
                        <xsl:value-of select="substring(atom:published, 0, 11)"/>
                      </li>
                    </xsl:if>

                    <xsl:if test="$show_date and $show_updated">
                      <li class="mobile-only">
                        <xsl:value-of select="/atom:feed/str:translations/str:separator"/>
                      </li>
                    </xsl:if>

                    <xsl:if test="$show_updated">
                      <li class="date">
                        <xsl:variable name="update_string" select="/atom:feed/str:translations/str:last_updated_on"/>
                        <xsl:variable name="update_date" select="substring(atom:updated, 0, 11)"/>
                        <xsl:value-of select="substring-before($update_string, '$DATE')"/>
                        <xsl:value-of select="$update_date"/>
                        <xsl:value-of select="substring-after($update_string, '$DATE')"/>
                      </li>
                    </xsl:if>
                  </ul>
                  <div class="bloglist-content">
                    <div class="bloglist-title">
                      <a>
                        <xsl:attribute name="href">
                          <xsl:value-of select="atom:link/@href"/>
                        </xsl:attribute>
                        <xsl:value-of select="atom:title"/>
                      </a>
                    </div>
                    <div class="description">
                      <xsl:value-of select="atom:summary"/>
                    </div>
                    <a class="readmore" href="">
                      <xsl:attribute name="href">
                        <xsl:value-of select="atom:link/@href"/>
                      </xsl:attribute>
                    </a>
                  </div>
                </section>
              </xsl:for-each>
            </div>
          </main>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
