+++
title = "Taula de contingut"
date = 2022-11-01
updated = 2023-08-14
description = "Una publicació que mostra la taula de contingut opcional i la seva configuració."

[taxonomies]
tags = ["funcionalitat", "markdown", "tutorial"]

[extra]
toc = true
quick_navigation_buttons = true
+++

## Documentació
### Habilitant (i posicionant) la Taula de Contingut

Hi ha dues formes d'habilitar la Taula de Contingut (TdC). Si vols que estigui just a sota del capçalera (com en aquesta pàgina), configura aquesta variable en el front matter del teu post:

```toml
[extra]
toc = true
```

Si prefereixes col·locar la TdC a un altre lloc (per exemple, després d'una introducció), pots fer-ho afegint una línia amb aquest contingut allà on vulguis que aparegui la TdC:

```markdown
<!-- toc -->
```

També pots utilitzar el shortcode `{{/* toc() */}}`, que simplement inserirà aquest text per tu ([idea de Michael Clayton](https://github.com/getzola/zola/issues/584#issuecomment-1546086781)).

Aquest mètode renderitzarà la TdC sense el capçalera "Taula de Contingut". Això et permet utilitzar un capçalera diferent (o cap) per la TdC, o fins i tot ocultar-la de forma predeterminada:

<details>
    <summary>TdC oculta</summary>
    <!-- toc -->
</details>

El codi per aconseguir-ho:

```markdown
<details>
    <summary>TdC oculta</summary>
    <!-- toc -->
</details>
```

*Nota*: Si actives la TdC amb `toc = true` i també afegeixes `<!-- toc -->` en algun lloc del teu text, obtindràs múltiples TdCs.

Si col·loques la TdC en un lloc diferent del predeterminat i li afegeixes un capçalera, segurament voldràs ocultar aquest capçalera de la TdC (consulta la [secció per ocultar capçaleres](#ocultant-capcaleres-de-la-tdc)). Pots fer-ho així:

```markdown,hl_lines=06 11-13
+++
title = "El títol del teu post"
date = 2034-01-11

[extra]
toc_ignore_pattern = "^(Taula de contingut)"
+++

Aquí va algun text introductori.

### Taula de contingut

<!-- toc -->

## Primer encapçalament de contingut
```

### Establint la profunditat màxima

Pots establir la profunditat màxima per la TdC especificant la variable `toc_levels`, que accepta un número enter entre 1 i 4:

```toml
[extra]
toc_levels = 2
```

En aquest exemple, només els dos primers nivells d'encapçalaments s'inclourien a la TdC, independentment de les seves etiquetes HTML reals (`h1`, `h2`, `h3`, etc.). Si vols incloure només el nivell principal d'encapçalaments, estableix `toc_levels = 1`. El valor per defecte de `toc_levels` és `3`.

Tingues en compte als teus lectors quan establertis `toc_levels`. Encara que pot ser temptador incloure molts nivells imbricats per a una navegació detallada, una TdC més curta i senzilla sovint és més amigable i menys aclaparadora.

### Ocultant capçaleres de la TdC

És possible que vulguis amagar certes capçaleres. Per exemple, si el teu article té moltes Figures o Taules, aquestes podrien saturar la TdC. Pots ocultar capçaleres específiques a la TdC configurant la variable `toc_ignore_pattern` en la secció `[extra]` del front matter del teu post.

Aquesta variable espera una expressió regular (regex), ja que utilitza el test [matching](https://tera.netlify.app/docs/#matching) de Tera. El `toc_ignore_pattern` es prova contra el text del capçalera. Per exemple, per a la capçalera `### Lectura addicional`, només el text `Lectura addicional` s'utilitzaria per comprovar si coincideix amb el patró.

Aquí tens alguns valors d'exemple per a `toc_ignore_pattern` juntament amb les capçaleres que amagarien:

| `toc_ignore_pattern`             | Exclou capçaleres que…                                                 |
|----------------------------------|------------------------------------------------------------------------|
| `Taula`                          | continguin "Taula"                                                     |
| `^Figura`                        | comencin amb "Figura"                                                  |
| <code>(?i)(taula\|figura)</code> | comencin amb "Taula" o "Figura" (insensible a majúscules/minúscules)   |
| `\[Esborrany\]$`                 | acabin amb "[Esborrany]".                                              |

Pots provar la teva expressió regular en plataformes com [regex101](https://regex101.com/r/2dI7U2/1) per assegurar-te que funciona com esperes.

*Nota*: Les capacitats de "look-around", incloent look-ahead i look-behind, no estan suportades.

# Capçalera 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

## Capçalera 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
### Capçalera 3.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

### Capçalera 3.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

## Capçalera 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
### Capçalera 3.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.

### Capçalera 3.2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
#### Capçalera 4.1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed mollis augue, vel efficitur lacus. Pellentesque eu egestas mi. Etiam ultrices lectus sit amet aliquet ullamcorper. Praesent in erat quis est sagittis finibus. Etiam nec sapien in nulla interdum faucibus. Integer iaculis lorem quis arcu lobortis, non malesuada neque vehicula. Aenean nec tellus eu metus bibendum tempus. Sed rutrum urna ut commodo tempor. Vestibulum aliquet elit posuere turpis maximus condimentum. Sed urna libero, ornare eu tellus vitae, laoreet condimentum risus. Aenean elit lectus, mattis quis nibh nec, faucibus rutrum sapien. Sed iaculis consectetur mi, eget posuere turpis finibus et.
