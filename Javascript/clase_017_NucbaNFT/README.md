# Nucba-NFT

En el módulo de diseño web codeamos la landing Page del NUCBA NFT. En este caso, vamos a estar dandole funcionalidad a la misma mediante el uso de JS. Este es el último proyecto que van a a ver antes del integrador, que va a tener que tener una funcionalidad bastante parecida a este proyecto, por ende, esta bueno recordarle a los alumnos que pueden tomar las funcionalidades de este trabajo para hacer el suyo (Siempre aclarando que no pueden utilizar este mismo , y que hagan su diseño propio, sin usar el logo ni nombre de Nucba).

## Funcionalidades del proyecto :

- Renderizado de productos desde Js en la sección de productos.
- Lógica de los filtros de la sección de productos.
- Lógica del botón "Ver más" para renderizar mas cards cuando se aprete (Hasta que no haya mas por poner).
- Logica de apertura del menú hamburguesa y el carrito con Js, en combinación con el funcionamiento del overlay y cerrar uno si se abre el otro.
- Logica de cerrado del menú hamburguesa o el carrito si se scrollea en mobile y tablets que tengan dicho menú.
- Logica de cerrado del menú hamburguesa o el carrito si se apreta uno de los links que redirigen en la propia página en mobile y tablets que tengan dicho menú.
- Logica de agregar el producto al carrito (usando local storage).
- Toda la lógica que incluye el carrito (Agregar/quitar cantidad de productos,borrarlos,lógica del total, logica del botón comprar, lógica de la burbuja de cantidad, borrar todo y finalizar compra).

## Objetivos pedagógicos

Este proyecto es fundamental para que los alumnos puedan orientarse sobre como hacer las funcionalidades del trabajo integrador, por eso es fundamental que:

- Se les explique con detenimiento a los alumnos cada paso del renderizado dinámico de los elementos, tanto en la sección de productos como en la del carrito.
- Los alumnos entiendan como funcióna la lógica de filtros, entendiendo que es una funcionalidad importante en el integrador.
- Se entienda como funciona la lógica y comportamiento del menú , carrito y overlay y como se relacionan entre ellos.
- Los alumnos puedan entender como es el flujo de agregado de productos al carrito y el posterior manejo de las cantidades dentro del mismo.
- Los alumnos vayan siguiendo y entendendiendo como es el traspaso de datos entre funciones(parámetros, retornos de cada función que se llame en otra, etc.).

Obviamente, todas las demás partes del proyecto tambien son importantes, pero hacer especial hincapie en esas cosas anteriormente mencionadas.

## Modalidad de trabajo

- El mentor tiene todo el proyecto ya codeado en la rama "template/mentor". No es necesario que siga el orden planteado, pueden reorganizarlo y plantearlo de la manera que ustedes lo crean mas adecuado para que el alumno entienda lo que se le esta explicando.

- Si consideran que pueden cambiar algo para mejorar el proyecto pueden hacerlo, siempre y cuando siga cumpliendo los mismos objetivos.

- A medida que van codeando, vayan mostrandole a los alumnos como van cambiando las cosas y porque se hace lo que se hace. Idealmente, haganlos razonar y participar para que entiendan mejor la resolución de las distintas problematicas que se van presentando.

**Es FUNDAMENTAL que revisen el proyecto con tiempo y lo lleven a la practica antes de codearlo en clase, con el fin de que no se presenten inconvenientes a la hora de codearlo en vivo y de que, en caso de que tengan alguna duda sobre la realización del proyecto, podamos asistirlos desde el equipo.**

## División del repositorio

El proyecto esta dividido en distintas ramas las cuales detallamos a continuación.

| Rama            | Descripción                                                      |
| --------------- | ---------------------------------------------------------------- |
| clase           | Base para la clase - Desde aca vamos a partir para el livecoding |
| template/mentor | Proyecto completo para el profesor                               |

- El profesor clonará por un lado la rama "clase" para utilizar de base para codear en la clase y por el otro la rama "template/mentor" para tener de referencia a la hora de ir codeandola.

- En la rama "template/mentor" tendrán el proyecto codeado en su totalidad. Cada función y variable estará acompañada de su respectiva explicación.

**Recuerden eliminar el README.md antes de subir el proyecto para los alumnos**
