
function calcDiscount(productPrice, tx) {
    return productPrice - (productPrice * tx);
}

function calcFees(productPrice, tx) {
    return productPrice + (productPrice * tx);
}


function pay(paymentType, productPrice) {
    if (paymentType === 1) {        
        return 'À vista Débito' + '\nDesconto 10%' + '\nTotal a pagar: R$' + calcDiscount(productPrice, 0.1).toFixed(2);
        
    } else if (paymentType === 2) {
        return 'À vista no Dinheiro ou PIX' + '\nDesconto 15%' + '\nTotal a pagar: R$' + calcDiscount(productPrice, 0.15).toFixed(2);
        
    } else if (paymentType === 3) {    
        return '2x sem Juros' + '\nTotal a pagar: 2x R$' + (productPrice / 2).toFixed(2);

    } else if (paymentType === 4) {   
        return 'Acima de duas vezes' + '\nJuros de 10%' + '\nTotal a pagar: R$' + calcFees(productPrice, 0.1).toFixed(2);        
    }

}

(function () {
const productPrice = 178.40;
let paymentType = 4;

console.log('valor do produto: R$' + productPrice.toFixed(2));
console.log('Forma de Pagamento: ' + pay(paymentType, productPrice));
})();
