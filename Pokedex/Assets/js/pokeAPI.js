const pokeApi = {}

function pokeapiDetale (pokeDetales){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetales.id
    pokemon.name = pokeDetales.name
    const types = pokeDetales.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types 
    pokemon.types = types
    pokemon.type = type
    pokemon.photo = pokeDetales.sprites.other.home.front_default

    return pokemon
}

pokeApi.getPokemonDetales = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(pokeapiDetale)

}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetales))
        .then((detales) => Promise.all(detales))
        .then((pokemonsDetales) => pokemonsDetales)
        
}
