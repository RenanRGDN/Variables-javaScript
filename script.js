const prompt = require ('prompt-sync')();

const userName = prompt ('Escreva seu nome:')
const lastName = prompt ('Escreva seu sobrenome:')
const weigth = prompt ('Digite o seu peso:')
const height = prompt ('Digite sua altura:')
const data = prompt ('Digite a data da sua internação')
const diabetic = prompt ('Você e Diabético')

console.log (`Seu nome é: ${userName}`)
console.log (`Seu sobrenome é: ${lastName}`)
console.log (`Seu peso é: ${weigth}`)
console.log (`Sua altura é: ${height}`)
console.log (`A data da sua internação é: ${data}`)
console.log (`Você é: ${diabetic}`)
