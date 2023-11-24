import _ from "lodash";
import axios from 'axios'
import { nombre } from "./otro";
import { fn } from "./components/funcion";

fn()
console.log(nombre)

// Chunk de lodash
const arr = ['a','b','c','d','e']
console.log(_.chunk(arr,2))

// map
const duplicados = _.map([1,2,3,4,5], (num) => num * 2 )
console.log(duplicados)

// filter
const pares = _.filter([1,2,3,4,5], (num) => num % 2 === 0)
console.log(pares)

// shuffle
const aleatorio = _.shuffle(arr)
console.log(aleatorio)

// sample
const aleatorio2 = _.sample(arr)
console.log(aleatorio2)

axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(data => console.log(data.data))

