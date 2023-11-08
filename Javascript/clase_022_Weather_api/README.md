# Nucba-Weather

## Funcionalidades del proyecto

En este proyecto estaremos codeando una aplicación que nos traera el clima de la ciudad que busquemos. Contará con las siguientes funcionalidades:

- Usará la api de OpenWeatherMap (https://openweathermap.org/api) para traerse los datos del clima.
- Tendrá un buscador , el cual tendrá la validación correspondiente para ciudades inexistentes e input vacío.
- Renderizará la card del clima del lugar buscado y cambiará el mensaje de busqueda.

## Objetivos pedagógicos

Se espera que:


- Antes de empezar a codear, se les muestre a los alumnos la card de ejemplo que esta comentada en el html para que sepan cual es el objetivo final de la clase.
- Se les explique a los alumnos como obtener una API key de esta API. (https://openweathermap.org/price , elegir "Get API key" en la opción free y completar los datos).
- Se les muestre brevemente a los alumnos la documentación de la API (https://openweathermap.org/current).
- Se revise con detenimiento el objeto que devuelve la llamada a la API al buscar una ciudad, para mostrarle a los alumnos como acceder a las distintas propiedades que necesitamos en el proyecto.
- Los alumnos vayan siguiendo y entendendiendo como es el traspaso de datos entre funciones mediante los parámetros y porque algunas funciones utilizan async/await y otras no.

**Recuerden que es el primer proyecto práctico que harán los alumnos con asincronismo, así que ir explicando todo de manera tal que los puedan ir siguiendo**

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

-El profesor clonará por un lado la rama "clase" para utilizar de base para codear en la clase y por el otro la rama "template/mentor" para tener de referencia a la hora de ir codeandola.

- En la rama "template/mentor" tendrán el proyecto codeado en su totalidad. Cada función y variable estará acompañada de su respectiva explicación.

**Recuerden eliminar el README.md antes de subir el proyecto para los alumnos**
