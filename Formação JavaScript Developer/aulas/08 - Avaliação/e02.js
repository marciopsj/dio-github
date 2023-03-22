// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcao-auxiliar-e02');

let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < 6; i++) {
    const num = gets();
    if (num % 2 === 0){
        if (num > maiorNumeroPar) {
            maiorNumeroPar = num;
        }
    } else {
        if (menorNumeroImpar === 0) {
            menorNumeroImpar = num;
        } else if (num < menorNumeroImpar){
            menorNumeroImpar = num;
        }
    }
}

print(`O maior número Par é: ${maiorNumeroPar}`);
print(`O menor número Impar é: ${menorNumeroImpar}`);