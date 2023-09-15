+++
title = "chu"
description = "Aplicación Flask para subir archivos de forma segura, con eliminación de metadatos, compresión, protección con contraseña y más."
weight = 2

[extra]
local_image = "img/chu.webp"
social_media_card = "img/social_cards/es_projects_chu.jpg"
+++

[**chu**](https://github.com/welpo/chu) es un subidor de archivos creado con Python, Flask y uWSGI. Este proyecto integra diversas técnicas de optimización para hacer que la subida de archivos sea no solo más sencilla, sino también más inteligente.

#### [Ver en GitHub](https://github.com/welpo/chu) {.centered-text}

### Características técnicas

- **Eficiencia a través de la compresión**: Utiliza [compresión Lepton JPEG](https://github.com/microsoft/lepton_jpeg_rust) y [optipng](http://optipng.sourceforge.net/) para lograr un ahorro de espacio de hasta el 22%.

- **Medidas de seguridad**: Implementa límites de tamaño de subida, controles de extensión y autenticación con contraseña.

- **Facilidad de uso**: Genera una URL para cada archivo subido con éxito, permitiendo nombres de archivo aleatorios o definidos por el usuario.

- **Eliminación de metadatos**: Elimina los metadatos de los archivos por privacidad.

- **Tamaño de subida configurable**: Ofrece la posibilidad de establecer límites al tamaño de los archivos subidos.

- **Controles específicos de extensión**: Proporciona configuraciones para restringir las subidas a extensiones de archivo específicas.

- **Respuesta de URL directa**: Tras cada subida exitosa, devuelve una URL que apunta al archivo.
