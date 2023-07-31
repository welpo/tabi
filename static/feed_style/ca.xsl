<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="ca">
      <head>
        <title>
          <xsl:value-of select="/atom:feed/atom:title"/> • Canal Atom
        </title>
        <meta charset="utf-8"/>
        <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="../main.css"/>
      </head>
      <body>
        <div class="content">
          <main>
            <div class="info-box">
              <strong>Aquest és un canal web</strong>, també conegut com a canal Atom. <strong>Subscriu-te</strong> copiant l'URL de la barra d'adreces al teu lector de notícies. Visita <a href="https://aboutfeeds.com">Sobre Feeds</a> (en anglès) per aprendre més i començar. És gratuït.
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
            Visita la web → </a><p></p>
            </section>

            <div class="padding-top listing-title bottom-divider">
            <h1>Publicacions recents</h1>
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
