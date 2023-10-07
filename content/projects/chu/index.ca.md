+++
title = "chu"
description = "Aplicació Flask per pujar arxius de manera segura, amb eliminació de metadades, compressió, protecció amb contrasenya i més."
weight = 2

[extra]
local_image = "projects/chu/chu.webp"
canonical_url = "https://osc.garden/ca/projects/chu/"
social_media_card = "social_cards/ca_projects_chu.jpg"
+++

[**chu**](https://github.com/welpo/chu) és una aplicació per pujar arxius creada amb Python, Flask i uWSGI. Aquest projecte integra diverses tècniques d'optimització per fer que la pujada d'arxius sigui no només més senzilla, sinó també més intel·ligent.

#### [Veure a GitHub](https://github.com/welpo/chu) {.centered-text}

### Característiques tècniques

- **Eficiència a través de la compressió**: Utilitza [compressió Lepton JPEG](https://github.com/microsoft/lepton_jpeg_rust) i [optipng](http://optipng.sourceforge.net/) per assolir un estalvi d'espai d'fins al 22%.

- **Mesures de seguretat**: Implementa límits de grandària de pujada, controls d'extensió i autenticació amb contrasenya.

- **Facilitat d'ús**: Genera una URL per a cada arxiu pujat amb èxit, permetent noms d'arxiu aleatoris o definits per l'usuari.

- **Eliminació de metadades**: Elimina les metadades dels arxius per millorar la privacitat.

- **Grandària de pujada configurable**: Ofereix la possibilitat d'establir límits a la grandària dels arxius pujats.

- **Controls específics d'extensió**: Proporciona configuracions per restringir les pujades a extensions d'arxiu específiques.

- **Resposta d'URL directa**: Després de cada pujada exitosa, retorna una URL que apunta a l'arxiu.
