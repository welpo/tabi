+++
title = "Domina la configuració de tabi: guia completa"
date = 2023-09-18
updated = 2024-11-30
description = "Descobreix les múltiples maneres en què pots personalitzar tabi."

[taxonomies]
tags = ["funcionalitat", "tutorial", "preguntes freqüents"]

[extra]
pinned = true
quick_navigation_buttons = true
social_media_card = "social_cards/ca_blog_mastering_tabi_settings.jpg"
+++

Aquesta és la guia completa sobre la configuració a tabi. Si tens alguna pregunta, pots [obrir un issue a GitHub](https://github.com/welpo/tabi/issues/new) o [iniciar una discussió](https://github.com/welpo/tabi/discussions).

<details>
    <summary><b>Taula de continguts</b></summary>
    <!-- toc -->
</details>

## Jerarquia de configuració

tabi té una jerarquia que permet personalitzar el teu lloc a diferents nivells. La jerarquia (de menor a major prioritat) és la següent:

1. **Configuracions globals**: Aquestes són les configuracions que s'apliquen a tot el teu lloc. Es configuren a `config.toml`.
2. **Configuracions de secció**: Aquestes són les configuracions que s'apliquen a una secció del teu lloc (per exemple, `/blog` o `/projects`). Es configuren a la metainformació de l'arxiu `_index.md` de la secció.
3. **Configuració de la pàgina «pare»**: Per a pàgines anidades (pàgines dins de pàgines), aquestes són les configuracions de la pàgina que les conté.
4. **Configuracions de pàgina**: Aquestes són les configuracions que s'apliquen a una sola pàgina. Es configuren a la metainformació de la pàgina.

En tots els casos, les opcions de tabi es configuren a la secció `[extra]`.

Per a les configuracions que segueixen aquesta jerarquia, el valor establert a una pàgina reemplaça el valor d'una secció, que al seu torn reemplaça el valor global. En resum: com més específica sigui la configuració, més prioritat tindrà, o `pàgina > pàgina pare/secció > config.toml`.

---

## Cerca

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:--------------------:|:--------------------:|
|   ❌   |   ❌   |       ✅      |          ❌          |          ✅          |

tabi permet cerca local accessible i multilingüe amb [Elasticlunr](http://elasticlunr.com/). Per activar-la, necessites:

1. Establir un `default_language` a `config.toml`.
2. Establir `build_search_index = true`.
3. Opcionalment, configurar la secció `[search]`.

Per exemple:

```toml
base_url = "https://example.com"
default_language = "en"
build_search_index = true

[search]
index_format = "elasticlunr_json" # O el menys eficient "elasticlunr_javascript".
include_title = true
include_description = true
include_path = true
include_content = true
```

**Nota**: per suport de cerca en Xinès/Japonès, necessites utilitzar una [build personalitzada de Zola](https://github.com/getzola/zola/blob/master/Cargo.toml#L54-L55). Addicionalment, actualment no hi ha suport per a la cerca en català.

### Consideracions per a usuaris de Zola 0.17.X

Zola 0.17.X no proporciona accés a la variable `search.index_format` ([informe del bug](https://github.com/getzola/zola/issues/2165)). En utilitzar tabi, s'assumeix l'ús de l'índex JSON, que és més eficient. No obstant això, a causa d'[un altre bug](https://github.com/getzola/zola/issues/2193) solucionat en 0.18.0, l'índex JSON per a llocs multilingües no es genera correctament.

Els usuaris amb versions de Zola anteriors a 0.18.0 que vulguin utilitzar l'índex JavaScript necessiten establir la variable `index_format` a dos llocs:

```toml
[search]
index_format = "elasticlunr_javascript"

[extra]
index_format = "elasticlunr_javascript"
```

Això assegura que tabi carregui els arxius correctes. Recomanem actualitzar a Zola 0.18.0 o posterior per a una funcionalitat òptima.

### Detalls d'implementació

Per a detalls tècnics sobre la implementació de la cerca, incloent quan es carrega l'índex, característiques d'accessibilitat i altres detalls, consulta el [Pull Request #250](https://github.com/welpo/tabi/pull/250).

---

## Suport multilingüe

tabi ofereix suport multilingüe complet per al teu lloc Zola, des de configurar un idioma predeterminat fins a afegir tots els que vulguis. Consulta les [preguntes freqüents sobre idiomes](@/blog/faq-languages/index.ca.md) per a més informació.

---

## Aparença

### Pàgina principal

La [pàgina principal](/) d'aquesta demo té una capçalera amb una imatge, un títol i una descripció:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/header_light.webp", dark_src="blog/mastering-tabi-settings/img/header_dark.webp", alt="Capçalera de la pàgina principal") }}

#### Capçalera

Per configurar la imatge i el títol, pots utilitzar la variable `header` al front matter de l'arxiu `_index.md` de la secció. Per exemple:

```toml
[extra]
header = {title = "Hola! Soc tabi~", img = "img/main.webp", img_alt = "Óscar Fernández, l'autor del tema" }
```

La descripció és contingut Markdown normal, escrit fora del front matter.

#### Llistant publicacions recents

Per mostrar publicacions a la pàgina principal, primer has de decidir d'on es serviran: de la ruta arrel (`/`) o d'un subdirectori (per exemple, `/blog`).

**Opció A: Servir publicacions des de la ruta arrel (`/`)**

Configura `paginate_by` al front matter del teu arxiu `content/_index.md`:

```toml
title = "Últimes publicacions"
sort_by = "date"
paginate_by = 5  # Mostra 5 publicacions per pàgina.

[extra]
header = {title = "Hola! Soc tabi~", img = "img/main.webp", img_alt = "El teu nom" }
```

{{ admonition(type="note", text="La configuració `paginate_by` va al front matter principal, no a la secció `[extra]`.") }}

**Opció B: Servir publicacions des d'un subdirectori (per exemple, `/blog`)**

Utilitza `section_path` a la secció `[extra]` del teu arxiu `content/_index.md`:

```toml
title = "Últimes publicacions"
sort_by = "date"
# No configuris `paginate_by` aquí.

[extra]
header = {title = "Hola! Soc tabi~", img = "img/main.webp", img_alt = "El teu nom" }
section_path = "blog/_index.md"  # On trobar les teves publicacions.
max_posts = 5  # Mostra fins a 5 publicacions a la pàgina principal.
```

{{ admonition(type="warning", title="ALERTA", text="No configuris `paginate_by` i `section_path` alhora. Aquestes configuracions són mútuament excloents i usar ambdues pot fer que no es mostrin publicacions.") }}

Notes addicionals:

- El `title` al front matter estableix el títol que apareix sobre les publicacions.
- Utilitza la ruta completa a l'arxiu `_index.md` de la secció per a `section_path`. Usar `section_path = "blog/"` no funcionarà.

##### Fixar entrades

Pots fixar entrades per mantenir-les a la part superior de la pàgina principal. En aquesta demo, aquesta entrada està fixada, així que apareix primera amb una icona i etiqueta de "fixada":

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/pinned_post_light.webp", dark_src="blog/mastering-tabi-settings/img/pinned_post_dark.webp", alt="Entrada fixada", full_width=true) }}

Les entrades fixades es mostren primer, mantenint el seu ordre relatiu segons el `sort_by` de la secció, seguides per les entrades regulars.

Per fixar una entrada, afegeix el següent al seu front matter:

```toml
[extra]
pinned = true
```

{{ admonition(type="info", text="Aquesta configuració només afecta les pàgines principals del lloc (com `/`, `/es/`, `/fr/`). Altres seccions com `blog/`, `tags/` o `archive/` mostren les publicacions en el seu ordre habitual.") }}

{{ admonition(type="warning", text='Quan s'utilitza la paginació (`paginate_by`), les entrades fixades poden aparèixer dues vegades: una vegada a la part superior de la primera pàgina, i una altra en la seva posició cronològica normal en pàgines posteriors.') }}

##### Mostrar la data dels articles al llistat

Per defecte, quan es llisten els articles, es mostra la data de creació. Pots configurar quina(es) data(es) mostrar utilitzant l'opció `post_listing_date`. Configuracions disponibles:

- `date`: Mostra només la data de publicació original de l'article (opció per defecte).
- `updated`: Mostra només la data de l'última actualització de l'article. Si no hi ha data d'actualització, es mostra la data de publicació original.
- `both`: Mostra tant la data de publicació original com la data de l'última actualització.

#### Llistat de Projectes

Pots mostrar una selecció de projectes a la teva pàgina principal. Per fer això, primer necessitaràs configurar el directori `projects`.

Un cop fet això, configura la ruta als projectes a la secció `[extra]` del teu fitxer `_index.md`:

```toml
[extra]
projects_path = "projects/_index.md"
```

Això mostrarà els 3 projectes de major prioritat (amb menor pes; el mateix ordre que a Projectes). Per mostrar més o menys projectes, configura `max_projects` a `[extra]`.

Per defecte, la secció de projectes es mostrarà a la part inferior de la pàgina principal, sota les publicacions. Si prefereixes mostrar-la a la part superior, configura `show_projects_first = true`.

### Commutador de mode clar i fosc

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ✅          |

El commutador de mode clar i fosc (la icona de lluna/sol a la cantonada superior dreta) es pot habilitar configurant `theme_switcher = true` a `config.toml`.

### Mode predeterminat (clar/fosc)

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ❌          |

El mode predeterminat es pot especificar amb la variable `default_theme`, que accepta `"dark"` o `"light"`. Si no s'especifica, el mode predeterminat és el mode del sistema.

### Skin personalitzada

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ❌          |

Les skins («pells») de tabi canvien el color principal del lloc web. Pots configurar la skin a `config.toml` amb `skin = "nom_de_la_skin`. Per exemple, `skin = "lavender"` es veu així (clica per canviar entre mode clar i fosc):

{{ image_toggler(default_src="blog/customise-tabi/skins/lavender_light.webp", toggled_src="blog/customise-tabi/skins/lavender_dark.webp", default_alt="pell lavender en mode clar", toggled_alt="pell lavender en mode fosc", full_width=true) }}

Explora les skins disponibles i aprèn com crear la teva pròpia consultant [la documentació](/ca/blog/customise-tabi/#skins).

### Font sans serif (pal sec)

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ❌          |

tabi utilitza una font serif per als paràgrafs dels articles (la que estàs veient ara). Pots canviar a una font sans-serif (la que veus als encapçalaments/menú) a tot el teu lloc configurant `override_serif_with_sans = true` a `config.toml`.

Fes clic a la imatge a continuació per comparar les fonts:

{{ image_toggler(default_src="blog/mastering-tabi-settings/img/serif.webp", toggled_src="blog/mastering-tabi-settings/img/sans-serif.webp", default_alt="Font serif", toggled_alt="Font sans-serif", full_width=true) }}

### Estils CSS personalitzats

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ❌    |      ✅       |        ❌        |         ❌          |

Pots carregar estils CSS personalitzats per a tot el lloc web o en pàgines específiques utilitzant `stylesheets`, que accepta una llista de rutes cap a arxius CSS. Per exemple:

```toml
stylesheets = ["css/custom.css", "css/another.css"]
```

### Color del tema del navegador

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ❌          |

El color del tema del navegador és el color que apareix a la barra de pestanyes del navegador:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/browser_theme_color_light.webp", dark_src="blog/mastering-tabi-settings/img/browser_theme_color_dark.webp" alt="pestanyes amb un tema de navegador de color") }}

Pots establir-ho a `config.toml` com a `browser_theme_color = "#087e96"`. Si vols diferents colors per als modes clar/obscur, pots establir un conjunt de colors amb `browser_theme_color = ["#ffffff", "#000000"]`. El primer color és per al mode clar, el segon per al fosc.

Aquesta variable accepta qualsevol color CSS vàlid, així que pots utilitzar paraules clau (per exemple, `blue`), codis hexadecimals (per exemple, `#087e96`) o valors RGB/HSL (per exemple, `rgb(8, 126, 150)`).

### Etiquetes compactes

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:-----------------:|:--------------------:|
|   ❌   |   ❌   |      ✅       |         ❌        |          ❌          |

Per defecte, la [pàgina d'etiquetes](/ca/tags) mostra les etiquetes com:

[NomEtiqueta](#) — n entrada[es]

Establir `compact_tags = true` les mostrarà com:

[NomEtiqueta](#) <sup>n</sup>

### Ordre de les etiquetes

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:-----------------:|:--------------------:|
|   ❌   |   ❌   |      ✅       |         ❌        |          ❌          |

Per defecte, la [pàgina d'etiquetes](/ca/tags) ordena les etiquetes alfabèticament, donada la configuració predeterminada de `tag_sorting = "name"`.
Si configures `tag_sorting = "frequency"`, s'ordenaran segons el nombre de publicacions (de més a menys).

---

## Sèries

Per a una explicació detallada, consulta la [documentació de sèries](@/blog/series/index.ca.md).

### Enllaç per saltar a les publicacions

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ❌   |   ✅    |      ✅       |        ✅          |         ❌          |

Per defecte, apareix automàticament un enllaç "Salta a les publicacions" al costat del títol de la sèrie quan una sèrie té un contingut de més de 2000 caràcters:

{{ dual_theme_image(light_src="blog/series/img/jump_to_series_posts_light.webp", dark_src="blog/series/img/jump_to_series_posts_dark.webp" alt="enllaç per saltar a les publicacions de la sèrie", full_width=true) }}

Estableix `show_jump_to_posts = true` per forçar l'activació de la funció i `show_jump_to_posts = false` per desactivar-la.

### Indexació de pàgines de sèries

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ❌   |   ✅    |      ✅       |        ✅          |         ❌          |

Per defecte, les pàgines de sèries s'indexen (usant una indexació basada en 1) segons el `sort_by` de la secció de sèries.

Estableix `post_listing_index_reversed = true` per invertir aquest índex.

---

## Integració amb repositoris Git

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:--------------------:|:--------------------:|
|   ❓   |    ❓   |       ✅      |          ❓          |          ❌          |

❓: `show_remote_source` sí que segueix [la jerarquia](#jerarquia-de-configuracio) i es pot configurar en una pàgina, secció o de manera global. La resta de les configuracions només es poden establir a `config.toml`.

Aquestes configuracions et permeten vincular el teu lloc web tabi amb un repositori públic de Git a GitHub, GitLab, Gitea o Codeberg. Exemples de configuració:

```toml
remote_repository_url = "https://github.com/welpo/tabi"
remote_repository_git_platform = "auto"
remote_repository_branch = "main"
show_remote_changes = true
show_remote_source = true
```

Això habilita dues funcions:

1. `show_remote_source = true` afegeix un enllaç al codi font del teu lloc web (el teu `remote_repository_url`) que es mostrarà al peu de pàgina:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/site_source_light.webp", dark_src="blog/mastering-tabi-settings/img/site_source_dark.webp" alt="Peu de pàgina del lloc web, mostrant un enllaç 'Codi font del lloc'") }}

2. `show_remote_changes = true` afegeix un enllaç "Veure canvis ↗" a l'historial de commits de l'article actualitzat, al costat de la data de l'última actualització [^1]:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/see_changes_light.webp", dark_src="blog/mastering-tabi-settings/img/see_changes_dark.webp" alt="Títol de l'article i metadades, mostrant un enllaç 'Veure canvis'") }}

En clicar aquest enllaç, seràs dirigit a l'historial de commits de l'article, on podràs veure els canvis realitzats en ell:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/commit_history_light.webp", dark_src="blog/mastering-tabi-settings/img/commit_history_dark.webp" alt="Historial de commits d'un article", full_width=true) }}

---

## Pàgines

### Projectes

tabi té una plantilla integrada per a projectes. Per habilitar-la, pots crear un directori a `content/projects/`. Allà, pots crear un fitxer `_index.md` amb el següent contingut al bloc de metadades:

```toml
title = "Projectes"
sort_by = "weight"
template = "cards.html"
insert_anchor_links = "left"

[extra]
show_reading_time = false
quick_navigation_buttons = true
```

- `title` és el títol de la pàgina.
- `sort_by` determina com s'ordenen els projectes. Pots ordenar per "date", "update_date", "title", "title_bytes", "weight", "slug" o "none".
- `template = "cards.html"` estableix la plantilla per renderitzar la pàgina de projectes.
- `insert_anchor_links = "left"` afegeix enllaços àncora als encapçalaments.
- `show_reading_time = false` amaga el temps estimat de lectura.
- `quick_navigation_buttons = true` mostra els botons de navegació ràpida.

Al costat del fitxer `_index.md`, pots crear un fitxer per a cada projecte. Per exemple, aquest és el bloc de metadades per a la pàgina del projecte [tabi](@/projects/tabi/index.ca.md):

```toml
title = "tabi"
description = "Un tema de Zola ràpid, lleuger i modern amb suport multilingüe."
weight = 1

[extra]
local_image = "img/tabi.webp"
```

- `title` és el títol del projecte.
- `description` és la descripció del projecte.
- `weight` determina l'ordre en què es mostren els projectes. Com menor sigui el pes, més amunt apareixerà el projecte.
- `local_image` és la ruta de la imatge del projecte. Aquesta imatge es mostra a la pàgina de projectes.

Quan un usuari faci clic a la imatge o al títol d'un projecte, serà portat a la pàgina del projecte. Si prefereixes que els usuaris vagin a un enllaç extern, pots establir `link_to = "https://example.com"` a la secció `[extra]` del fitxer `.md` del projecte.

La pàgina del projecte individual es renderitza amb la plantilla predeterminada, tret que estableixis una altra, per exemple, `template = "info-page.html"`.

#### Filtrar projectes

Si afegeixes etiquetes als teus projectes, veuràs un filtre d'etiquetes:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/projects_tag_filter_light.webp", dark_src="blog/mastering-tabi-settings/img/projects_tag_filter_dark.webp", alt="Pàgina de projectes amb filtre d'etiquetes", full_width=true) }}

El sistema de filtratge d'etiquetes utilitza millora progressiva:

- Sense JavaScript: Les etiquetes enllacen directament a pàgines d'etiquetes dedicades (per exemple, `/tags/nom-de-l-etiqueta`).
- Amb JavaScript: Filtratge instantani, sincronització d'URL (#nom-etiqueta) i navegació amb el teclat.

Per desactivar aquesta funció, estableix `enable_cards_tag_filtering = false` a la secció `[extra]` del fitxer `projects/_index.md` o a `config.toml`.

{% admonition(type="tip") %}

Per filtrar projectes per etiquetes, necessites establir etiquetes a la front matter de cada projecte. Per exemple:

```toml
title = "nom del projecte"
weight = 40

[taxonomies]
tags = ["etiqueta", "etiqueta 2", "tercera etiqueta"]
```

{% end %}

### Arxiu

Afegir una pàgina d'arxiu és similar a afegir una pàgina de projectes. Pots crear un directori a `content/archive/`. Allà, pots crear un fitxer `_index.md` amb el següent encapçalament:

```toml
title = "Arxiu"
template = "archive.html"
```

Per defecte, l'arxiu llistarà les publicacions situades a `blog/`. Per personalitzar això, pots modificar la secció `[extra]` de l'arxiu `_index.md`:

- **Per a un sol directori**: Estableix `section_path = "directori/"` per llistar publicacions d'un directori específic. Assegura't d'incloure la barra inclinada al final.

- **Per a múltiples directoris**: Si vols agregar publicacions de diversos directoris, especifica la llista a `section_path`. Per exemple:

  ```toml
  [extra]
  section_path = ["blog/", "notes/", "camí-tres/"]
  ```

**Nota**:

- La pàgina d'arxiu només llistarà publicacions amb data.
- L'ordre de les publicacions ve determinada per la variable `sort_by` de les seccions arxivades. Aquesta demo utilitza `sort_by = "date"` en `blog/_index.md`.

### Etiquetes

tabi té suport integrat per a etiquetes. Per habilitar-les, simplement afegeix la taxonomia al teu `config.toml`:

```toml
taxonomies = [{name = "tags", feed = true}]
```

Després, pots afegir etiquetes a les teves publicacions afegint-les a l'array `tags` en el bloc de metadades de la teva publicació. Per exemple:

```toml,hl_lines=05-06
title = "Els molins de vent de la meva vida: reflexions d'un escuder"
date = 1605-01-16
description = "El meu viatge al costat de Don Quixot, enfrontant-me a gegants imaginats i descobrint les veritables batalles de la vida."

[taxonomies]
tags = ["personal", "reflexions"]
```

### Pàgina sobre

Si vols tenir una pàgina que no sigui un article, per exemple per a una secció "Sobre", "Contacte" o "Drets d'autor", pots utilitzar la plantilla `info-page.html`.

Primer, crea un directori dins de `content/` amb el nom que prefereixis. Per exemple, `content/pages/`. Després, crea un fitxer `_index.md` dins d'aquest directori. El fitxer hauria de ser així:

```markdown
+++
render = false
insert_anchor_links = "left"
+++
```

- `render = false` indica a Zola que no renderitzi la secció.
- `insert_anchor_links = "left"` afegeix enllaços àncora als encapçalaments. Això és opcional.

Dins del directori, pots crear qualsevol quantitat de fitxers `.md`.

En aquesta demo, la pàgina [Sobre mi](/ca/about/) utilitza la plantilla `info-page.html`. El bloc de metadades és el següent:

```toml
title = "Sobre mi"
template = "info-page.html"
path = "about"
```

Fixa't com s'estableix `path = "about"`. Zola situarà la pàgina a `$base_url/about/`. Si vols que la pàgina estigui disponible a `/contacte/`, hauries d'establir `path = "contacte"`.

---

## SEO

tabi s'encarrega de la majoria de tasques de SEO per a tu (com ara les etiquetes del protocol Open Graph, descripció, paleta de colors...), però hi ha certes configuracions que pots personalitzar.

### Favicon

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:--------------------:|:--------------------:|
|   ❌   |   ❌    |      ✅       |          ❌          |          ❌           |

El favicon és la petita imatge que es mostra a la pestanya del navegador. Pots establir-la a `config.toml` amb `favicon = "img/favicon.png"`.

### Favicon d'emoji

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:--------------------:|:--------------------:|
|   ❌   |   ❌    |      ✅       |          ❌          |          ❌           |

També pots establir un emoji com a favicon amb `favicon_emoji`. Per exemple, `favicon_emoji = "👾"`.

Nota: Alguns navegadors no suporten favicons d'emoji. Consulta la taula de compatibilitat a [caniuse](https://caniuse.com/link-icon-svg).

### URL canònica

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:--------------------:|:--------------------:|
|   ✅   |   ✅    |      ✅       |          ❌          |          ❌           |

L'URL canònica és una manera d'indicar als motors de cerca quina és l'URL preferida per al contingut del teu lloc web. Això és útil per al SEO i per evitar problemes de contingut duplicat.

Per defecte, l'URL canònica és l'URL de la pàgina on et trobes. No obstant això, pots canviar això configurant `canonical_url` al front matter de la teva pàgina o secció.

Si tens un lloc amb una estructura idèntica i contingut coincident, pots configurar `base_canonical_url` al teu `config.toml`. L'URL canònica es crearà substituint el `$base_url` de l'URL actual amb el `$base_canonical_url` que establisquis.

Per exemple, si configures `base_canonical_url = "https://example.com"`, l'URL canònica de la pàgina `$base_url/blog/post1` serà `https://example.com/blog/post1`. Això és útil si tens un lloc amb diversos dominis que comparteixen el mateix contingut.

**Nota**: per assegurar-te que l'URL canònica sigui correcta, probablement serà millor configurar `canonical_url` individualment per a cada pàgina.

### Targetes per a xarxes socials

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅   |      ✅       |        ✅       |         ❌          |

Les targetes per a xarxes socials són les imatges que es mostren quan comparteixes un enllaç a les xarxes socials:

{{ dimmable_image(src="img/with_social_media_card.webp", alt="Una captura de pantalla de WhatsApp mostrant un enllaç amb una targeta per a xarxes socials") }}

Pots establir la imatge per a xarxes socials amb `social_media_card = "img/social_media_card.png"`.

Pots especificar rutes tant relatives com absolutes.

- **Ruta relativa**: Posiciona la imatge a la mateixa carpeta que la teva entrada de blog i especifica el seu nom. Per exemple, `social_media_card = "relative_image.png"`.

- **Ruta absoluta**: Posiciona la imatge en una carpeta específica i especifica la ruta des de l'arrel. Per exemple, `social_media_card = "/img/absolute_image.png"`.

Si ambdues rutes, relativa i absoluta, són vàlides, la ruta relativa tindrà prioritat.

Ja que segueix la [jerarquia](#jerarquia-de-configuracio), si no està configurat en una pàgina, però sí ho està en una secció, s'utilitzarà la imatge de la secció. Si no està configurat en una pàgina o secció, però sí en `config.toml`, s'utilitzarà la imatge global.

{{ admonition(type="tip", title="CONSELL", text="Automatitza la seva creació amb un [script](https://github.com/welpo/osc.garden/blob/main/static/code/social-cards-zola): [Automatitzant les vistes prèvies dels enllaços amb Zola](https://osc.garden/ca/blog/automating-social-media-cards-zola/).") }}

### Creador del fedivers

| Pàgina | Secció | `config.toml` | Segueix jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:-----------------:|:--------------------:|
|   ❌   |   ❌   |      ✅       |         ❌        |          ❌          |

Pots mostrar el perfil del fedivers de l'autor en les previsualitzacions d'enllaços de Mastodon configurant la variable `fediverse_creator` al teu `config.toml`. Per exemple, per a @username@example.com, fes servir:

```toml
fediverse_creator = { handle = "username", domain = "example.com" }
```

---

## Navegació

### Barra de navegació

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌   |      ✅       |        ❌       |         ❌          |

La barra de navegació és la franja a la part superior de la pàgina que conté el títol del lloc i el menú de navegació. Pots personalitzar els elements que apareixen configurant `menu` en `config.toml`. Per exemple:

```toml
menu = [
    { name = "blog", url = "blog", trailing_slash = true },
    { name = "arxiu", url = "archive", trailing_slash = true },
    { name = "etiquetes", url = "tags", trailing_slash = true },
    { name = "projectes", url = "projects", trailing_slash = true },
    { name = "sobre nosaltres", url = "about", trailing_slash = true },
]
```

### Botons de navegació ràpida

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅   |      ✅       |        ✅       |         ❌          |

Els botons de navegació ràpida són els botons que apareixen a la part inferior dreta de la pantalla. Hauries de veure'ls en aquesta pàgina, si no estàs en un dispositiu mòbil. Es veuen així:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/quick_navigation_buttons_light.webp", dark_src="blog/mastering-tabi-settings/img/quick_navigation_buttons_dark.webp", alt="Botons de navegació ràpida") }}

Per activar-los, estableix `quick_navigation_buttons = true`.

### Taula de continguts

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:------------------:|:--------------------:|
|   ✅   |   ✅   |      ✅       |        ✅          |          ❌          |

Activa l'índex de continguts just sota del títol i metadades de l'article amb `toc = true`.

Per saber més sobre com personalitzar-ho, consulta [la documentació sobre la Taula de continguts](@/blog/toc/index.ca.md).

### Enllaços als articles anterior i següent

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:--------------------:|:--------------------:|
|   ✅   |   ✅   |      ✅       |          ✅          |         ❌          |

Mostra enllaços als articles anterior i següent a la part inferior dels posts. Es veu així:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/show_previous_next_article_links_light.webp", dark_src="blog/mastering-tabi-settings/img/show_previous_next_article_links_dark.webp", alt="Enllaços als articles anterior i següent", full_width=true) }}

Per activar aquesta funció, estableix `show_previous_next_article_links = true` i assegura't que la secció té un valor `sort_by` (per exemple `sort_by = "date"`).

Per defecte, els articles següents estaran al costat esquerre de la pàgina i els articles anteriors al costat dret.
Per invertir l'ordre (articles següents al costat dret i articles anteriors al costat esquerre), configura `invert_previous_next_article_links = true`.

Per defecte, aquesta secció de navegació tindrà l'amplada completa del lloc (igual que la barra de navegació de la part superior). Per fer-la més estreta, coincidint amb l'amplada de l'article, configura `previous_next_article_links_full_width = false`.

Totes aquestes configuracions segueixen la jerarquia.

### Enllaços de retorn a les notes a peu de pàgina

{{ admonition(type="warning", title="ADVERTÈNCIA DE DEPRECACIÓ", text="Zola v0.19.0 i posterior pot fer això de forma nativa. Estableix `bottom_footnotes = true` a la secció `[markdown]` de la teva configuració.") }}

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:------------------:|:--------------------:|
|   ✅   |   ✅   |      ✅       |        ✅          |          ✅          |

Establir `footnote_backlinks = true` afegirà enllaços de retorn a les notes a peu de pàgina de les teves publicacions, com aquest:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/footnote_backlinks_light.webp", dark_src="blog/mastering-tabi-settings/img/footnote_backlinks_dark.webp", alt="Enllaços de retorn a les notes a peu de pàgina", full_width=true) }}

Quan facis clic en un enllaç de retorn (la fletxa ↩), et portarà de tornada al punt del text on es va fer referència a la nota a peu de pàgina.

---

## Usabilitat

### Botó de copiar en blocs de codi

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:------------------:|:--------------------:|
|   ✅   |   ✅   |      ✅       |        ✅          |          ✅          |

Establir `copy_button = true` afegirà un petit botó de copiar a la part superior dreta dels blocs de codi, com aquest:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/copy_button_on_code_blocks_light.webp", dark_src="blog/mastering-tabi-settings/img/copy_button_on_code_blocks_dark.webp", alt="Botó de copiar en blocs de codi", full_width=true) }}

### Mostrar ruta/URL en blocs de codi

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |        ✅       |         ✅          |

Estableix `add_src_to_code_block = true` per habilitar l'ús del [shortcode `add_src_to_code_block`](@/blog/shortcodes/index.ca.md#mostrar-ruta-o-url).

### Forçar blocs de codi d'esquerra a dreta

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:-----------------:|:--------------------:|
|   ✅   |   ✅   |      ✅       |         ✅        |          ❌          |

Per defecte, els blocs de codi es renderitzen d'esquerra a dreta, independentment de la direcció general del text. Estableix `force_codeblock_ltr = false` per permetre que els blocs de codi segueixin la direcció del document. Útil per a idiomes de dreta a esquerra que necessiten blocs de codi de dreta a esquerra.

### Suport per a KaTeX

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:------------------:|:--------------------:|
|   ✅   |   ✅   |      ✅       |        ✅          |          ✅          |

KaTeX és una biblioteca JavaScript ràpida i fàcil d'usar per a la representació de matemàtiques TeX a la web. Pots habilitar-ho amb `katex = true`. Mira com es veu en tabi [aquí](/ca/blog/markdown/#katex).

### Suport per a Mermaid

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:-----------------:|:--------------------:|
|   ✅   |   ✅   |      ✅       |         ✅        |          ✅          |

[Mermaid](https://github.com/mermaid-js/mermaid) és una eina de diagramació i gràfics basada en JavaScript. Pots activar-la amb `mermaid = true`.

Per defecte, la biblioteca Mermaid es serveix localment. Si prefereixes utilitzar un CDN, estableix `serve_local_mermaid = false` a `config.toml`. L'ús d'un CDN servirà la versió més recent de Mermaid; l'opció local servirà la versió inclosa amb tabi.

Consulta la [documentació de Mermaid](@/blog/shortcodes/index.ca.md#diagrames-de-mermaid) per a instruccions d'ús i exemples.

### Subconjunt de tipus de lletra personalitzat

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:------------------:|:--------------------:|
|   ❌   |   ❌   |      ✅       |        ❌          |          ❌          |

Les tipus de lletra personalitzades causen parpalleig del text en Firefox. Per resoldre això, tabi carrega un subconjunt de glifs per a la capçalera. Donat que això (lleugerament) augmenta el temps de càrrega inicial, és una bona idea intentar minimitzar la mida d'aquest subconjunt.

Pots crear un subconjunt personalitzat adaptat al teu lloc, guardar-lo com a `static/custom_subset.css`, i fer que es carregui amb `custom_subset = true`.

Per obtenir més informació, incloent instruccions sobre com crear un subconjunt personalitzat, consulta la [documentació](@/blog/custom-font-subset/index.ca.md).

### Contingut complet al feed

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:-------------------:|:-------------------:|
|   ❌   |   ❌   |      ✅       |         ❌          |         ❌          |

Per defecte, el feed Atom només conté el resum o descripció de les teves publicacions. Pots incloure el contingut complet de les publicacions establint `full_content_in_feed = true` a `config.toml`.

### Amagar contingut del feed

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ✅    |      ✅       |         ✅        |         ❌          |

Pots amagar pàgines específiques o seccions senceres del feed amb `hide_from_feed = true`.

### Comentaris {#afegir-comentaris}

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:-------------------:|:-------------------:|
|   ✅   |   ❌   |      ✅       |         ❌          |         ✅          |

Per activar els comentaris en una pàgina, establert el nom del sistema com a `true` al front matter. Per exemple, `utterances = true`.

Si vols activar els comentaris de forma global, pots fer-ho establint `enabled_for_all_posts = true` a la secció apropiada del teu `config.toml` (per exemple, a `[extra.giscus]`).

Si has activat un sistema de forma global i vols desactivar-lo per a una pàgina específica, pots fer-ho establint el nom del sistema com a `false` al front matter. Per exemple, `utterances = false`.

Llegeix la [documentació](@/blog/comments/index.ca.md) per a més informació sobre els sistemes disponibles i la seva configuració.

### Anàlisi web

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:-----------------:|:--------------------:|
|   ❌   |    ❌   |       ✅       |         ❌         |          ✅          |

tabi ofereix suport per a 3 sistemes d'anàlisi web que respecten la privacitat: [Plausible](https://plausible.io/), [GoatCounter](https://www.goatcounter.com/) i [Umami](https://umami.is/).

Pots configurar-los en la secció `[extra.analytics]` del teu arxiu `config.toml`.

- `service`: el servei a utilitzar. Les opcions disponibles són `"goatcounter"`, `"umami", i "plausible"`.

- `id`: l'identificador únic per al teu servei d'anàlisi. Això varia segons el servei:
  - Per a GoatCounter, és el codi triat durant el registre. Instàncies auto-allotjades de GoatCounter no requereixen aquest camp.
  - Per a Umami, és l'ID del lloc web.
  - Per a Plausible, és el nom de domini.

- `self_hosted_url`: Opcional. Utilitza aquest camp per especificar l'URL si tens una instància auto-allotjada. L'URL base variarà segons la teva configuració particular. Alguns exemples:
  - Per a GoatCounter: `"https://stats.example.com"`
  - Per a Umami: `"https://umami.example.com"`
  - Per a Plausible: `"https://plausible.example.com"`

Un exemple de configuració per a GoatCounter no auto-allotjada seria:

```toml
[extra.analytics]
service = "goatcounter"
id = "tabi"
self_hosted_url = ""
```

## Icones al peu de pàgina

### Icones de xarxes socials

| Pàgina | Secció | `config.toml` | Respecta jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ❌   |   ❌   |      ✅       |         ❌         |         ❌          |

Pots afegir icones de xarxes socials al peu de pàgina amb `socials`, que accepta una llista d'objectes de xarxes socials. Per exemple:

```toml
socials = [
    { name = "github", url = "https://github.com/welpo/", icon = "github" },
    { name = "soundcloud", url = "https://soundcloud.com/oskerwyld", icon = "soundcloud" },
    { name = "instagram", url = "https://instagram.com/oskerwyld", icon = "instagram" },
    { name = "youtube", url = "https://youtube.com/@oskerwyld", icon = "youtube" },
    { name = "spotify", url = "https://open.spotify.com/artist/5Hv2bYBhMp1lUHFri06xkE", icon = "spotify" },
]
```

Per veure una llista de totes les icones integrades, fes un cop d'ull al directori [`static/social_icons` a GitHub](https://github.com/welpo/tabi/tree/main/static/social_icons).

Trobes a faltar algun icona? Si creus que seria una bona addició a tabi, no dubtis en [obrir un issue](https://github.com/welpo/tabi/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=) o enviar una pull request ([exemple](https://github.com/welpo/tabi/pull/333)).

Per utilitzar una icona personalitzada, pots afegir-la al directori `static/social_icons` del teu lloc web. Per exemple, si afegeixes `custom.svg`, la pots referenciar així:

```
{ name = "custom", url = "https://example.com", icon = "custom" }
```

{{ admonition(type="note", title="NOTA", text="Tots els enllaços a xarxes socials inclouen l'[atribut](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel/me) `rel='me'`. Això ajuda els motors de cerca i serveis web a verificar que les comptes de xarxes socials et pertanyen.") }}

### Icona de feed

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:---------------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |          ❌           |         ❌          |

Pots afegir un enllaç al teu feed RSS/Atom al peu de pàgina amb `feed_icon = true`.

Nota pels usuaris de Zola 0.19.X: quan hi ha dos noms de fitxer a `feed_filenames`, només s'enllaçarà el primer al peu de pàgina.

#### Menú de peu de pàgina

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:-----------------:|:--------------------:|
|   ❌   |   ❌    |      ✅       |        ❌         |          ❌          |

Pots afegir un menú al peu de pàgina amb `footer_menu`, que accepta una llista d'elements de menú. Per exemple:

```toml
footer_menu = [
    {url = "about", name = "about", trailing_slash = true},
    {url = "privacy", name = "privacy", trailing_slash = true},
    {url = "sitemap.xml", name = "sitemap", trailing_slash = false},
    {url = "https://example.com", name = "external link", trailing_slash = true},
]
```

### Copyright

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:---------------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |          ❌           |         ❌          |

Per afegir una menció sobre els drets d'autor al teu lloc web, configura `copyright`:

```toml
copyright = "© $CURRENT_YEAR Your Name $SEPARATOR Unless otherwise noted, the content in this website is available under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license."
```

- `$TITLE` serà reemplaçat per la variable `title` configurada a `config.toml`
- `$CURRENT_YEAR` serà reemplaçat per l'any actual
- `$AUTHOR` serà reemplaçat per la variable `author`
- `$SEPARATOR` serà reemplaçat per la [variable `separator`](#separador-personalitzat).

El text es processarà en Markdown. Per exemple, la configuració d'adalt:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/copyright_light.webp", dark_src="blog/mastering-tabi-settings/img/copyright_dark.webp" alt="Secció de drets d'autor", full_width=true) }}

Si tens un lloc multilingüe i vols establir diferents notificacions de drets d'autor per a diferents idiomes, afegeix la traducció corresponent a `copyright_translations.{codi_d'idioma}` per a cada idioma que vulguis donar suport. El codi de llengua ha de coincidir amb el [codi de llengua de tabi](https://welpo.github.io/tabi/ca/blog/faq-languages/#que-son-aquests-codis-de-dues-lletres). Per exemple, pel castellà:

```toml
copyright_translations.es = "© $CURRENT_YEAR $AUTHOR $SEPARATOR A menos que se indique lo contrario, el contenido de esta web está disponible bajo la licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)."
```

---

## Metadades

### Mostrar autoria

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:---------------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |          ✅           |         ❌          |

Per mostrar l'autoria d'un article, estableix `show_author = true`.

Això mostrarà els autors establerts a la variable `authors = []` al front matter del post. Si aquest camp no està configurat, mostrarà l'autor de `config.toml` (`author = ""`).

### Temps de lectura

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:---------------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |          ✅           |         ❌          |

Pots activar o desactivar el temps estimat de lectura d'un article amb `show_reading_time`. Si el configures com a `true`, apareixerà a les metadades de l'article, com això:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/see_changes_light.webp", dark_src="blog/mastering-tabi-settings/img/see_changes_dark.webp" alt="Títol de l'article i metadades, mostrant un enllaç «Veure canvis»") }}

Com que segueix [la jerarquia](#jerarquia-de-configuracio), pots activar-lo o desactivar-lo per a pàgines o seccions específiques. Per exemple, aquesta demo desactiva `show_reading_time = false` a la secció [projectes](https://welpo.github.io/tabi/ca/projects/) a l'arxiu [`_index.md`](https://github.com/welpo/tabi/blob/main/content/projects/_index.es.md?plain=1), de manera que les seves publicacions individuals no mostren el temps de lectura.

### Mostrar la data

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:--------------------:|:-------------------:|
|   ✅   |   ✅   |      ✅       |         ✅           |         ❌          |

Per defecte, la data es mostra sota el títol de la publicació. Pots amagar-la amb `show_date = false`. Aquest ajust segueix [la jerarquia](#jerarquia-de-configuracio).

### Format de data

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:---------------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |          ❌           |         ❌          |

tabi té dos formats de data: `long_date_format` i `short_date_format`. El format curt s'utilitza a les metadades d'una publicació, mentre que el format llarg s'utilitza al llistar les publicacions (és a dir, a la [secció de blog](/ca/blog/) o a la [pàgina principal](/ca/)).

Per defecte és "6th July 2049" per a ambdós formats en anglès. Per a altres idiomes, el predeterminat és `"%d %B %Y"` per al format llarg i `"%-d %b %Y"` per al format curt.

A Zola, la sintaxi per al format de temps està inspirada en strftime. Una referència completa està disponible a la [documentació de chrono](https://docs.rs/chrono/0.4.31/chrono/format/strftime/index.html).

### Separador personalitzat

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:---------------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |          ❌           |         ❌          |

El separador apareix en diversos llocs: al títol del navegador, entre les metadades d'una publicació...

El separador per defecte és un punt de llista (`•`), però pots canviar-lo configurant alguna cosa com `separator = "|"`.

### Ordre del títol

| Pàgina | Secció  | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:-------:|:-------------:|:---------------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |          ❌           |         ❌          |

Per defecte, el títol a la pestanya del navegador és el nom del lloc seguit del títol de la pàgina. Per exemple, el títol de la secció del blog és «~/tabi • Blog».

Configurant `invert_title_order = true`, pots invertir l'ordre del títol del lloc i el títol de la pàgina a la pestanya del navegador. Per exemple, l'etiqueta del títol de la secció del blog es convertiria en «Blog • ~/tabi».

---

Certainly, here is a high-quality, non-literal translation of the provided text into Catalan. I've adhered to your specifications, keeping the variables and English terms unchanged.

## Seguretat

### Correu electrònic codificat

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:--------------------:|:--------------------:|
|   ❌   |   ❌   |      ✅       |          ❌          |          ✅          |

Per tal de protegir la teva adreça de correu electrònic contra els spambots, pots codificar-la al peu de pàgina. Pots fer això establint `email` a una versió codificada en base64 de la teva adreça de correu electrònic[^2]. Per exemple, `email = "bWFpbEBleGFtcGxlLmNvbQ=="` és la versió codificada en base64 de "mail@example.com".

Si no vols codificar el teu correu electrònic tu mateix, tabi pot fer-ho per tu si configures `encode_plaintext_email = true`. Això et permet establir un correu electrònic en text pla en la configuració. Tingues en compte que això només protegeix la teva adreça de correu electrònic al teu lloc web, no en repositoris públics.

Si el correu electrònic està codificat (ja sigui per tu o per tabi), els usuaris amb JavaScript desactivat no veuran la icona de correu electrònic.

### CSP (Content Security Policy)

| Pàgina | Secció | `config.toml` | Segueix la jerarquia | Requereix JavaScript |
|:------:|:------:|:-------------:|:--------------------:|:--------------------:|
|   ❌   |   ❌   |      ✅       |          ❌          |          ❌          |

La Content Security Policy (CSP) és una capa addicional de seguretat que ajuda a detectar i mitigar certs tipus d'atacs, inclosos atacs de Cross Site Scripting (XSS) i injecció de dades. Aquests atacs s'utilitzen per a tot, des del robatori de dades fins a la desfiguració de llocs web i la distribució de programari maliciós.

tabi té una CSP predeterminada que permet imatges i vídeos remots, així com incrustacions de YouTube i Vimeo. Pots personalitzar-la amb `allowed_domains`, que accepta una llista de directrius de CSP. Aquesta és la CSP predeterminada:

```toml
allowed_domains = [
    { directive = "font-src", domains = ["'self'", "data:"] },
    { directive = "img-src", domains = ["'self'", "https://*", "data:"] },
    { directive = "script-src", domains = ["'self'"] },
    { directive = "style-src", domains = ["'self'"] },
    { directive = "frame-src", domains = ["player.vimeo.com", "https://www.youtube-nocookie.com"] },
]
```

Aquesta opció està habilitada per defecte. Per desactivar-la per una pàgina, secció o globalment, estableix `enable_csp = false`. La configuració de `enable_csp` segueix la jerarquia.

Per a més informació, consulta la [pàgina de documentació de CSP](@/blog/security/index.ca.md).

[^1]: Si estàs utilitzant un repositori Git remot, potser voldràs automatitzar el procés d'actualització del camp `updated`. Aquí tens una guia per a això: [Zola Git Hook: actualitzant les dates de les publicacions](https://osc.garden/ca/blog/zola-date-git-hook/).

[^2]: Per a codificar el teu correu electrònic en base64 pots utilitzar [eines en línia](https://www.base64encode.org/) o, al teu terminal, executar: `printf 'mail@example.com' | base64`
