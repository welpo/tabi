+++
title = "Shortcodes personalizados"
date = 2023-02-19
updated = 2023-08-11
description = "Este tema incluye algunos shortcodes personalizados útiles que puedes utilizar para mejorar tus publicaciones. Puedes mostrar imágenes que se adapten a los temas claro y oscuro, dar formato a una sección de referencias con un aspecto profesional, y más."

[taxonomies]
tags = ["funcionalidad", "shortcodes"]
+++

## Shortcodes de imágenes

### Imágenes de doble tema

Útil si deseas usar una imagen diferente para los temas claro y oscuro:

{{ dual_theme_image(light_src="img/paris_day.webp", dark_src="img/paris_night.webp" alt="La Torre Eiffel") }}

#### Uso
```
{{/* dual_theme_image(light_src="img/paris_day.webp", dark_src="img/paris_night.webp" alt="La Torre Eiffel") */}}
```

### Imagen invertible

Ideal para gráficos, dibujos lineales, diagramas... Invierte los colores de la imagen. La imagen de origen se utilizará para el tema claro.

{{ invertible_image(src="img/graph.webp", alt="Gráfico invertible") }}

#### Uso

```
{{/* invertible_image(src="img/graph.webp", alt="Gráfico invertible") */}}
```


### Imagen atenuable

Las imágenes con demasiado brillo o contraste pueden ser demasiado discordantes en un fondo oscuro. Aquí tienes un ejemplo de una fotografía que se atenúa cuando el tema oscuro está activo.

{{ dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Fotografía de un desierto, cielo celestial") }}

#### Uso

```
{{/* dimmable_image(src="img/desert_by_oskerwyld.webp", alt="Fotografía de un desierto, cielo celestial") */}}
```

### Cambio de imagen al pasar el cursor

La imagen mostrada cambia cuando el usuario pasa el cursor por encima. Útil para comparaciones de antes y después, por ejemplo.

{{ image_hover(default_src="img/edited.webp", hovered_src="img/raw.webp", default_alt="Foto editada", hovered_alt="Foto original") }}

#### Uso

```
{{/* image_hover(default_src="img/before.webp", hovered_src="img/after.webp", default_alt="Imagen editada", hovered_alt="Toma original") */}}
```

### Cambio de imagen vía click

Muestra una imagen y cambia a una diferente al hacer clic. Ideal para destacar diferencias o llamar la atención sobre detalles.

{{ image_toggler(default_src="img/mojave_day.webp", toggled_src="img/mojave_night.webp", default_alt="Mojave durante el día", toggled_alt="Mojave durante la noche") }}

#### Uso

```
{{/* image_toggler(default_src="img/mojave_day.webp", toggled_src="img/mojave_night.webp", default_alt="Mojave durante el día", toggled_alt="Mojave durante la noche") */}}
```

### Imagen a ancho completo

La imagen se expandirá para coincidir con el ancho del encabezado, que generalmente es más ancho que el texto del artículo (excepto en móvil/ventanas pequeñas).

Todos los otros shortcodes de imágenes pueden usar el ancho completo asignando el valor `true` al parámetro opcional `full_width`.

{{ full_width_image(src="img/amsterdam_by_oskerwyld.webp", alt="Fotografía de un canal en Ámsterdam") }}

#### Uso

```
{{/* full_width_image(src="img/amsterdam_by_oskerwyld.webp", alt="Fotografía de un canal en Ámsterdam") */}}
```

## Citas

### Citas multilenguaje

Este shortcode permite mostrar una cita traducida y en su lenguaje original:

{{ multilingual_quote(original="Ce qui est terrible, ce n’est pas de souffrir ni de mourir, mais de mourir en vain.", translated="Lo terrible no es sufrir o morir, sino morir en vano.", author="Jean-Paul Sartre") }}

#### Uso

```
{{/* multilingual_quote(original="Ce qui est terrible, ce n’est pas de souffrir ni de mourir, mais de mourir en vain.", translated="Lo terrible no es sufrir o morir, sino morir en vano.", author="Jean-Paul Sartre") */}}
```

## Referencias

### Sangría francesa

Este shortcode formatea una sección de referencias con sangría francesa de la siguiente manera:

{% references() %}

Alderson, E. (2015). Ciberseguridad y justicia social: Una crítica a la hegemonía corporativa en un mundo digital. *New York Journal of Technology, 11*(2), 24-39. [https://doi.org/10.1007/s10198-022-01497-6](https://doi.org/10.1007/s10198-022-01497-6).

Funkhouser, M. (2012). Las normas sociales de indecencia: Un análisis del comportamiento desviado en la sociedad contemporánea. *Los Angeles Journal of Sociology, 16*(3), 41-58. [https://doi.org/10.1093/jmp/jhx037](https://doi.org/10.1093/jmp/jhx037).

Schrute, D. (2005). La revolución de la agricultura de remolacha: Un análisis de la innovación agrícola. *Scranton Agricultural Quarterly, 38*(3), 67-81.

Steinbrenner, G. (1997). El análisis costo-beneficio de George Costanza: Un examen del comportamiento de toma de riesgos en el lugar de trabajo. *New York Journal of Business, 12*(4), 112-125.

Winger, J. A. (2010). El arte del debate: Un examen de la retórica en el modelo de las Naciones Unidas del Greendale Community College. *Colorado Journal of Communication Studies, 19*(2), 73-86. [https://doi.org/10.1093/6seaons/1movie](https://doi.org/10.1093/6seaons/1movie).

{% end %}

#### Uso

```
{%/* references() */%}

Tus referencias van aquí.

Cada una en una línea nueva. Se renderizará Markdown (enlaces, cursivas…).

{%/* end */%}
```

## Contenedores

### Contenedor ancho

Utiliza este código corto si deseas tener una tabla, párrafo, bloque de código… más ancho. En escritorio, ocupará el ancho del encabezado. En móviles no tendrá efecto, excepto para las tablas, que ganarán scroll horizontal.

{% wide_container() %}

| Título            |  Año  | Director             | Director de Fotografía| Género        | IMDb  | Duración     |
|-------------------|-------|----------------------|-----------------------|---------------|-------|--------------|
| Beoning           | 2018  | Lee Chang-dong       | Hong Kyung-pyo        | Drama/Misterio| 7.5   | 148 min      |
| The Master        | 2012  | Paul Thomas Anderson | Mihai Mălaimare Jr.   | Drama/Historia| 7.1   | 137 min      |
| The Tree of Life  | 2011  | Terrence Malick      | Emmanuel Lubezki      | Drama         | 6.8   | 139 min      |

{% end %}

#### Uso

```
{%/* wide_container() */%}

Coloca tu bloque de código, párrafo, tabla… aquí.

El Markdown, por supuesto, será interpretado.

{%/* end */%}
```
