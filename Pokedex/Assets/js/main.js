const pokelist = document.getElementById('pokelist')
const maisButton = document.getElementById('maisButton')

const maxRecords = 151
const limit = 10
let offset = 0

function maisPokemons(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => 
            `<li class="pokemon ${pokemon.type}">
                <span class="numero">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detales">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join(' ')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                    
                </div>
            </li>`).join('')
            pokelist.innerHTML += newHtml
        })
}

maisPokemons(offset, limit)

maisButton.addEventListener('click', () => {
    offset += limit
    const NextPage = offset + limit
    if (NextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        maisPokemons(offset, limit)
        maisButton.parentElement.removeChild(maisButton)
    } else{
        maisPokemons(offset, limit)
    }
})  