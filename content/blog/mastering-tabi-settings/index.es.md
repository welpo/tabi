+++
title = "Domina la configuración de tabi: guía completa"
date = 2023-09-18
updated = 2025-02-16
description = "Descubre las múltiples maneras en que puedes personalizar tabi."

[taxonomies]
tags = ["funcionalidad", "tutorial", "preguntas frecuentes"]

[extra]
pinned = true
quick_navigation_buttons = true
social_media_card = "social_cards/es_blog_mastering_tabi_settings.jpg"
+++

Esta es la guía completa sobre la configuración en tabi. Si tienes alguna pregunta, puedes [abrir un issue en GitHub](https://github.com/welpo/tabi/issues/new) o [inciar una discusión](https://github.com/welpo/tabi/discussions).

<details>
    <summary><b>Tabla de contenido</b></summary>
    <!-- toc -->
</details>

## Jerarquía de configuración

tabi tiene una jerarquía que te permite personalizar tu sitio en diferentes niveles. La jerarquía (de menor a mayor prioridad) es la siguiente:

1. **Configuraciones globales**: Estas son las configuraciones que se aplican a todo tu sitio. Se establecen en `config.toml`.
2. **Configuraciones de sección**: Estas son las configuraciones que se aplican a una sección de tu sitio (por ejemplo, `/blog` o `/projects`). Se establecen en la metainformación del archivo `_index.md` de la sección.
3. **Configuración de la página «padre»**: Para páginas anidadas (páginas dentro de páginas), estas son las configuraciones de la página que las contiene.
4. **Configuraciones de página**: Estas son las configuraciones que se aplican a una sola página. Se establecen en la metainformación de la página.

En todos los casos, las opciones de tabi se establecen en la sección `[extra]`.

Para las configuraciones que siguen esta jerarquía, el valor establecido en una página reemplaza el valor de una sección, que a su vez reemplaza el valor global. En resumen: cuanto más específica sea la configuración, mayor prioridad tendrá, o `página > página padre/sección > config.toml`.

---

## Búsqueda

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |       ✅       |        ❌       |          ✅          |

tabi soporta búsqueda local accesible y multilingüe con [Elasticlunr](http://elasticlunr.com/). Para activarla, necesitas:

1. Establecer un `default_language` en `config.toml`.
2. Establecer `build_search_index = true`.
3. Opcionalmente, configurar la sección `[search]`.

Por ejemplo:

```toml
base_url = "https://example.com"
default_language = "en"
build_search_index = true

[search]
index_format = "elasticlunr_json" # O el menos eficiente "elasticlunr_javascript".
include_title = true
include_description = true
include_path = true
include_content = true
```

**Nota**: para soporte de búsqueda en Chino/Japonés, necesitas usar una [build personalizada de Zola](https://github.com/getzola/zola/blob/master/Cargo.toml#L54-L55).

### Consideraciones para usuarios de Zola 0.17.X

Zola 0.17.X no proporciona acceso a la variable `search.index_format` ([reporte del bug](https://github.com/getzola/zola/issues/2165)). Al usar tabi, se asume el uso del índice JSON, que es más eficiente. Sin embargo, debido a [otro bug](https://github.com/getzola/zola/issues/2193) solucionado en 0.18.0, el índice JSON para sitios multilingües no se genera correctamente.

Los usuarios con versiones de Zola anteriores a 0.18.0 que quieran usar el índice JavaScript necesitan establecer la variable `index_format` en dos lugares:

```toml
[search]
index_format = "elasticlunr_javascript"

[extra]
index_format = "elasticlunr_javascript"
```

Esto asegura que tabi cargue los archivos correctos. Recomendamos actualizar a Zola 0.18.0 o posterior para una funcionalidad óptima.

### Detalles de implementación

Para detalles técnicos sobre la implementación de la búsqueda en tabi, incluyendo cuándo se carga el índice, características de accesibilidad y otros detalles, consulta el [Pull Request #250](https://github.com/welpo/tabi/pull/250).

---

## Soporte multilingüe

tabi ofrece soporte multilingüe completo para tu sitio Zola, desde configurar un idioma predeterminado hasta añadir todos los que desees. Consulta la [preguntas frecuentes sobre idiomas](@/blog/faq-languages/index.es.md) para más información.

---

## Apariencia

### Página principal

La [página principal](/) de esta demo tiene un encabezado con una imagen, un título y una descripción:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/header_light.webp", dark_src="blog/mastering-tabi-settings/img/header_dark.webp", alt="Encabezado de la página principal") }}

#### Cabecera

Para configurar la imagen y el título, puedes usar la variable `header` en el front matter del archivo `_index.md` de la sección. Por ejemplo:

```toml
[extra]
header = {title = "¡Hola! Soy tabi~", img = "blog/mastering-tabi-settings/img/main.webp", img_alt = "Óscar Fernández, el autor del tema" }
```

La descripción es contenido Markdown normal, escrito fuera del front matter.

#### Listando publicaciones recientes

Para mostrar publicaciones en la página principal, primero debes decidir de dónde se servirán: de la ruta raíz (`/`) o de un subdirectorio (por ejemplo, `/blog`).

**Opción A: Servir publicaciones desde la ruta raíz (`/`)**

Configura `paginate_by` en el front matter de tu archivo `content/_index.md`:

```toml
title = "Últimas publicaciones"
sort_by = "date"
paginate_by = 5  # Muestra 5 publicaciones por página.

[extra]
header = {title = "¡Hola! Soy tabi~", img = "img/main.webp", img_alt = "Tu nombre" }
```

{{ admonition(type="note", text="La configuración `paginate_by` va en el front matter principal, no en la sección `[extra]`.") }}

**Opción B: Servir publicaciones desde un subdirectorio (por ejemplo, `/blog`)**

Utiliza `section_path` en la sección `[extra]` de tu archivo `content/_index.md`:

```toml
title = "Últimas publicaciones"
sort_by = "date"
# No configures `paginate_by` aquí.

[extra]
header = {title = "¡Hola! Soy tabi~", img = "img/main.webp", img_alt = "Tu nombre" }
section_path = "blog/_index.md"  # Dónde encontrar tus publicaciones.
max_posts = 5  # Muestra hasta 5 publicaciones en la página principal.
```

{{ admonition(type="warning", title="ALERTA", text="No configures `paginate_by` y `section_path` a la vez. Estas configuraciones son mutuamente excluyentes y usarlas juntas puede resultar en que no se muestren publicaciones.") }}

Notas adicionales:

- El `title` en el front matter establece el título que aparece sobre las publicaciones.
- Usa la ruta completa al archivo `_index.md` de la sección para `section_path`. Usar `section_path = "blog/"` no funcionará.

##### Fijar publicaciones

Puedes fijar publicaciones para mantenerlas en la parte superior de la página principal. En esta demo, esta publicación está fijada, por lo que aparece primera con un icono y etiqueta de "fijada":

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/pinned_post_light.webp", dark_src="blog/mastering-tabi-settings/img/pinned_post_dark.webp", alt="Entrada fijada", full_width=true) }}

Las publicaciones fijadas se muestran primero, manteniendo su orden relativo según el `sort_by` de la sección, seguidas por el resto de las publicaciones.

Para fijar una publicación, añade lo siguiente a su front matter:

```toml
[extra]
pinned = true
```

{{ admonition(type="info", text="Este ajuste solo afecta a las páginas principales del sitio (como `/`, `/es/`, `/fr/`). Otras secciones como `blog/`, `tags/` o `archive/` muestran las publicaciones en su orden habitual.") }}

{{ admonition(type="warning", text='Cuando se utiliza la paginación (`paginate_by`), las publicaciones destacadas pueden aparecer dos veces: una vez en la parte superior de la primera página, y otra en su posición cronológica normal en páginas posteriores.') }}

##### Mostrar la fecha de los artículos en el listado

Por defecto, cuando se listan los artículos, se muestra la fecha de creación. Puedes configurar qué fecha(s) mostrar usando la opción `post_listing_date`. Configuraciones disponibles:

- `date`: Muestra solo la fecha de publicación original del artículo (opción por defecto).
- `updated`: Muestra solo la fecha de la última actualización del artículo. Si no hay fecha de actualización, muestra la fecha de publicación original.
- `both`: Muestra tanto la fecha de publicación original como la fecha de la última actualización.

{% admonition(type="tip") %}
Esta configuración sigue la jerarquía: puedes establecer un valor global en `config.toml` o configurarlo para secciones específicas en su archivo `_index.md`. En ambos casos, añádelo a la sección `[extra]`.
{% end %}

#### Listado de proyectos

Puedes mostrar una selección de proyectos en tu página principal. Para hacer esto, primero necesitarás configurar el directorio `projects`.

Una vez hecho esto, configura la ruta a los proyectos en la sección `[extra]` de tu archivo `_index.md`:

```toml
[extra]
projects_path = "projects/_index.md"
```

Esto mostrará los 3 proyectos de mayor prioridad (con menor peso; el mismo orden que en Proyectos). Para mostrar más o menos proyectos, puedes establecer `max_projects` en `[extra]`.

Por defecto, la sección de proyectos se mostrará en la parte inferior de la página principal, bajo los posts. Si prefieres que aparezca en la parte superior, establece `show_projects_first = true`.

### Interruptor de modo claro y oscuro

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ✅          |

El interruptor de modo claro y oscuro (el icono de luna/sol en la esquina superior derecha) puede habilitarse configurando `theme_switcher = true` en `config.toml`.

### Modo predeterminado (claro/oscuro)

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ❌          |

El tema predeterminado puede especificarse con la variable `default_theme`, que acepta `"dark"` o `"light"`. Si no lo especificas, el tema predeterminado será el tema del sistema.

### Pieles personalizadas

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ❌          |

Las pieles de tabi cambian el color principal del sitio. Puedes configurar la piel en `config.toml` con `skin = "nombre_de_la_piel"`. Por ejemplo, `skin = "lavender"` se ve así (haz clic para cambiar entre modo claro y oscuro):

{{ image_toggler(default_src="blog/customise-tabi/skins/lavender_light.webp", toggled_src="blog/customise-tabi/skins/lavender_dark.webp", default_alt="piel lavender en modo claro", toggled_alt="piel lavender en modo oscuro", full_width=true) }}

Explora las pieles disponibles y aprende cómo crear la tuya propia consultando [la documentación](/es/blog/customise-tabi/#skins).

### Fuente sans serif (paloseco)

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ❌          |

tabi utiliza una fuente serif para los párrafos de los artículos (la que estás viendo ahora). Puedes cambiar a una fuente sans serif (la que ves en los encabezados/menú) en todo tu sitio configurando `override_serif_with_sans = true` en `config.toml`.

Haz clic en la imagen para comparar las fuentes:

{{ image_toggler(default_src="blog/mastering-tabi-settings/img/serif.webp", toggled_src="blog/mastering-tabi-settings/img/sans-serif.webp", default_alt="Fuente serif", toggled_alt="Fuente sans-serif", full_width=true) }}

### Indicador de enlaces externos

| Página | Sección | `config.toml` | Sigue Jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:----------------:|:------------------:|
|   ❌   |    ❌   |      ✅       |        ❌        |         ❌         |

{{ admonition(type="info", text="Requiere Zola 0.20.0 o posterior.") }}

Si deseas añadir un icono a los enlaces externos, configura la sección `[markdown]` (no `[extra]`) en tu `config.toml`:

```toml
[markdown]
external_links_class = "external"
```

Esto añadirá un pequeño icono junto a los enlaces externos:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/external_link_light.webp", dark_src="blog/mastering-tabi-settings/img/external_link_dark.webp", alt="Icono de enlace externo", full_width=true) }}

### Estilos CSS personalizados

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |    ❌   |       ✅      |        ❌       |         ❌         |

Puedes cargar estilos CSS personalizados para todo el sitio o en páginas específicas utilizando `stylesheets`, que acepta una lista de rutas hacia archivos CSS. Por ejemplo:

```toml
stylesheets = ["css/custom.css", "css/another.css"]
```

### Color del tema del navegador

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |    ❌   |       ✅      |        ❌       |         ❌         |

El color del tema del navegador es el color que aparece en la barra de pestañas del navegador:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/browser_theme_color_light.webp", dark_src="blog/mastering-tabi-settings/img/browser_theme_color_dark.webp" alt="pestañas con un tema de navegador de color") }}

Puedes establecerlo en `config.toml` como `browser_theme_color = "#087e96"`. Si deseas diferentes colores para los modos oscuro/claro, puedes establecer un conjunto de colores con `browser_theme_color = ["#ffffff", "#000000"]`. El primer color es para el modo claro, el segundo para el oscuro.

Esta variable acepta cualquier color CSS válido, así que puedes usar palabras clave (por ejemplo, `blue`), códigos hexadecimales (por ejemplo, `#087e96`) o valores RGB/HSL (por ejemplo, `rgb(8, 126, 150)`).

### Etiquetas compactas

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ❌          |

Por defecto, la [página de etiquetas](/es/tags) muestra las etiquetas así:

[NombreEtiqueta](#) — n publicación[es]

Establecer `compact_tags = true` mostrará las mismas de este modo:

[NombreEtiqueta](#) <sup>n</sup>

### Orden de las etiquetas

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌        |         ❌          |

Por defecto, la [página de etiquetas](/es/tags) ordena las etiquetas alfabéticamente, dada la configuración predeterminada de `tag_sorting = "name"`.
Si configuras `tag_sorting = "frequency"`, se ordenarán según el número de publicaciones (de mayor a menor).

---

## Series

Para una explicación detallada, consulta la [documentación de series](@/blog/series/index.es.md).

### Enlace para saltar a las publicaciones

| Página | Sección | `config.toml` | Sigue jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ❌   |   ✅    |      ✅       |        ✅          |         ❌          |

Por defecto, aparece automáticamente un enlace "Saltar a publicaciones" junto al título de la serie cuando una serie tiene un contenido de más de 2000 caracteres:

{{ dual_theme_image(light_src="blog/series/img/jump_to_series_posts_light.webp", dark_src="blog/series/img/jump_to_series_posts_dark.webp" alt="enlace para saltar a las publicaciones de la serie", full_width=true) }}

Establece `show_jump_to_posts = true` para forzar la activación de la función y `show_jump_to_posts = false` para desactivarla.

### Indexación de páginas de series

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ❌   |   ✅    |      ✅       |        ✅          |         ❌          |

Por defecto, las páginas de series se indexan (usando una indexación basada en 1) según el `sort_by` de la sección de series.

Establece `post_listing_index_reversed = true` para invertir el índice.

---

## Integración con repositorios Git

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❓   |    ❓   |       ✅      |        ❓       |         ❌         |

❓: `show_remote_source` sí sigue [la jerarquía](#jerarquia-de-configuracion) y puede configurarse en una página, sección o globalmente. El resto de las configuraciones solo pueden establecerse en `config.toml`.

Estas configuraciones te permiten vincular tu sitio web tabi con un repositorio público de Git en GitHub, GitLab, Gitea o Codeberg. Configuraciones de ejemplo:

```toml
remote_repository_url = "https://github.com/welpo/tabi"
remote_repository_git_platform = "auto"
remote_repository_branch = "main"
show_remote_changes = true
show_remote_source = true
```

Esto habilita dos funciones:

1. `show_remote_source = true` añade un enlace al código fuente de tu sitio (tu `remote_repository_url`) que se mostrará en el pie de página:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/site_source_light.webp", dark_src="blog/mastering-tabi-settings/img/site_source_dark.webp" alt="Pie de página del sitio, mostrando un enlace 'Código fuente del sitio'") }}

1. `show_remote_changes = true` añade un enlace «Ver cambios ↗» al historial de commits del artículo actualizado, al lado de la fecha de última actualización [^1]:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/see_changes_light.webp", dark_src="blog/mastering-tabi-settings/img/see_changes_dark.webp" alt="Título del artículo y metadatos, mostrando un enlace 'Ver cambios'") }}

Al hacer clic en este enlace, serás dirigido al historial de commits del artículo, donde podrás ver los cambios realizados en él:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/commit_history_light.webp", dark_src="blog/mastering-tabi-settings/img/commit_history_dark.webp" alt="Historial de commits de un artículo", full_width=true) }}

---

## Páginas

### Proyectos

tabi tiene una plantilla integrada para proyectos. Para habilitarla, puedes crear un directorio en `content/projects/`. Allí, puedes crear un archivo `_index.md` con el siguiente contenido en el bloque de metadatos:

```toml
title = "Proyectos"
sort_by = "weight"
template = "cards.html"
insert_anchor_links = "left"

[extra]
show_reading_time = false
quick_navigation_buttons = true
```

- `title` es el título de la página.
- `sort_by` determina cómo se ordenan los proyectos. Puedes ordenar por «date», «update_date», «title», «title_bytes», «weight», «slug» o «none».
- `template = "cards.html"` establece la plantilla para renderizar la página de proyectos.
- `insert_anchor_links = "left"` añade enlaces ancla a los encabezados.
- `show_reading_time = false` oculta el tiempo estimado de lectura.
- `quick_navigation_buttons = true` muestra los botones de navegación rápida.

Junto al archivo `_index.md`, puedes crear un archivo para cada proyecto. Por ejemplo, este es el bloque de metadatos para la página del proyecto [tabi](@/projects/tabi/index.es.md):

```toml
title = "tabi"
description = "Un tema de Zola rápido, ligero y moderno con soporte multilingüe."
weight = 1

[extra]
local_image = "img/tabi.webp"
```

- `title` es el título del proyecto.
- `description` es la descripción del proyecto.
- `weight` determina el orden en el que se muestran los proyectos. Cuanto menor sea el peso, más arriba aparecerá el proyecto.
- `local_image` es la ruta de la imagen del proyecto. Esta imagen se muestra en la página de proyectos.

Cuando un usuario haga clic en la imagen o el título de un proyecto, será llevado a la página del proyecto. Si prefieres que los usuarios vayan a un enlace externo, puedes establecer `link_to = "https://example.com"` en la sección `[extra]` del archivo `.md` del proyecto.

La página del proyecto individual se renderiza con la plantilla predeterminada, a menos que establezcas otra, por ejemplo, `template = "info-page.html"`.

#### Filtrar proyectos

Si agregas etiquetas a tus proyectos, verás un filtro de etiquetas:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/projects_tag_filter_light.webp", dark_src="blog/mastering-tabi-settings/img/projects_tag_filter_dark.webp", alt="Página de proyectos con filtro de etiquetas", full_width=true) }}

El sistema de filtrado de etiquetas utiliza mejora progresiva:

- Sin JavaScript: Las etiquetas enlazan directamente a páginas de etiquetas dedicadas (por ejemplo, `/tags/nombre-etiqueta`).
- Con JavaScript: Filtrado instantáneo, sincronización de URL (#nombre-etiqueta) y navegación por teclado.

Para desactivar esta función, establece `enable_cards_tag_filtering = false` en la sección `[extra]` del archivo `projects/_index.md` o en `config.toml`.

{% admonition(type="tip") %}

Para filtrar proyectos por etiquetas, necesitas establecer etiquetas en el front matter de cada proyecto. Por ejemplo:

```toml
title = "nombre del proyecto"
weight = 40

[taxonomies]
tags = ["etiqueta uno", "etiqueta 2", "tercera etiqueta"]
```

{% end %}

### Archivo

Agregar una página de archivo es similar a agregar una página de proyectos. Puedes crear un directorio en `content/archive/`. Allí, puedes crear un archivo `_index.md` con el siguiente encabezado:

```toml
title = "Archivo"
template = "archive.html"
```

Por defecto, el archivo mostrará las publicaciones ubicadas en `blog/`. Para personalizar esto, puedes modificar la sección `[extra]` del archivo `_index.md`:

- **Para una sola ruta**: Establece `section_path = "tu-ruta/"` para listar publicaciones de un directorio específico. Asegúrate de incluir la barra inclinada al final.

- **Para múltiples rutas**: Si deseas agregar publicaciones de varios directorios, `section_path` puede especificarse como una lista de rutas. Por ejemplo:

  ```toml
  [extra]
  section_path = ["blog/", "notas/", "ruta-tres/"]
  ```

El archivo muestra las publicaciones en orden cronológico inverso (las más recientes primero). Puedes invertir este orden estableciendo `archive_reverse = true` en la sección `[extra]`:

```toml
[extra]
archive_reverse = true  # muestra las publicaciones más antiguas primero
```

{{ admonition(type="note", title="nota" text="La página de Archivo sólo listará publicaciones que tengan fecha en su encabezado.") }}

### Etiquetas

tabi tiene soporte integrado para etiquetas. Para habilitarlas, simplemente añade la taxonomía a tu `config.toml`:

```toml
taxonomies = [{name = "tags", feed = true}]
```

Luego, puedes añadir etiquetas a tus publicaciones agregándolas al array `tags` en el bloque de metadatos de tu publicación. Por ejemplo:

```toml,hl_lines=05-06
title = "Los molinos de viento de mi vida: reflexiones de un escudero"
date = 1605-01-16
description = "Mi viaje junto a Don Quijote, enfrentándome a gigantes imaginarios y descubriendo las verdaderas batallas de la vida."

[taxonomies]
tags = ["personal", "reflexiones"]
```

### Página acerca de

Si deseas tener una página que no sea un artículo, por ejemplo para un apartado "Acerca de", "Contacto" o "Derechos de autor", puedes usar la plantilla `info-page.html`.

Primero, crea un directorio dentro de `content/` con el nombre que prefieras. Por ejemplo, `content/pages/`. Luego, crea un archivo `_index.md` dentro de ese directorio. El archivo debería verse así:

```markdown
+++
render = false
insert_anchor_links = "left"
+++
```

- `render = false` indica a Zola que no renderice la sección.
- `insert_anchor_links = "left"` añade enlaces ancla a los encabezados. Esto es opcional.

Dentro del directorio, puedes crear cualquier cantidad de archivos `.md`.

En esta demo, la página [Sobre mí](/es/about/) utiliza la plantilla `info-page.html`. El bloque de metadatos es el siguiente:

```toml
title = "Sobre mí"
template = "info-page.html"
path = "about"
```

Fíjate cómo se establece `path = "about"`. Zola colocará la página en `$base_url/about/`. Si deseas que la página esté disponible en `/contacto/`, tendrías que establecer `path = "contacto"`.

La plantilla `info-page.html` también se puede utilizar para crear lading pages en la ruta raíz (`"/"`). Para hacerlo, el archivo `content/_index.md` debería verse así:

```markdown
+++
title = "Título de la página"
template = "info-page.html"
+++

Contenido con Markdown.
```

---

## SEO

tabi se encarga de la mayoría de las tareas de SEO por ti (como etiquetas del protocolo Open Graph, descripción, esquema de colores…), pero hay ciertas configuraciones que puedes personalizar.

### Favicon

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌       |         ❌          |

El favicon es el pequeño icono que aparece en la pestaña del navegador. Puedes establecerlo en `config.toml` con `favicon = "img/favicon.png"`.

### Favicon de emoji

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌       |         ❌          |

También puedes establecer un emoji como tu favicon con `favicon_emoji`. Por ejemplo, `favicon_emoji = "👾"`.

Nota: Algunos navegadores no admiten favicons de emoji. Consulta la tabla de compatibilidad en [caniuse](https://caniuse.com/link-icon-svg).

### URL canónica

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |        ❌       |         ❌          |

La URL canónica es una manera de indicar a los motores de búsqueda cuál es la URL preferida para el contenido de tu sitio web. Esto es útil para el SEO y para evitar problemas de contenido duplicado.

Por defecto, la URL canónica es la URL de la página en la que te encuentras. Sin embargo, puedes cambiar esto configurando `canonical_url` en el front matter de tu página o sección.

Si tienes un sitio con una estructura idéntica y contenido coincidente, puedes configurar `base_canonical_url` en tu `config.toml`. La URL canónica se creará reemplazando el `$base_url` de la URL actual con el `$base_canonical_url` que establezcas.

Por ejemplo, si configuras `base_canonical_url = "https://example.com"`, la URL canónica de la página `$base_url/blog/post1` será `https://example.com/blog/post1`. Esto es útil si tienes un sitio con varios dominios que comparten el mismo contenido.

**Nota**: para asegurarte de que la URL canónica sea correcta, probablemente sea mejor configurar `canonical_url` individualmente para cada página.

### Tarjetas para redes sociales

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |        ✅       |         ❌          |

Las tarjetas para redes sociales son las imágenes que se muestran cuando compartes un enlace en redes sociales:

{{ dimmable_image(src="img/with_social_media_card.webp", alt="Una captura de pantalla de WhatsApp mostrando un enlace con una tarjeta para redes sociales") }}

Puedes establecer la imagen para redes sociales con `social_media_card = "img/social_media_card.png"`.

Puedes especificar rutas tanto relativas como absolutas.

- **Ruta relativa**: Coloca la imagen en la misma carpeta que tu entrada de blog y especifica su nombre. Por ejemplo, `social_media_card = "relative_image.png"`.

- **Ruta absoluta**: Coloca la imagen en una carpeta específica y especifica la ruta desde la raíz. Por ejemplo, `social_media_card = "img/absolute_image.png"`.

Si ambas rutas, relativa y absoluta, son válidas, la ruta relativa tendrá prioridad.

Dado que sigue la [jerarquía](#jerarquia-de-configuracion), si no está configurado en una página, pero sí lo está en una sección, se utilizará la imagen de la sección. Si no está configurado en una página o sección, pero sí en `config.toml`, se usará la imagen global.

{{ admonition(type="tip", title="CONSEJO", text="Automatiza su creación con un [script](https://github.com/welpo/osc.garden/blob/main/static/code/social-cards-zola): [Automatizando las vistas previas de los enlaces con Zola](https://osc.garden/es/blog/automating-social-media-cards-zola/).") }}

### Creador del fediverso

| Página | Sección | `config.toml` | Sigue jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:----------------:|:-------------------:|
|   ❌   |    ❌   |      ✅       |        ❌        |         ❌          |

Puedes mostrar tu perfil del fediverso en las vistas previas de enlaces de Mastodon configurando la variable `fediverse_creator` en tu `config.toml`. Por ejemplo, para @username@example.com, usa:

```toml
fediverse_creator = { handle = "username", domain = "example.com" }
```

---

## Navegación

### Barra de navegación

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌       |         ❌          |

La barra de navegación es la barra en la parte superior de la página que contiene el título del sitio y el menú de navegación. Puedes personalizar los elementos que aparecen configurando `menu` en `config.toml`.

Soporta links relativos para páginas internas y links absolutos para enlaces externos. Por ejemplo:

```toml
menu = [
    { name = "blog", url = "blog", trailing_slash = true },
    { name = "archivo", url = "archive", trailing_slash = true },
    { name = "etiquetas", url = "tags", trailing_slash = true },
    { name = "proyectos", url = "projects", trailing_slash = true },
    { name = "acerca de", url = "about", trailing_slash = true },
    { name = "github", url = "https://github.com/welpo/tabi", trailing_slash = false },
]
```

### Botones de navegación rápida

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |        ✅       |         ❌          |

Los botones de navegación rápida son los botones que aparecen en la parte inferior derecha de la pantalla. Deberías verlos en esta página, si no estás en un dispositivo móvil. Se ven así:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/quick_navigation_buttons_light.webp", dark_src="blog/mastering-tabi-settings/img/quick_navigation_buttons_dark.webp", alt="Botones de navegación rápida") }}

Para activarlos, establece `quick_navigation_buttons = true`.

### Table de contenido

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |        ✅       |         ❌          |

Habilita el índice de contenidos justo debajo del título y metadatos del artículo con `toc = true`.

Para saber más sobre cómo personalizarlo, consulta [la documentación sobre la Tabla de contenido](@/blog/toc/index.es.md).

### Enlace a los artículos anterior y siguiente

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ✅   |   ✅   |      ✅       |         ✅         |         ❌         |

Muestra enlaces a los artículos anterior y siguiente en la parte inferior de los posts. Se ve así:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/show_previous_next_article_links_light.webp", dark_src="blog/mastering-tabi-settings/img/show_previous_next_article_links_dark.webp", alt="Enlaces a los artículos anterior y siguiente", full_width=true) }}

Para activar esta función, configura `show_previous_next_article_links = true` y asegúrate de que tu sección tiene `sort_by` (por ejemplo, `sort_by = "date"`).

Por defecto, los artículos siguientes estarán en el lado izquierdo de la página y los artículos anteriores en el lado derecho.
Para invertir el orden (artículos siguientes en el lado derecho y artículos anteriores en el lado izquierdo), establece `invert_previous_next_article_links = true`.

Por defecto, esta sección de navegación tendrá el ancho completo del sitio (igual que la barra de navegación de la parte superior). Para hacerla más estrecha, coincidiendo con el ancho del artículo, establece `previous_next_article_links_full_width = false`.

Todas estas configuraciones siguen la jerarquía.

### Enlaces de retorno en notas al pie

{{ admonition(type="warning", title="ADVERTENCIA DE DEPRECACIÓN", text="Zola v0.19.0 y posterior puede hacer esto de forma nativa. Establece `bottom_footnotes = true` en la sección `[markdown]` de tu configuración.") }}

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |        ✅       |         ✅          |

Establecer `footnote_backlinks = true` añadirá enlaces de retorno a las notas al pie de tus publicaciones, como este:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/footnote_backlinks_light.webp", dark_src="blog/mastering-tabi-settings/img/footnote_backlinks_dark.webp", alt="Enlaces de retorno en notas al pie", full_width=true) }}

Cuando hagas clic en un enlace de retorno (la flecha ↩), te llevará de vuelta al punto del texto donde se hizo referencia a la nota al pie.

---

## Usabilidad

### Botón de copiar en bloques de código

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |        ✅       |         ✅          |

Establecer `copy_button = true` añadirá un pequeño botón de copiar en la parte superior derecha de los bloques de código, como este:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/copy_button_on_code_blocks_light.webp", dark_src="blog/mastering-tabi-settings/img/copy_button_on_code_blocks_dark.webp", alt="Botón de copiar en bloques de código", full_width=true) }}

### Nombres de bloques de código clicables

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |        ✅       |         ✅          |

Establece `code_block_name_links = true` para habilitan los enlaces clickables en los nombres de bloques de código. Consulta la [documentación](@/blog/shortcodes/index.es.md#mostrar-ruta-o-url) para ver ejemplos y uso.

### Forzar bloques de código de izquierda a derecha

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:----------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |        ✅        |         ❌         |

Por defecto, los bloques de código se renderizan de izquierda a derecha, independientemente de la dirección general del texto. Establece `force_codeblock_ltr = false` para permitir que los bloques de código sigan la dirección del documento. Útil para idiomas de derecha a izquierda que necesitan bloques de código de derecha a izquierda.

### Soporte para KaTeX

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |        ✅       |         ✅          |

KaTeX es una biblioteca JavaScript rápida y fácil de usar para la representación de matemáticas TeX en la web. Puedes habilitarlo con `katex = true`. Mira cómo se ve en tabi [aquí](/es/blog/markdown/#katex).

### Soporte para Mermaid

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:----------------:|:-------------------:|
|   ✅   |    ✅   |      ✅       |        ✅        |         ✅          |

[Mermaid](https://github.com/mermaid-js/mermaid) es una herramienta de diagramación y gráficos basada en JavaScript. Puedes activarla con `mermaid = true`.

Por defecto, la biblioteca Mermaid se sirve localmente. Si prefieres usar un CDN, establece `serve_local_mermaid = false` en `config.toml`. El uso de un CDN servirá la versión más reciente de Mermaid; la opción local servirá la versión incluida con tabi.

Consulta la [documentación de Mermaid](@/blog/shortcodes/index.es.md#diagramas-de-mermaid) para instrucciones de uso y ejemplos.

### Subconjunto de fuente personalizada

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌       |         ❌          |

Las fuentes personalizadas causan parpadeo del texto en Firefox. Para solucionar esto, tabi carga un subconjunto de glifos para el encabezado. Dado que esto (ligeramente) aumenta el tiempo de carga inicial, es una buena idea intentar minimizar el tamaño de este subconjunto, o desactivarlo por completo si no estás usando una fuente personalizada en tu tema.

Puedes crear un subconjunto personalizado adaptado a tu sitio, guardarlo como `static/custom_subset.css`, y hacer que se cargue con `custom_subset = true`.

Para desactivar el subconjunto, puedes usar `enable_subset = false`.

Para obtener más información, incluyendo instrucciones sobre cómo crear un subconjunto personalizado, consulta la [documentación](@/blog/custom-font-subset/index.es.md).

### Contenido completo en el feed

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |        ❌       |         ❌          |

Por defecto, el feed Atom solo contiene el resumen/descripción de tus publicaciones. Puedes incluir el contenido completo de las publicaciones estableciendo `full_content_in_feed = true` en `config.toml`.

### Ocultar contenido del feed

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:----:|:-------:|:-------------:|:-----------------:|:-------------------:|
|  ✅  |   ✅    |      ✅       |         ✅        |         ❌          |

Puedes controlar cómo aparece el contenido en los feeds usando dos configuraciones:

- `hide_from_feed = true`: Oculta el contenido de todos los feeds (feed principal, feeds de sección y feeds de etiquetas)
- `hide_from_main_feed = true`: Oculta el contenido solo del feed principal mientras lo mantiene visible en los feeds de sección y de etiquetas

### Comentarios {#añadir-comentarios}

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:-------------------:|
|   ✅   |  ❌    |      ✅        |        ❌       |         ✅          |

Para activar los comentarios en una página, establece el nombre del sistema como `true` en el front matter. Por ejemplo, `utterances = true`.

Si quieres activar los comentarios de forma global, puedes hacerlo estableciendo `enabled_for_all_posts = true` en la sección apropiada de tu `config.toml` (por ejemplo, en `[extra.giscus]`).

Si has activado un sistema globalmente, pero quieres desactivarlo en una página específica, puedes hacerlo estableciendo el nombre del sistema como `false` en el front matter. Por ejemplo, `utterances = false`.

Lee la [documentación](@/blog/comments/index.es.md) para obtener más información sobre los sistemas disponibles y su configuración.

### Análisis web

| Página | Sección  | `config.toml` | Sigue Jerarquía | Requiere JavaScript |
|:------:|:--------:|:-------------:|:----------------:|:-------------------:|
|   ❌   |    ❌    |       ✅      |        ❌        |          ✅         |

tabi ofrece soporte para 3 sistemas de análisis web que respetan la privacidad: [Plausible](https://plausible.io/), [GoatCounter](https://www.goatcounter.com/) y [Umami](https://umami.is/).

Puedes configurarlos en la sección `[extra.analytics]` de tu archivo `config.toml`.

- `service`: el servicio a utilizar. Las opciones disponibles son `"goatcounter"`, `"umami"`, y `"plausible"`.

- `id`: el identificador único para tu servicio de análisis. Esto varía según el servicio:
  - Para GoatCounter, es el código elegido durante el registro. Instancias auto-alojadas de GoatCounter no requieren este campo.
  - Para Umami, es la ID del sitio web.
  - Para Plausible, es el nombre de dominio.

- `self_hosted_url`. Opcional. Utiliza este campo para especificar la URL si tienes una instancia auto-alojada. La URL base variará según tu configuración particular. Algunos ejemplos:
  - Para GoatCounter: `"https://stats.example.com"`
  - Para Umami: `"https://umami.example.com"`
  - Para Plausible: `"https://plausible.example.com"`

Un ejemplo de configuración para GoatCounter no auto-alojada sería:

```toml
[extra.analytics]
service = "goatcounter"
id = "tabi"
self_hosted_url = ""
```

---

## Pie de página

### Iconos de redes sociales

| Página | Sección | `config.toml` | Respeta jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:-----------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |         ❌        |         ❌          |

Puedes añadir iconos de redes sociales al pie de página con `socials`, que acepta una lista de objetos de redes sociales. Por ejemplo:

```toml
socials = [
    { name = "github", url = "https://github.com/welpo/", icon = "github" },
    { name = "soundcloud", url = "https://soundcloud.com/oskerwyld", icon = "soundcloud" },
    { name = "instagram", url = "https://instagram.com/oskerwyld", icon = "instagram" },
    { name = "youtube", url = "https://youtube.com/@oskerwyld", icon = "youtube" },
    { name = "spotify", url = "https://open.spotify.com/artist/5Hv2bYBhMp1lUHFri06xkE", icon = "spotify" },
]
```

Para ver una lista de todos los iconos integrados, echa un vistazo al directorio [`static/social_icons` en GitHub](https://github.com/welpo/tabi/tree/main/static/social_icons).

¿Echas en falta algún icono? Si crees que sería una buena adición a tabi, no dudes en [abrir un issue](https://github.com/welpo/tabi/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.md&title=) o enviar un pull request ([ejemplo](https://github.com/welpo/tabi/pull/333)).

Para usar un icono personalizado, puedes añadirlo al directorio `static/social_icons` de tu sitio. Por ejemplo, si añades `custom.svg`, puedes referenciarlo así:

```
{ name = "custom", url = "https://example.com", icon = "custom" }
```

{{ admonition(type="note", title="NOTA", text="Todos los enlaces sociales incluyen el [atributo](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel/me) `rel='me'`. Esto ayuda a los motores de búsqueda y servicios web a verificar que las cuentas de redes sociales te pertenecen.") }}

### Icono de feed

| Página | Sección | `config.toml` | Respeta jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:-----------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |         ❌        |         ❌          |

Puedes añadir un enlace a tu feed RSS/Atom en el pie de página con `feed_icon = true`.

Nota para usuarios de Zola 0.19.X: cuando hay dos nombres de archivo en `feed_filenames`, solo se enlazará el primero en el pie de página.

### Menú de pie de página

| Página | Sección | `config.toml` | Respeta jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:---------------:|:------------------:|
|   ❌   |   ❌    |      ✅       |        ❌       |        ❌          |

Puedes añadir un menú al pie de página con `footer_menu`, que acepta una lista de elementos de menú. Por ejemplo:

```toml
footer_menu = [
    {url = "about", name = "about", trailing_slash = true},
    {url = "privacy", name = "privacy", trailing_slash = true},
    {url = "sitemap.xml", name = "sitemap", trailing_slash = false},
    {url = "https://example.com", name = "external link", trailing_slash = true},
]
```

### Copyright

| Página | Sección | `config.toml` | Respeta jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:-----------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |         ❌        |         ❌          |

Para añadir una mención sobre los derechos de autor a tu sitio web, configura `copyright`:

```toml
copyright = "© $CURRENT_YEAR Your Name $SEPARATOR Unless otherwise noted, the content in this website is available under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license."
```

- `$TITLE` será reemplazado por la variable `title` configurada en `config.toml`
- `$CURRENT_YEAR` será reemplazado por el año actual
- `$AUTHOR` será reemplazado por la variable `author`
- `$SEPARATOR` será reemplazado por la [variable `separator`](#separador-personalizado).

Se procesará el texto en Markdown. Por ejemplo, la configuració de arriba:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/copyright_light.webp", dark_src="blog/mastering-tabi-settings/img/copyright_dark.webp" alt="Sección de derechos de autor", full_width=true) }}

Si tienes un sitio multilingüe y deseas establecer diferentes notificaciones de derechos de autor para diferentes idiomas, añade la traducción correspondiente a `copyright_translations.{código_de_idioma}` para cada idioma que quieras dar soporte. El código de idioma debe coincidir con el [código de idioma de tabi](https://welpo.github.io/tabi/es/blog/faq-languages/#que-son-estos-codigos-de-dos-letras). Por ejemplo:

```toml
copyright_translations.es = "© $CURRENT_YEAR $AUTHOR $SEPARATOR A menos que se indique lo contrario, el contenido de esta web está disponible bajo la licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)."
```

---

## Metadatos

### Mostrar autoría

| Página | Sección | `config.toml` | Respeta jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:-----------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |         ✅        |         ❌          |

Para mostrar la autoría de un artículo, usa `show_author = true`.

Esto mostrará lxs autorxs establecidxs en la variable `authors = []` en el front matter del artículo. Si esto no está disponible, se usará `author = ""` en `config.toml`.

### Tiempo de lectura

| Página | Sección | `config.toml` | Respeta jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:-----------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |         ✅        |         ❌          |

Puedes activar o desactivar el tiempo estimado de lectura de un artículo con `show_reading_time`. Si lo estableces en `true`, se mostrará en los metadatos del artículo, así:

{{ dual_theme_image(light_src="blog/mastering-tabi-settings/img/see_changes_light.webp", dark_src="blog/mastering-tabi-settings/img/see_changes_dark.webp" alt="Título del artículo y metadatos, mostrando un enlace «Ver cambios»") }}

Dado que sigue [la jerarquía](#jerarquia-de-configuracion), puedes activarlo o desactivarlo para páginas o secciones específicas. Por ejemplo, esta demo desactiva `show_reading_time = false` en la sección [proyectos](https://welpo.github.io/tabi/es/projects/) en el archivo [`_index.md`](https://github.com/welpo/tabi/blob/main/content/projects/_index.es.md?plain=1), por lo que sus publicaciones individuales no muestran el tiempo de lectura.

### Mostrar la fecha

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ✅   |   ✅    |      ✅       |         ✅          |         ❌          |

Por defecto, la fecha se muestra debajo del título de la publicación. Puedes ocultarla con `show_date = false`. Esta configuración sigue [la jerarquía](#jerarquia-de-configuracion).

### Formato de fecha

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |         ❌         |         ❌          |

tabi tiene dos formatos de fecha: `long_date_format` y `short_date_format`. El formato corto se utiliza en los metadatos de una publicación, mientras que el formato largo se utiliza al listar las publicaciones (es decir, en la [sección de blog](/es/blog/) o en la [página principal](/es/)).

Por defecto es "6th July 2049" para ambos formatos en inglés. Para otros idiomas, el predeterminado es `"%d %B %Y"` para el formato largo y `"%-d %b %Y"` para el formato corto.

En Zola, la sintaxis para el formateo de tiempo está inspirada en strftime. Una referencia completa está disponible en la [documentación de chrono](https://docs.rs/chrono/0.4.31/chrono/format/strftime/index.html).

### Separador personalizado

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |         ❌         |         ❌          |

El separador aparece en varios lugares: en el título del navegador, entre los metadatos de una publicación…

El separador por defecto es un punto de viñeta (`•`), pero puedes cambiarlo configurando algo como `separator = "|"`.

### Orden del título

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |         ❌         |         ❌          |

Por defecto, el título en la pestaña del navegador es el nombre del sitio seguido del título de la página. Por ejemplo, el título de la sección del blog es «~/tabi • Blog».

Al configurar `invert_title_order = true`, puedes invertir el orden del título del sitio y el título de la página en la pestaña del navegador. Por ejemplo, la etiqueta del título de la sección del blog se convertiría en «Blog • ~/tabi».

---

## Seguridad

### Correo electrónico codificado

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |         ❌         |         ✅          |

Para proteger tu dirección de correo electrónico de los spambots, puedes codificarla en el pie de página. Puedes hacer esto estableciendo `email` en una versión codificada en base64 de tu dirección de correo electrónico[^2]. Por ejemplo, `email = "bWFpbEBleGFtcGxlLmNvbQ=="` es la versión codificada en base64 de "mail@example.com".

Si no quieres codificar tu correo electrónico tú mismo, tabi puede hacerlo por ti si configuras `encode_plaintext_email = true`. Esto te permite establecer un correo electrónico en texto plano en la configuración. Ten en cuenta que esto sólo protege tu dirección de correo electrónico en tu sitio, no en repositorios públicos.

Si el correo electrónico está codificado (ya sea por ti o por tabi), los usuarios con JavaScript desactivado no verán el icono de correo electrónico.

### CSP (Content Security Policy)

| Página | Sección | `config.toml` | Sigue la jerarquía | Requiere JavaScript |
|:------:|:-------:|:-------------:|:------------------:|:-------------------:|
|   ❌   |   ❌    |      ✅       |         ❌         |         ❌          |

La Content Security Policy (CSP) es una capa adicional de seguridad que ayuda a detectar y mitigar ciertos tipos de ataques, incluidos ataques de Cross Site Scripting (XSS) e inyección de datos. Estos ataques se utilizan para todo, desde robo de datos hasta desfiguración de sitios y distribución de malware.

tabi tiene una CSP predeterminada que permite imágenes y vídeos remotos, así como incrustaciones de YouTube y Vimeo. Puedes personalizarla con `allowed_domains`, que toma una lista de directivas de CSP. Esta es la CSP predeterminada:

```toml
allowed_domains = [
    { directive = "font-src", domains = ["'self'", "data:"] },
    { directive = "img-src", domains = ["'self'", "https://*", "data:"] },
    { directive = "script-src", domains = ["'self'"] },
    { directive = "style-src", domains = ["'self'"] },
    { directive = "frame-src", domains = ["player.vimeo.com", "https://www.youtube-nocookie.com"] },
]
```

Esta función está habilitada por defecto. Para deshabilitarla (y permitir todo), configura `enable_csp = false` en una página, sección o globalmente. La opción `enable_csp` sigue [la jerarquía](#jerarquia-de-configuracion).

Para obtener más información, consulta la [página de documentación de CSP](@/blog/security/index.es.md).

---

[^1]: Si estás utilizando un repositorio Git remoto, es posible que quieras automatizar el proceso de actualización del campo `updated`. Aquí tienes una guía para eso: [Zola Git Hook: actualizando las fechas de las publicaciones](https://osc.garden/es/blog/zola-date-git-hook/).

[^2]: Para codificar tu correo electrónico en base64 puedes utilizar [herramientas en línea](https://www.base64encode.org/) o, en tu terminal, ejecutar: `printf 'mail@example.com' | base64`
