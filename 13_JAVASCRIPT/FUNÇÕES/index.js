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