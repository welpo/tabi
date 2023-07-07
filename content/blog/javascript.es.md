+++
title = "Sin JavaScript obligatorio"
date = 2023-01-06
updated = 2023-07-08
description = "JavaScript solo se utiliza cuando HTML y CSS no son suficientes."

[taxonomies]
tags = ["funcionalidad"]
+++

## ¿JavaScript?

Este tema funciona perfectamente sin JavaScript. Opcionalmente, puede cargar una cantidad mínima para añadir algunas funciones que son imposibles de lograr con HTML y CSS:

- **El cambio de modo claro/oscuro**. Habilitado estableciendo `theme_switcher = true`. (~900 bytes)
- **Copia de bloques de código con un clic**. Se activa configurando `copy_button = true`. (~700 bytes)

Estas dos configuraciones se deben aplicar en la sección `[extra]` de tu archivo `config.toml`.

La [funcionalidad de KaTeX](@/blog/markdown.es.md#katex), que requiere cargar un archivo JavaScript de 274 KB, se puede activar para publicaciones específicas. Esto se puede hacer configurando `katex = true` en la sección `[extra]` del encabezado de la publicación.

Aparte de esto, es un tema rápido con HTML y CSS. Como debería ser (en su mayoría) la web :-)
