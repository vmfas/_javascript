// Novo recurso do ES2015

const pessoa = {
    nome: "Vinizu",
    idade: 21,
    endereço: {
        logradouro: "Hildebrando de Vasconcelos",
        numero: 56
    }
}
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereço: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)