+++
title = "Shortcodes personalitzats"
date = 2023-02-19
updated = 2024-10-18
description = "Aquest tema inclou alguns shortcodes personalitzats útils que pots utilitzar per millorar les teves publicacions. Ja sigui per mostrar imatges que s'adapten als temes clar i fosc, o per donar format a una secció de referències amb un aspecte professional, aquests shortcodes personalitzats t'ajudaran."

[taxonomies]
tags = ["funcionalitat", "shortcodes"]

[extra]
toc = true
toc_levels = 2
quick_navigation_buttons = true
add_src_to_code_block = true
mermaid = true
social_media_card = "social_cards/ca_blog_shortcodes.jpg"
+++

## Shortcodes de diagrames

### Diagrames de Mermaid

[Mermaid](https://github.com/mermaid-js/mermaid) és una eina de diagramació i gràfics que utilitza text i codi per generar diagrames. Admet diagrames de flux, diagrames de seqüència, gràfics de Gantt i més.

Per incloure un diagrama Mermaid a la teva publicació, cal fer dues coses:

1. Estableix `mermaid = true` a la secció `[extra]` del front matter de la teva pàgina, secció o `config.toml`. Això carregarà el JavaScript necessari per renderitzar els diagrames.

2. Utilitza el shortcode `mermaid()` per definir el teu diagrama. Per exemple:

```plaintext
{%/* mermaid() */%}
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
{%/* end */%}
```

El diagrama es renderitzarà així:

{% mermaid() %}
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
{% end %}

El shortcode de Mermaid admet dos paràmetres:

- `invertible`: Si s'estableix a `true` (per defecte), el diagrama invertirà els seus colors en mode fosc, igual que les [imatges invertibles](#imatge-invertible).
- `full_width`: Permet que el diagrama ocupi l'amplada de la capçalera. Mira [imatge d'amplada completa](#imatge-d-amplada-completa).

{{ admonition(type="tip", title="CONSELL", text="Empra l'[editor de Mermaid](https://mermaid.live/) per crear i previsualitzar els teus diagrames.") }}

#### Ús

```
{%/* mermaid(invertible=true, full_width=false) */%}

El teu codi Mermaid va aquí.

`invertible` or `full_width` poden ometre's per emprar els valors per defecte.

{%/* end */%}
```

## Shortcodes d'imatge

Tots els shortcodes d'imatge admeten rutes absolutes, rutes relatives, i fonts remotes en el paràmetre `src`.

Tots els shortcodes d'imatge tenen tres paràmetres opcionals:

- `inline`. Valor predeterminat: `false`. Si s'estableix a `true`, la imatge es mostrarà en línia amb el text.
- `full_width`. Valor predeterminat: `false` (vegeu [a sota](#imatge-d-amplada-completa)).
- `lazy_loading`. Valor predeterminat: `true`.

### Imatges per a temes duals

Útil si vols utilitzar una imatge diferent pels temes clar i fosc:

{{ dual_theme_image(light_src="img/paris_day.webp", dark_src="img/paris_night.webp" alt="La Torre Eiffel") }}

#### Ús
```
{{/* dual_theme_image(light_src="img/paris_day.webp", dark_src="img/paris_night.webp" alt="La Torre Eiffel") */}}
```

### Imatge invertible

Útil per a gràfics, dibuixos de línies, diagrames… Inverteix els colors de la imatge. La imatge original s'utilitzarà per al tema clar.

{{ invertible_image(src="img/graph.webp", alt="Gràfic invertible") }}

#### Ús

```
{{/* invertible_image(src="img/graph.webp", alt="Gràfic invertible") */}}
```

### Imatge regulable

Les imatges amb massa brillantor o contrast poden ser molestes en un fons fosc. Aquí tens un exemple d'una fotografia que s'atenua quan s'activa el tema fosc.

{{ dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Fotografia d'un desert, cel celestial") }}

#### Ús

```
{{/* dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Fotografia d'un desert, cel celestial") */}}
```

### Canvi d'imatge en passar el cursor

La imatge mostrada canvia quan l'usuari passa el cursor per sobre. Útil per a comparacions d'abans i després, per exemple.

{{ image_hover(default_src="img/edited.webp", hovered_src="img/raw.webp", default_alt="Foto editada", hovered_alt="Foto original") }}

#### Ús

```
{{/* image_hover(default_src="img/before.webp", hovered_src="img/after.webp", default_alt="Foto editada", hovered_alt="Foto original") */}}
```

### Canvi d'imatge via clic

Mostra una imatge i canvia a una diferent en fer clic. Ideal per destacar diferències o cridar l'atenció sobre detalls.

{{ image_toggler(default_src="img/mojave_day.webp", toggled_src="img/mojave_night.webp", default_alt="Mojave de dia", toggled_alt="Mojave de nit") }}

#### Ús

```
{{/* image_toggler(default_src="img/mojave_day.webp", toggled_src="img/mojave_night.webp", default_alt="Mojave de dia", toggled_alt="Mojave de nit") */}}
```

### Imatge d'amplada completa

La imatge s'expandirà per coincidir amb l'amplada de la capçalera, que normalment és més ampla que el text de l'article (excepte en mòbil/finestres petites).

Tots els altres shortcodes d'imatges poden utilizar l'amplada completa assignant `true` al paràmetre opcional `full_width`.

{{ full_width_image(src="img/amsterdam_by_oskerwyld.webp", alt="Fotografia d'un canal a Àmsterdam") }}

#### Ús

```
{{/* full_width_image(src="img/amsterdam_by_oskerwyld.webp", alt="Fotografia d'un canal a Àmsterdam") */}}
```

## Shortcodes de codi

### Mostrar ruta o URL

Mostra una ruta o URL al següent bloc de codi trobat. Si comença amb "http", es convertirà en un enllaç. Particularment útil quan s'utilitza en conjunció amb el [shortcode de text remot](#text-remot).

{{ admonition(type="warning", title="IMPORTANT", text="Aquesta funcionalitat requereix JavaScript. Per activar-la, configura `add_src_to_code_block = true` a la secció `[extra]` de la teva pàgina, secció, o `config.toml`.") }}

{{ add_src_to_code_block(src="https://github.com/welpo/doteki/blob/main/.gitignore") }}

```.gitignore
{{ remote_text(src="https://raw.githubusercontent.com/welpo/doteki/main/.gitignore") }}
```

#### Ús

````
{{/* add_src_to_code_block(src="https://github.com/welpo/doteki/blob/main/.gitignore") */}}

```.gitignore
__pycache__/
*coverage*
.vscode/
dist/
```
````

## Shortcodes de text

### Text remot

Afegeix text des d'una URL remota o un arxiu local.

El shortcode accepta tres paràmetres:

- `src`: L'URL d'origen o ruta del fitxer (obligatori)
- `start`: Primera línia a mostrar (opcional, comença a 1)
- `end`: Número de l'última línia (opcional, per defecte és 0, l'última línia)

{{ admonition(type="info", text="`start` i `end` són inclusius. `start=3, end=3` mostrarà només la tercera línia.") }}

**Important**:

- **Arxius remots VS arxius locals**: Si `src` comença amb "http", es tractarà com un arxiu remot. D'altra banda, s'assumeix que és una ruta d'arxiu local.
- **Accés a arxius**: Atès que utilitza la funció [`load_data`](https://www.getzola.org/documentation/templates/overview/#load-data) de Zola, els arxius locals han d'estar dins del directori de Zola —vegeu la [lògica de cerca d'arxius](https://www.getzola.org/documentation/templates/overview/#file-searching-logic). Desde [tabi 2.16.0](https://github.com/welpo/tabi/releases/tag/v2.16.0), el shortcode admet també rutes relatives.
- **Formateig de blocs de codi**: Per mostrar el text com un bloc de codi, has d'afegir manualment les tanques de codi Markdown (cometes inverses) i, opcionalment, especificar el llenguatge de programació per al ressaltat sintàctic.

#### Ús

Afegeix un script de Python remot dins d'un bloc de codi amb ressaltat sintàctic:

````
```python
{{/* remote_text(src="https://example.com/script.py") */}}
```
````

Mostra el text d'un arxiu local:

```
{{/* remote_text(src="ruta/a/arxiu.txt") */}}
```

Mostreu només les línies 3 a 5 d'un arxiu local:

```
{{/* remote_text(src="ruta/a/arxiu.txt", start=3, end=5) */}}
```

### Advertències

Destaca informació amb aquests shortcodes. Hi ha cinc tipus (`type`): `note`, `tip`, `info`, `warning`, i `danger`.

{{ admonition(type="note", text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#).") }}

{{ admonition(type="tip", text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#).") }}

{{ admonition(type="info", text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#).") }}

{{ admonition(type="warning", text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#).") }}

{{ admonition(type="danger", text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#).") }}

Pots canviar el `title` i la `icon` de l'advertència. Ambdós paràmetres accepten text i per defecte coincideixen amb el tipus d'advertència. `icon` pot ser qualsevol dels tipus d'advertència disponibles.

{{ admonition(type="note", icon="tip", title="Títol i icona personalitzats", text="Contingut amb **sintaxi** *Markdown*. Consulta [aquesta `api`](#).") }}

#### Ús

```
{{/* admonition(type="danger", icon="tip", title="Un consell important", text="Mantingues-te hidratat") */}}
```

### Cites multillenguatge

Aquest shortcode permet mostrar una cita traduïda i en el llenguatge original:

{{ multilingual_quote(original="Die Logik ist zwar unerschütterlich, aber einem Menschen, der leben will, widersteht sie nicht.", translated="La lògica, encara que inquebrantable, no resisteix a un home que vol viure.", author="Franz Kafka") }}

#### Ús

```
{{/* multilingual_quote(original="Die Logik ist zwar unerschütterlich, aber einem Menschen, der leben will, widersteht sie nicht.", translated="La lògica, encara que inquebrantable, no resisteix a un home que vol viure.", author="Franz Kafka") */}}
```

### Referències amb sagnat invertit

Aquest shortcode formata una secció de referència amb un sagnat invertit de la següent manera:

{% references() %}

Alderson, E. (2015). Ciberseguretat i justícia social: Una crítica a la hegemonia corporativa en un món digital. *New York Journal of Technology, 11*(2), 24-39. [https://doi.org/10.1007/s10198-022-01497-6](https://doi.org/10.1007/s10198-022-01497-6).

Funkhouser, M. (2012). Les normes socials d'indecència: Un anàlisi del comportament desviat a la societat contemporània. *Los Angeles Journal of Sociology, 16*(3), 41-58. [https://doi.org/10.1093/jmp/jhx037](https://doi.org/10.1093/jmp/jhx037).

Schrute, D. (2005). La revolució de l'agricultura de remolatxa: Un anàlisi de la innovació agrícola. *Scranton Agricultural Quarterly, 38*(3), 67-81.

Steinbrenner, G. (1997). L'anàlisi cost-benefici de George Costanza: Un anàlisi del comportament de presa de riscos en el lloc de treball. *New York Journal of Business, 12*(4), 112-125.

Winger, J. A. (2010). L'art del debat: Un examen de la retòrica en el model de les Nacions Unides del Greendale Community College. *Colorado Journal of Communication Studies, 19*(2), 73-86. [https://doi.org/10.1093/6seaons/1movie](https://doi.org/10.1093/6seaons/1movie).

{% end %}

#### Ús

```
{%/* references() */%}

Les teves referències van aquí.

Cada una en una nova línia. Es renderitzarà el Markdown (enllaços, cursiva…).

{%/* end */%}
```

### Spoiler

Aquest shortcode amaga el text fins que l'usuari fa clic per revelar-lo. Per exemple: A l'antiga Roma, el *vomitorium* era {{ spoiler(text="l'entrada a través de la qual les multituds entraven i sortien d'un estadi, no un espai especial utilitzat per a vomitar durant els àpats. Sí, [de debó](https://ca.wikipedia.org/wiki/Vomitori).") }}

Com veus, el Markdown es renderitza.

Aquest shortcode té l'opció `fixed_blur` per difuminar el text "SPOILER", en lloc de difuminar el contingut real. Per exemple: és {{ spoiler(text="innecessari", fixed_blur=true)}} esperar 24 hores abans de denunciar la desaparició d'una persona.

#### Ús

```
{{/* spoiler(text="text a amagar", fixed_blur=false) */}}
```

## Contenidors

### Contenidor ample

Utilitza aquest codi curt si vols tenir una taula, paràgraf, bloc de codi… més ample. A l'escriptori, ocuparà l'amplada de la capçalera. A mòbils no tindrà efecte, excepte per les taules, que guanyaran scroll horitzontal.

{% wide_container() %}

| Títol             |  Any  | Director              | Director de fotografia | Gènere         | IMDb  | Durada       |
|-------------------|-------|----------------------|-------------------------|----------------|-------|--------------|
| Beoning           | 2018  | Lee Chang-dong       | Hong Kyung-pyo          | Drama/Misteri  | 7.5   | 148 min      |
| The Master        | 2012  | Paul Thomas Anderson | Mihai Mălaimare Jr.     | Drama/Història | 7.1   | 137 min      |
| The Tree of Life  | 2011  | Terrence Malick      | Emmanuel Lubezki        | Drama          | 6.8   | 139 min      |

{% end %}

#### Ús

```
{%/* wide_container() */%}

Posa el teu bloc de codi, paràgraf, taula… aquí.

El Markdown, per suposat, serà interpretat.

{%/* end */%}
```

### Forçar direcció del text

Força la direcció del text d'un bloc de contingut. Substitueix tant la configuració global `force_codeblock_ltr` com la direcció general del document.

Accepta el paràmetre `direction`: la direcció de text desitjada. Pot ser "ltr" (d'esquerra a dreta) o "rtl" (de dreta a esquerra). Per defecte és "ltr".

{% force_text_direction(direction="rtl") %}
```python
def مرحبا_بالعالم():
    print("مرحبا بالعالم!")
```
{% end %}

#### Ús

En una pàgina LTR podem forçar que un bloc de codi sigui RTL (com es mostra a dalt) de la següent manera:

````
{%/* force_text_direction(direction="rtl") */%}

```python
def مرحبا_بالعالم():
    print("مرحبا بالعالم!")
```

{%/* end */%}
````
