const list = [1, "banana", 4, "mandioca", "manga", 7, ""]

list.forEach((value, i, array) => {
    console.log((typeof value === 'number') ? value * i + Math.pow(value, array.length) : value === '' ? 'Não tenho nada' : `Eu tenho ${value}`);
})