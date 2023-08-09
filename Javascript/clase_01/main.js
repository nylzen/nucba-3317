// alert("ESTO ES JS");

/* 
 Tipos de datos en JS:
 - Number: 5, 6.7, 8.9, 9.0
 - String: "Hola", 'Hola', `Hola`
 - Boolean: true, false
 - undefined
 - null
*/

// Variables

// var nombreVariable = lo que quiera guardar
var numeroA = 5;
var numeroB = 10;
var resultado = numeroA + numeroB;

// console.log(resultado); // 15

// Concatenar Texto
var textA = "Hola";
var textB = "Mundo";

// console.log(textA + " " + textB); // Hola Mundo
// var | let | const

var tipoVar = "Hola soy var";
// console.log(tipoVar);
var tipoVar = "Hola soy un var redeclarado";
// console.log(tipoVar);

// Let
// No puedo volver a declararla con el mismo nombre
let tipoLet = "Hola soy let";
// console.log(tipoLet);

//  Lo que si podemos hacer es REASIGNAR el valor
tipoLet = "Hola soy let redeclarado";
// console.log(tipoLet);

// const
// NO PODEMOS VOLVER A DECLARARLA CON EL MISMO NOMBRE Y NO PODEMOS REASIGNAR EL VALOR
const campeones = "CAMPEONES DEL MUNDO";
// console.log(campeones);
// const campeones = "CAMPEONES DEL MUNDO REDECLARADO";
// console.log(campeones);
// campeones = "CAMPEONES DEL MUNDO REDECLARADO";
// console.log(campeones);

// Operadores
/*
    + Suma
    - Resta
    * Multiplicación
    / División
    % Módulo o Resto
    ** Potencia
    ++ Incremento
    -- Decremento
*/

let numero1 = 10;
let numero2 = 23;

// suma
// console.log(numero1 + numero2); // 33;

// resta
// console.log(numero1 - numero2); // -13

// multiplicación
// console.log(numero1 * numero2); // 230

// división
// console.log(numero1 / numero2); // 0.43478260869565216

// modulo o resto
// console.log(numero1 % numero2); // 10

// potencia
// console.log(numero1 ** numero2); // 1000000000000000000000000

// incremento
// console.log(++numero1); // 10

// decremento
// console.log(--numero2); // 22

// Ver que tipo de dato estamos usando
// console.log(typeof numero1); // number

let result = "1" + 1;
// console.log(typeof result);

// concatenando
// console.log("10" + "Messi");

// prompt es una funcion que muestrar una ventana emergente para que el usuario ingrese un texto

//  Pseudocodigo
// 1. Pedir el nombre del usuario
// 2. Guardar en una variable el nombre del usuario
// 3. Mostrar en consola el nombre completo del usuario

const nombre = prompt("Ingresa tu nombre");

// console.log("Hola tu nombre es:" + " " + nombre + " " + "Saludos!");

// La forma mas facil para concatenar
console.log(`Hola tu nombre es: ${nombre}, saludos! ${result}`);
