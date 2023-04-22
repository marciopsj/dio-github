// Async / Await

console.log("\nAsync / Await");
const myCoolFunction = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const jsonUserData = await response.json()
    return jsonUserData
}

const anotherFunc = async () => {
    const data = await myCoolFunction()
    console.log(data)
}

anotherFunc()