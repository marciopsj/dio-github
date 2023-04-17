//Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await


/* 

- Promises

3 states: Pending, Fulfilled, Rejected

*/

//Fulfilled, Rejected 

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes! Resolved the Promise!")
    } else {
        reject("No! Promise not fulfilled! X(")
    }
})

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("My next Promise resolved!")
    }, 3000)
})

//Using Thenables with a Promise
// when Promises came about around 2015 with ES6, we used at first the thenables to work with the values through a chaining thenables(Callbacks) before we get to Async/Await 

myNextPromise.then(value => console.log(value))

myPromise.then((value) => value)
    .then((valuePrefix) => `Message: ${valuePrefix}`)
    .then((printValue) => console.log(printValue))


const users = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((getUsersName) => getUsersName.map(user => user.name))
    .then((userName) => console.log(userName))

//pending
console.log(users)