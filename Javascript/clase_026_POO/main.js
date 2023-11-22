// const objeto = [{
//     id: 1,
//     nombre: 'Juan',
//     apellido: 'Perez',
//     edad: 25,
//     email: 'juancito@gmail.com',
//     presentarse: function(){
//         return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
//     }
// },
// {
//     id: 2,
//     nombre: 'Ana',
//     apellido: 'Fernandez',
//     edad: 20,
// },
// {
//     id: 3,
//     nombre: 'Pedro',
//     apellido: 'Marmol',
//     edad: 30,
// }

// ]

class Pelicula {
    // Por cada clase que se crea, se crea un UNICO constructor
    constructor(id, name){
        this.id = id;
        this.nombre = name;
    }

    // Metodos
    reproducir(){
        return `Reproduciendo... ${this.nombre}`
    }
}

// const pelicula = new Pelicula(1, 'El Padrino')
// console.log(pelicula)
// console.log(pelicula.reproducir())
// const pelicula2 = new Pelicula(2, 'El Padrino II')
// console.log(pelicula2.reproducir())
// const pelicula3 = new Pelicula(3, 'El Padrino III')
// console.log(pelicula3.reproducir())
// const pelicula4 = new Pelicula(4, 'El Padrino IV')
// console.log(pelicula4.reproducir())

class Serie extends Pelicula {
    constructor(id, name, seasons, chapter){
        super(id, name)
        this.seasons = seasons;
        this.chapter = chapter;
    }

    reproducirSeason(){
        return `Reproduciendo temporada... ${this.seasons}`
    }

    reproducirChapter(){
        return `Reproduciendo capitulo ${this.chapter} de la temporada ${this.seasons}`
    }
}


const serie = new Serie(1, 'Friends', 10, 10)
// console.log(serie.reproducir())
// console.log(serie.reproducirSeason())
// console.log(serie.reproducirChapter())


// const string = new String('Hola Mundo')
// console.log(string)

// Prototypes
class Persona {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
        this.displayName = function() {
            return `${this.name} ${this.lastName}`
        }
    }
}

const persona = new Persona('Lionel', 'Messi')
// console.log(persona.name)
// console.log(persona.lastName)
// console.log(persona.displayName())
// persona.name = 'Leo'
// console.log(persona.name)
// console.log(persona.displayName())

// persona.saludar = function(){
//     return `Hola, soy ${this.name} ${this.lastName}`
// }

// console.log(persona.saludar())
// console.log(persona)

const persona2 = new Persona('Cristiano', 'Ronaldo')
// console.log(persona2.name)
// console.log(persona2.displayName())

// Accedemos al metodo saludar y nos va a dar un error pq no existe
// console.log(persona2.saludar())

// Para solucionar esto, se utilizan los prototypes
Persona.prototype.saludar = function(){
    return `Hola, soy ${this.name} ${this.lastName}`
}

// console.log(persona.saludar())
// console.log(persona2.saludar())

// Creamos metodos

String.prototype.findLetter = function(letter){
    return this.indexOf(letter)
}

String.prototype.reverseWord = function(){
    return this.split('').reverse().join('').toUpperCase()
}

const name = 'Lionel'
// console.log(name.findLetter('o'))
// console.log(name.indexOf('o'))
// console.log(name.reverseWord())
// console.log('messi'.reverseWord())

// Metodo para arrays
// Array.prototype.getLastItem = function(){
//     return this[this.length - 1]
// }
// const array = [1, 2, 3, 4, 5]
// console.log(array.getLastItem())
// console.log(array[array.length - 1])

// Bind // Call // Apply 
// function.bind(this)

const objPersona = {
    name: 'Lionel',
    lastName: 'Messi',
}

const saludar = function(){
    return `Hola, soy ${this.name} ${this.lastName}`
}

// console.log(saludar()) // Undefined porque no sabe a que this se refiere

// Llamamos al bind y le pasamos el objeto al que queremos que haga referencia
const saludarPersona = saludar.bind(objPersona)

// console.log(saludarPersona())

// Call
// function.call(this, param1, param2, param3)
const saludarCall = function(saludo){
    return `${saludo}, soy ${this.name} ${this.lastName}`
}

// console.log(saludarCall('Hola'))

// console.log(saludarCall.call(objPersona, 'Hola'))

// Apply
// function.apply(this, [param1, param2, param3])

const despedirse = function(despedida){
    return `${despedida}, soy ${this.name} ${this.lastName}`
}

// console.log(despedirse.apply(objPersona,['Chau']))

// Bind call y apply lo que hacen es modificar el this de la funcion

// Diferencia entre call y apply
// Call recibe los parametros separados por coma
// Apply recibe los parametros en un array