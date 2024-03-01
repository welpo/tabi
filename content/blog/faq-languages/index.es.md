+++
title = "¿Lost in Translation? Explora las capacidades multilingües de tabi"
date = 2023-09-12
updated = 2024-03-01
description = "Descubre cómo tabi te ayuda a conectar con una audiencia global gracias a sus funciones multilingües. Aprende a cambiar el idioma por defecto, añadir más idiomas y aportar tus propias traducciones."

[taxonomies]
tags = ["funcionalidad", "tutorial", "Preguntas Frecuentes"]

[extra]
quick_navigation_buttons = true
toc_ignore_pattern = "^(Preguntas Frecuentes)"
social_media_card = "social_cards/es_blog_faq_languages.jpg"
+++

tabi simplifica el proceso de crear sitios web multilingües para que puedas conectar con una audiencia global. En esta guía, te explicaremos todo lo que necesitas saber, desde cómo configurar el idioma principal en tu sitio hasta cómo contribuir con tus propias traducciones. ¡Empecemos!

### Preguntas Frecuentes

<!-- toc -->

## ¿Qué idiomas admite tabi?

tabi admite los siguientes idiomas:

- Alemán
- Árabe
- Catalán
- Chino (Simplificado)
- Coreano
- Español
- Francés
- Hindi
- Inglés
- Italiano
- Japonés
- Persa
- Portugués (Europeo)
- Ruso
- Ucraniano

Para una lista siempre actualizada de idiomas soportados, consulta la [carpeta `i18n`](https://github.com/welpo/tabi/tree/main/i18n) en el repositorio de tabi.

## ¿Cómo establezco el idioma predeterminado de mi sitio?

Puedes definir el idioma principal de tu sitio configurando la variable `default_language` en tu archivo `config.toml`.

Por ejemplo, si deseas que el idioma principal sea el Chino, simplemente añade esta línea al archivo `config.toml`:

```toml, hl_lines=03
base_url = "https://welpo.github.io/tabi"
title = "~/tabi"
default_language = "zh"
```

Si el valor de `default_language` coincide con el nombre de un archivo TOML en el [directorio `i18n`](https://github.com/welpo/tabi/tree/main/i18n), todos los textos de tabi se traducirán a ese idioma.

## ¿Cómo gestiona tabi el soporte multilingüe?

Zola genera automáticamente URLs para cada idioma que no sea el predeterminado de la siguiente manera: `{base_url}/{código_idioma}/{post}`.

tabi facilita la navegación entre idiomas añadiendo un conmutador de idioma en la barra de navegación (que sólo se muestra cuando hay más de un idioma habilitado).

Si [subes](#) a la barra de navegación, verás el conmutador de idioma. Al hacer clic sobre él, se mostrará un desplegable con los idiomas disponibles. Si haces clic en el nombre de un idioma, te llevará a la misma página en ese idioma.

Si una página específica no está disponible en un idioma, tabi mostrará una página 404 con el texto:

> La página que has solicitado parece no existir o aún no se ha traducido a tu idioma. Revisa la URL en busca de errores o regresa a la página de inicio.

Este texto se mostrará una vez por cada idioma activado en tu sitio. Puedes ver esta página en acción [aquí](https://welpo.github.io/tabi/404.html).

## ¿Cómo activo el soporte multilingüe?

Para habilitar el soporte para varios idiomas, necesitas configurar la variable `languages` en `config.toml`. Por ejemplo, si quieres un sitio con inglés como idioma principal que también admita hindi y español, puedes configurar tu `config.toml` de la siguiente manera:

```toml
base_url = "https://example.com"
title = "My Site"
default_language = "en"

[languages.hi]
title = "मेरी वेबसाइट"

[languages.es]
title = "Mi web"
```

En cada sección de idioma puedes establecer otras variables como `taxonomies`, `description`… Consulta la [documentación de soporte multilingüe de Zola](https://www.getzola.org/documentation/content/multilingual/) para más información.

## ¿Qué son estos códigos de dos letras?

Los códigos de dos letras son [códigos de idioma ISO 639-1](https://localizely.com/iso-639-1-list/) (o [IETF BCP 47](https://es.wikipedia.org/wiki/C%C3%B3digo_de_idioma_IETF), si hace falta), que sirven para identificar idiomas de una manera estandarizada.

tabi utiliza estos códigos para permitir la navegación entre idiomas y traducir el tema.

## ¿Cómo personalizo o reemplazo una cadena de texto específica en mi sitio web?

tabi busca los archivos de cadenas en el siguiente orden. `$base_directory` es donde reside tu sitio Zola (donde se guarda `config.toml`):

1. `$base_directory + "i18n"`
2. `$base_directory + "themes/tabi/i18n"`

Por lo tanto, si creas `i18n/en.toml` en tu directorio base, tabi leerá las cadenas de texto de ese archivo en lugar de las cadenas predeterminadas en inglés. Puedes hacer esto para cualquier idioma, soportado o no.

Asegúrate de copiar todo el archivo para ese idioma primero, o el tema usará el inglés para las claves faltantes.

## ¿Qué pasa si falta una traducción o está incompleta?

Si una cadena no se encuentra en el archivo de idioma, tabi recurrirá a la cadena predeterminada en inglés.

## Mi idioma no está soportado. ¿Puedo contribuir con una traducción?

¡Por supuesto! Siempre estamos buscando añadir soporte para más idiomas. Puedes contribuir con una traducción creando una Pull Request en el [repositorio de tabi](https://github.com/welpo/tabi).

Puedes usar el [archivo en inglés](https://github.com/welpo/tabi/blob/main/i18n/en.toml) como base para traducir las cadenas a tu idioma. Asegúrate de mantener la misma estructura.

El archivo debe llevar el nombre del código de dos letras de tu idioma y debe ser un archivo TOML. Por ejemplo, si quieres añadir soporte para el suajili, puedes crear un archivo llamado `sw.toml` en el directorio `i18n`.

Nota: cuando pruebes tu traducción, es posible que necesites reiniciar `zola serve` para ver los cambios, ya que Zola no siempre detecta cambios en los archivos TOML.

## He encontrado un error en una traducción. ¿Cómo lo corrijo?

Si encuentras un error en una traducción, puedes abrir un ticket o una Pull Request en el [repositorio de tabi](https://github.com/welpo/tabi).

## ¿Cómo actualizo las traducciones después de una actualización del tema?

Si no personalizaste las traducciones, basta con actualizar el tema.

Si lo hiciste, tendrás que actualizar manualmente las traducciones. Puedes hacerlo copiando las nuevas cadenas de los archivos correspondientes y pegándolas en tu archivo personalizado.

## ¿tabi traduce el contenido de mi sitio?

No. tabi sólo traduce el tema. Los posts deberás traducirlos tú mismo.
