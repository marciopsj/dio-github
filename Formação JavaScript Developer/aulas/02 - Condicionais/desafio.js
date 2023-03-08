/* Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis, sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina;
3 - Tipo de combustível que está no seu carro;
4 - Gasto médio por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem. */


let gasPrice = 5.70;
let ethanolPrice = 4.33;
let fuelType = 'Gas'
const averegeFuelCostPerKm = 10;
let travelDistance = 250;
let fuelCost;

if (fuelType === 'Gas' || fuelType === 'Ethanol') {
    let isFuelTypeGas = fuelType === 'gas';
    fuelCost = (isFuelTypeGas) ? (travelDistance / averegeFuelCostPerKm) * gasPrice : (travelDistance / averegeFuelCostPerKm) * ethanolPrice;
    console.log('Valor gasto de ' + fuelType + ' é: R$' + fuelCost.toFixed(2));
    console.log(fuelType + ' cost is: $' + fuelCost.toFixed(2));
} else {
    console.log('Combustível desconhecido, defina Gas ou Ethanol');
    console.log('Unknown fuel, set Gas or Ethanol');
}

