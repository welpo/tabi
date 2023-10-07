+++
title = "Afegeix comentaris a les teves publicacions amb aquestes 4 plataformes"
date = 2023-07-14
updated = 2023-07-26
description = "Descobreix com habilitar una secció de comentaris a les teves publicacions utilitzant giscus, utterances, Hyvor Talk, o Isso, permetent la interacció i feedback dels lectors."

[taxonomies]
tags = ["funcionalitat", "tutorial"]

[extra]
giscus = true
quick_navigation_buttons = true
toc = true
social_media_card = "social_cards/ca_blog_comments.jpg"
+++

tabi actualment suporta quatre sistemes de comentaris: [giscus](https://giscus.app/ca) i [utterances](https://utteranc.es/), [Hyvor Talk](https://talk.hyvor.com/) i [Isso](https://isso-comments.de/).

giscus i utterances són projectes de codi obert que et permeten afegir una secció de comentaris al teu lloc web utilitzant les «issues» (utterances) o «discussions» (giscus) de GitHub. Són perfectes per a generadors de llocs estàtics com Zola, ja que permeten als teus lectors interactuar i deixar comentaris a les teves publicacions sense requerir un backend tradicional o una base de dades.

Com que tots dos es basen en GitHub, giscus i utterances requereixen que els usuaris tinguin un compte a GitHub i autoritzin l'aplicació respectiva. Alternativament, els visitants també poden comentar directament en la discussió o «issue» corresponent a GitHub.

Ambdues són excel·lents eines per afegir comentaris al teu blog, però giscus té alguns avantatges:
- Més temes.
- Suport per a reaccions.
- Respostes a comentaris i vista de conversa.
- Més segur: utterances requereix habilitar estils en línia no segurs («unsafe inline styles») per establir l'altura del frame; giscus no.
- Suport multilingüe: utterances només està disponible en anglès; giscus suporta més de 20 idiomes.
- Desenvolupament més actiu: l'últim commit de giscus, en el moment d'aquesta publicació, va ser fa dos dies. L'últim commit d'utterances es va fer fa més d'un any.

Hyvor Talk és una plataforma de comentaris de pagament centrada en la privadesa. Ofereix tots els avantatges del giscus i alguns més, com la moderació i la detecció de correu brossa.

Isso és un sistema de comentaris de codi obert autoallotjat que emmagatzema els comentaris a la seva pròpia base de dades. Un dels seus principals avantatges és la privacitat; no comparteix les dades dels usuaris amb tercers. També té una interfície lleugera i neta, facilitant als teus visitants deixar comentaris. Isso també permet comentaris anònims, potencialment augmentant la participació dels usuaris a la teva pàgina web.

## Configuració

### Sistemes basats en GitHub

giscus y utterances requereixen una configuració similar. Primer, visita el lloc web del sistema que vulguis habilitar: [giscus.app](https://giscus.app/ca) o [utteranc.es](https://utteranc.es/).

Segueix les instruccions de la secció **Configuració** del lloc web, i tria les opcions que prefereixis. Finalment, estableix els valors que es mostren a la secció **Habilitar giscus/utterances** (el bloc de codi `script`) en la secció corresponent del teu `config.toml`: `[extra.giscus]` o `[extra.utterances]`.

#### giscus

giscus té més opcions que utterances:

```toml
[extra.giscus]
enabled_for_all_posts = false
automatic_loading = true
repo = "elTeuNomDUsuariDeGithub/elTeuRepositori"
repo_id = "LaTevaIDdeRepositori"
category = "Anuncis"
category_id = "LaTevaIDdeCategoria"
mapping = "slug"
strict_title_matching = 1  # 1 per habilitar, 0 per deshabilitar.
enable_reactions = 1  # 1 per habilitar, 0 per deshabilitar.
comment_box_above_comments = true
light_theme = "noborder_light"
dark_theme = "noborder_dark"
lang = ""  # Deixa en blanc perquè coincideixi amb l'idioma de la pàgina.
lazy_loading = true
```
#### utterances

```
[extra.utterances]
enabled_for_all_posts = false
automatic_loading = true
repo = "elTeuNomDUsuariDeGithub/elTeuRepositori"
issue_term = "slug"
label = "💬"
light_theme = "github-light"
dark_theme = "photon-dark"
lazy_loading = true
```

### Hyvor Talk

Configura el teu lloc web des de la [consola Hyvor Talk](https://talk.hyvor.com/console) i completa la configuració a `config.toml`:

```toml
[extra.hyvortalk]
enabled_for_all_posts = false
automatic_loading = true
website_id = "1234"
page_id_is_slug = true
lang = ""
page_author = ""  # Correu (o correu codificat en base64) de l'autor.
lazy_loading = true
```

### Isso

Per habilitar Isso, primer hauràs d'instal·lar i executar un servidor Isso ([aquí tens una guia útil](https://blog.phusion.nl/2018/08/16/isso-simple-self-hosted-commenting-system/#1installingisso)). Després, completa aquestes configuracions a `config.toml`:

```toml
[extra.isso]
enabled_for_all_posts = false
automatic_loading = true
endpoint_url = "https://example.com/comments/"  # URL a Isso.
page_id_is_slug = true
lang = ""
max_comments_top = "inf"
max_comments_nested = "5"
avatar = true
voting = true
page_author_hashes = ""
lazy_loading = true
```

### Configuracions comunes

La opció `enabled_for_all_posts = true` habilita globalment el sistema de comentaris corresponent.

Alternativament, pots habilitar els comentaris a publicacions concretes afegint el nom del sistema (`utterances`, `giscus`, `hyvortalk` o `isso`) ` = true`. Per exemple, així és com habilitaries giscus:

```toml,hl_lines=09-10
title = "L'art de l'entremaliadura segons Shin-Chan
date = 1990-02-14
description = "Descobreix com les travessures poden canviar la teva perspectiva de vida."

[taxonomies]
tags = ["personal", "travessures"]

[extra]
giscus = true
```

Si accidentalment habilites més d'un sistema, Zola mostrarà un error.

Si el teu lloc web té múltiples idiomes amb publicacions coincidents (com aquesta demo), i t'agradaria compartir comentaris entre idiomes, has d'utilitzar `issue_term = "slug"` (per giscus y utterances) o `page_id_is_slug = true` (per Hyvor Talk o Isso). Això utilitzarà el nom de l'arxiu Markdown (sense l'etiqueta d'idioma) com a identificador. Totes les altres opcions crearan diferents seccions de comentaris per a cada idioma.

## Exemple en viu

A continuació trobaràs el widget de giscus amb la configuració mostrada [a dalt](#giscus).
