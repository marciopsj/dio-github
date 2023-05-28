/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Car {
    constructor(model, color, fuelPerKmCost) {
        this.model = model;
        this.color = color;
        this.fuelPerKmCost = fuelPerKmCost;
    }

    routeExpense(distanceKm, fuelPrice) {
        console.log("O valor gasto para realizar o percurso é R$:" + ((distanceKm/this.fuelPerKmCost) * fuelPrice).toFixed(2));

    }
}

let palio = new Car('fiat', 'Cinza', 10);
console.log(palio);

palio.routeExpense(84, 6);
