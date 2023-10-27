// Settimeout
const saludar = () => console.log('Hola Messi')

// setTimeout(saludar, 2000)

// SetInterval
const contar = () => console.log("Contando")
// let intervalId = setInterval(contar, 1000)
// clearInterval(intervalId)


// Asincronia Basicamente es el orden en el que se ejecutan las cosas
// console.log('Hola')

// setTimeout(() => console.log('?'), 2000)

// console.log('Mundo')

// Promesas
// promesa
//     .then(// si esta todo ok)
    //    .then()
//     .catch(//si ta todo mal)

// const fn = async () => {
//     try {
        // await algo 
//     } catch (error) {
        
//     }
// }


// Ejemplo chiquito
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('Todo bien')
//         reject('Todo mal')
//     }, 2000)
// })

// console.log(promesa) // pending
// promesa
//     .then(res => console.log(res))
//     .catch(err => console.error(err))

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let numeroAleatorio = Math.floor(Math.random() * 10)
//         if(numeroAleatorio > 3){
//             resolve(`El numero ${numeroAleatorio} esta bien`)
//             return
//         } else {
//             reject(`El numero ${numeroAleatorio} esta mal`)
//             return
//         }
//     }, 2000)
// })

// promesa
//     .then(res => console.log(res))
//     .catch(err => console.error(err))


// Como funciona el math floor y random
// console.log(Math.floor(Math.random() * 10))

// Ejemplo promesa

const peliculas = [
    {
        id: 1,
        nombre: 'El señor de los anillos'
    },
    {
        id: 2,
        nombre: 'Harry Potter'
    },
    {
        id: 3,
        nombre: 'El Hobbit'
    },
    {
        id: 4,
        nombre: 'Ted'
    },
    {
        id: 5,
        nombre: 'Oppenheimer'
    }
]

// const peliculas = []

// const getPelicula = (id) => {
//   return new Promise ((resolve, reject) => {
//       if(peliculas.length === 0){
//           reject(new Error('No hay peliculas'))
//           return
//       }
    
//     const pelicula = peliculas.find(pelicula => pelicula.id === id)

//     setTimeout(() => {
//         resolve(pelicula)
//     }, 2000)
//   })
// }

// console.log(getPelicula()) // pending no le estamos diciendo que hacer

// getPelicula(2)
//     .then(res => console.log(res))
//     .catch(err => console.error(err))


// otro ejemplo
const cargarImagen = (url) => {
    return new Promise((res, rej) => {
        const imagen = new Image() // document.createElement('img') 
        imagen.src = url

        imagen.onload = () => res(imagen)

        imagen.onerror = () => rej(new Error(`Error al cargar la imagen ${url}`))
    })
}

// cargarImagen('https://picsum.photos/500/300')
//     .then(imagen => document.body.appendChild(imagen))
//     .catch(err => console.error(err))

// Ejemplo con setIterval
const reloj = () => {
    const pTag = document.getElementById('reloj')
    const fecha = new Date()
    pTag.textContent = fecha.toLocaleTimeString()
}

setInterval(reloj, 1000)

fetch('https://reqrs.in/api/users?page=2')
    .then(res => res.json())
    .then(res => {
        const usuarios = res.data

        console.log(usuarios.find(user => user.id === 7))
        
    })
    .catch(err => console.error(err))