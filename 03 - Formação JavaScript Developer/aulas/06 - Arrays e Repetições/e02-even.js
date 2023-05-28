
/* 
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/


const num = [2,3,5,6,7,12,17,15,13,19,18,21,30];
for (let i = 0; i < num.length; i++) {   
   if (num[i] % 2 == 0) {
      console.log(`Número Par encontrado ${num[i]}`);
   }
}