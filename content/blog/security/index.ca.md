+++
title = "Seguretat per defecte"
date = 2023-02-22
updated = 2024-08-28
description = "tabi té una Política de Seguretat de Contingut (CSP) fàcilment personalitzable amb valors segurs per defecte. Obtingues tranquil·litat i un A+ en l'Observatori de Mozilla."

[taxonomies]
tags = ["seguretat", "funcionalitat"]

[extra]
social_media_card = "social_cards/ca_blog_security.jpg"
+++

La configuració per defecte del tema obté una puntuació A+ a l'[Observatori de Mozilla](https://observatory.mozilla.org).[^1]

Això s'aconsegueix configurant programàticament les capçaleres de la Política de Seguretat de Contingut (CSP) basant-se en una llista de dominis permesos definida per l'usuari en el fitxer `config.toml`. Aquí tens la configuració per defecte i recomanada (pots eliminar l'última directiva si no vols inserir vídeos de YouTube):

```toml
[extra]
allowed_domains = [
    { directive = "font-src", domains = ["'self'", "data:"] },
    { directive = "img-src", domains = ["'self'", "https://*", "data:"] },
    { directive = "script-src", domains = ["'self'"] },
    { directive = "style-src", domains = ["'self'"] },
    { directive = "frame-src", domains = ["https://www.youtube-nocookie.com"] },
]
```

La llista `allowed_domains` especifica les URLs a les quals el lloc web hauria de poder connectar-se, i cada domini de la llista està associat amb una directiva CSP com `frame-src`, `connect-src` o `script-src`. El fitxer `templates/partials/header.html` genera dinàmicament la capçalera CSP basant-se en aquesta llista.

Aquesta funcionalitat permet personalitzar fàcilment les capçaleres de seguretat del lloc web per permetre casos d'ús específics, com ara inserir vídeos de YouTube, carregar scripts o tipografies remotes ([no recomanat](https://www.albertovarela.net/blog/2022/11/stop-using-google-fonts/)).

Pots desactivar les capçaleres (permitint-ho tot) en una pàgina, secció, o globalment configurant `enable_csp = false` en el front matter o en el fitxer `config.toml`.

**Notas**:

- [Habilitar els comentaris](@/blog/comments/index.ca.md), [les analítiques](@/blog/mastering-tabi-settings/index.ca.md#analisi-web), o [els diagrames de mermaid](@/blog/shortcodes/index.ca.md#diagrames-de-mermaid) permet automàticament els scripts/frames/estils/conexions pertinents.
- Per utilitzar un [tema de resaltat de sintaxis integrat a Zola](https://www.getzola.org/documentation/getting-started/configuration/#syntax-highlighting), has de permetre `unsafe-inline` a la directiva `style-src`:

    ```
    { directive = "style-src", domains = ["'self'", "'unsafe-inline'"] },
    ```

---

[^1]: Requereix una configuració adequada del servidor web (p. ex., redirigir el trànsit HTTP a HTTPS).
