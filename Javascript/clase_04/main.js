// Declarar la funcion

// function nombre() {
// aca dentro va el codigo
// }

// let nombre = "Nelson";
// console.log(`Hola ${nombre}`);

// function saludar() {
//   let nombre = "Nelson";
//   console.log(`Hola ${nombre}`);
// }

// Una vez que creemos la funcion, la tenemos que invocar para que haga su tarea
// saludar();

function saludar(nombre) {
  //   console.log("hola " + nombre);
  console.log(`Hola ${nombre}`);
}

// saludar("Nelson");
// saludar();
// saludar("Messi");
// saludar("Pepito");
// saludar(8);
// saludar([1, 2, 3]);

// function multiplicar(a, b, c = 1) {
//   //   console.log(a * b * c);

//   return a * b * c;
// }

// // multiplicar(); // Not a number undefined * undefined
// multiplicar(12, 2); // 12 * 2 * undefined
// multiplicar(12, 2); // 12 * 2 * 1
// console.log(multiplicar(2, 2));

// function sumar(a, b) {
//   return a + b;
// }

// console.log(sumar(2, 2));
// console.log(multiplicar(2, 2));

// console.log(sumar(multiplicar(2, 5), 4));

// FUNCION TRADICIONAL
// function multiplicar(a, b) {
//   return a * b;
// }

//FUNCION FLECHA
const multiplicar = (a, b) => {
  return a * b + 5;
};

// FUNCION FLECHA RETURN IMPLICITO
// const multiplicar = (a, b) => a * b;
// console.log(multiplicar(2, 2));

// FUNCIONES RECURSIVAS
// Hacemos un contador hacia atras

// for (let i = 5; i >= 0; i--) {
//   console.log(i);
// }

// Hagamoslo con una funcion recursiva
// const cuentaAtras = (num) => {
//   // Caso base
//   if (num === 0) {
//     return;
//   }

//   console.log(num);

//   return cuentaAtras(num - 1);
// };

// cuentaAtras(5);

/*
1. El parametro actual 5;
2. Evalua si el 5 es igual 0
3. No, entonces bueno, imprimo el parametro(5) en consola
4. La funcion se llama a si misma con el parametro - 1. O sea, 5 - 1, cuentaAtras(4)
--

1. El parametro actual es 4
2. Evalua si el 4 es igual a 0
3 ........

*/

const duplicar = (num) => {
  num = num + num;

  console.log(num);

  if (num > 100) {
    return console.log("Te pasaste");
  }

  return duplicar(num);
};

// duplicar(4);

// CALLBACK
const alertHola = (nombre) => {
  return alert(`Hola ${nombre}`);
};

// alertHola("Nelson");

const consoleHola = (name) => {
  return console.log(`Hola ${name}`);
};

// consoleHola("Nelson");

const procesarEntrada = (comoImprimo) => {
  const nombreUsuario = prompt("Ingresa tu nombre");
  comoImprimo(nombreUsuario);
};

// procesarEntrada(consoleHola);

// Ejemplo de cuando lo vamos a usar
const names = ["Diego", "Seba", "Nico", "Raul"];

names.forEach((nombre) => console.log(nombre));
