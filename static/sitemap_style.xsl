<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
        xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
        xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:output method="html" encoding="UTF-8" indent="yes" />

    <!-- The base URL is assumed to be the first URL in the sitemap. -->
    <xsl:variable name="baseUrl" select="(sitemap:urlset/sitemap:url)[1]/sitemap:loc"/>

    <xsl:template match="/sitemap:urlset">
        <html>
            <head>
                <title>Sitemap</title>
                <link rel="stylesheet" href="{$baseUrl}main.css"/>
                <script src="{$baseUrl}js/sortTable.min.js" defer="defer"></script>
            </head>
            <body>
                <div class="full-width">
                    <h1>Sitemap</h1>
                    <p>Number of URLs: <xsl:value-of select="count(sitemap:url)"/></p>
                    <table id="sitemapTable" class="sitemap-table" aria-label="URLs on the site and their last modification dates">
                        <thead>
                            <tr>
                                <th><span class="columntitle">URL</span></th>
                                <th><span class="columntitle">Last modification</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            <xsl:for-each select="sitemap:url">
                                <tr>
                                    <td>
                                        <a href="{sitemap:loc}">
                                            <xsl:value-of select="sitemap:loc"/>
                                        </a>
                                    </td>
                                    <td>
                                        <xsl:value-of select="sitemap:lastmod"/>
                                    </td>
                                </tr>
                            </xsl:for-each>
                        </tbody>
                    </table>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
