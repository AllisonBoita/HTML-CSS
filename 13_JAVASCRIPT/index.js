console.log('Olá mundo')

/* Tipo String */

console.log(typeof "Olá Mundo")
console.log(typeof 'Olá Mundo')
console.log(typeof `Olá Mundo`)

/* Interpolação / Template Strings */

let numero = 250
console.log(`Meu valor inicial é ${numero}`)

/* Boolean */

console.log(typeof true)
console.log(5 < 20)

/* Comparações */

console.log(1 > 0)
console.log(1 >= 1)
console.log(3 != 3)
console.log(3 == "3") // Compara valores. 
console.log(3 === "3") // Compara o tipo e o valor

/* Valor Idêntico */

console.log(3 !== "3") // Compara a diferença entre tipo e valor
console.log(3 === "3") // Compara o tipo e o valor

/* Operadores Lógicos */

console.log(3 > 2 && 1 < 5) // As duas precisam ser true.
console.log(3 >= 3 && 7 > 8) // Falso neste caso.
console.log(3 > 2 || 1 !== 1) // Ou uma ou outra

console.log(!6 < 2) // Inversão com NOT