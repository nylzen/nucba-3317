// Metodos de string

// .length()
// Devuelve el largo del string
// const miString = 'Hola Messi'
// console.log(miString)
// console.log(miString.length)

// .toUpperCase() / .toLowerCase()
// Pasar todo a mayusculas
// console.log(miString.toUpperCase())

// Pasar todo a minusculas
// console.log(miString.toLowerCase())


// .replace()
// Devuelve un nuevo string con el string reemplazado, cambia unicamente la primer ocurrencia
const nuevoString = 'Hola soy un string'
// const resultado = nuevoString.replace('hola','chau')
// console.log(resultado) // NO FUNCA JS CASE SENSITIVE

// * Solucion
const resultado = nuevoString.toLowerCase().replace('hola','chau')
// console.log(resultado)

// .replaceAll()
// Reemplazar todas las coincidencias
const texto = 'Messi es el mejor futbolista del mundo porque Messi sabe cuanto pesa la del mundo Messi Messi Messi Messi'

const textoReemplazado = texto.replaceAll('Messi','Maradona')
// console.log(textoReemplazado)

// .indexOf()
// Devolvia la posicion de la primera ocurrencia de un valor que le pasemos, si no encuentra devuelve -1
const textIndex = 'Hola Mundo'
// console.log(textIndex.indexOf('Mundo'))

// .trim()
// Se encarga de borrar los espacios al principio y al final
const stringTrim = '     Holis!       '
// console.log(stringTrim.trim())

// .split()
// Nos convierte el string en un array a partir de un parametro que le pasemos
const stringSplit = 'Hola/Soy/Un/string'
// console.log(stringSplit.split('').reverse().join(''))

// type of
const color = 'Azul'
const colores = ['Azul','Amarillo','Azul']
const number = 7;

// console.log(typeof color == number)

// .repeat()
// Repetimos x cantidad de veces
const nombreRepeat = 'Leo'
// console.log(nombreRepeat.repeat(7))

// .charAt()
//Devolvia el caracter que se encuentra en esa posicion
// console.log(nombreRepeat.charAt(0))

// .concat()
// Concatenamos cosas
const stringConcat = 'Hola'
// console.log(stringConcat.concat([1,2,3]))
// console.log(stringConcat.concat(' ','Mundo'))

// .startsWith()
// Verifica si el string arranca con lo que le pasemos, devuelve un booleano
const textoStart = 'Veamos la consola'
// console.log(textoStart.startsWith('Veamos'))
// console.log(textoStart.startsWith('consola'))
// console.log(textoStart.startsWith('veamos'))
// console.log(textoStart.startsWith('Ve'))
// console.log(textoStart.toLowerCase().startsWith('veamos'))

// .endsWith()
// Verifica si el string termina con lo que le pasemos, devuelve booleano

const textoEnd = 'Veamos la consola'
// console.log(textoEnd.toLowerCase().endsWith('consola'))
// console.log(textoEnd.toLowerCase().endsWith('la'))
// console.log(textoEnd.toLowerCase().endsWith('sola'))
// console.log(textoEnd.toLowerCase().endsWith('con'))

// .includes()
// Devuelve booleano si encuentra lo que le pasemos
const textoIncludes = 'Hola soy messi'
// console.log(textoIncludes.includes('messi'))
// console.log(textoIncludes.toLowerCase().includes('v'))

const arrayIncludes = ['azul','amarillo','blue']
// console.log(arrayIncludes.includes('rojo'))
// console.log(arrayIncludes.includes('azul'))

/*
 1.Crear un funcion que reciba 2 parametros
 2. Un parametro va a ser un string
 3. El segundo parametro va a ser un string a buscar dentro del primer string (primer parametro)
 4. El string se tiene que encontrar independientemente si esta en mayusculas o minusculas.
 5. Si lo encuentra, que imprima lo encontre
 6. Si no lo encuentra que imprima no lo encontre
*/

const checkString = (string, stringABuscar) => {

    const stringMinus = string.toLowerCase() //'hola soy messi'
    const stringABuscarMinus = stringABuscar.toLowerCase()//'messi'

    const estaEnElString = stringMinus.includes(stringABuscarMinus)
    
    if(estaEnElString){
       console.log(`Se encontro '${stringABuscar}' en el string: '${string}'`) 
    } else {
        console.log(`No se encontro '${stringABuscar}' en el string: '${string}' proba con otra palabra`)
    }


}

// console.log(checkString('Hola soy Messi','messi'))

// .slice()
// Extraemos una porcion del string y nos devuelve un nuevo string

const textoSlice = 'Veamos la consola'
// console.log(textoSlice.length)
// console.log(textoSlice.slice(0,7))
// console.log(textoSlice.slice(7,9))
// console.log(textoSlice.slice(10,17))

// Extraer el nombre de usuario de un correo electronico
// usuario@email.com
// usuario
// const email = 'leomessi@gmail.com'
// const nombreSpliteado = email.split('@')
// console.log(nombreSpliteado)
// const nombreUsuario = nombreSpliteado[0]
// console.log(`El nombre de usuario es: ${nombreUsuario}`)

// Contar cuantas veces aparece una letra en un string
const contarLetra = (cadena, letra) => {

    // Pasamos los parametros a minuscula porque CASESENSITIVE
    const cadenaMinus = cadena.toLowerCase();
    const letraMinus = letra.toLowerCase();


    // Creamos una contador en donde vamos a incrementar en uno cada vez que la letrabuscada se encontremos una coincidencia
    let contador = 0;

    for(let i = 0; i < cadenaMinus.length; i++){

        // cadenaMinus[i] === 'h' evalua si es igual a la a
        // cadenaMinus[i] === 'o' evalua si es igual a la a
        // cadenaMinus[i] === 'l' evalua si es igual a la a
        // cadenaMinus[i] === 'a' evalua si es igual a la a
        // si es igual incrementa el contador 
        if(cadenaMinus[i] === letraMinus){
            // contador = contador + 1
            contador++
        }
    }

    return contador;

}


const cadena = 'Hola soy unA cadena de texto'
const letraABuscar = 'A'
const cantidad = contarLetra(cadena, letraABuscar)


console.log(`La letra ${letraABuscar} aparece ${cantidad} de veces`)