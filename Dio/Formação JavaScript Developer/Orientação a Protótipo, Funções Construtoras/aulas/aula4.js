function Pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)
}

console.log(new Pessoa ('Vinicus', 21))
const vinicius = new Pessoa('Vinicus', 21)
vinicius.falar()

const MIGUEL = {
    genero: 'Masculino'
}

Pessoa.call(MIGUEL, 'Miguel', 21)
console.log(MIGUEL)

String.prototype.toPLang = function () {
    return `Testando o ${this}`
}

console.log('teste'.toPLang())