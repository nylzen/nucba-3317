import { data } from "./data.js"

// Callstack
const hola = (name) => {
    console.log(name)
}

const nucba = () => {
    console.log('Nucba')
}

const init = () => {
    hola('Tuki')
    nucba()
}

// init()

// Event Loop
// console.log('Buenas')

// setTimeout(() => {
//     console.log('Tuki')
// }, 5000)

// console.log('Tardes')

// const miFn = () => {
//     const gatitos = 'la data' 

//     console.log(gatitos)
// }

// Memory Heap
const obj1 = {valor: 1}
const obj2 = obj1

// Mostramos que valen
// console.log(obj1, obj2)

// Modificamos obj1
obj1.valor = 2

// console.log(obj1.valor)
// console.log(obj2.valor)

// Comparamos
// console.log(obj1 === obj2)

// console.log(obj1, obj2)

const obj3 = {...obj1}
// console.log(obj1)
// console.log(obj2)
// console.log(obj3)

obj3.valor = 3
// console.log(obj3)
// console.log(obj1, obj3)

// console.log(obj1 === obj3)

// Ejemplo DOM Y asincronia
const mensaje = document.getElementById('mensaje')
const img = document.getElementById('img')

const imgUrl = 'https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif'

setTimeout(() => {
    mensaje.innerText  = "Cargando"
}, 500)

setTimeout(() => {
    img.src = imgUrl
    mensaje.innerText  = "Listo!"
}, 2000)

console.log('hola hola hola')

data()
