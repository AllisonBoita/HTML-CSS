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

// /* Prompt */

// const age = prompt("Digite a sua idade: ")
// console.log(`você tem ${age} anos`)

// /* Função de Alerta */

// alert("Olá planeta bola!")

/* Objeto Math */

let numberList = [6.3]

console.log(Math.max(numberList))
console.log(Math.floor(numberList))
console.log(Math.ceil(numberList))

/* Console */

console.log("Olá mundo")
console.error("Não está funcionando, bebê")
console.warn("Cuidado com isso")

/* Estruturas de Controle */

let validaNumero = 6

if (validaNumero > 6){
    console.log(`o número ${validaNumero} é maior que 6`)
} else if (validaNumero === 6) {
    console.log(`o número ${validaNumero} é igual que 6`)
} else {
    console.log(`o número ${validaNumero} é menor que 6`)
}

// /* While */

// let p = 0

// while (p < 5) {
//     console.log(`o P agora é: ${p}`)
//     p++;
// }

// /* Do While */

// let o = 10 

// do {
//     console.log(`valor de o é ${o}`)
//     o--
// } while (o > 1)


/* For */

let i

for (i = 0; i < 10; i++) {
    console.log("repetindo algo")
}

let r = 10

for (r; r > 0; r--){
    console.log(`o r está diminuindo para ${r}`)
}

/* Break */

let bre = 0

for (bre; bre < 15; bre++){
    console.log(`seu b é ${bre}`)

    if (bre === 5){
        console.log("seu b é 5")
        break
    }
}