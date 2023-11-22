// fetch(' https://pokeapi.co/api/v2/pokemon/ditto')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.abilities.map(item => {
//            return item.ability
//         }))
//     })

const container = document.querySelector('.container')


// const {log} = console
// log('tuki')

const getData = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();

  renderPokemon(data.results)
};

const templateCardPokemon = ({name}) => {
    return `
    <div>
        <h1>${name}</h1>
    </div>
    `
}

const renderPokemon = (pokemones) => {
    console.log(pokemones)
    container.innerHTML = pokemones.map(templateCardPokemon).join('')
}

// getData();


const requestCoins = async () => {
    const baseURL = 'https://api.coinlore.net/api/tickers/?start=100&limit=100'

    const res = await fetch(baseURL)
    const json = await res.json()
    const data = json.data
    // console.log(data)

    const results = divideArray(data, 20)

    const obj = {
        results: results,
        total: results.length,
        current: 0,
        next: 1,
        prev: null
    }

    // console.log(obj)
    return obj;
}


const divideArray = (data, size = 2) => {
    let dataChunk = []

    for(let i = 0; i < data.length; i += size){
        dataChunk.push(data.slice(i, i + size))
    }

    // console.log(dataChunk)
    return dataChunk
}

// console.log(requestCoins())
requestCoins()

