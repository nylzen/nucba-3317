// Opcion 1 - Importar TODO el modulo
import * as funciones from './funciones.js'

// console.log(funciones)
funciones.saludar('Mundo')
funciones.despedir('Mundo')
funciones.saludar(funciones.nombre)

// Opcion 2 - Importar una funcion especifica y renombrarla
import {saludar as saludo, despedir as despedida, nombre as matias} from './funciones.js'
import { jugador as messi} from './messi.js'

saludo('Mundo 2')
despedida('Mundo 2')
saludo(matias)
console.log(messi)

// Opcion 3 - Importar una funcion especifica (MAS USADA)
import { saludar, despedir, nombre } from './funciones.js'
saludar('Mundo 3')
despedir('Mundo 3')
saludar(nombre)