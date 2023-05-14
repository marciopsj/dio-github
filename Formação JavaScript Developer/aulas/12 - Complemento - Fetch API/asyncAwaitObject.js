//2nd parameter of Fetch is a object

const jokeObject = {
    id: 'iGlOClqrrrc',
    joke: 'I dreamed about drowning in an ocean made out of orange soda last night. It took me a while to work out it was just a Fanta sea.'    
  }

const postJoke = async (jokeObj) => {
    const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jokeObj)
    })

    const jsonResponse = await response.json()

    console.log(jsonResponse)

}

const getDadJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    })

    const jokeData = await response.json()
    console.log(jokeData.joke)
}

/* getDadJoke() */

postJoke(jokeObject)