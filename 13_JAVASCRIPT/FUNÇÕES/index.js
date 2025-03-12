function boasVindas (nome, sobrenome){
    console.log(`Olá, ${nome} ${sobrenome}! Seja bem vindo`)
}

boasVindas('Allison', 'Boita')

/* Return */

const a = 10
const b = 20
const c = 29

function soma(n1, n2, n3) {
    return n1 + n2 + n3
}

const resultado = soma(a,b,c)
console.log(resultado)

/* Escopo das funções */

function subtracao(){
    const a = 4
    const b = 23
    const c = 12

    console.log(`os números dentro da função são ${a}, ${b} e ${c}`)
}

subtracao()
console.log(`os números dentro da função são ${a}, ${b} e ${c}`)

/* Escopo aninhado - Nested Escopo */

let m = 10

function escopoAninhado() {
    let m = 20

    if(true){
        let m = 30

        if(true){
            let m = 40
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}

escopoAninhado()
console.log(m)

/* Arrow Function */

const testArrow = () => {
    console.log('Está é uma arrow function')
}

testArrow()

const identificaPar = (numero) => {
    if(numero % 2 === 0){
        console.log('Par')
        return
    } else {
        console.log('Impar')
    }
}

identificaPar(7)
identificaPar(8)

/* Otimização de Arrow function */

const raizQuadrada = (x) => x * x
console.log(raizQuadrada(2))

/* Argumentos opcionais */

const greeting = (name) => { /* Nesse caso se eu não passar o name ele cai no primeiro IF */
    if (!name) {
        console.log('Olá, Convidado')
    } else {
        console.log(`Olá, ${name}`)
    }
}

greeting()
greeting('Allison')

/* Argumentos com valor default */

const customGreeting = (name, greet = 'Olá') => {
    return `${greet}, ${name}`
}

console.log(customGreeting('Allison'))
console.log(customGreeting('Matheus', 'Bom dia'))