// var nombre;
// console.log(nombre);

// var nombre = "Nelson";
// console.log(nombre);

// console.log(saludar());

// function saludar() {
//   console.log("Hola");
// }

// Scope

var a = "Soy global";

function holi() {
  var b = "Estoy en una funcion";
}

{
  var c = "Estoy en un bloque";
} // Bloque de codigo

{
  let d = "Estoy en un bloque";
  const e = "Estoy en un bloque";
}

// console.log(a); // Estoy Global
// console.log(b); //
// console.log(c);
// console.log(d);
// console.log(e);

// let nombre;
// nombre = "Nelson";

// const edad;
// edad = 23;

let numero = 5; // Una caja que guarda un 5
let otroNumero = 10; // Una caja que guarda un 10

// console.log(numero + otroNumero); // 15

// Operadores de asignacion
// numero += otroNumero;
// numero -= 5;
// numero *= 2;
// numero /= 2;
// numero %= 2;
// console.log(numero);

// numero++;
// console.log(numero);

// Operadores de comparacion
// == | Es igual a == b
// console.log(18 == "18"); // true

// === | Es igual a y mismo tipo === b
// console.log(18 === "18");

// != | Es diferente a != b
// console.log(18 != 18);

// !== | Es diferente a o de diferente tipo !== b
// console.log(18 !== "18");

// > | Es mayor que
// console.log(9 > 20);

// < | Es menor que
// console.log(10 < 100);

// >= mayor o igual | <= menor o igual
// console.log(2 >= 2);

// && / Operador AND
// console.log(18 > 7 && 9 <= 9);

// || / OR
// console.log(18 > 7 || 10 < 100);

// ! / Negamos
// console.log(!(18 < 7));

// Condicionales
// Sintaxis
// if(condicion){
//   ...
// }

// if (condicion) {
//   //  si es verdadera ejecuta esto
// } else {
//   // si no, ejecuta esto
// }

// if (18 < 10) {
//   console.log("Es mayor");
// } else {
//   console.log("No es mayor");
// }

let llueve = true;

// if (llueve) {
//   console.log("LA ROPAAAAAAAAAAAA");
// } else {
//   console.log("Ufff, menos mal");
// }

// let movieGenre = prompt(
//   "¿Que género de peli querés ver? (comedia, terror, drama, accion, animada)"
// );

// if (movieGenre === "comedia") {
//   alert("Te recomendamos: Tonto y retonto");
// } else if (movieGenre === "drama") {
//   alert("Te recomendamos: No se");
// } else if (movieGenre === "accion") {
//   alert("Te recomendamos: Hombre en llamas");
// } else {
//   alert("No la conozco pa");
// }

// if (movieGenre === "accion" || movieGenre === "comedia") {
//   alert("Te recomendamos: Pelicula 1");
// }

// Tengo que verificar si una persona es mayor de edad o no
// Tengo que preguntar la edad
// Comprobar si la edad es mayor a 18
// Si es verdadera puede manejar
// SI no no puede

let edad = 18;

// if (edad > 18) {
//   console.log("Puede manejar");
// } else {
//   console.log("no puede");
// }

// Ternario

edad > 18
  ? console.log("Puede manejar")
  : edad < 18
  ? console.log("No podes")
  : console.log("Tenes 18");

// Switch

const mascota = "Lagarto";

// if (mascota === "lagarto") {
//   console.log("Tengo un lagarto");
// } else if (mascota === "Perro") {
//   console.log("Tengo un perro");
// } else if (mascota === "Gato") {
//   console.log("Tengo un gato");
// } else {
//   console.log("No tengo mascota");
// }

// Pasemos esto a switch

// switch (mascota) {
//   case "Lagarto":
//     console.log("Tengo un lagarto");
//     break;
//   case "Perro":
//     console.log("Tengo un perro");
//     break;
//   case "Gato":
//     console.log("Tengo un gato");
//     break;
//   default:
//     console.log("No tengo mascota");
//     break;
// }
