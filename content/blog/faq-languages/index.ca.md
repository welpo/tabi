+++
title = "Lost in Translation? Explora les capacitats multilingües de tabi"
date = 2023-09-12
updated = 2025-08-06
description = "Descobreix com tabi t'ajuda a connectar amb una audiència global gràcies a les seves funcions multilingües. Aprèn a canviar la llengua per defecte, afegir més llengües i aportar les teves pròpies traduccions."

[taxonomies]
tags = ["funcionalitat", "tutorial", "Preguntes Freqüents"]

[extra]
quick_navigation_buttons = true
toc_ignore_pattern = "^(Preguntes Freqüents)"
social_media_card = "social_cards/ca_blog_faq_languages.jpg"
+++

tabi simplifica el procés de creació de llocs web multilingües perquè puguis connectar amb una audiència global. En aquesta guia, t'explicarem tot el que necessites saber, des de com configurar la llengua principal en el teu lloc fins a com contribuir amb les teves pròpies traduccions. Comencem!

### Preguntes Freqüents

<!-- toc -->

## Quines llengües admet tabi?

tabi admet les següents llengües:

- Alemany
- Àrab
- Anglès
- Català
- Coreà
- Espanyol
- Estonià
- Finès
- Francès
- Hindi
- Italià
- Japonès
- Odia
- Persa
- Portuguès (Europeu)
- Rus
- Ucraïnès
- Xinès (Simplificat)

Per a una llista sempre actualitzada de llengües suportades, consulta la [carpeta `i18n`](https://github.com/welpo/tabi/tree/main/i18n) en el repositori de tabi.

## Com estableixo la llengua predeterminada del meu lloc?

Pots definir la llengua principal del teu lloc configurant la variable `default_language` a `config.toml`.

Per exemple, si vols que la llengua principal sigui el Xinès, simplement afegeix aquesta línia a l'arxiu `config.toml`:

```toml, hl_lines=03
base_url = "https://welpo.github.io/tabi"
title = "~/tabi"
default_language = "zh"
```

Si el valor de `default_language` coincideix amb el nom d'un fitxer TOML al [directori `i18n`](https://github.com/welpo/tabi/tree/main/i18n), tots els textos de tabi es traduiran a aquest idioma.

## Com gestiona tabi el suport multilingüe?

Zola genera automàticament URLs per a cada llengua que no sigui la predeterminada de la següent manera: `{base_url}/{codi_idioma}/{post}`.

tabi facilita la navegació entre llengües afegint un commutador de llengua en la barra de navegació (que només es mostra quan hi ha més d'una llengua habilitada).

Si [pujes](#) a la barra de navegació, veuràs el commutador de llengua. Si cliques sobre ell, es mostrarà un desplegable amb les llengües disponibles. Si fas clic en el nom d'una llengua, et portarà a la mateixa pàgina en aquesta llengua.

Si una pàgina específica no està disponible en una llengua, tabi mostrarà una pàgina 404 amb el text:

> La pàgina que has sol·licitat sembla que no existeix o encara no s'ha traduït al teu idioma. Comprova l'URL per detectar errors o torna a la pàgina d'inici.

Aquest text es mostrarà una vegada per cada llengua activada en el teu lloc. Pots veure aquesta pàgina en acció [aquí](https://welpo.github.io/tabi/404.html).

## Com activo el suport multilingüe?

Per habilitar el suport per a diverses llengües, necessites configurar la variable `languages` a `config.toml`. Per exemple, si vols un lloc amb anglès com a llengua principal que també admeti hindi i espanyol, pots configurar el teu `config.toml` de la següent manera:

```toml
base_url = "https://example.com"
title = "My Site"
default_language = "en"

[languages.hi]
title = "मेरी वेबसाइट"

[languages.es]
title = "El meu web"
```

En cada secció de llengua pots establir altres variables com `taxonomies`, `description`… Consulta la [documentació de suport multilingüe de Zola](https://www.getzola.org/documentation/content/multilingual/) per a més informació.

## Què són aquests codis de dues lletres?

Els codis de dues lletres són [codis d'idioma ISO 639-1](https://localizely.com/iso-639-1-list/) (o [IETF BCP 47](https://ca.wikipedia.org/wiki/Codi_de_llengua_IETF), quan cal), que serveixen per identificar idiomes d'una manera estandarditzada.

tabi utilitza aquests codis per permetre la navegació entre idiomes i traduir el tema.

## Com personalitzo o reemplaço una cadena de text específica al meu lloc web?

tabi cerca els fitxers de cadenes en el següent ordre. `$base_directory` és on resideix el teu lloc Zola (allà on està `config.toml`):

1. `$base_directory + "i18n"`
2. `$base_directory + "themes/tabi/i18n"`

Per tant, si crees `i18n/ca.toml` al teu directori base, tabi llegirà les cadenes de text d'aquest fitxer en lloc de les cadenes predeterminades en català. Pots fer això per a qualsevol idioma, suportat o no.

Assegura't de copiar tot el fitxer per a aquest idioma primer, o el tema utilitzarà l'anglès per les claus que faltin.

## Com personalitzo els formats de data per a diferents idiomes?

Pots establir formats de data específics per idioma al teu `config.toml` utilitzant la matriu `date_formats`:

```toml
date_formats = [
    { lang = "es", long = "%d de %B de %Y", short = "%-d %b %Y" },
    { lang = "de", long = "%d. %B %Y", short = "%d.%m.%Y" },
]
```

Això permet que cada idioma mostri les dates segons les convencions locals. Per exemple, l'espanyol mostrarà «3 de febrero de 2024» mentre que l'alemany mostrarà «3. Februar 2024». Si no es defineix un format específic per a un idioma, tabi utilitzarà la configuració global `long_date_format` i `short_date_format`.

## Què passa si falta una traducció o està incompleta?

Si una cadena no es troba en el fitxer d'idioma, tabi utilitzarà a la cadena predeterminada en anglès.

## El meu idioma no està suportat. Puc contribuir amb una traducció?

És clar! Sempre estem buscant afegir suport per a més idiomes. Pots contribuir amb una traducció creant una Pull Request al [repositori de tabi](https://github.com/welpo/tabi).

Pots utilitzar el [fitxer en català](https://github.com/welpo/tabi/blob/main/i18n/ca.toml) com a base per traduir les cadenes al teu idioma. Assegura't de mantenir la mateixa estructura.

El fitxer ha de portar el nom del codi de dues lletres del teu idioma i ha de ser un fitxer TOML. Per exemple, si vols afegir suport per al suahili, pots crear un fitxer anomenat `sw.toml` al directori `i18n`.

Nota: quan provis la teva traducció, és possible que necessitis reiniciar `zola serve` per veure els canvis, ja que Zola no sempre detecta canvis en els fitxers TOML.

## He trobat un error en una traducció. Com el corregeixo?

Si trobes un error en una traducció, pots crear una issue o una Pull Request al [repositori de tabi](https://github.com/welpo/tabi).

## Com actualitzo les traduccions després d'una actualització del tema?

Si no vas personalitzar les traduccions, simplement actualitza el tema.

Si ho vas fer, hauràs d'actualitzar manualment les traduccions. Pots fer-ho copiant les noves cadenes dels fitxers corresponents i enganxant-les al teu fitxer personalitzat.

## tabi tradueix el meu contingut?

No. tabi només tradueix les cadenes de text del tema. Hauràs de traduir el teu contingut tu mateix.
