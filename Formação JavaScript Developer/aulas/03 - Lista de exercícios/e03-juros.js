/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */

const productPrice = 178.40;
let paymentType = 2;
let amountToPay;
let discount;
let fees;

console.log('valor do produto: R$' + productPrice.toFixed(2));
console.log('Forma de Pagamento');

if (paymentType === 1) {
    discount = productPrice * 0.1;
    console.log('À vista Débito');
    console.log('Desconto 10%: -R$' + discount.toFixed(2));
    amountToPay = productPrice - discount;
    console.log('Total a pagar: R$' + amountToPay.toFixed(2));
} else if (paymentType === 2) {
    discount = productPrice * 0.15;
    console.log('À vista no Dinheiro ou PIX');
    console.log('Desconto 15%: -R$' + discount.toFixed(2));
    amountToPay = productPrice - discount;
    console.log('Total a pagar: R$' + amountToPay.toFixed(2));
} else if (paymentType === 3) {    
    amountToPay = productPrice/2;
    console.log('2x sem Juros de R$' + amountToPay.toFixed(2));
} else if (paymentType === 4) {   
    fees = productPrice * 0.1;
    console.log('Acima de duas vezes');
    console.log('Juros de 10%: +R$' + fees.toFixed(2));
    amountToPay = productPrice + fees;
    console.log('Total a pagar: R$' + amountToPay.toFixed(2));
}