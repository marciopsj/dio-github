/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Person {
    constructor(name, weight, hight) {
        this.name = name;
        this.weight = weight;
        this.hight = hight;

    }

    calcImc() {
        return this.weight / Math.pow(this.hight, 2);
    }

    sayImc() {
        console.log("Oi meu nome é " + this.name + " e o meu IMC é: " + this.calcImc().toFixed(2));
    }
}

let jose = new Person('José da Silva', 70, 1.75);

jose.sayImc();

