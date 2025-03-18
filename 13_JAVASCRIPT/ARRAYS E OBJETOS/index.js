/* Arrays */

const numerosPreferidos = [2,3,10,24,32]

console.log(numerosPreferidos)

/* Acessando itens da lista */

console.log(numerosPreferidos[2])

/* Propriedades */

console.log(numerosPreferidos.length) // Tamanho do array

/* Concatenando arrays */

const otherNumber = [98,78,48]

const allNumbers =  numerosPreferidos.concat(otherNumber)
console.log(allNumbers)

/* Metodos */

const text = 'Allison'
console.log(text.toUpperCase())

console.log(text.indexOf('l'))

/* Objetos Literais */

const person = {
    nome: 'allison',
    age: 25,
    job: 'developer'
}

console.log(person.age)
console.log(person.nome.length)

/* Criando e deletando propriedades */

const car = {
    engine: 2.0,
    color: "red",
    doors: 4
}

console.log(car)

car.model = 'Tiguan'

console.log(car)

delete car.engine

console.log(car)

/* Mais sobre objetos - Copiando propriedades */

const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2)

/* Método keys e entries */

console.log(Object.keys(obj)) /* Trás o que tem em cada objeto (propriedades) */
console.log(Object.keys(obj2))

console.log(Object.entries(obj)) /* Trás as propriedades e os valores do objeto */
console.log(Object.entries(obj2))

/* Mutação - Criando um objeto a partir de outro */

/* Ele não é novo. As mudanças afetam a copia */

const a = {
    name: "Allison"
}

const b = a

console.log(a)
console.log(b)

a.age = 32

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

/* Loop em arrays */

const loopArray = ['allison', 'boita', 'cristiano', 'neymar']

for (let i = 0; i < loopArray.length; i++) {
    console.log(`Este é o usuário ${loopArray[i]}`)
}

/* Métodos push e pop */

const testeArray = [1,2,5,4,3]

console.log(testeArray)

testeArray.push(0,23,24) // Adiciona um item ao fim do array - Posso adicionar mais itens também.

console.log(testeArray)

testeArray.pop()

console.log(testeArray) // Remove um item ao fim do array
// O pop retorna o elemento removido

/* Métodos shift e unshift */

/* Com o shift eu consigo remover o primeiro item do array */
/* Com o unshift eu consigo adicionar */

const testeArray2 = [9,8,7,6,5,4]

console.log(testeArray2)

testeArray2.unshift(3)

console.log(testeArray2)

testeArray2.shift()

console.log(testeArray2)

/* Métodos indexOf e lastIndexOf */

/* Quando não existe o método retorna -1 */

const frutas = ["Morango", "Maçã", "Pera", "Uva", "Morango"]

console.log(frutas.indexOf("Uva")) // 3 Elemento
console.log(frutas.indexOf("Morango")) // Trás o 0 -> Começa da esquerda para a direita.

console.log(frutas.lastIndexOf("Morango")) // Trás o 4 -> Começa de trás pra frente.

/* Método Slice */

/* Extrai um array menor de um menor. */

const sliceArray = ["a", "b", "c", "d", "e"]

const subarray = sliceArray.slice(2,3) /* Aqui o último é cortado. */

console.log(sliceArray)
console.log(subarray)

const subarray2 = sliceArray.slice(2,4 + 1) /* Para considerar o último elemento */

console.log(subarray2)

/* Se coloco um intervalo inexistente ele retorna vazio */

/* forEach */

const nums = [1,2,3,4,5,6]

nums.forEach((numero) => {
    console.log(`o número é ${numero}`)
})

const posts = [
    {title: "Primeiro Post", category: "PHP"},
    {title: "Segundo Post", category: "Javascript"},
    {title: "Terceiro Post", category: "C++"},
]

posts.forEach((post) => {
    console.log(`Exibindo post ${post.title} da categoria ${post.category}`)
})

/* Método includes */

const brands = ["BMW", "FIAT", "PAJERO"]

console.log(brands.includes("FIAT")) // Retorna true
console.log(brands.includes("ECO")) // Retorna false

if (brands.includes("ECO")) {
    console.log(`Há carros da marca BMW`)
} else {
    console.log("Não existem carros disponíveis da marca desejada")
}