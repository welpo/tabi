+++
title = "Personalitza el color de tabi i el tema per defecte"
date = 2023-08-09
updated = 2023-08-10
description = "Aprèn a personalitzar tabi fent servir skins i establint un tema per defecte, aconseguint un aspecte únic."

[taxonomies]
tags = ["funcionalitat", "tutorial"]

[extra]
toc = true
quick_navigation_buttons = true
social_media_card = "img/social_cards/ca_blog_customise_tabi.jpg"
+++

tabi pot ser personalitzat de dues maneres: establint el tema per defecte (fosc o clar) i triant el color principal per al tema ("skin").

## Tema per defecte

Per configurar permanentment el teu lloc en el tema fosc o clar, necessites desactivar el `theme_switcher` a `config.toml` i establir el teu tema preferit (`light` o `dark`) a `default_theme`.

Per exemple, per tenir un tema fosc permanent:

```toml
[extra]
theme_switcher = false
default_theme = "dark"
```

Si el teu interruptor de mode clar/fosc està activat, el `default_theme` només s'utilitzarà com a reserva, en cas que un visitant tingui JavaScript desactivat.

## Skins

No t'agrada l'aiguamarina? Cap problema! tabi té 12 skins per triar. Si cap d'aquestes t'agrada, pots [crear la teva pròpia skin](#crea-la-teva-propia-skin).

Una skin és un arxiu CSS amb dues variables: el color principal per al tema clar i el color principal per al tema fosc.

Activar una skin és tan fàcil com establir la variable `skin` a la teva `config.toml` amb el nom de la skin. Per exemple:

```toml
[extra]
skin = "sakura"
```

Fes una ullada a les skins disponibles a continuació.

**Fes clic a les imatges** per canviar entre els temes fosc i clar.

<hr>

### Aiguamarina

La skin per defecte. Si la variable `skin` no està configurada (o és igual a `"teal"`), aquest és l'aspecte de tabi:

{{ image_toggler(default_src="img/skins/teal_light.webp", toggled_src="img/skins/teal_dark.webp", default_alt="teal skin in light mode", toggled_alt="teal skin in dark mode", full_width=true) }}

<hr>

### Lavanda

{{ image_toggler(default_src="img/skins/lavender_light.webp", toggled_src="img/skins/lavender_dark.webp", default_alt="skin lavanda en mode clar", toggled_alt="skin lavanda en mode fosc", full_width=true) }}

Per aplicar-la, utilitza `skin = "lavender"`.

<hr>

### Vermell

{{ image_toggler(default_src="img/skins/red_light.webp", toggled_src="img/skins/red_dark.webp", default_alt="skin vermell en mode clar", toggled_alt="skin vermell en mode fosc", full_width=true) }}

Canvia a aquesta skin establint `skin = "red"`.

<hr>

### Menta

Una skin dissenyada per 🅿️.

{{ image_toggler(default_src="img/skins/mint_light.webp", toggled_src="img/skins/mint_dark.webp", default_alt="skin menta amb tema clar", toggled_alt="skin menta amb tema fosc", full_width=true) }}

Activa-la amb `skin = "mint"`.

<hr>

### Sakura

Inspirat per la temporada de floració dels cirerers al Japó.

{{ image_toggler(default_src="img/skins/sakura_light.webp", toggled_src="img/skins/sakura_dark.webp", default_alt="skin sakura en mode clar", toggled_alt="skin sakura en mode fosc", full_width=true) }}

Per habilitar aquesta skin, ajusta `skin = "sakura"`.

<hr>

### Blau

{{ image_toggler(default_src="img/skins/blue_light.webp", toggled_src="img/skins/blue_dark.webp", default_alt="skin blau en mode clar", toggled_alt="skin blau en mode fosc", full_width=true) }}

Per activar aquesta aparença, estableix `skin = "blue"`.

<hr>

### Lingot indigo

*Indigo* pel blau (en el tema clar) i *lingot* pel daurat (en el tema fosc).

{{ image_toggler(default_src="img/skins/indigo_ingot_light.webp", toggled_src="img/skins/indigo_ingot_dark.webp", default_alt="skin lingot indigo en mode clar", toggled_alt="skin lingot indigo en mode fosc", full_width=true) }}

Per activar aquest tema, utilitza `skin = "indigo_ingot"`.

<hr>

### Evangelion

Inspirat pels colors de la Unitat Evangelion-01 (en el tema fosc) i la Unitat-02 (en el tema clar).

{{ image_toggler(default_src="img/skins/evangelion_light.webp", toggled_src="img/skins/evangelion_dark.webp", default_alt="skin evangelion en mode clar", toggled_alt="skin evangelion en mode fosc", full_width=true) }}

<hr>

### Monocromàtic

{{ image_toggler(default_src="img/skins/monochrome_light.webp", toggled_src="img/skins/monochrome_dark.webp", default_alt="skin monocromàtic en mode clar", toggled_alt="skin monocromàtic en mode fosc", full_width=true) }}

Per aconseguir aquesta aparença, estableix `skin = "monochrome"`.

<hr>

### Taronja (baix contrast)

**AVÍS!** Aquesta skin en mode clar pot tenir [baix contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), afectant l'accessibilitat i la qualificació Lighthouse. (El mode fosc té bon contrast.)

{{ image_toggler(default_src="img/skins/lowcontrast_orange_light.webp", toggled_src="img/skins/lowcontrast_orange_dark.webp", default_alt="skin taronja de baix contrast en mode clar", toggled_alt="skin taronja de baix contrast en mode fosc", full_width=true) }}

Per utilitzar-la, estableix `skin = "lowcontrast_orange"`.

<hr>

### Préssec (baix contrast)

**AVÍS!** Aquesta skin en mode clar pot tenir [baix contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), afectant l'accessibilitat i la qualificació Lighthouse. (El mode fosc té bon contrast.)

{{ image_toggler(default_src="img/skins/lowcontrast_peach_light.webp", toggled_src="img/skins/lowcontrast_peach_dark.webp", default_alt="skin préssec de baix contrast en mode clar", toggled_alt="skin préssec de baix contrast en mode fosc", full_width=true) }}

Especifica `skin = "lowcontrast_peach"` per utilitzar aquesta skin.

<hr>

### Rosa (baix contrast)

**AVÍS!** Aquesta skin en mode clar pot tenir [baix contrast](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), afectant l'accessibilitat i la qualificació Lighthouse. (El mode fosc té bon contrast.)

{{ image_toggler(default_src="img/skins/lowcontrast_pink_light.webp", toggled_src="img/skins/lowcontrast_pink_dark.webp", default_alt="skin rosa de baix contrast en tema clar", toggled_alt="skin rosa de baix contrast en tema fosc", full_width=true) }}

Per utilitzar aquests colors, assigna `skin = "lowcontrast_pink"`.

<hr>

### Crea la teva pròpia skin

No estàs limitat a les skins predefinides. Per què no crees un disseny únic que et representi?

Pots guardar la teva nova skin en qualsevol d'aquests dos directoris:
1. Dins del directori del tema: `themes/tabi/sass/skins`
2. Dins del directori principal del teu lloc: `sass/skins` (necessitaràs crear aquesta carpeta)

Crea un nou arxiu `.scss` (per exemple, `la_teva_skin.scss`) a la ubicació que prefereixis. Aquest arxiu ha de contenir aquestes dues variables (aquesta és la skin predeterminada, "teal"):

```scss
:root {
    --primary-color: #087e96;
}

[data-theme='dark'] {
    --primary-color: #91e0ee;
}
```

Modifica els colors al teu gust. Una vegada estiguis satisfet, actualitza la variable `skin` perquè coincideixi amb el nom del teu arxiu.

Recorda tenir en compte l'accesibilitat dels colors que triis. Aquí tens un enllaç que et pot ajudar: [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/). El fondo del tema clar és `#fff`, i el del tema fosc `#1f1f1f`.
