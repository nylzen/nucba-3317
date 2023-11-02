// Metodos de http
/*
- GET: obtener datos
- POST: enviar datos
- DELETE: eliminar datos
- PUT: actualizar datos
- PATCH: actualizar dato

C.R.U.D => create read update delete
*/


//FETCH
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

//  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         console.log(data.name)
//     }
//     )
//     .catch(err => console.log(err))


// ASYNC/AWAIT
// const getPokemon = async () => {
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         // console.log(response)
    
//         const data = await response.json()
//         console.log(data)
// }

const getPokemon = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/211')
        // console.log(response)
    
        const data = await response.json()
        // console.log(`${name} pesa ${weight} kg ` )

        return data
        
    } catch (error) {
        throw new Error(`El error es ${error}`)
    }
}

// getPokemon()

// Traer el contenedor
const contenedor = document.querySelector('.contenedor')

// Template html
const templatePokemon = (pokemon) => {
    const {name, sprites, types} = pokemon

    contenedor.innerHTML = `
    <div class="card">
        <img src='${sprites.front_default}' class="card-img">
        <h2 class="card-title">${name}</h2>
        <div class='flexing'>
            <p class="card-button">${types[0].type.name}</p>
            <p class="card-button">${types[1]?.type.name}</p>
        </div>
    </div>
    `
}

// Renderizamos el poke
const renderPokemon = async () => {
    // Me traigo el pokemon
    const charizard = await getPokemon()
    // Llamo a la funcion para renderizar html
    templatePokemon(charizard)
}

renderPokemon()

// Otra api
async function getRickApi () {
    const response = await fetch('https://rickandmortyapi.com/api/character')

    const json = await response.json()
    const data = json.results
    console.log(data)
    console.log(data.find(item => item.id === 20))
}

getRickApi()