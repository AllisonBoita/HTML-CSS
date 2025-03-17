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