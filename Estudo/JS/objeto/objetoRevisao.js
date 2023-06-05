// coleção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Vinicius',
        idade: 21,
        endereco: {
            logradouro: 'Av. Hildebrando de vasconcelos',
            numero: 56
        }
    },
    condutores: [{
        nome: 'Vinicius',
        idade: 21
    }],
    calcularValorSeguro: function() {
        // ...
    }
}  

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro']
console.log(carro)