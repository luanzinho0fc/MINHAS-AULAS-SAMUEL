// uma lista de carros 

const modelos =["nissa", "Chevrolet S10", "sedan", "toyota corola", ]

console.log(modelos[2])

// adicionar um modelo no  final da lista 

modelos.push('jeep Renegade')

console.log(modelos)

// contagem
console.log(modelos.length) // resultado 5

modelos.push("320i")

// remover um modelo
modelos.pop()
console.log(modelos)
console.log(modelos.length)

// remover um modelo especifico
modelos.splice(1,1) // remove o modelo na posição 1

console.log(modelos)