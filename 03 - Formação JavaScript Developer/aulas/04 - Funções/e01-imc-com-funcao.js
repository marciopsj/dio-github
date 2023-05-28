function imcCalc(weight, hight) {
    return weight / Math.pow(hight, 2);
}

function imcTable(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

//Main 
(function () {
    let weight = 70;
    let hight = 1.71;
    const imc = imcCalc(weight, hight);
    
    console.log('IMC: ' + imc.toFixed(1))
    console.log(imcTable(imc));
})();


