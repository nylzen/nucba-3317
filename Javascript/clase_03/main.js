// for(inicio, condicion,actualizacion){
//     lo que haga el bucle
// }

// Hacer un contador del 1 al 10
// for (let i = 1; i <= 10; i++) {
//   console.log(`El numero que estamos iterando es el ${i}`);
// }

/*
1. Inicio, creamos una variable i que tiene el valor de 1
2. Condicion, preguntamos si i es menor o igual a 10
3. Si la condicion es falsa se termina el bucle
4. Si es verdadera ejecuta lo que esta dentro del for
5. Actualización, incrementamos i en 1 con el i++
6. Vuelve al paso 2 (evaluamos de vuelta la condicion)
*/

// Break
// for (let i = 1; i < 10; i++) {
//   if (i === 2) {
//     break; // TERMINAR EL BUCLE
//   }
//   console.log(i);
// }

// Continue
// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     continue;
//   }
//   console.log(i);
// }

// Ejercicio, imprimimos los pares e impares por separado
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`El numero ${i} es par`);
//     // continue;
//   } else {
//     console.log(`El numero ${i} es impar`);
//   }
// }

// Calcular multiplos
// const multiplo = 2;

// for (let i = 0; i <= 20; i++) {
//   if (i % multiplo === 0) {
//     console.log(`El numero ${i} es multiplo de ${multiplo}`);
//   }
// }

// Sumar los numeros en un loop
// 1,2,3,4,5,6,7,8,9,10

// let suma = 0;

// for (let i = 1; i <= 10; i++) {
//   console.log(`Estamos en la iteracion numero ${i}`);
//   console.log(`Suma vale: ${suma}`);
//   console.log(`Numero a sumar: ${i}`);
//   console.log(`Ahora suma vale: ${(suma += i)}`);
//   console.log(`=========`);
// }

// While
// Sintaxis
/* 
    while(condicion){
        codigo a ejecutar
        actualizar
    }
*/

// Ascendente
// let i = 1;

// while (i <= 10) {
//   console.log(`El numero iterado es: ${i}`);
//   i++;
// }

// let i = 10;

// while (i >= 1) {
//   console.log(`El numero iterado es: ${i}`);
//   i--;
// }

// do ... while

/*
do {

    ejecutar codigo

} while(condicion)
*/

// let i = 1;

// do {
//   console.log(`El numero es: ${i}`);
//   i++;
// } while (i <= 0);

// For:
/*
Para ejecutar un codigo una cantidad especifica de veces
Tiene 3 partes: inicio condicion actualizacion
Lo usamos para recorrer arrays


while
Lo usamos cuando no conozcamos la cantidad exaacta de iteraciones 
Se ejecuta cuando la condicion sea verdadera


do while 
Es parecido al while pero nos aseguramos que al menos se ejecute una vez, despues preguntamos si la condicion es true o false
*/

// Arrays
// const scaloneta = [
//   "Papu",
//   "Messi",
//   "Dibu",
//   "Cuti",
//   "Enzo",
//   "Julian",
//   "Fideo",
//   "Ota",
//   "Taglia",
//   "Dybala",
//   "Leo Paredes",
//   "Kun",
// ];

// console.log(scaloneta); // Imprime el array completo

// console.log(scaloneta[1]); // Devuelve Messi

// TRUCO PARA ACORDARSE COMO ESCRIBIR LENGTH
// Gallina Tiene Huevo

// console.log(scaloneta.length);//Esto devuelve el largo del array en un numero

// for (let i = 0; i < scaloneta.length; i++) {
//   console.log(scaloneta[i]);
// }

// for (let jugador of scaloneta) {
//   console.log(jugador);
// }

const scaloneta = [
  "papu",
  "messi",
  "dibu",
  "cuti",
  "enzo",
  "julian",
  "fideo",
  "ota",
  "taglia",
  "dybala",
  "paredes",
  "kun",
];

// Buscador de jugadores
// Tengo que guardar lo que el usuario ponga en el prompt
// Recorrer el array
// Condicion que verifique que lo que buscamos este en el array
// Devuelva lo que encontro

const buscarJugador = prompt("Que jugador estás buscando?").toLowerCase();
let jugadorEncontrado = false;

for (const jugador of scaloneta) {
  if (jugador === buscarJugador) {
    jugadorEncontrado = true;
    break;
  }
}

if (jugadorEncontrado) {
  console.log(`El jugador ${buscarJugador} está en el plantel`);
} else {
  console.log(`El jugador ${buscarJugador} no está en el plantel`);
}

// VERSION 1
// for (const jugador of scaloneta) {
//   if (jugador === buscarJugador) {
//     console.log(
//       `El jugador ${buscarJugador} está en el plantel de la Scaloneta`
//     );

//     break;
//   }
// }
