+++
title = "Taula de contingut"
date = 2022-11-01
updated = 2023-08-12
description = "Una publicació que mostra la taula de contingut opcional."

[taxonomies]
tags = ["funcionalitat", "markdown", "tutorial"]

[extra]
toc = true
+++

Per habilitar la taula de continguts, estableix aquesta variable a la metainformació de l'article:

```toml
[extra]
toc = true
```

També pots establir la profunditat màxima de la taula de continguts especificant la variable `toc_levels`:

```toml, hl_lines=03
[extra]
toc = true
toc_levels = 2
```

En aquest exemple, només s'inclourien els primers dos nivells de capçaleres a la taula de continguts, independentment de les seves etiquetes HTML reals (`h1`, `h2`, `h3`, etc.). Si només vols incloure el nivell principal de capçaleres, estableix `toc_max_depth = 1`. Per defecte, si no s'especifica `toc_max_depth`, la taula de continguts inclourà tres nivells de capçaleres.

Tingues en compte als teus lectors quan configures `toc_levels`. Encara que pot ser temptador incloure molts nivells per a una navegació detallada, una taula de continguts més curta i senzilla sovint és més amigable per al lector. Ajusta la profunditat segons la complexitat i longitud del teu contingut per a la millor experiència del lector.

# Capçalera 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

## Capçalera 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
### Capçalera 3.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

### Capçalera 3.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

## Capçalera 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
### Capçalera 3.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

### Capçalera 3.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
