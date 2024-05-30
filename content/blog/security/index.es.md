+++
title = "Seguro por defecto"
date = 2023-02-22
updated = 2024-05-30
description = "tabi tiene una Política de Seguridad de Contenido (CSP) fácilmente personalizable con configuraciones seguras. Obtén tranquilidad y una calificación de A+ en Mozilla Observatory."

[taxonomies]
tags = ["seguridad", "funcionalidad"]

[extra]
social_media_card = "social_cards/es_blog_security.jpg"
+++

La configuración predeterminada del tema obtiene una calificación de A+ en [Mozilla Observatory](https://observatory.mozilla.org).[^1]

Esto se logra configurando programáticamente las cabeceras de la Política de Seguridad de Contenido (CSP) en función de una lista de dominios permitidos definida por el usuario en el archivo `config.toml`. Aquí tienes la configuración predeterminada y recomendada (puedes eliminar la última directiva si no deseas insertar videos de YouTube):

```toml
[extra]
allowed_domains = [
    { directive = "font-src", domains = ["'self'", "data:"] },
    { directive = "img-src", domains = ["'self'", "https://*", "data:"] },
    { directive = "script-src", domains = ["'self'"] },
    { directive = "style-src", domains = ["'self'"] },
    { directive = "frame-src", domains = ["https://www.youtube-nocookie.com"] },
]
```

La lista `allowed_domains` especifica las URL a las que el sitio web debería poder conectarse, y cada dominio de la lista se asocia con una directiva CSP como `frame-src`, `connect-src` o `script-src`. El archivo `templates/partials/header.html` genera dinámicamente la cabecera CSP en función de esta lista.

Esta función permite personalizar fácilmente las cabeceras de seguridad del sitio web para permitir casos de uso específicos, como la incrustación de videos de YouTube, la carga de scripts o  fuentes remotas ([no recomendado](https://www.albertovarela.net/blog/2022/11/stop-using-google-fonts/)).

Puedes desactivar las cabeceras (permitiendo todo) en una página, sección, o globalmente configurando `enable_csp = false` en el front matter o en el archivo `config.toml`.

**Notas**:

- [Habilitar los comentarios](@/blog/comments/index.es.md) o [las analíticas](@/blog/mastering-tabi-settings/index.es.md#analisis-web) automáticamente permite scripts/frames/estilos/conexiones en función del servicio habilitado.
- Para usar un [tema de resaltado de sintaxis integrado en Zola](https://www.getzola.org/documentation/getting-started/configuration/#syntax-highlighting), has de permitir `unsafe-inline` en la directiva `style-src`:

    ```
    { directive = "style-src", domains = ["'self'", "'unsafe-inline'"] },
    ```

[^1]: Requiere una configuración adecuada del servidor web (por ejemplo, redirigir el tráfico HTTP a HTTPS).
