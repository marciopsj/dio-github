
const contentItems = document.querySelector('.content__items')
const loadMorebutton = document.querySelector('#loadMore')

const maxRecord = 500
const limit = 10
let offset = 0

const print = (text) => {
    return console.log(text)
}

const loadPokemonItens = (offset, limit) => {
    pokeApi.getPokemons(offset, limit)
        .then((pokemons = []) => {
            contentItems.innerHTML += pokemons.map((pokemon) => `
                    <li class="content__item item--${pokemon.type}">
                        <div class="item__header">
                            <h3 class="item__name">${pokemon.name}</h3>
                            <span class="item__number">#${pokemon.order}</span>
                        </div>
                        <div class="item__info">
                            <ul class="item__types">
                                ${pokemon.types.map((type) => `<li class="item__type item--${type}">${type}</li>`).join("")}
                            </ul>
                            <img
                                class="item__img"
                                src="${pokemon.photo}"
                                alt="${pokemon.name}"
                            />
                        </div>
                    </li>
                `).join("")

        })
        .catch((error) => print(error))
}

loadPokemonItens(offset, limit)

loadMorebutton.addEventListener('click', () => {
    offset += limit
    debugger
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecord) {
        const newLimit = maxRecord - offset
        loadPokemonItens(offset, newLimit)

        loadMorebutton.parentElement.removeChild(loadMorebutton)
    } else {
        loadPokemonItens(offset, limit)
    }

})