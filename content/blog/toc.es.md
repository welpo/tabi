+++
title = "Tabla de contenido"
date = 2022-11-01
updated = 2023-08-12
description = "Una publicación que muestra la tabla de contenido opcional."

[taxonomies]
tags = ["funcionalidad", "markdown", "tutorial"]

[extra]
toc = true
+++

Para habilitar la tabla de contenidos, establece esta variable en la metainformación del post:

```toml
[extra]
toc = true
```

También puedes establecer la profundidad máxima de la tabla de contenidos especificando la variable `toc_levels`:

```toml, hl_lines=03
[extra]
toc = true
toc_levels = 2
```

En este ejemplo, sólo los primeros dos niveles de encabezados se incluirían en la tabla de contenidos, independientemente de sus etiquetas HTML reales (`h1`, `h2`, `h3`, etc.). Si sólo quieres incluir el nivel principal de encabezados, establece `toc_levels = 1`. Por defecto, si no se especifica `toc_levels`, la tabla de contenidos incluirá tres niveles de encabezados.

Ten en cuenta a tus lectores al configurar `toc_levels`. Aunque puede ser tentador incluir muchos niveles anidados para una navegación detallada, una tabla de contenidos más corta y sencilla suele ser más amigable y menos abrumadora para el lector. Ajusta la profundidad según la complejidad y longitud de tu contenido para la mejor experiencia del lector.

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
