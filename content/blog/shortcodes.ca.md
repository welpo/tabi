+++
title = "Shortcodes personalitzats"
date = 2023-02-19
updated = 2023-08-24
description = "Aquest tema inclou alguns shortcodes personalitzats útils que pots utilitzar per millorar les teves publicacions. Ja sigui per mostrar imatges que s'adapten als temes clar i fosc, o per donar format a una secció de referències amb un aspecte professional, aquests shortcodes personalitzats t'ajudaran."

[taxonomies]
tags = ["funcionalitat", "shortcodes"]

[extra]
toc = true
toc_levels = 2
quick_navigation_buttons = true
+++

## Shortcodes d'imatge

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

## Shortcodes de text

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
