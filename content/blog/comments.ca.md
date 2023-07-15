+++
title = "Afegeix comentaris a les teves publicacions amb giscus o utterances"
date = 2023-07-14
updated = 2023-07-16
description = "Descobreix com habilitar una secció de comentaris a les teves publicacions utilitzant giscus o utterances, permetent la interacció i feedback dels lectors."

[taxonomies]
tags = ["funcionalitat", "tutorial"]

[extra]
giscus = true
quick_navigation_buttons = true
+++

tabi actualment suporta dos sistemes de comentaris: [giscus](https://giscus.app/ca) i [utterances](https://utteranc.es/).

giscus i utterances són projectes de codi obert que et permeten afegir una secció de comentaris al teu lloc web utilitzant les «issues» (utterances) o «discussions» (giscus) de GitHub. Són perfectes per a generadors de llocs estàtics com Zola, ja que permeten als teus lectors interactuar i deixar comentaris a les teves publicacions sense requerir un backend tradicional o una base de dades.

Com que tots dos es basen en GitHub, giscus i utterances requereixen que els usuaris tinguin un compte a GitHub i autoritzin l'aplicació respectiva. Alternativament, els visitants també poden comentar directament en la discussió o «issue» corresponent a GitHub.

Ambdues són excel·lents eines per afegir comentaris al teu blog, però giscus té alguns avantatges:
- Més temes.
- Suport per a reaccions.
- Respostes a comentaris i vista de conversa.
- Més segur: utterances requereix habilitar estils en línia no segurs («unsafe inline styles») per establir l'altura del frame; giscus no.
- Suport multilingüe: utterances només està disponible en anglès; giscus suporta més de 20 idiomes.
- Desenvolupament més actiu: l'últim commit de giscus, en el moment d'aquesta publicació, va ser fa una setmana. L'últim commit d'utterances es va fer fa més d'un any.

## Configuració

Tots dos sistemes requereixen una configuració similar. Primer, visita el lloc web del sistema que vols habilitar: [giscus.app](https://giscus.app/ca) o [utteranc.es](https://utteranc.es/).

Segueix les instruccions de la secció **Configuració** del lloc web, i tria les opcions que prefereixis. Finalment, estableix els valors que es mostren a la secció **Habilitar giscus/utterances** (el bloc de codi `script`) en la secció corresponent del teu `config.toml`: `[extra.giscus]` o `[extra.utterances]`.

### Giscus

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
### utterances

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
### Configuracions comunes

La opció `enabled_for_all_posts = true` habilita globalment el sistema de comentaris corresponent.

Alternativament, pots habilitar els comentaris de publicacions concretes afegint `utterances = true` o `giscus = true`. Per exemple, així és com habilitaries giscus:

```toml,hl_lines=09-10
+++
title = "L'art de l'entremaliadura segons Shin-Chan
date = 1990-02-14
updated = 2023-07-16
description = "Descobreix com les travessures poden canviar la teva perspectiva de vida."

[taxonomies]
tags = ["personal", "travessures"]

[extra]
giscus = true
+++
```

Si accidentalment habilitas tots dos sistemes, Zola mostrarà un error.

Si el teu lloc web té múltiples idiomes amb publicacions coincidents (com aquesta demo), i t'agradaria compartir comentaris entre idiomes, has d'utilitzar `issue_term = "slug"`. Això utilitzarà el nom de l'arxiu Markdown (sense l'etiqueta d'idioma) com a identificador. Totes les altres opcions crearan diferents seccions de comentaris per a cada idioma.

## Exemple en viu

A continuació trobaràs el widget de giscus amb la configuració mostrada [a dalt](#giscus).
