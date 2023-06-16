function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4002,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.preco = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 4002, desc: 0.10 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, "$"))
console.log(getPreco.apply(carro, [0.17, '$']))