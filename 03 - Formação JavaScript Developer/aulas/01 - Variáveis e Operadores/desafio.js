/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis, sendo elas:

1 - Preço do combustivel;
2 - Gasto médio por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */

let fuelPrice = 5.70;
const averegeCostPerKm = 10;
let travelDistance = 250;

let fuelCost = (travelDistance / averegeCostPerKm) * fuelPrice;

console.log('Valor gasto de combustível é: R$' + fuelCost.toFixed(2));
console.log('Fuel cost is: $' + fuelCost.toFixed(2));