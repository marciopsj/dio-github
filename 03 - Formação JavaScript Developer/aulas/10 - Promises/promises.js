const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tasks.csv')

const fileReadingPromises = fs.promises.readFile(filePath)

fileReadingPromises
    .then((file) => file.toString('utf-8'))
    .then((fileText) => fileText.split('\n').slice(1))
    .then((linesWithoutHeaders) => linesWithoutHeaders.map((line) => {
        const [name, done] = line.split(';')
        return {
            name,
            done: done.trim() === 'true'
        }
    }))
    .then((taskList) => console.log(taskList))
    .catch((error) => console.error('Errrrrrrr!', error))

