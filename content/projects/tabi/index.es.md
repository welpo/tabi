+++
title = "tabi"
description = "Un tema de Zola rápido, ligero y moderno con soporte multilingüe."
weight = 40

[taxonomies]
tags = ["web", "JavaScript"]

[extra]
local_image = "projects/tabi/tabi.webp"
canonical_url = "https://osc.garden/es/projects/tabi/"
social_media_card = "social_cards/es_projects_tabi.jpg"
iine_icon = '🌱'
+++

[**tabi**](https://github.com/welpo/tabi) es un tema moderno y rico en funcionalidad para [Zola](https://www.getzola.org/), un generador de sitios web estáticos muy rápido.

{{ full_width_image(src="https://cdn.jsdelivr.net/gh/welpo/tabi@main/light_dark_screenshot.png", alt="Modos claro y oscuro de tabi") }}

#### [Ver en GitHub](https://github.com/welpo/tabi) • [Demo y documentación](https://welpo.github.io/tabi/es/) {.centered-text}

## Características

- [Establece cualquier idioma como predeterminado](https://welpo.github.io/tabi/es/blog/faq-languages/#como-establezco-el-idioma-predeterminado-de-mi-sitio). Configura tu sitio en chino, español, francés, hindi… o cualquier [otro idioma compatible](https://welpo.github.io/tabi/es/blog/faq-languages/#que-idiomas-admite-tabi). La interfaz del tema se traducirá en consecuencia.
- [Integración con repositorios remotos](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#integracion-con-repositorios-git) en GitHub, GitLab, Gitea y Codeberg para el historial de commits y mostrar el código fuente del sitio.
- [Soporte multilingüe completo](https://welpo.github.io/tabi/es/blog/faq-languages/#como-gestiona-tabi-el-soporte-multilingue). Añade tantos idiomas como desees y deja que tus usuarios elijan con un selector de idioma.
- Tema claro y oscuro. Se adapta a la configuración del sistema operativo, con un interruptor en la barra de navegación.
- [Soporte para series](https://welpo.github.io/tabi/es/blog/series/) para crear contenido secuencial como tutoriales, cursos e historias en varias partes.
- Puntuación perfecta en Lighthouse (Rendimiento, Accesibilidad, Mejores Prácticas y SEO).
- Soporte para [Indieweb](https://indieweb.org/) con microformatos, soporte para [hcard](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#h-card-representativa) y [webmentions](https://welpo.github.io/tabi/blog/mastering-tabi-settings/#webmentions).
- Botones de «me gusta» de [iine](https://iine.to/) para mostrar aprecio anónimo por tu contenido.
- Soporte para [diagramas de Mermaid](https://welpo.github.io/tabi/es/blog/shortcodes/#diagramas-de-mermaid) para crear diagramas y gráficos con texto.
- Resaltado de sintaxis de código con colores basados en [Catppuccin](https://github.com/catppuccin/catppuccin) Frappé.
- Soporte para [comentarios usando giscus, utterances, Hyvor Talk o Isso](https://welpo.github.io/tabi/es/blog/comments/).
- Todo el JavaScript se puede [deshabilitar completamente](https://welpo.github.io/tabi/es/blog/javascript/).
- [Búsqueda local](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#busqueda) con una interfaz accesible y multilingüe.
- [Codificación de correo](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#correo-electronico-codificado) para protección contra spam.
- [Mapa de sitio web estilizado y legible por humanos](https://welpo.github.io/tabi/sitemap.xml).
- [Feed de Atom estilizado y legible por humanos](https://welpo.github.io/tabi/es/atom.xml).
- [Aviso de derechos de autor personalizado](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#copyright).
- [Cabeceras de seguridad personalizables](https://welpo.github.io/tabi/es/blog/security/).
- [Botón de copiar para bloques de código](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#boton-de-copiar-en-bloques-de-codigo).
- [Enlaces de retroceso para notas al pie](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#enlaces-de-retorno-en-notas-al-pie).
- [Tabla de contenidos personalizable](https://welpo.github.io/tabi/es/blog/toc/).
- [URL canónicas personalizables](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#url-canonica).
- [Botones de navegación rápida](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#botones-de-navegacion-rapida).
- [Tarjetas para redes sociales](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#tarjetas-para-redes-sociales).
- [Shortcodes personalizados](https://welpo.github.io/tabi/es/blog/shortcodes/).
- [Skins personalizables](https://welpo.github.io/tabi/es/blog/customise-tabi/).
- [Publicaciones fijadas](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#fijar-publicaciones).
- [Página de proyectos](https://welpo.github.io/tabi/es/projects/).
- Diseño responsive.
- Soporte de [KaTeX](https://katex.org/).
- [Página de archivo](https://welpo.github.io/tabi/es/archive/).
- [Enlaces sociales](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#iconos-de-redes-sociales).
- [Etiquetas](https://welpo.github.io/tabi/es/blog/mastering-tabi-settings/#etiquetas).

## Prácticas de desarrollo

- **[Conventional Commits](https://www.conventionalcommits.org) y [Gitmoji](https://gitmoji.dev/)**: los mensajes de commit siguen formatos estandarizados para mejorar la legibilidad.
- **Seguimiento de problemas**: cada error o nueva funcionalidad tiene su propio ticket, que se vincula a los commits de código y PRs o problemas relacionados.
- **Comentarios detallados**: los tickets se documentan con imágenes, vídeos y descripciones detalladas para facilitar una comunicación y resolución de problemas efectivas.
- **Referencias cruzadas**: enlazamos todos los tickets con los commits de código, pull requests o problemas relacionados para una rastreabilidad completa.

## Evolución del proyecto

**tabi** nació como diseño para mi sitio personal, [osc.garden](https://osc.garden/es/). A pesar de sus raíces personales, desde el principio se implementaron buenas prácticas para asegurar la calidad y mantenibilidad. Desde entonces, el tema ha logrado atraer a una comunidad activa de contribuyentes en GitHub.

## Empieza tu aventura escribiendo con tabi

Tienes algo que decir. Tal vez se trate de cómo los lingüistas aún no han acordado una [definición de "palabra"](https://es.wikipedia.org/wiki/Palabra), o sobre tu experiencia explorando los diferentes [palos del flamenco](https://es.wikipedia.org/wiki/Flamenco#Palos), o de cómo lograste resolver un fallo de un proyecto de código abierto popular.

**tabi** te ofrece la base ideal para tu espacio de escritura, permitiéndote centrarte en tus palabras mientras Zola y tabi se encargan del aspecto técnicos. Sumérgete en el mundo de los blogs con un sistema que hace que cada publicación sea un placer escribir y leer. Tu voz tiene valor; compártela con el mundo.
