// Closures (Clausuras)

const generarFuncion = () => {
  const nombre = "Nelson";

  // Vamos a crear un closure
  const mostrarNombre = () => {
    return console.log(nombre);
  };

  return mostrarNombre;
};

// console.log(generarFuncion());
// Guardamos en una variable la ejecucion de la funcion que devuelve una funcion
const nuevaFuncion = generarFuncion();
// nuevaFuncion();

// Como se ejecuta sin guardar en una variable
// generarFuncion()();

function crearContador() {
  let contador = 0;
  return function incrementar() {
    return contador++;
  };
}

const counter = crearContador();
// console.log(counter());
// console.log(counter());

// Que es un closure? es una funcion que se va acordar de las variables externas y va a poder acceder a ellas.

// Objetos

const jugadores = ["Messi", "Dibu"];
// console.log(jugadores);

const persona = {
  //   propiedad: "valor",
  //   key: "value",
  nombre: "Lionel",
  edad: 36,
  equipos: ["Barcelona", "PSG", "Inter de Miami"],
  premios: 7,
  trofeos: {
    seleccion: "Mundial",
    liga: "La Liga",
  },
  goles: 824,
};

// Acceder a props
// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.trofeos.seleccion);
// console.log(persona.equipos[2]);

// Array de objs
// const info = [
//   {
//     nombre: "Nelson",
//   },
//   {
//     nombre: "Pepito",
//   },
// ];

persona.pais = "Argentina";
// console.log(persona);
// console.log(persona.pais);

// Ejercicio ver goles de Messi
// console.log(`${persona.nombre} tiene ${persona.goles} goles`);
// `Escribir texto ${MANDAR CODIGO DE JS}  y seguir escribiendo`
// 'Escribir texto ' + VARIABLEJS + ' otro texto'

const persona2 = {
  //   propiedad: "valor",
  //   key: "value",
  nombre: "Lionel",
  edad: 36,
  equipos: ["Barcelona", "PSG", "Inter de Miami"],
  premios: 7,
  trofeos: {
    seleccion: "Mundial",
    liga: "La Liga",
  },
  goles: 824,
  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre}`);
    console.log(this);
  },
  //   saludarConFlecha: () => {
  //     console.log(this);
  //   },
};

// function suma() {
//   console.log(this);
// }

// persona2.saludar();

const entries = Object.entries(persona2);
// console.log(entries);

const values = Object.values(persona2);
// console.log(values);

const keys = Object.keys(persona2);
// console.log(keys);

const numeros = {
  a: 10,
  b: 20,
  c: 30,
};

const suma = Object.values(numeros).reduce((acc, val) => acc + val, 0);
// console.log(suma);

// Spread Operator

const nums = [1, 2, 3];
const otroArrayDeNums = ["asd", 1, 2, 3, 4, 5, 6, 7];
const numbers = [...nums, ...otroArrayDeNums];
// console.log(numbers);
// console.log(otroArrayDeNums);
// console.log(nums);

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 31 };

// console.log(obj1, obj2);

const obj3 = { ...obj1, ...obj2, foo: "Messi" };
// console.log(obj3);

// Rest operator
const restOperator = (...rest) => {
  console.log(rest);
  //   console.log(`Valores fijos (parametros): ${a}, ${b}`);
  console.log(`Valores del rest puede ser de 0 a n ${rest}`);
};

// restOperator(1, 23, 34, 43, 5, 56, 67, 2, 23, 3, 34, "Messi");

// Destructuring

const array = [1, 2, 3, 4, 5, 6, 7];
const [a, b, d, ...rest] = array;

// console.log(a, b, d);

const persona3 = { ...persona2 };

// console.log(persona3.nombre);
// console.log(persona3.edad);

// console.log(persona3);

console.log(
  `Hola estas en el objeto con el nombre: ${persona3.nombre} y tiene ${persona3.edad} de edad`
);

const { nombre, edad, premios } = persona3;

console.log(
  `Hola estas en el objeto con el nombre: ${nombre} y tiene ${edad} de edad`
);
