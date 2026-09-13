+++
title = "Components personalitzats"
date = 2023-02-19
updated = 2026-09-13
description = "Aquest tema inclou alguns components personalitzats útils que pots utilitzar per millorar les teves publicacions. Ja sigui per mostrar imatges que s'adapten als temes clar i fosc, o per donar format a una secció de referències amb un aspecte professional, aquests components personalitzats t'ajudaran."
aliases = ["ca/tags/shortcodes"]

[taxonomies]
tags = ["funcionalitat", "components"]

[extra]
toc = true
toc_levels = 2
quick_navigation_buttons = true
code_block_name_links = true
mermaid = true
social_media_card = "social_cards/ca_blog_shortcodes.jpg"
+++

{{< admonition type="info" text="Els elements reutilitzables de contingut de tabi són components de Tera. Utilitza els formats auto-tancat o de bloc que es mostren en aquesta guia." />}}

## Components de diagrames

### Diagrames de Mermaid

[Mermaid](https://github.com/mermaid-js/mermaid) és una eina de diagramació i gràfics que utilitza text i codi per generar diagrames. Admet diagrames de flux, diagrames de seqüència, gràfics de Gantt i més.

Per incloure un diagrama Mermaid a la teva publicació, cal fer dues coses:

1. Estableix `mermaid = true` a la secció `[extra]` del front matter de la teva pàgina, secció o `config.toml`. Això carregarà el JavaScript necessari per renderitzar els diagrames.

2. Utilitza el component `mermaid` per definir el teu diagrama. Per exemple:

```plain
{% raw %}{% <mermaid> %}{% endraw %}
classDiagram
    class DistorsionsCognitives {
        +PensamentTotORes()
        +Sobregeneralitzacio()
        +FiltreMental()
        +TreureConclusionsPrecipitades()
    }
    class PensamentTotORes {
        +VeureEnExtrems()
    }
    class Sobregeneralitzacio {
        +GeneralitzarDUnic()
    }
    class FiltreMental {
        +EnfocarseEnNegatiu()
    }
    class TreureConclusionsPrecipitades {
        +FerSuposicions()
    }
    DistorsionsCognitives *-- PensamentTotORes
    DistorsionsCognitives *-- Sobregeneralitzacio
    DistorsionsCognitives *-- FiltreMental
    DistorsionsCognitives *-- TreureConclusionsPrecipitades
{% raw %}{% </mermaid> %}{% endraw %}
```

El diagrama es renderitzarà així:

{% <mermaid> %}
classDiagram
    class DistorsionsCognitives {
        +PensamentTotORes()
        +Sobregeneralitzacio()
        +FiltreMental()
        +TreureConclusionsPrecipitades()
    }
    class PensamentTotORes {
        +VeureEnExtrems()
    }
    class Sobregeneralitzacio {
        +GeneralitzarDUnic()
    }
    class FiltreMental {
        +EnfocarseEnNegatiu()
    }
    class TreureConclusionsPrecipitades {
        +FerSuposicions()
    }
    DistorsionsCognitives *-- PensamentTotORes
    DistorsionsCognitives *-- Sobregeneralitzacio
    DistorsionsCognitives *-- FiltreMental
    DistorsionsCognitives *-- TreureConclusionsPrecipitades
{% </mermaid> %}

El component de Mermaid admet dos paràmetres:

- `invertible`: Si s'estableix a `true` (per defecte), el diagrama invertirà els seus colors en mode fosc, igual que les [imatges invertibles](#imatge-invertible).
- `full_width`: Permet que el diagrama ocupi l'amplada de la capçalera. Mira [imatge d'amplada completa](#imatge-d-amplada-completa).

{{< admonition type="tip" title="CONSELL" text="Empra l'[editor de Mermaid](https://mermaid.live/) per crear i previsualitzar els teus diagrames." />}}

#### Ús

```
{% raw %}{% <mermaid invertible={true} full_width={false}> %}{% endraw %}

El teu codi Mermaid va aquí.

`invertible` or `full_width` poden ometre's per emprar els valors per defecte.

{% raw %}{% </mermaid> %}{% endraw %}
```

## Components d'imatge

Tots els components d'imatge admeten rutes absolutes, rutes relatives, i fonts remotes en el paràmetre `src`.

Tots els components d'imatge tenen els següents paràmetres opcionals:

- `raw_path`. Per defecte és `false`. Si es configura a `true`, el paràmetre `src` s'utilitzarà tal qual. Útil per a actius ubicats a la mateixa carpeta que tenen un slug personalitzat (vegeu [Zola issue #2598](https://github.com/getzola/zola/issues/2598)).
- `inline`. Valor predeterminat: `false`. Si s'estableix a `true`, la imatge es mostrarà en línia amb el text.
- `full_width`. Valor predeterminat: `false` (vegeu [a sota](#imatge-d-amplada-completa)).
- `lazy_loading`. Valor predeterminat: `true`.

### Imatges per a temes duals

Útil si vols utilitzar una imatge diferent pels temes clar i fosc:

{{< dual_theme_image light_src="img/paris_day.webp" dark_src="img/paris_night.webp" alt="La Torre Eiffel" />}}

#### Ús
```
{% raw %}{{< dual_theme_image light_src="img/paris_day.webp" dark_src="img/paris_night.webp" alt="La Torre Eiffel" />}}{% endraw %}
```

### Imatge invertible

Útil per a gràfics, dibuixos de línies, diagrames… Inverteix els colors de la imatge. La imatge original s'utilitzarà per al tema clar.

{{< invertible_image src="img/graph.webp" alt="Gràfic invertible" />}}

#### Ús

```
{% raw %}{{< invertible_image src="img/graph.webp" alt="Gràfic invertible" />}}{% endraw %}
```

### Imatge regulable

Les imatges amb massa brillantor o contrast poden ser molestes en un fons fosc. Aquí tens un exemple d'una fotografia que s'atenua quan s'activa el tema fosc.

{{< dimmable_image src="img/desert_by_oskerwyld.webp" alt="Fotografia d'un desert, cel celestial" />}}

#### Ús

```
{% raw %}{{< dimmable_image src="img/desert_by_oskerwyld.webp" alt="Fotografia d'un desert, cel celestial" />}}{% endraw %}
```

### Canvi d'imatge en passar el cursor

La imatge mostrada canvia quan l'usuari passa el cursor per sobre. Útil per a comparacions d'abans i després, per exemple.

{{< image_hover default_src="img/edited.webp" hovered_src="img/raw.webp" default_alt="Foto editada" hovered_alt="Foto original" />}}

#### Ús

```
{% raw %}{{< image_hover default_src="img/before.webp" hovered_src="img/after.webp" default_alt="Foto editada" hovered_alt="Foto original" />}}{% endraw %}
```

### Canvi d'imatge via clic

Mostra una imatge i canvia a una diferent en fer clic. Ideal per destacar diferències o cridar l'atenció sobre detalls.

{{< image_toggler default_src="img/mojave_day.webp" toggled_src="img/mojave_night.webp" default_alt="Mojave de dia" toggled_alt="Mojave de nit" />}}

#### Ús

```
{% raw %}{{< image_toggler default_src="img/mojave_day.webp" toggled_src="img/mojave_night.webp" default_alt="Mojave de dia" toggled_alt="Mojave de nit" />}}{% endraw %}
```

### Imatge d'amplada completa

La imatge s'expandirà per coincidir amb l'amplada de la capçalera, que normalment és més ampla que el text de l'article (excepte en mòbil/finestres petites).

Tots els altres components d'imatges poden utilizar l'amplada completa assignant `true` al paràmetre opcional `full_width`.

{{< full_width_image src="img/amsterdam_by_oskerwyld.webp" alt="Fotografia d'un canal a Àmsterdam" />}}

#### Ús

```
{% raw %}{{< full_width_image src="img/amsterdam_by_oskerwyld.webp" alt="Fotografia d'un canal a Àmsterdam" />}}{% endraw %}
```

## Components socials

### iine

{{< aside text="Per afegir-lo a totes les publicacions, estableix `iine = true` a la secció `[extra]` del teu `config.toml`." />}}

Aquest component et permet afegir botons addicionals d'[iine.to](https://iine.to) a les teves publicacions, com aquest:

{{< iine slug="/blog/shortcodes/demo-button" />}}

#### Ús

```
{% raw %}{{< iine icon="heart" slug="/post/el-meu-slug-de-post/like" label="M'agrada aquesta publicació" />}}{% endraw %}
```

El component accepta els següents paràmetres opcionals:

- `icon`: La icona a mostrar. Pot ser `heart`, `thumbs_up`, `upvote`, o qualsevol emoji.
- `slug`: Un identificador únic. Per defecte és la ruta de la pàgina actual. Útil si vols més d'un botó a la mateixa pàgina.
- `label`: L'etiqueta d'accessibilitat per al botó. Per defecte és "M'agrada aquesta publicació".

## Components de codi

### Mostrar ruta o URL

Pots mostrar una ruta o URL per a un bloc de codi utilitzant la sintaxi nativa de Zola:

````
```rust,name=src/main.rs
fn main() {
    println!("Hola, món!");
}
```
````

Això renderitza:

```rust,name=src/main.rs
fn main() {
    println!("Hola, món!");
}
```

Si estableixes el `name` com una URL (és a dir, comença amb `http` o `https`), pots convertir-lo en un enllaç clicable. Això és particularment útil quan s'utilitza juntament amb el [component de text remot](#text-remot).

{{< admonition type="warning" title="JavaScript necessari" text="La funció d'URLs clicables requereix JavaScript. Per habilitar-la, configura `code_block_name_links = true` a la secció `[extra]` de la teva pàgina, secció, o `config.toml`." />}}

```plain,name=https://github.com/welpo/doteki/blob/main/.gitignore
__pycache__/
*coverage*
.vscode/
dist/
```

## Components de text

### Aside (nota al marge)

Afegeix contingut complementari als marges en pantalles amples, o com a blocs distintius en mòbil.

{{< aside text="*Nota al marge* ve de *nota* (del llatí, 'marca' o 'senyal') i *marge* (del llatí *margo*, 'vora' o 'límit')." />}}

El component accepta dos paràmetres:

- `position`: Establir com a `"right"` per col·locar al marge dret (per defecte, esquerre)
- El contingut es pot proporcionar mitjançant el paràmetre `text` o entre les etiquetes del component

#### Ús

{{< admonition type="warning" text="Separa la definició de la nota del component amb dues línies en blanc per evitar errors de renderització." />}}

Fent servir el paràmetre `text`:

```
{% raw %}{{< aside text="*Nota al marge* ve de *nota* (del llatí, 'marca' o 'senyal') i *marge* (del llatí *margo*, 'vora' o 'límit')." />}}{% endraw %}
```

Fent servir el cos del contingut i indicant la posició a la dreta:

```
{% raw %}{% <aside position="right"> %}{% endraw %}
Una nota més llarga que
pot ocupar diverses línies.

S'admet *Markdown*.
{% raw %}{% </aside> %}{% endraw %}
```

### Text remot

Afegeix text des d'una URL remota o un arxiu local.

El component accepta tres paràmetres:

- `src`: L'URL d'origen o ruta del fitxer (obligatori)
- `start`: Primera línia a mostrar (opcional, comença a 1)
- `end`: Número de l'última línia (opcional, per defecte és 0, l'última línia)

{{< admonition type="info" text="`start` i `end` són inclusius. `start=3, end=3` mostrarà només la tercera línia." />}}

**Important**:

- **Arxius remots VS arxius locals**: Si `src` comença amb "http", es tractarà com un arxiu remot. D'altra banda, s'assumeix que és una ruta d'arxiu local.
- **Accés a arxius**: Atès que utilitza la funció [`load_data`](https://www.getzola.org/documentation/templates/overview/#load-data) de Zola, els arxius locals han d'estar dins del directori de Zola —vegeu la [lògica de cerca d'arxius](https://www.getzola.org/documentation/templates/overview/#file-searching-logic). El component admet rutes relatives i absolutes.
- **Formateig de blocs de codi**: Per mostrar el text com un bloc de codi, has d'afegir manualment les tanques de codi Markdown (cometes inverses) i, opcionalment, especificar el llenguatge de programació per al ressaltat sintàctic.

#### Ús

Afegeix un script de Python remot dins d'un bloc de codi amb ressaltat sintàctic:

````
```python
{% raw %}{{< remote_text src="https://example.com/script.py" />}}{% endraw %}
```
````

Mostra el text d'un arxiu local:

```
{% raw %}{{< remote_text src="ruta/a/arxiu.txt" />}}{% endraw %}
```

Mostreu només les línies 3 a 5 d'un arxiu local:

```
{% raw %}{{< remote_text src="ruta/a/arxiu.txt" start={3} end={5} />}}{% endraw %}
```

### Advertències

Destaca informació amb aquests components d'advertència/alerta. Hi ha cinc tipus (`type`): `note`, `tip`, `info`, `warning`, i `danger`.

{{< admonition type="note" text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#)." />}}

{{< admonition type="tip" text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#)." />}}

{{< admonition type="info" text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#)." />}}

{{< admonition type="warning" text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#)." />}}

{{< admonition type="danger" text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#)." />}}

Pots canviar el `title` i la `icon` de l'advertència. Ambdós paràmetres accepten text i per defecte coincideixen amb el tipus d'advertència. `icon` pot ser qualsevol dels tipus d'advertència disponibles.

{{< admonition type="note" icon="tip" title="Títol i icona personalitzats" text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#)." />}}

#### Ús

Pots utilitzar les advertències de dues maneres:

1. En línia amb paràmetres:

```md
{% raw %}{{< admonition type="danger" icon="tip" title="Un consell important" text="Mantingues-te hidratat" />}}{% endraw %}
```

2. Amb contingut al cos:

```md
{% raw %}{% <admonition type="danger" icon="tip" title="Un consell important"> %}{% endraw %}
Mantingues-te hidratat

Aquest mètode és especialment útil per a contingut llarg o múltiples paràgrafs.
{% raw %}{% </admonition> %}{% endraw %}
```

Ambdós mètodes admeten els mateixos paràmetres (`type`, `icon`, i `title`).

### Cites multillenguatge

Aquest component permet mostrar una cita traduïda i en el llenguatge original:

{{< multilingual_quote original="Die Logik ist zwar unerschütterlich, aber einem Menschen, der leben will, widersteht sie nicht." translated="La lògica, encara que inquebrantable, no resisteix a un home que vol viure." author="Franz Kafka" />}}

#### Ús

```
{% raw %}{{< multilingual_quote original="Die Logik ist zwar unerschütterlich, aber einem Menschen, der leben will, widersteht sie nicht." translated="La lògica, encara que inquebrantable, no resisteix a un home que vol viure." author="Franz Kafka" />}}{% endraw %}
```

### Referències amb sagnat invertit

Aquest component formata una secció de referència amb un sagnat invertit de la següent manera:

{% <references> %}

Alderson, E. (2015). Ciberseguretat i justícia social: Una crítica a la hegemonia corporativa en un món digital. *New York Journal of Technology, 11*(2), 24-39. [https://doi.org/10.1007/s10198-022-01497-6](https://doi.org/10.1007/s10198-022-01497-6).

Funkhouser, M. (2012). Les normes socials d'indecència: Un anàlisi del comportament desviat a la societat contemporània. *Los Angeles Journal of Sociology, 16*(3), 41-58. [https://doi.org/10.1093/jmp/jhx037](https://doi.org/10.1093/jmp/jhx037).

Schrute, D. (2005). La revolució de l'agricultura de remolatxa: Un anàlisi de la innovació agrícola. *Scranton Agricultural Quarterly, 38*(3), 67-81.

Steinbrenner, G. (1997). L'anàlisi cost-benefici de George Costanza: Un anàlisi del comportament de presa de riscos en el lloc de treball. *New York Journal of Business, 12*(4), 112-125.

Winger, J. A. (2010). L'art del debat: Un examen de la retòrica en el model de les Nacions Unides del Greendale Community College. *Colorado Journal of Communication Studies, 19*(2), 73-86. [https://doi.org/10.1093/6seaons/1movie](https://doi.org/10.1093/6seaons/1movie).

{% </references> %}

#### Ús

```
{% raw %}{% <references> %}{% endraw %}

Les teves referències van aquí.

Cada una en una nova línia. Es renderitzarà el Markdown (enllaços, cursiva…).

{% raw %}{% </references> %}{% endraw %}
```

### Spoiler

Aquest component amaga el text fins que l'usuari fa clic per revelar-lo. Per exemple: A l'antiga Roma, el *vomitorium* era {{< spoiler text="l'entrada a través de la qual les multituds entraven i sortien d'un estadi, no un espai especial utilitzat per a vomitar durant els àpats. Sí, [de debó](https://ca.wikipedia.org/wiki/Vomitori)." />}}

Com veus, el Markdown es renderitza.

Aquest component té l'opció `fixed_blur` per difuminar el text "SPOILER", en lloc de difuminar el contingut real. Per exemple: és {{< spoiler text="innecessari" fixed_blur={true} />}} esperar 24 hores abans de denunciar la desaparició d'una persona.

#### Ús

```
{% raw %}{{< spoiler text="text a amagar" fixed_blur={false} />}}{% endraw %}
```

## Contenidors

### Contenidor ample

Utilitza aquest codi curt si vols tenir una taula, paràgraf, bloc de codi… més ample. A l'escriptori, ocuparà l'amplada de la capçalera. A mòbils no tindrà efecte, excepte per les taules, que guanyaran scroll horitzontal.

{% <wide_container> %}

| Títol             |  Any  | Director              | Director de fotografia | Gènere         | IMDb  | Durada       |
|-------------------|-------|----------------------|-------------------------|----------------|-------|--------------|
| Beoning           | 2018  | Lee Chang-dong       | Hong Kyung-pyo          | Drama/Misteri  | 7.5   | 148 min      |
| The Master        | 2012  | Paul Thomas Anderson | Mihai Mălaimare Jr.     | Drama/Història | 7.1   | 137 min      |
| The Tree of Life  | 2011  | Terrence Malick      | Emmanuel Lubezki        | Drama          | 6.8   | 139 min      |

{% </wide_container> %}

#### Ús

```
{% raw %}{% <wide_container> %}{% endraw %}

Posa el teu bloc de codi, paràgraf, taula… aquí.

El Markdown, per suposat, serà interpretat.

{% raw %}{% </wide_container> %}{% endraw %}
```

### Forçar direcció del text

Força la direcció del text d'un bloc de contingut. Substitueix tant la configuració global `force_codeblock_ltr` com la direcció general del document.

Accepta el paràmetre `direction`: la direcció de text desitjada. Pot ser "ltr" (d'esquerra a dreta) o "rtl" (de dreta a esquerra). Per defecte és "ltr".

{% <force_text_direction direction="rtl"> %}
```python
def مرحبا_بالعالم():
    print("مرحبا بالعالم!")
```
{% </force_text_direction> %}

#### Ús

En una pàgina LTR podem forçar que un bloc de codi sigui RTL (com es mostra a dalt) de la següent manera:

````
{% raw %}{% <force_text_direction direction="rtl"> %}{% endraw %}

```python
def مرحبا_بالعالم():
    print("مرحبا بالعالم!")
```

{% raw %}{% </force_text_direction> %}{% endraw %}
````
