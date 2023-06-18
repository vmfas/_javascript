const pessoa = {
    genero: 'Masculino',
}

const vinicius = {
    nome: 'Vinicius',
    idade: 21,
    __proto__: pessoa
}

console.log(vinicius.genero)
console.log(vinicius)

function Pessoa(sobrenome, idade) { // Função construtora deve começar com letra maiuscula (pra ficar fácil de identificar)
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu sobrenome é: ${this.sobrenome}`
    )}

const miguel = new Pessoa('Miguel', 21)
console.log(miguel)
miguel.falar()

class Pessoua {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falares() {
        console.log(`Meu nome é: ${this.nome}`)
    }
}

const dafne = new Pessoua ('Dafne', 11)

dafne.falares()

// Testes

class frutas {
    constructor(nome, preço) {
        this.nome = nome
        this.preço = preço
    }
    informativo() {
        console.log(`O produto em questão é: ${this.nome} e custa: R$ ${this.preço}`)
    }
}

const abacate = new frutas ('Abacate', 10)
abacate.informativo()