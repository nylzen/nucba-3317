// ### Ejercicio 1: Calculadora de Descuento

// Solicita al usuario el precio de un producto y un porcentaje de descuento. Calcula y muestra el precio con el descuento aplicado.

const precio = 27500;
const descuento = 20;

const calcDescuento = precio * (descuento / 100)
const precioConDescuento = precio - calcDescuento
// console.log(calcDescuento)
// console.log(precioConDescuento)


// ### Ejercicio 2: Determinar Número Positivo o Negativo
// Solicita al usuario un número y determina si es positivo, negativo o cero.

const queNumero = (num) => {
    if(num > 0) {
        console.log('El numero es positivo')
    } else if( num === 0){
        console.log('El numero es 0  ')
    } else {
        console.log('El numero es negativo')
    }
}
// queNumero(8)


// ### Ejercicio 3: Categoría de Edad

// Solicita al usuario su edad y muestra un mensaje que indique en qué categoría de edad se encuentra: niño, adolescente, adulto, o adulto mayor.

// const edad = 14;

// if(edad >= 0 && edad <= 12){
//     console.log('Niño')
// } else if(edad >=13 && edad <= 19){
//     console.log('adolescente')
// } else if (edad >= 20 && edad <= 59){
//     console.log('Adulto')
// } else {
//     console.log('Anciano')
// }


// ### Ejercicio 4: Verificación de Contraseña
// Solicita al usuario que ingrese una contraseña. Luego, verifica si la contraseña ingresada es igual a una contraseña predefinida y muestra un mensaje de acceso permitido o denegado.

// const userPassword = prompt('Ingresa pass')
// const validPassword = 'MessiCampeonDelMundo1822'
// userPassword === validPassword ? console.log('Correcto') : console.log('Anda pa lla')

// ### Ejercicio 5: Identificar Números Pares e Impares
// Escribe un programa que recorra los números del 1 a X numero. Por cada número, verifica si es par o impar, y muestra un mensaje que indique esta clasificación.

// const numero = 25;

// for (let i = 1; i <= numero; i++ ){
//     if(i % 2 === 0){
//         console.log(`El numero ${i} es par`)
//     } else {
//         console.log(`El numero ${i} es impar`)
//     }
// }

// ## Ejercicio 6: Conversión de Edad a Días

// Escribe un programa que tome una edad en años como entrada y calcule la edad equivalente en días. Luego, muestra un mensaje que indique la edad original y su equivalente en días.

// const edad = 29;
// const edadEnDias = edad * 365
// console.log(edadEnDias)



// ### Ejercicio 7: FizzBuzz
// Escribe un programa que recorra los números del 1 a X. Por cada número, verifica las siguientes condiciones:

// - Si el número es divisible solo por 3, muestra "Fizz".
// - Si el número es divisible solo por 5, muestra "Buzz".
// - Si el número es divisible por 3 y por 5, muestra "FizzBuzz".

// for(let i = 1; i <= 20; i++){
//     if(i % 15 === 0){
//         console.log(`${i} FizzBuzz`)
//     } else if (i % 3 === 0){
//         console.log(`${i} Fizz`)
//     } else if(i % 5 === 0){
//         console.log(`${i} Buzz`)
//     }
// }

// ### Ejercicio 8: Tabla de Multiplicar Personalizada

// Escribe un programa que tome un número como entrada y genere su tabla de multiplicar del 1 al 10. Para cada multiplicación, muestra un mensaje que indique la multiplicación en formato "número x multiplicador = resultado"

// const numero = 9;

// for (let i = 1; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }

// ### Ejercicio 10: Contador Regresivo Personalizado

// Escribe un programa que tome un número como entrada y genere un contador regresivo desde ese número hasta 1. Muestra cada número del contador en una línea separada.

// const numero = 10

// for (let i = numero; i >= 1; i--){
//     console.log(i)
// }

// ### Ejercicio 9: Sistema de velocidad


// Escribe una función que verifique la entrada/parámetro proporcionado:

// - Si la entrada está por debajo del límite de velocidad de 70, imprime: 'Conduccion segura'.
// - Si la entrada está por encima del límite de velocidad de 70, cada 5 kilómetros de exceso corresponde a un punto de penalización. Imprime: 'Límite de velocidad superado por Punto de Penalización' + Punto.
// - Si el conductor acumula más de 10 puntos de penalización, es decir, supera el límite de velocidad de 120, imprime: 'Licencia suspendida'.

const verificarVelocidad = (velocidad) => {
    const limiteVelocidad = 70;
    const umbralPenalizacion = 120;
    // const puntosPenalizacion = (velocidad - limiteVelocidad) / 5
    const puntosPenalizacion = Math.floor((velocidad - limiteVelocidad) / 5)


    if(velocidad <= limiteVelocidad){
        return 'Conducción Segura'
    } else if(velocidad <= umbralPenalizacion){
        return `Limite de velocidad superado por Puntos de Penalización ${puntosPenalizacion}`
    } else {
        return 'Licencia suspendida, a tomarse el bondi'
    }

}

console.log(verificarVelocidad(79))

