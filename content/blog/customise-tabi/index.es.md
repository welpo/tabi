+++
title = "Personaliza el color de tabi y el tema predeterminado"
date = 2023-08-09
updated = 2023-10-07
description = "Aprende a personalizar tabi usando skins y estableciendo un tema predeterminado, haciendo que tu sitio sea único."

[taxonomies]
tags = ["funcionalidad", "tutorial"]

[extra]
toc = true
quick_navigation_buttons = true
social_media_card = "social_cards/es_blog_customise_tabi.jpg"
+++

tabi puede ser personalizado de dos maneras: estableciendo el tema predeterminado (oscuro o claro) y eligiendo el color principal para el tema ("skin").

## Tema predeterminado

Para configurar permanentemente tu sitio en el tema oscuro o claro, necesitas desactivar el `theme_switcher` en `config.toml` y establecer tu tema preferido (`light` o `dark`) como el `default_theme`.

Por ejemplo, para tener un tema oscuro permanente:

```toml
[extra]
theme_switcher = false
default_theme = "dark"
```

Si tu interruptor de modo claro/oscuro está activado, el `default_theme` sólo se usará como respaldo, en caso de que un visitante tenga JavaScript desactivado.

## Skins

¿No te gusta el aguamarina? ¡No hay problema! tabi tiene 12 skins (pieles) para elegir. Si ninguna de estas te convence, puedes [crear tu propia skin](#crea-tu-propia-skin).

Una skin es un archivo CSS con dos variables: el color principal para el tema claro y el color principal para el tema oscuro.

Activar una skin es tan fácil como establecer la variable `skin` en tu `config.toml` con el nombre de la skin. Por ejemplo:

```toml
[extra]
skin = "sakura"
```

Echa un vistazo a las pieles disponibles a continuación.

**Haz clic en las imágenes** para cambiar entre los temas oscuro y claro.

<hr>

### Aguamarina

La skin predeterminada. Si la variable `skin` no está configurada (o es igual a `"teal"`), este es el aspecto de tabi:

{{ image_toggler(default_src="blog/customise-tabi/skins/teal_light.webp", toggled_src="blog/customise-tabi/skins/teal_dark.webp", default_alt="skin aguamarina en tema claro", toggled_alt="skin aguamarina en tema oscuro", full_width=true) }}

<hr>

### Lavanda

{{ image_toggler(default_src="blog/customise-tabi/skins/lavender_light.webp", toggled_src="blog/customise-tabi/skins/lavender_dark.webp", default_alt="skin lavanda en tema claro", toggled_alt="skin lavanda en tema oscuro", full_width=true) }}

Aplica esta skin con `skin = "lavender"`.

<hr>

### Rojo

{{ image_toggler(default_src="blog/customise-tabi/skins/red_light.webp", toggled_src="blog/customise-tabi/skins/red_dark.webp", default_alt="skin rojo en tema claro", toggled_alt="skin rojo en tema oscuro", full_width=true) }}

Cambia a esta skin con la configuración `skin = "red"`.

<hr>

### Menta

Una skin hecha por 🅿️.

{{ image_toggler(default_src="blog/customise-tabi/skins/mint_light.webp", toggled_src="blog/customise-tabi/skins/mint_dark.webp", default_alt="skin menta en tema claro", toggled_alt="skin menta en tema oscuro", full_width=true) }}

Actívala con `skin = "mint"`.

<hr>

### Sakura

Inspirada en la temporada de florecimiento de los cerezos en Japón.

{{ image_toggler(default_src="blog/customise-tabi/skins/sakura_light.webp", toggled_src="blog/customise-tabi/skins/sakura_dark.webp", default_alt="skin sakura en tema claro", toggled_alt="skin sakura en tema oscuro", full_width=true) }}

Para activar esta skin, ajusta `skin = "sakura"`.

<hr>

### Azul

{{ image_toggler(default_src="blog/customise-tabi/skins/blue_light.webp", toggled_src="blog/customise-tabi/skins/blue_dark.webp", default_alt="skin azul en tema claro", toggled_alt="skin azul en tema oscuro", full_width=true) }}

Para lograr esta apariencia, establece `skin = "blue"`.

<hr>

### Lingote índigo

*Índigo* por el azul (en el tema claro) y *lingote* por el oro (en el tema oscuro).

{{ image_toggler(default_src="blog/customise-tabi/skins/indigo_ingot_light.webp", toggled_src="blog/customise-tabi/skins/indigo_ingot_dark.webp", default_alt="skin lingote índigo en tema claro", toggled_alt="skin lingote índigo en tema oscuro", full_width=true) }}

Para activar esta skin, usa `skin = "indigo_ingot"`.

<hr>

### Evangelion

Inspirada en los colores de la Unidad-01 de Evangelion (en el tema oscuro) y el EVA-02 (en el tema claro).

{{ image_toggler(default_src="blog/customise-tabi/skins/evangelion_light.webp", toggled_src="blog/customise-tabi/skins/evangelion_dark.webp", default_alt="skin evangelion en tema claro", toggled_alt="skin evangelion en tema oscuro", full_width=true) }}

Actívala con `skin = "evangelion"`.

<hr>

### Monocromático

{{ image_toggler(default_src="blog/customise-tabi/skins/monochrome_light.webp", toggled_src="blog/customise-tabi/skins/monochrome_dark.webp", default_alt="skin monocromático en tema claro", toggled_alt="skin monocromático en tema oscuro", full_width=true) }}

Si te gusta este look, usa `skin = "monochrome"`.

<hr>

### Naranja (bajo contraste)

**¡ADVERTENCIA!** El tema claro de esta skin podría tener [poco contraste](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), afectando la accesibilidad y la calificación de Lighthouse. (El tema oscuro tiene buen contraste.)

{{ image_toggler(default_src="blog/customise-tabi/skins/lowcontrast_orange_light.webp", toggled_src="blog/customise-tabi/skins/lowcontrast_orange_dark.webp", default_alt="skin naranja de bajo contraste en tema claro", toggled_alt="skin naranja de bajo contraste en tema oscuro", full_width=true) }}

Para activarla, configura `skin = "lowcontrast_orange"`.

<hr>

### Melocotón (bajo contraste)

**¡ADVERTENCIA!** El tema claro de esta skin podría tener [poco contraste](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), afectando la accesibilidad y la calificación de Lighthouse. (El tema oscuro tiene buen contraste.)

{{ image_toggler(default_src="blog/customise-tabi/skins/lowcontrast_peach_light.webp", toggled_src="blog/customise-tabi/skins/lowcontrast_peach_dark.webp", default_alt="skin melocotón de bajo contraste en tema claro", toggled_alt="skin melocotón de bajo contraste en tema oscuro", full_width=true) }}

Especifica `skin = "lowcontrast_peach"` para usar esta skin.

<hr>

### Rosa (bajo contraste)

**¡ADVERTENCIA!** El tema claro de esta skin podría tener [poco contraste](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html), afectando la accesibilidad y la calificación de Lighthouse. (El tema oscuro tiene buen contraste.)

{{ image_toggler(default_src="blog/customise-tabi/skins/lowcontrast_pink_light.webp", toggled_src="blog/customise-tabi/skins/lowcontrast_pink_dark.webp", default_alt="skin rosa de bajo contraste en tema claro", toggled_alt="skin rosa de bajo contraste en tema oscuro", full_width=true) }}

Para usar estos colores, asigna `skin = "lowcontrast_pink"`.

<hr>

### Crea tu propia skin

No estás limitado a las skins predefinidas. ¿Por qué no diseñas un aspecto único que te represente?

Puedes guardar tu nueva skin en cualquiera de estos dos directorios:
1. Dentro del directorio del tema: `themes/tabi/sass/skins`
2. Dentro del directorio principal de tu sitio: `sass/skins` (necesitarás crear esta carpeta)

Crea un nuevo archivo `.scss` (por ejemplo, `tu_skin.scss`) en la ubicación que prefieras. Este archivo debe contener estas dos variables (esta es la skin predeterminada, "teal"):

```scss
:root {
    --primary-color: #087e96;
}

[data-theme='dark'] {
    --primary-color: #91e0ee;
}
```

Modifica los colores a tu gusto. Una vez que estés satisfecho, actualiza la variable `skin` para que coincida con el nombre de tu archivo.

Recuerda tener en cuenta la accesibilidad de los colores que elijas. Aquí tienes un enlace que te puede ayudar: [WebAIM: Contrast Checker](https://webaim.org/resources/contrastchecker/). El fondo del tema claro es `#fff`, y el del tema oscuro `#1f1f1f`.
