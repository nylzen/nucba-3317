const pokemonsContainer = document.querySelector('#caja')
const loader = document.querySelector('.pokeballs-container')

// Funcion controladora de la app
const appState = {
    currentURL: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=8",
    isFetching: false,
}

const pokemonTemplate = (pokemon) => {
    return {
        id: pokemon.id,
        name: pokemon.name.toUpperCase(),
        image: pokemon.sprites.other.home.front_default,
        height: pokemon.height / 10,
        weight: pokemon.weight / 10,
        types: pokemon.types,
        experiencie: pokemon.base_experience
    }
}

const createTypeCards = (types) => {
    return types.map(tipo => {
        return `<span class='${tipo.type.name} poke__type'>${tipo.type.name}</span>`
    }).join('')
}

// Funcion del template html
const createPokemonCard = (pokemon) => {
    const { id, name, image, height, weight, types, experiencie} = pokemonTemplate(pokemon)

    return `
    <div class='poke'>
        <img src="${image}"> 
        <h2>${name}</h2>
        <span class="exp">EXP: ${experiencie}</span>
        <div class='tipo-poke'>
            ${createTypeCards(types)}
        </div>
        <p class="id-poke">#${id}</p>
        <p class="height">Height: ${height}</p>
        <p class="weight">Weight: ${weight}</p>
    </div>
    `
}

// Funcion para renderear las cards
const renderPokemonList = (pokemonList) => {
    pokemonsContainer.innerHTML += pokemonList.map(pokemon => createPokemonCard(pokemon)).join('')
}

// Funcion para mostrar el loader por x cantidad de tiempo
const renderOnScroll = (pokemonList) => {
    loader.classList.toggle('show')
    setTimeout(() => {
        loader.classList.toggle('show')
        renderPokemonList(pokemonList)
        appState.isFetching = false;
    }, 500)
}

// Funcion se encarga de traer la data de los 8 pokemones
const getPokemonData = async () => {
    const { next, results } = await fetchPokemons(appState.currentURL)
    appState.currentURL = next;
    // console.log(appState.currentURL)
    // console.log(next, results)

    const pokemonDataUrls = results.map(pokemon => pokemon.url)
    // console.log(pokemonDataUrls)

    const pokemonsData = await Promise.all(
        pokemonDataUrls.map(async (url) => {
            const nextPokemonsData = await fetch(url);
            return await nextPokemonsData.json()
        })
    )
    console.log(pokemonsData) // UN array contoda la data de los pokemones
    return pokemonsData
}

// Funcion para obtener la data a renderizar
const loadAndRenderPokemon = async (renderPokemonFunction) => {
    const pokemonData = await getPokemonData()
    renderPokemonFunction(pokemonData)
    // window.scrollTo(0,0) // Este sirve para scrollear para algun lado
}

const isEndOfPage = () => {
    const {scrollTop, clientHeight,scrollHeight} = document.documentElement
    const bottom = scrollTop + clientHeight >= scrollHeight - 300
    return bottom;
}

// Funcion para verificar si estamos abajo de todo de la pagina
const loadNextPokemons = async () => {
    if(isEndOfPage() && !appState.isFetching){
        appState.isFetching = true
        loadAndRenderPokemon(renderOnScroll)
    }
}


const init = () => {
    window.addEventListener('DOMContentLoaded', async () => await loadAndRenderPokemon(renderPokemonList));
    window.addEventListener('scroll', async () => await loadNextPokemons())
}

init()