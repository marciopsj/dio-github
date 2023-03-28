
const print = (text) => {
    return console.log(text)
}

const pokemonToItemList = (pokemon) => {
    return `
        <li class="content__item item--grass">
            <div class="item__header">
                <h3 class="item__name">${pokemon.name}</h3>
                <span class="item__number">#001</span>
            </div>
            <div class="item__info">
                <ul class="item__types">
                    <li class="item__type">Grass</li>
                    <li class="item__type">Poison</li>
                </ul>
                <img
                    class="item__img"
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}"
                />
            </div>
        </li>
    `
}

const contentItems = document.querySelector('.content__items')

pokeApi.getPokemons()
    .then((pokemons) => {
        const contentItem = []
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i]
            contentItem.push(pokemonToItemList(pokemon))
        }
        print(contentItem) 
    })
    .catch((error) => print(error))

     
