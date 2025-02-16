+++
title = "Guia completa sobre sèries"
date = 2024-11-08
updated = 2025-02-15
description = "Aprèn a organitzar les teves publicacions en sèries seqüencials, perfectes per a tutorials, cursos i històries de diverses parts."

[taxonomies]
tags = ["funcionalitat", "tutorial", "preguntes freqüents", "sèries"]

[extra]
quick_navigation_buttons = true
toc = true
mermaid = true
social_media_card = "social_cards/ca_blog_series.jpg"
+++

Una sèrie organitza publicacions relacionades en ordre seqüencial, similar als capítols d'un llibre. A diferència de les etiquetes, que simplement agrupen contingut relacionat, les sèries suggereixen un ordre específic de lectura de principi a fi.

Les publicacions dins d'una sèrie no necessiten publicar-se de forma consecutiva; la funció de sèries reuneix publicacions temàticament vinculades en una seqüència coherent.

El següent diagrama il·lustra com les publicacions de la sèrie (3, 5 i 8) existeixen dins del flux principal del blog mentre mantenen la seva pròpia seqüència ordenada dins de Sèrie 1.

{% mermaid(full_width=true) %}
flowchart
    subgraph main[BLOG]
        P1[Post 1]
        P2[P2]
        P3[P3]
        P4[P4]
        P5[P5]
        P6[P6]
        P7[P7]
        P8[P8]
        P9[P9]
    end
    subgraph series1[SÈRIE 1]
        PS1["Post Sèrie 1 (=P3)"]
        PS2["Post Sèrie 2 (=P5)"]
        PS3["Post Sèrie 3 (=P8)"]
    end
    P3 o-.-o PS1
    P5 o-.-o PS2
    P8 o-.-o PS3
{% end %}

## Inici ràpid

1. Crea un directori per a la teva sèrie
2. Crea `_index.md` al directori de la sèrie
3. Configura el front matter de `_index.md`:

    ```toml,name=series/_index.md
    title = "Aprenent Rust"
    template = "series.html"
    sort_by = "slug"
    transparent = true

    [extra]
    series = true
    ```

4. Crea els teus articles de la sèrie en aquest directori

Vols saber-ne més? Continua llegint!

## Com funcionen les sèries?

Una sèrie és simplement una secció que tabi gestiona de manera especial. Per a més detalls sobre seccions, consulta la [documentació de Zola](https://www.getzola.org/documentation/content/section/).

Prenent l'exemple del diagrama anterior, l'estructura de directoris seria així:

```txt
content/
    _index.md
    blog/
        _index.md
        post1/
            index.md
        post2/
            index.md
        post4/
            index.md
        post6/
            index.md
        post7/
            index.md
        post9/
            index.md
        serie1/
            _index.md
            post3/
                index.md
            post5/
                index.md
            post8/
                index.md
```

Per crear una sèrie, necessites:

1. Utilitzar la plantilla `series.html`
2. Establir `series = true` a la configuració `[extra]` de la secció
3. Activar `transparent = true` per integrar les publicacions de la sèrie amb la secció del blog principal

La pàgina principal de la sèrie mostra un resum seguit d'una llista de totes les publicacions a la sèrie:

{{ dual_theme_image(light_src="blog/series/img/series_light.webp", dark_src="blog/series/img/series_dark.webp" alt="una sèrie", full_width=true) }}

## Saltar a les publicacions

Si el contingut d'una sèrie (el Markdown després del frontmatter a `_index.md`) supera els 2000 caràcters, apareix un enllaç "Salta a les publicacions" al costat del títol de la sèrie.

{{ dual_theme_image(light_src="blog/series/img/jump_to_series_posts_light.webp", dark_src="blog/series/img/jump_to_series_posts_dark.webp" alt="enllaç per saltar a les publicacions de la sèrie", full_width=true) }}

Per forçar l'activació o desactivació d'aquesta funció, configura `show_jump_to_posts` a la secció `[extra]` de la teva secció de sèries o a `config.toml`. Aquesta configuració segueix [la jerarquia](@/blog/mastering-tabi-settings/index.ca.md#jerarquia-de-configuracio).

## Pàgines de sèries i ordre

Totes les pàgines a la secció de sèries seran pàgines de sèrie. Les pàgines s'ordenaran segons el `sort_by` de la secció.

Tot i que les sèries mantenen el seu propi ordre intern, romanen independents del flux cronològic de la secció principal (per exemple, `blog/`) gràcies a la configuració `transparent`.

### Opcions d'ordre

Tria entre aquests mètodes d'ordre, cadascun amb els seus avantatges:

{% wide_container() %}

`sort_by` | avantatges | desavantatges
---------|------------|---------------
`slug`    | L'ordre de les pàgines és explícit a la ruta (per exemple, `example.com/blog/series1/01-series-post-un`). | Cada pàgina de la sèrie ha de tenir el prefix corresponent.
`weight`  | L'ordre de les pàgines és fàcil de configurar de forma transparent.<br>La primera publicació té pes `1`, la segona pes `2` i així successivament. | Cada pàgina de la sèrie ha de tenir el seu pes configurat.
`date`    | L'ordre de les pàgines es pot configurar una sola vegada a la configuració de la secció. No cal fer res a cada pàgina. | L'ordre de les pàgines s'ha d'invertir perquè la primera pàgina sol ser la més antiga. Això només es pot aconseguir paginant la secció (`paginate_by = 9999`) i invertint el seu ordre (`paginate_reversed = true`).

{% end %}

{{ admonition(type="danger", title="Versió de Zola per ordenar per data", text="Per invertir correctament les dates, es requereix Zola v0.19.3+ (no publicada) perquè la informació de paginació estigui disponible a través de la funció `get_section`. En cas contrari, qualsevol cosa que depengui de l'ordre de les pàgines de la sèrie no serà correcta (per exemple, pàgina anterior/següent, llistes ordenades i no ordenades...) Vegeu [Zola PR #2653](https://github.com/getzola/zola/pull/2653).") }}

### Indexació de pàgines

Les pàgines en una sèrie s'indexen començant des d'1, seguint el seu ordre `sort_by`. Per invertir la indexació (fent que la primera pàgina tingui l'índex més alt), afegeix aquesta configuració a `_index.md` o `config.toml`:

```toml
[extra]
post_listing_index_reversed = true  # Per defecte és false si no es configura
```

{{ dual_theme_image(light_src="blog/series/img/series_reversed_light.webp", dark_src="blog/series/img/series_reversed_dark.webp" alt="una sèrie amb índexs invertits", full_width=true) }}

Aquesta configuració segueix [la jerarquia](@/blog/mastering-tabi-settings/index.ca.md#jerarquia-de-configuracio).

## Plantilles d'introducció i conclusió

Els articles d'una sèrie poden tenir seccions automàtiques d'introducció i conclusió. Aquestes es configuren al `_index.md` de la teva sèrie. Un exemple bàsic:

```toml,name=series/_index.md
[extra.series_intro_templates]
default = "Aquest article és part de la sèrie $SERIES_HTML_LINK."

[extra.series_outro_templates]
default = "Gràcies per llegir la part $SERIES_PAGE_INDEX de $SERIES_HTML_LINK!"
```

Les seccions d'introducció i conclusió tenen les seves pròpies classes CSS (`series-page-intro` i `series-page-outro`), que et permeten personalitzar la seva aparença mitjançant [CSS personalitzat](@/blog/mastering-tabi-settings/index.ca.md#estils-css-personalitzats).

### Tipus de plantilles

El sistema de sèries utilitza diferents plantilles segons la posició de l'article a la sèrie:

- `next_only` - Utilitzat per al primer article (té article següent però no anterior)
- `middle` - Utilitzat per a articles amb articles anterior i següent
- `prev_only` - Utilitzat per a l'últim article (té article anterior però no següent)
- `default` - Plantilla per defecte utilitzada quan no existeix una plantilla específica per a la posició

El sistema determina automàticament quina plantilla utilitzar segons la posició de l'article. Les plantilles es defineixen a la configuració de la sèrie (`_index.md`), com `extra.series_intro_templates` i `extra.series_outro_templates`:

```toml,name=series/_index.md
[extra.series_intro_templates]
next_only = "Benvingut a la part 1! Següent: $NEXT_HTML_LINK"
middle = "Anterior: $PREV_HTML_LINK | Següent: $NEXT_HTML_LINK"
prev_only = "El capítol final! Anteriorment: $PREV_HTML_LINK"
default = "Part $SERIES_PAGE_INDEX de $SERIES_PAGES_NUMBER"
```

Totes les plantilles són opcionals. La selecció de plantilles segueix un sistema de prioritat:

1. Si existeix una plantilla específica per a la posició (`next_only`, `middle`, o `prev_only`), s'utilitzarà aquesta
2. Si no, s'utilitza la plantilla `default`
3. Si no es defineix cap plantilla, no es mostrarà informació de la sèrie

Mira l'[exemple de plantilla](#exemple-de-plantilla) per veure un exemple més elaborat.

### Ubicació al contingut

Per defecte:

- Les introduccions de sèrie apareixen a l'inici del teu article
- La conclusió apareix al final (abans de les notes al peu, si n'hi ha)

Pots controlar exactament on apareixen utilitzant `<!-- series_intro -->` i `<!-- series_outro -->` al teu Markdown:

```markdown
Aquest paràgraf apareix abans de la introducció de la sèrie.

<!-- series_intro -->

Contingut principal de l'article.

<!-- series_outro -->

## Recursos d'aprenentatge

Contingut addicional...

[^1]: Les notes al peu sempre apareixeran al final.
```

## Variables

Les plantilles de sèries utilitzen un sistema flexible de variables que et permet:

1. Fer referència a informació de la sèrie (títol, enllaços)
2. Afegir navegació entre articles
3. Mostrar indicadors de progrés
4. Incloure informació personalitzada utilitzant les teves pròpies variables

Les variables són marcadors que comencen amb `$` i es reemplacen amb contingut real quan es construeix el teu lloc. Per exemple, `$SERIES_HTML_LINK` es converteix en un enllaç clicable a la pàgina índex de la teva sèrie.

Hi ha tres tipus de variables:

- [Variables bàsiques de sèrie](#variables-basiques-de-serie): Informació general sobre la sèrie
- [Variables de navegació](#variables-de-navegacio): Enllaços a articles anterior/següent
- [Variables personalitzades](#variables-personalitzades): Els teus propis marcadors per a informació addicional

### Variables bàsiques de sèrie

{% wide_container() %}

| Variable | Disponibilitat | Retorna | Descripció | Exemple d'ús | Exemple de sortida |
|----------|---------------|----------|------------|--------------|-------------------|
| `$SERIES_TITLE` | Sempre | Text | Títol de la sèrie en text pla | `Part de $SERIES_TITLE` | Part d'Aprenent Rust |
| `$SERIES_PERMALINK` | Sempre | Text | URL a l'índex de la sèrie | `[Veure totes les publicacions]($SERIES_PERMALINK)` | [Veure totes les publicacions](/series/learn-rust) |
| `$SERIES_HTML_LINK` | Sempre | HTML | Enllaç llest per usar a la sèrie | `Benvingut a $SERIES_HTML_LINK!` | Benvingut a <a href="/series/learn-rust">Aprenent Rust</a>! |
| `$SERIES_PAGES_NUMBER` | Sempre | Nombre | Total d'articles a la sèrie | `Una sèrie de $SERIES_PAGES_NUMBER parts` | Una sèrie de 5 parts |
| `$SERIES_PAGE_INDEX` | Sempre | Nombre | Posició de l'article actual | `Part $SERIES_PAGE_INDEX de $SERIES_PAGES_NUMBER` | Part 3 de 5 |
| `$SERIES_PAGES_OLIST` | Sempre | HTML | Llista ordenada de tots els articles | `Articles a la sèrie: $SERIES_PAGES_OLIST` | Articles a la sèrie: <ol><li>Article actual</li><li><a href="...">Altres articles</a></li></ol> |
| `$SERIES_PAGES_ULIST` | Sempre | HTML | Llista desordenada de tots els articles | `Articles a la sèrie: $SERIES_PAGES_ULIST` | Articles a la sèrie: <ul><li>Article actual</li><li><a href="...">Altres articles</a></li></ul> |

{% end %}

{{ admonition(type="tip", title="CONSELL: Text personalitzat amb permalinks", text='Els enllaços markdown com `[text]($SERIES_PERMALINK)` seran marcats (i [estilitzats](@/blog/mastering-tabi-settings/index.ca.md#indicador-d-enllacos-externs)) com externs. Si necessites text personalitzat i vols evitar l\'estil extern, utilitza HTML: `<a href=\"$SERIES_PERMALINK\">el teu text</a>`.') }}

### Variables de navegació

{% wide_container() %}

| Variable | Disponibilitat | Retorna | Descripció | Exemple d'ús | Exemple de sortida |
|----------|---------------|----------|------------|--------------|-------------------|
| `$PREV_TITLE` | Existeix anterior | Text | Títol de l'article anterior | `Anteriorment: $PREV_TITLE` | Anteriorment: Configurant el teu entorn |
| `$PREV_PERMALINK` | Existeix anterior | Text | URL a l'article anterior | `[← Enrere]($PREV_PERMALINK)` | [← Enrere](/series/learn-rust/setup) |
| `$PREV_HTML_LINK` | Existeix anterior | HTML | Enllaç llest per usar a l'anterior | `Llegeix primer $PREV_HTML_LINK` | Llegeix primer <a href="/series/learn-rust/setup">Configurant el teu entorn</a> |
| `$PREV_DESCRIPTION` | Existeix anterior | Text | Descripció de l'article anterior | `Resum: $PREV_DESCRIPTION` | Resum: Configurant Rust |
| `$NEXT_TITLE` | Existeix següent | Text | Títol del següent article | `Següent: $NEXT_TITLE` | Següent: Patrons avançats |
| `$NEXT_PERMALINK` | Existeix següent | Text | URL al següent article | `[Continuar →]($NEXT_PERMALINK)` | [Continuar →](/series/learn-rust/patterns) |
| `$NEXT_HTML_LINK` | Existeix següent | HTML | Enllaç llest per usar al següent | `Continua amb $NEXT_HTML_LINK` | Continua amb <a href="/series/learn-rust/patterns">Patrons avançats</a> |
| `$NEXT_DESCRIPTION` | Existeix següent | Text | Descripció del següent article | `Properament: $NEXT_DESCRIPTION` | Properament: Aprèn sobre les característiques avançades de pattern matching en Rust |

{% end %}

### Referència al primer article

{% wide_container() %}

| Variable | Disponibilitat | Retorna | Descripció | Exemple d'ús | Exemple de sortida |
|----------|---------------|----------|------------|--------------|-------------------|
| `$FIRST_TITLE` | Sempre | Text | Títol del primer article | `Comença amb $FIRST_TITLE` | Comença amb Introducció a Rust |
| `$FIRST_HTML_LINK` | Sempre | HTML | Enllaç llest per usar al primer article | `Comença a $FIRST_HTML_LINK` | Comença a <a href="/series/learn-rust/intro">Introducció a Rust</a> |

{% end %}

### Exemple de plantilla

{{ admonition(type="tip", title="Variables HTML vs text", text="Utilitza variables HTML (que acaben en `_HTML_LINK`) quan vulguis enllaços preparats per usar. Utilitza variables de text (que acaben en `_TITLE` o `_PERMALINK`) quan vulguis més control sobre el format.") }}

```toml,name=series/_index.md
# Introducció
[extra.series_intro_templates]
next_only = """
Benvingut a $SERIES_HTML_LINK! Aquesta sèrie de $SERIES_PAGES_NUMBER parts t'ensenyarà Rust des de zero.

Següent: $NEXT_HTML_LINK - $NEXT_DESCRIPTION
"""

middle = """
📚 Part $SERIES_PAGE_INDEX de $SERIES_PAGES_NUMBER a $SERIES_HTML_LINK

Anterior: $PREV_HTML_LINK
Següent: $NEXT_HTML_LINK
"""

prev_only = """
Benvingut a l'última part de $SERIES_HTML_LINK!
Ets nou? Comença amb $FIRST_HTML_LINK per construir una base sòlida.

Anterior: $PREV_HTML_LINK
"""

# Plantilla de respatller
default = "Aquest article és part de la sèrie $SERIES_HTML_LINK."

# Conclusió
[extra.series_outro_templates]
next_only = """
Gràcies per llegir! 🙌

Continua el teu viatge amb $NEXT_HTML_LINK, on $NEXT_DESCRIPTION
O revisa l'esquema complet de la sèrie [$SERIES_TITLE]($SERIES_PERMALINK).
"""

middle = """
---
📝 Navegació de la sèrie

- Anterior: $PREV_HTML_LINK
- Següent: $NEXT_HTML_LINK
- [Resum de la sèrie]($SERIES_PERMALINK)
"""

prev_only = """
🎉 Felicitats! Has completat $SERIES_HTML_LINK.

Vols repassar? Aquí vam començar: $FIRST_HTML_LINK
O revisa el que acabem de veure a $PREV_HTML_LINK.
"""

# Respatller.
default = """
---
Aquest article és la part $SERIES_PAGE_INDEX de $SERIES_PAGES_NUMBER a $SERIES_HTML_LINK.
"""
```

### Variables personalitzades

Les plantilles de sèries admeten variables personalitzades per incloure informació addicional a tota la teva sèrie. El procés té dos passos:

1. Primer, defineix els teus **marcadors** a la configuració de la teva sèrie (`_index.md`):

```toml,name=series/_index.md
[extra]
series = true
series_template_placeholders = ["$POSITION", "$TOPIC", "$DIFFICULTY"]
```

2. Després, a cada article de la sèrie, proporciona els valors per a aquests marcadors a `series_template_variables`:

```toml,name=series/article.md
[extra.series_template_variables]
position = "primer"
topic = "Variables i tipus"
difficulty = "Principiant"
```

### Ús de variables personalitzades

Pots usar les teves variables personalitzades a qualsevol plantilla, juntament amb les variables integrades:

```toml,name=series/_index.md
[extra.series_intro_templates]
default = """
Aquest és l'article $POSITION a $SERIES_HTML_LINK.
Tema d'avui: $TOPIC
Nivell de dificultat: $DIFFICULTY
"""
```

{{ admonition(type="warning", text="Encara que els marcadors es defineixen en majúscules (`$POSITION`), els noms de variables a `series_template_variables` han d'estar en minúscules (`position`).") }}

### Exemple amb variables personalitzades

```toml,name=series/_index.md
# A la configuració de la sèrie.
[extra]
series = true
series_template_placeholders = ["$LEARNING_TIME", "$KEY_CONCEPTS"]

series_intro_templates.default = """
📚 Part $SERIES_PAGE_INDEX de $SERIES_PAGES_NUMBER
⏱️ Temps estimat: $LEARNING_TIME
🔑 Conceptes clau: $KEY_CONCEPTS
"""
```

```toml,name=series/02-learning-rust/index.md
# En un article de la sèrie.
[extra.series_template_variables]
learning_time = "30 minuts"
key_concepts = "Funcions, gestió d'errors, coincidència de patrons"
```

Això generarà:

```txt
📚 Part 2 de 5
⏱️ Temps estimat: 30 minuts
🔑 Conceptes clau: Funcions, gestió d'errors, coincidència de patrons
```

{{ admonition(type="warning", title="Variables que falten", text="Si uses un marcador a les teves plantilles però no proporciones el seu valor a `series_template_variables`, la compilació fallarà amb un error que llista les variables que falten.") }}
