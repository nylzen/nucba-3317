const fetchPokemons = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

// fetchPokemons('https://pokeapi.co/api/v2/pokemon/')