// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções.

let linha = "1.00 1.00 9.00 9.01"

console.log("Carregou", linha)

// Atribui os valores de entrada nas respectivas constantes usando destructuring.
// Referencia: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = 
  linha.splb3it(' ').map(x => parseFloat(x))

  console.log(precoAlcool)
  console.log(precoGasolina)
  console.log(rendimentoAlcool)
  console.log(rendimentoGasolina)

//TODO: Calcular o Preço/Km para cada conbustível considerando os valores de entrada.
const precoPorKmAlcool = precoAlcool/rendimentoAlcool;
const precoPorKmGasolina = precoGasolina/rendimentoGasolina;

console.log(precoPorKmAlcool)
console.log(precoPorKmGasolina)

// Usa o conceito de operador condicional (ternário) para identificar qual é o melhor preço.
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';
console.log(maisEconomico);

