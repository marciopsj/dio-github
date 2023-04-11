
class Person {
    constructor(name){
        this.name = name
    }
}

const personList = [new Person('Marcio'), new Person('Bartolinho'), new Person('Beluguinha')]

console.log(personList)

const nameList = personList.map((value, i) => `${i+1} - ${value.name}`)

console.log(nameList)