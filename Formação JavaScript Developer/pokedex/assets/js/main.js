
const print = (text) => {
    return console.log(text)
}

const pokemonTypesList = (pokemonTypes) => {
    return pokemonTypes.map((typeSlot) => `<li class="item__type">${typeSlot.type.name}</li>`)
}

const pokemonToItemList = (pokemon) => {
    return `
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
    `
}

const contentItems = document.querySelector('.content__items')

pokeApi.getPokemons()
    .then((pokemons = []) => {

        contentItems.innerHTML += pokemons.map(pokemonToItemList).join("")

    })
    .catch((error) => print(error))


