<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom" xmlns:base="http://purl.org/atompub/base/1.0/" xmlns:str="https://github.com/welpo/tabi">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
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
      <body>
        <div class="content">
          <main>
            <div class="info-box">
              <strong><xsl:value-of select="/atom:feed/str:translations/str:this_is_a_web_feed" /></strong>, <xsl:value-of select="/atom:feed/str:translations/str:also_known_as_an_Atom_feed" />. <strong><xsl:value-of select="/atom:feed/str:translations/str:subscribe" /></strong> <xsl:text> </xsl:text><xsl:value-of select="/atom:feed/str:translations/str:by_copying_the_URL_from_the_address_bar_into_your_newsreader" />.<xsl:text> </xsl:text><xsl:value-of select="/atom:feed/str:translations/str:visit" /><xsl:text> </xsl:text><a href="https://aboutfeeds.com">About Feeds</a><xsl:text> </xsl:text><xsl:value-of select="/atom:feed/str:translations/str:to_learn_more_and_get_started" />.<xsl:text> </xsl:text><xsl:value-of select="/atom:feed/str:translations/str:it_s_free" />.
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
                <xsl:value-of select="/atom:feed/atom:link[2]/@href"/>
              </xsl:attribute>
            <xsl:value-of select="/atom:feed/str:translations/str:visit" /><xsl:text> </xsl:text><xsl:value-of select="/atom:feed/str:translations/str:website" /><xsl:text> </xsl:text>→</a><p></p>
            </section>

            <div class="padding-top listing-title bottom-divider">
            <h1><xsl:value-of select="/atom:feed/str:translations/str:recent_posts" /></h1>
            </div>
            <div class="bloglist-container">
              <xsl:for-each select="/atom:feed/atom:entry">
                <section class="bloglist-row bottom-divider">
                  <div class="date">
                    <xsl:value-of select="substring(atom:published, 0, 11)"/>
                  </div>
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
