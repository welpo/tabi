+++
title = "Sense JavaScript obligatori"
date = 2023-01-06
updated = 2025-02-15
description = "JavaScript només s'utilitza quan HTML i CSS no són suficients."

[taxonomies]
tags = ["funcionalitat", "tutorial"]

[extra]
social_media_card = "social_cards/ca_blog_javascript.jpg"
+++

Aquest tema no requereix JavaScript obligatori. Opcionalment, pot carregar una quantitat mínima per afegir algunes característiques que són impossibles d'aconseguir amb HTML i CSS.

## Opcions habilitades globalment

- [**Cerca**](@/blog/mastering-tabi-settings/index.ca.md#cerca). Activada establint un idioma per defecte i `build_search_index = true` a la secció principal de `config.toml`. (~23KB de JavaScript)

- L'**interruptor de mode clar/fosc** es pot habilitar configurant `theme_switcher = true` a la secció `[extra]` del teu `config.toml` (~1KB de JavaScript).

- **Decodificació de correu electrònic** (~400 bytes). Per protegir contra robots de correu brossa, pots configurar `encode_plaintext_email = true`. Si el teu lloc web està en un repositori públic, considera utilitzar el teu `email` com una cadena codificada en base64[^1].

## Opcions que es poden sobreescriure de forma jeràrquica

Les següents opcions es poden especificar per a publicacions, seccions i globalment, seguint la jerarquia de `pàgina > secció > config.toml`:

- [**Suport de KaTeX**](@/blog/markdown/index.ca.md#katex). Habilitat configurant `katex = true` (274 KB). Per renderitzar fórmules sense JS, prova [MathML](https://developer.mozilla.org/docs/Web/MathML/).
- [**Diagrames de Mermaid**](@/blog/shortcodes/index.ca.md#diagrames-de-mermaid). Habilitat configurant `mermaid = true` (~2.5 MB).
- [**Còpia de blocs de codi amb un sol clic**](@/blog/markdown/index.ca.md#bloc-de-codi). Habilitada configurant `copy_button = true`. (~700 bytes)
- [**Noms de blocs de codi clicables**](@/blog/shortcodes/index.ca.md#mostrar-ruta-o-url). S'activa configurant `clickable_code_names = true`. (~400 bytes)
- [**Filtratge per etiquetes** per a graelles de targetes](@/blog/mastering-tabi-settings/index.ca.md#filtrar-projectes) (p. ex. [projectes](@/projects/_index.ca.md)) (~2KB). S'habilita configurant `enable_cards_tag_filtering = true`.

Per especificar aquestes opcions:

- **Globalment**: Afegeix-les sota la secció `[extra]` al teu `config.toml`.
- **Per a una secció**: Afegeix-les sota la secció `[extra]` al front matter de l'`_index.md` de la secció.
- **Per a una publicació individual**: Configura les variables corresponents a la secció `[extra]` del front matter de la publicació.

## Opcions que es poden habilitar globalment o per a publicacions individuals

- [**Comentaris**](@/blog/comments/index.ca.md). giscus (2 KB), utterances (1 KB), Hyvor Talk (~800 bytes) o Isso (1KB) es poden habilitar globalment configurant `enabled_for_all_posts = true` a la secció apropiada del teu `config.toml` (`[extra.giscus]`, `[extra.utterances]`, `[extra.hyvortalk]` o `[extra.isso]`). Per habilitar comentaris en publicacions individuals, configura el nom del sistema `= true` (per exemple, `hyvortalk = true`) al front matter del post.

A part d'això, és un tema ràpid amb HTML i CSS que funciona sense JavaScript. Just com hauria de ser (la majoria de) la web :-)

[^1]: Per codificar el teu correu en base64 pots utilitzar [eines en línia](https://www.base64encode.org/) o, al terminal, executa: `printf 'mail@example.com' | base64`.
