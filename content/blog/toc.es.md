+++
title = "Tabla de contenido"
date = 2022-11-01
updated = 2023-08-14
description = "Una publicación que muestra la tabla de contenido opcional así como su configuración."

[taxonomies]
tags = ["funcionalidad", "markdown", "tutorial"]

[extra]
toc = true
quick_navigation_buttons = true
social_media_card = "img/social_cards/es_blog_toc.jpg"
+++

## Documentación
### Habilitando (y posicionando) la Tabla de Contenido

Hay dos formas de habilitar la Tabla de Contenido (TdC). Si quieres que esté justo debajo del encabezado (como en esta página), configura esta variable en el front matter de tu post:

```toml
[extra]
toc = true
```

Si prefieres situar la TdC en otro lugar de tu post (por ejemplo, después de una introducción), puedes hacerlo añadiendo una línea con este contenido ahí donde quieras que aparezca la TdC:

```markdown
<!-- toc -->
```

También puedes usar el shortcode `{{/* toc() */}}`, que simplemente insertará ese texto por ti ([idea de Michael Clayton](https://github.com/getzola/zola/issues/584#issuecomment-1546086781)).

Este método renderizará la TdC sin el encabezado "Tabla de contenido". Esto te permite usar un encabezado diferente (o ninguno) para la TdC, o incluso ocultarla de forma predeterminada:

<details>
    <summary>TdC oculta</summary>
    <!-- toc -->
</details>

El código para lograr esto:

```markdown
<details>
    <summary>TdC oculta</summary>
    <!-- toc -->
</details>
```

*Nota*: Si activas la TdC a través de `toc = true` y además añades `<!-- toc -->` en algún lugar de tu texto, obtendrás múltiples TdCs.

Si colocas la TdC en algún lugar distinto al predeterminado y le añades un encabezado, seguramente quieras ocultar dicho encabezado de la TdC (consulta la [sección para ocultar encabezados](#ocultando-encabezados-de-la-tdc)). Puedes lograrlo así:

```markdown,hl_lines=06 11-13
+++
title = "El título de tu post"
date = 2034-01-11

[extra]
toc_ignore_pattern = "^(Tabla de contenido)"
+++

Aquí va algún texto introductorio.

### Tabla de contenido

<!-- toc -->

## Primer encabezado de contenido
```

### Estableciendo la profundidad máxima

Puedes establecer la profundidad máxima para la TdC especificando la variable `toc_levels`, que acepta un número entero entre 1 y 4:

```toml
[extra]
toc_levels = 2
```

En este ejemplo, sólo los dos primeros niveles de encabezados se incluirían en la TdC, independientemente de sus etiquetas HTML reales (`h1`, `h2`, `h3`, etc.). Si quieres incluir sólo el nivel principal de encabezados, establece `toc_levels = 1`. El valor predeterminado de `toc_levels` es `3`.

Ten en cuenta a tus lectores al establecer `toc_levels`. Aunque puede ser tentador incluir muchos niveles anidados para una navegación detallada, una TdC más corta y sencilla suele ser más amigable y menos abrumadora.

### Ocultando encabezados de la TdC

Es posible que quieras ocultar ciertos encabezados. Por ejemplo, si tu artículo tiene muchas Figuras o Tablas, éstas podrían saturar la TdC. Puedes ocultar encabezados específicos en la TdC configurando la variable `toc_ignore_pattern` en la sección `[extra]` del front matter de tu post.

Esta variable espera una expresión regular (regex), ya que utiliza el test [matching](https://tera.netlify.app/docs/#matching) de Tera. El `toc_ignore_pattern` se prueba contra el texto del encabezado. Por ejemplo, para el encabezado `### Lectura adicional`, sólo el texto `Lectura adicional` se usaría para comprobar si concuerda con el patrón.

Aquí tienes algunos valores de ejemplo para `toc_ignore_pattern` junto con los encabezados que ocultarían:

| `toc_ignore_pattern`             | Excluye encabezados que…                                             |
|----------------------------------|----------------------------------------------------------------------|
| `Tabla`                          | contengan "Tabla"                                                    |
| `^Figura`                        | empiecen por "Figura"                                                |
| <code>(?i)(tabla\|figura)</code> | empiecen por "Tabla" o "Figura" (insensible a mayúsculas/minúsculas) |
| `\[Borrador\]$`                  | terminen con "[Borrador]".                                           |

Puedes probar tu expresión regular en plataformas como [regex101](https://regex101.com/r/2dI7U2/1) para asegurarte de que funciona como esperas.

*Nota*: Las capacidades de "look-around", incluyendo look-ahead y look-behind, no están soportadas.

# Encabezado 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

## Encabezado 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
### Encabezado 3.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Encabezado 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Encabezado 4.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

### Encabezado 3.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Encabezado 4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Encabezado 4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

## Encabezado 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
### Encabezado 3.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Encabezado 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Encabezado 4.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

### Encabezado 3.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Encabezado 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Encabezado 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
