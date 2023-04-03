console.log("hi");



const url = 'https://pokeapi.co/api/v2/pokemon/1/'

const getUrl = () => {
    return fetch(url)
        .then((response) => response.json())
}

getUrl()

