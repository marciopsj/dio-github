const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tasks.csv')

async function fetchFile() {
    try {
        const file = await fs.promises.readFile(filePath)
        const fileText = file.toString('utf-8')
        console.log(fileText)        
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Finalizou!')
    }
}

fetchFile()



