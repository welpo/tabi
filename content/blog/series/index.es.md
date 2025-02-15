+++
title = "Guía completa sobre series"
date = 2024-11-08
updated = 2025-02-15
description = "Aprende a organizar tus publicaciones en series secuenciales, perfectas para tutoriales, cursos e historias de varias partes."

[taxonomies]
tags = ["funcionalidad", "tutorial", "preguntas frecuentes", "series"]

[extra]
quick_navigation_buttons = true
toc = true
mermaid = true
social_media_card = "social_cards/es_blog_series.jpg"
+++

Una serie organiza publicaciones relacionadas en orden secuencial, similar a los capítulos de un libro. A diferencia de las etiquetas, que simplemente agrupan contenido relacionado, las series sugieren un orden específico de lectura de principio a fin.

Las publicaciones dentro de una serie no necesitan publicarse de forma consecutiva; la función de series reúne publicaciones temáticamente vinculadas en una secuencia coherente.

El siguiente diagrama ilustra cómo las publicaciones de la serie (3, 5 y 8) existen dentro del flujo principal del blog mientras mantienen su propia secuencia ordenada dentro de Serie 1.

{% mermaid(full_width=true) %}
flowchart
    subgraph main[BLOG]
        P1[Post 1]
        P2[P2]
        P3[P3]
        P4[P4]
        P5[P5]
        P6[P6]
        P7[P7]
        P8[P8]
        P9[P9]
    end
    subgraph series1[SERIE 1]
        PS1["Post Serie 1 (=P3)"]
        PS2["Post Serie 2 (=P5)"]
        PS3["Post Serie 3 (=P8)"]
    end
    P3 o-.-o PS1
    P5 o-.-o PS2
    P8 o-.-o PS3
{% end %}

## Inicio rápido

1. Crea un directorio para tu serie
2. Crea `_index.md` en el directorio de la serie
3. Configura el front matter de `_index.md`:

    ```toml,name=series/_index.md
    title = "Aprendiendo Rust"
    template = "series.html"
    sort_by = "slug"
    transparent = true

    [extra]
    series = true
    ```

4. Crea tus artículos de la serie en este directorio

¿Quieres saber más? ¡Sigue leyendo!

## ¿Cómo funcionan las series?

Una serie es simplemente una sección que tabi maneja de manera especial. Para más detalles sobre secciones, consulta la [documentación de Zola](https://www.getzola.org/documentation/content/section/).

Tomando el ejemplo del diagrama anterior, la estructura de directorios sería así:

```txt
content/
    _index.md
    blog/
        _index.md
        post1/
            index.md
        post2/
            index.md
        post4/
            index.md
        post6/
            index.md
        post7/
            index.md
        post9/
            index.md
        serie1/
            _index.md
            post3/
                index.md
            post5/
                index.md
            post8/
                index.md
```

Para crear una serie, necesitas:

1. Usar la plantilla `series.html`
2. Establecer `series = true` en la configuración `[extra]` de la sección
3. Activar `transparent = true` para integrar las publicaciones de la serie con la sección del blog principal

La página principal de la serie muestra un resumen seguido de una lista de todas las publicaciones en la serie:

{{ dual_theme_image(light_src="blog/series/img/series_light.webp", dark_src="blog/series/img/series_dark.webp" alt="una serie", full_width=true) }}

## Saltar a las publicaciones

Si el contenido de una serie (el Markdown después del frontmatter en `_index.md`) supera los 2000 caracteres, aparece un enlace "Saltar a publicaciones" junto al título de la serie.

{{ dual_theme_image(light_src="blog/series/img/jump_to_series_posts_light.webp", dark_src="blog/series/img/jump_to_series_posts_dark.webp" alt="enlace para saltar a las publicaciones de la serie", full_width=true) }}

Para forzar la activación o desactivación de esta función, configura `show_jump_to_posts` en la sección `[extra]` de tu sección de series o en `config.toml`. Esta configuración sigue [la jerarquía](@/blog/mastering-tabi-settings/index.es.md#jerarquia-de-configuracion).

## Páginas de series y orden

Todas las páginas en la sección de series serán páginas de serie. Las páginas se ordenarán según el `sort_by` de la sección.

Aunque las series mantienen su propio orden interno, permanecen independientes del flujo cronológico de la sección principal (por ejemplo, `blog/`) gracias a la configuración `transparent`.

### Opciones de orden

Elige entre estos métodos de orden, cada uno con sus ventajas:

{% wide_container() %}

`sort_by` | ventajas                                                                                                                                      | desventajas
---------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`slug`    | El orden de las páginas es explícito en la ruta (por ejemplo, `example.com/blog/series1/01-series-post-uno`).                        | Cada página de la serie debe tener el prefijo correspondiente.
`weight`  | El orden de las páginas es fácil de configurar de forma transparente.<br>La primera publicación tiene peso `1`, la segunda peso `2` y así sucesivamente. | Cada página de la serie debe tener su peso configurado.
`date`    | El orden de las páginas se puede configurar una sola vez en la configuración de la sección. No hay que hacer nada en cada página.            | El orden de las páginas debe invertirse porque la primera página suele ser la más antigua. Esto solo se puede lograr paginando la sección (`paginate_by = 9999`) e invirtiendo su orden (`paginate_reversed = true`).

{% end %}

{{ admonition(type="danger", title="Versión de Zola para ordenar por fecha", text="Para invertir correctamente las fechas, se requiere Zola v0.19.3+ (no publicada) para que la información de paginación esté disponible a través de la función `get_section`. De lo contrario, cualquier cosa que dependa del orden de las páginas de la serie no será correcta (por ejemplo, página anterior/siguiente, listas ordenadas y no ordenadas...) Ver [Zola PR #2653](https://github.com/getzola/zola/pull/2653).") }}

### Indexación de páginas

Las páginas en una serie se indexan empezando desde 1, siguiendo su orden `sort_by`. Para invertir la indexación (haciendo que la primera página tenga el índice más alto), añade esta configuración a `_index.md` o `config.toml`:

```toml
[extra]
post_listing_index_reversed = true  # Por defecto es false si no se configura
```

{{ dual_theme_image(light_src="blog/series/img/series_reversed_light.webp", dark_src="blog/series/img/series_reversed_dark.webp" alt="una serie con índices invertidos", full_width=true) }}

Esta configuración sigue [la jerarquía](@/blog/mastering-tabi-settings/index.es.md#jerarquia-de-configuracion).

## Plantillas de introducción y conclusión

Los artículos de una serie pueden tener secciones automáticas de introducción y conclusión. Estas se configuran en el `_index.md` de tu serie. Un ejemplo básico:

```toml,name=series/_index.md
[extra.series_intro_templates]
default = "Este artículo es parte de la serie $SERIES_HTML_LINK."

[extra.series_outro_templates]
default = "¡Gracias por leer la parte $SERIES_PAGE_INDEX de $SERIES_HTML_LINK!"
```

Las secciones de introducción y conclusión tienen sus propias clases CSS (`series-page-intro` y `series-page-outro`), lo que te permite personalizar su apariencia mediante [CSS personalizado](@/blog/mastering-tabi-settings/index.es.md#estilos-css-personalizados).

### Tipos de plantillas

El sistema de series usa diferentes plantillas según la posición del artículo en la serie:

- `next_only` - Usado para el primer artículo (tiene artículo siguiente pero no anterior)
- `middle` - Usado para artículos con artículos anterior y siguiente
- `prev_only` - Usado para el último artículo (tiene artículo anterior pero no siguiente)
- `default` - Plantilla por defecto usada cuando no existe una plantilla específica para la posición

El sistema determina automáticamente qué plantilla usar según la posición del artículo. Las plantillas se definen en la configuración de la serie (`_index.md`), como `extra.series_intro_templates` y `extra.series_outro_templates`:

```toml,name=series/_index.md
[extra.series_intro_templates]
next_only = "¡Bienvenido a la parte 1! Siguiente: $NEXT_HTML_LINK"
middle = "Anterior: $PREV_HTML_LINK | Siguiente: $NEXT_HTML_LINK"
prev_only = "¡El capítulo final! Anteriormente: $PREV_HTML_LINK"
default = "Parte $SERIES_PAGE_INDEX de $SERIES_PAGES_NUMBER"
```

Todas las plantillas son opcionales. La selección de plantillas sigue un sistema de prioridad:

1. Si existe una plantilla específica para la posición (`next_only`, `middle`, o `prev_only`), se usará esa
2. Si no, se usa la plantilla `default`
3. Si no se define ninguna plantilla, no se mostrará información de la serie

Mira el [ejemplo de plantilla](#ejemplo-de-plantilla) para ver un ejemplo más elaborado.

### Ubicación en el contenido

Por defecto:

- Las introducciones de serie aparecen al inicio de tu artículo
- La conclusión aparece al final (antes de las notas al pie, si las hay)

Puedes controlar exactamente dónde aparecen usando `<!-- series_intro -->` y `<!-- series_outro -->` en tu Markdown:

```markdown
Este párrafo aparece antes de la introducción de la serie.

<!-- series_intro -->

Contenido principal del artículo.

<!-- series_outro -->

## Recursos de aprendizaje

Contenido adicional...

[^1]: Las notas al pie siempre aparecerán al final.
```

## Variables

Las plantillas de series usan un sistema flexible de variables que te permite:

1. Hacer referencia a información de la serie (título, enlaces)
2. Añadir navegación entre artículos
3. Mostrar indicadores de progreso
4. Incluir información personalizada usando tus propias variables

Las variables son marcadores que comienzan con `$` y se reemplazan con contenido real cuando se construye tu sitio. Por ejemplo, `$SERIES_HTML_LINK` se convierte en un enlace clicable a la página índice de tu serie.

Hay tres tipos de variables:

- [Variables básicas de serie](#variables-basicas-de-serie): Información general sobre la serie
- [Variables de navegación](#variables-de-navegacion): Enlaces a artículos anterior/siguiente
- [Variables personalizadas](#variables-personalizadas): Tus propios marcadores para información adicional

### Variables básicas de serie

{% wide_container() %}

| Variable | Disponibilidad | Devuelve | Descripción | Ejemplo de uso | Ejemplo de salida |
|----------|---------------|-----------|-------------|----------------|-------------------|
| `$SERIES_TITLE` | Siempre | Texto | Título de la serie en texto plano | `Parte de $SERIES_TITLE` | Parte de Aprendiendo Rust |
| `$SERIES_PERMALINK` | Siempre | Texto | URL al índice de la serie | `[Ver todas las publicaciones]($SERIES_PERMALINK)` | [Ver todas las publicaciones](/series/learn-rust) |
| `$SERIES_HTML_LINK` | Siempre | HTML | Enlace listo para usar a la serie | `¡Bienvenido a $SERIES_HTML_LINK!` | ¡Bienvenido a <a href="/series/learn-rust">Aprendiendo Rust</a>! |
| `$SERIES_PAGES_NUMBER` | Siempre | Número | Total de artículos en la serie | `Una serie de $SERIES_PAGES_NUMBER partes` | Una serie de 5 partes |
| `$SERIES_PAGE_INDEX` | Siempre | Número | Posición del artículo actual | `Parte $SERIES_PAGE_INDEX de $SERIES_PAGES_NUMBER` | Parte 3 de 5 |
| `$SERIES_PAGES_OLIST` | Siempre | HTML | Lista ordenada de todos los artículos | `Artículos en la serie: $SERIES_PAGES_OLIST` | Artículos en la serie: <ol><li>Artículo actual</li><li><a href="...">Otros artículos</a></li></ol> |
| `$SERIES_PAGES_ULIST` | Siempre | HTML | Lista desordenada de todos los artículos | `Artículos en la serie: $SERIES_PAGES_ULIST` | Artículos en la serie: <ul><li>Artículo actual</li><li><a href="...">Otros artículos</a></li></ul> |

{% end %}

### Variables de navegación

{% wide_container() %}

| Variable | Disponibilidad | Devuelve | Descripción | Ejemplo de uso | Ejemplo de salida |
|----------|---------------|-----------|-------------|----------------|-------------------|
| `$PREV_TITLE` | Existe anterior | Texto | Título del artículo anterior | `Anteriormente: $PREV_TITLE` | Anteriormente: Configurando tu entorno |
| `$PREV_PERMALINK` | Existe anterior | Texto | URL al artículo anterior | `[← Atrás]($PREV_PERMALINK)` | [← Atrás](/series/learn-rust/setup) |
| `$PREV_HTML_LINK` | Existe anterior | HTML | Enlace listo para usar al anterior | `Lee primero $PREV_HTML_LINK` | Lee primero <a href="/series/learn-rust/setup">Configurando tu entorno</a> |
| `$PREV_DESCRIPTION` | Existe anterior | Texto | Descripción del artículo anterior | `Resumen: $PREV_DESCRIPTION` | Resumen: Configurando Rust |
| `$NEXT_TITLE` | Existe siguiente | Texto | Título del siguiente artículo | `Siguiente: $NEXT_TITLE` | Siguiente: Patrones avanzados |
| `$NEXT_PERMALINK` | Existe siguiente | Texto | URL al siguiente artículo | `[Continuar →]($NEXT_PERMALINK)` | [Continuar →](/series/learn-rust/patterns) |
| `$NEXT_HTML_LINK` | Existe siguiente | HTML | Enlace listo para usar al siguiente | `Continúa con $NEXT_HTML_LINK` | Continúa con <a href="/series/learn-rust/patterns">Patrones avanzados</a> |
| `$NEXT_DESCRIPTION` | Existe siguiente | Texto | Descripción del siguiente artículo | `Próximamente: $NEXT_DESCRIPTION` | Próximamente: Aprende sobre las características avanzadas de pattern matching en Rust |

{% end %}

### Referencia al primer artículo

{% wide_container() %}

| Variable | Disponibilidad | Devuelve | Descripción | Ejemplo de uso | Ejemplo de salida |
|----------|---------------|-----------|-------------|----------------|-------------------|
| `$FIRST_TITLE` | Siempre | Texto | Título del primer artículo | `Comienza con $FIRST_TITLE` | Comienza con Introducción a Rust |
| `$FIRST_HTML_LINK` | Siempre | HTML | Enlace listo para usar al primer artículo | `Empieza en $FIRST_HTML_LINK` | Empieza en <a href="/series/learn-rust/intro">Introducción a Rust</a> |

{% end %}

### Ejemplo de plantilla

{{ admonition(type="tip", title="Variables HTML vs texto", text="Usa variables HTML (que terminan en `_HTML_LINK`) cuando quieras enlaces listos para usar. Usa variables de texto (que terminan en `_TITLE` o `_PERMALINK`) cuando quieras más control sobre el formato.") }}

```toml,name=series/_index.md
# Introducción.
[extra.series_intro_templates]
next_only = """
¡Bienvenido a $SERIES_HTML_LINK! Esta serie de $SERIES_PAGES_NUMBER partes te enseñará Rust desde cero.

Siguiente: $NEXT_HTML_LINK - $NEXT_DESCRIPTION
"""

middle = """
📚 Parte $SERIES_PAGE_INDEX de $SERIES_PAGES_NUMBER en $SERIES_HTML_LINK

Anterior: $PREV_HTML_LINK
Siguiente: $NEXT_HTML_LINK
"""

prev_only = """
¡Bienvenido a la última parte de $SERIES_HTML_LINK!
¿Eres nuevo? Comienza con $FIRST_HTML_LINK para construir una base sólida.

Anterior: $PREV_HTML_LINK
"""

# Plantilla de respaldo.
default = "Este artículo es parte de la serie $SERIES_HTML_LINK."

# Conclusión.
[extra.series_outro_templates]
next_only = """
¡Gracias por leer! 🙌

Continúa tu viaje con $NEXT_HTML_LINK, donde $NEXT_DESCRIPTION
O revisa el esquema completo de la serie [$SERIES_TITLE]($SERIES_PERMALINK).
"""

middle = """
---
📝 Navegación de la serie

- Anterior: $PREV_HTML_LINK
- Siguiente: $NEXT_HTML_LINK
- [Resumen de la serie]($SERIES_PERMALINK)
"""

prev_only = """
🎉 ¡Felicidades! Has completado $SERIES_HTML_LINK.

¿Quieres repasar? Aquí comenzamos: $FIRST_HTML_LINK
O revisa lo que acabamos de ver en $PREV_HTML_LINK.
"""

# Respaldo.
default = """
---
Este artículo es la parte $SERIES_PAGE_INDEX de $SERIES_PAGES_NUMBER en $SERIES_HTML_LINK.
"""
```

### Variables personalizadas

Las plantillas de series admiten variables personalizadas para incluir información adicional en toda tu serie. El proceso tiene dos pasos:

1. Primero, define tus **marcadores** en la configuración de tu serie (`_index.md`):

```toml,name=series/_index.md
[extra]
series = true
series_template_placeholders = ["$POSITION", "$TOPIC", "$DIFFICULTY"]
```

2. Luego, en cada artículo de la serie, proporciona los valores para estos marcadores en `series_template_variables`:

```toml,name=series/article.md
[extra.series_template_variables]
position = "primero"
topic = "Variables y tipos"
difficulty = "Principiante"
```

### Uso de variables personalizadas

Puedes usar tus variables personalizadas en cualquier plantilla, junto con las variables integradas:

```toml,name=series/_index.md
[extra.series_intro_templates]
default = """
Este es el artículo $POSITION en $SERIES_HTML_LINK.
Tema de hoy: $TOPIC
Nivel de dificultad: $DIFFICULTY
"""
```

{{ admonition(type="warning", text="Aunque los marcadores se definen en mayúsculas (`$POSITION`), los nombres de variables en `series_template_variables` deben estar en minúsculas (`position`).") }}

### Ejemplo con variables personalizadas

```toml,name=series/_index.md
# En la configuración de la serie.
[extra]
series = true
series_template_placeholders = ["$LEARNING_TIME", "$KEY_CONCEPTS"]

series_intro_templates.default = """
📚 Parte $SERIES_PAGE_INDEX de $SERIES_PAGES_NUMBER
⏱️ Tiempo estimado: $LEARNING_TIME
🔑 Conceptos clave: $KEY_CONCEPTS
"""
```

```toml,name=series/02-learning-rust/index.md
# En un artículo de la serie.
[extra.series_template_variables]
learning_time = "30 minutos"
key_concepts = "Funciones, manejo de errores, coincidencia de patrones"
```

Esto generará:

```txt
📚 Parte 2 de 5
⏱️ Tiempo estimado: 30 minutos
🔑 Conceptos clave: Funciones, manejo de errores, coincidencia de patrones
```

{{ admonition(type="warning", title="Variables faltantes", text="Si usas un marcador en tus plantillas pero no proporcionas su valor en `series_template_variables`, la compilación fallará con un error que lista las variables faltantes.") }}
