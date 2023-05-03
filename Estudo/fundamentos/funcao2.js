// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
const subtacao = (a, b) => a - b 
console.log(subtacao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")