// console.log('Olá mundo')

// /* Tipo String */

// console.log(typeof "Olá Mundo")
// console.log(typeof 'Olá Mundo')
// console.log(typeof `Olá Mundo`)

// /* Interpolação / Template Strings */

// let numero = 250
// console.log(`Meu valor inicial é ${numero}`)

// /* Boolean */

// console.log(typeof true)
// console.log(5 < 20)

// /* Comparações */

// console.log(1 > 0)
// console.log(1 >= 1)
// console.log(3 != 3)
// console.log(3 == "3") // Compara valores. 
// console.log(3 === "3") // Compara o tipo e o valor

// /* Valor Idêntico */

// console.log(3 !== "3") // Compara a diferença entre tipo e valor
// console.log(3 === "3") // Compara o tipo e o valor

// /* Operadores Lógicos */

// console.log(3 > 2 && 1 < 5) // As duas precisam ser true.
// console.log(3 >= 3 && 7 > 8) // Falso neste caso.
// console.log(3 > 2 || 1 !== 1) // Ou uma ou outra

// console.log(!6 < 2) // Inversão com NOT

// -----------------

/* Salvando Valores */

let nome = "Allison"
console.log(nome)

nome = "Marcio"
console.log(nome)

const nome1 = "Allison"
console.log(nome1)

/* Aprofundando em variáveis */

let a = 1
let b = 2
let c = 3

let soma = a + b + c
console.log(soma)

/* Estrutura de Função */

function somar(a, b) {
    return a + b
}

console.log(somar(25,5))

/* Prompt */

const age = prompt("Digite a sua idade: ")
console.log(`você tem ${age} anos`)