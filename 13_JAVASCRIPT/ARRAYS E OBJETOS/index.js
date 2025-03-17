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