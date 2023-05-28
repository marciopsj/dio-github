const list = [1, "banana", 4, "mandioca", false, "manga", 7, "", {idade: 12}, 12, [12], undefined]
const stringlist = []

const numberList = list.filter((value) => {
    return typeof value === 'number'
})

console.log(numberList);
