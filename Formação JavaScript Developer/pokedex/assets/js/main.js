
const print = (text) => {
    return console.log(text)
}

const offset = 0;
const limit = 5;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

fetch(url)
.then((response) => response.json())
.then((jsonBody) => print(jsonBody))
.catch((error) => print(error))
