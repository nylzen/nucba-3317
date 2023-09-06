// length
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length); // 5

// .indexOf()
// const nombres = ['Mati','Victorio','Jose']
// console.log(nombres.indexOf('Mati'))

// .toString()
// const nombres = ['Mati','Victorio','Jose',1,2,3,4,5]
// console.log(nombres.toString())

// .concat()
const listaDeReproduccion1 = ['cancion1','cancion2']
const listaDeReproduccion2 = ['cancion3','cancion4']

// console.log(listaDeReproduccion1.concat(listaDeReproduccion2))
const playlist = [...listaDeReproduccion1,...listaDeReproduccion2]
// console.log(playlist)

// .push()
// Agrega un elemento al final del array y Nos devuelve el nuevo length del array
// const animales = ['gato','perro','caballo']
// const masAnimales =['pulga','otr cosa',7]
// console.log(animales.push('loro'))
// console.log(animales)
// console.log(animales.push('pato','messi'))
// console.log(animales)
// console.log(animales.push(masAnimales))
// console.log(animales)

// .unshift()
// Agregamos un elemento al principio del array y devuelve el nuevo length del array
// const animales = ['gato','perro','caballo']
// console.log(animales.unshift('holi'))
// console.log(animales)


// .pop()
// Elimina el ultimo valor de un array y lo devuelve
// const animales = ['gato','perro','caballo']
// console.log(animales.pop())
// console.log(animales)

// .shift()
// Elimina el primer valor del array y lo devuelve
// const animales = ['gato','perro','caballo']
// console.log(animales.shift())
// console.log(animales)


// Ejemplo random
// const history = ['pagina1','pag2']
// Agregamos una nueva pagina al historial
// history.push('pag3')
// console.log(history)

// Navegar hacia atras
// const paginaActual = history.pop()
// console.log('Historial:' ,history)
// console.log('Pagina actual', paginaActual)

// .join()
// const nombres = ['Mati','Victorio','Jose', 'Diego']
// console.log(nombres.join(' '))

// .reverse()
// console.log(nombres.reverse())
// const string = 'dar/vuelta/un/string'
// console.log(string)
// console.log(string.split(''))
// console.log(string.split('').reverse())
// console.log(string.split('/').reverse().join(''))

// .slice()
// const nombres = ['Mati','Victorio','Jose', 'Diego']
// console.log(nombres.slice(0,2))
// console.log(nombres.slice(-3))
// console.log(nombres)

// =========================================== //

// METODOS DE CALLBACK

// .forEach()
// const nombres = ['Mati','Victorio','Jose', 'Diego']

// nombres.forEach((nombre) => {
//     console.log(`Hola ${nombre}!`)
// })

// .map()
// const numeros = [1,2,3,4,5,6,7,8,9,10,'holi']

// console.log(numeros)
// const duplicados = numeros.map(numero => {
//     return numero * 2
// })
// console.log(duplicados)
// console.log(numeros)

// .filter()
// const numeros = [1,2,3,4,5,6,7,8,9,10,'holi']

// const pares = numeros.filter((numero) => {
//     return numero % 2 === 0 
// })

// console.log(pares)
// console.log(numeros)

// .find()
// const numeros = [1,2,3,4,5,6,7,8,9,10,'holi']

// const primerPar = numeros.find(numero => numero % 2 === 0)
// console.log(primerPar)

// const mayor5menor10 = numeros.find(numero => {
//     return numero > 5 && numero < 10
// })

// console.log(mayor5menor10)

// .every()
// const numeros = [1,2,3,4,5,6,7,8,9,10]
// console.log(numeros.every(numero => numero > 0))
// console.log(numeros.every(numero => numero > 5))

// .some()
// const numeros = [1,2,3,4,5,6,7,8,9,10]
// console.log(numeros.some(numero => numero > 1))
// console.log(numeros.some(numero => numero === 7))

const productos = [
    {
      id: 1,
      nombre: 'Camiseta de algodón',
      precio: 19.99,
      categoria: 'Ropa',
      stock: 50,
    },
    {
      id: 2,
      nombre: 'Zapatillas deportivas',
      precio: 89.99,
      ingredientes: ['1',2,34,4,5],
      categoria: 'Calzado',
      stock: 25,
    },
    {
      id: 3,
      nombre: 'Teléfono inteligente',
      precio: 599.99,
      categoria: 'Electrónica',
      stock: 10,
    },
    {
      id: 4,
      nombre: 'Portátil',
      precio: 899.99,
      categoria: 'Electrónica',
      stock: 15,
    },
    {
      id: 5,
      nombre: 'Libro de ciencia ficción',
      precio: 12.99,
      categoria: 'Libros',
      stock: 30,
    },
    {
      id: 6,
      nombre: 'Cafetera automática',
      precio: 49.99,
      categoria: 'Electrodomésticos',
      stock: 20,
    },
    {
      id: 7,
      nombre: 'Juego de mesa',
      precio: 24.99,
      categoria: 'Juegos',
      stock: 40,
    },
    {
      id: 8,
      nombre: 'Gafas de sol',
      precio: 29.99,
      categoria: 'Accesorios',
      stock: 35,
    },
    {
      id: 9,
      nombre: 'Mochila resistente al agua',
      precio: 39.99,
      categoria: 'Accesorios',
      stock: 18,
    },
    {
      id: 10,
      nombre: 'Silla de oficina ergonómica',
      precio: 149.99,
      categoria: 'Muebles',
      stock: 12,
    },
  ];

// imprimir unicamente todos los nombres de los productos
// productos.forEach(producto => {
//     console.log(`Nombre: ${producto.nombre} ${producto.precio}`)
// })

// Guardar en un nuevo array los nombres de los productos
// const nombreProductos = productos.map((producto) => {
//     return producto.nombre
// })

// console.log(nombreProductos)

// Quiero filtrar los producots > 50
const productosMayoresA50 = productos.filter(producto => {
    return producto.precio > 50
})

// console.log(productosMayoresA50)

const productosEntrePrecioYCategoria = productos.filter(producto => {
    return (producto.precio >= 20 && producto.precio <= 100) && (producto.categoria === 'Accesorios')
})

// console.log(productosEntrePrecioYCategoria)

// const numeros = [1,2,3,4,5,10,12,20,25]
// console.log(numeros.sort())
// console.log(numeros.sort((a,b) => a - b))

// const nombres = ['Mati','Victorio','Jose', 'Diego']
// console.log(nombres.sort())

//.reduce()
const numeros = [1,2,3,4,5,10,12,20,25]

const sumaTotal = numeros.reduce((total, actual) => {
    console.log({total})
    console.log({actual})
    return total + actual
},0)

// console.log(sumaTotal)

// Ejercicio reduce + obj

const productoMasCaro = productos.reduce((productoActual, productoSiguiente) => {
    // if(productoActual.precio > productoSiguiente.precio){
    //     return productoActual
    // } else {
    //     return productoSiguiente
    // }

    return productoActual.precio > productoSiguiente.precio
    ? productoActual
    : productoSiguiente


}, productos[0])

console.log(productoMasCaro)