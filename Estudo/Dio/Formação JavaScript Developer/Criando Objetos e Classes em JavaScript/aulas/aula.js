const vinicius = {
    nome: 'Vinicius Miguel',
    idade: 21
}

console.log(vinicius)
console.log(vinicius.nome)
console.log(vinicius.idade)

vinicius.altura = 1.76
vinicius.peso = 70

console.log(vinicius)

delete vinicius.altura
console.log(vinicius)

const pessoa = {
    nome: 'Vinicius Miguel',
    idade: 21,
    peso: 70,
    altura: 1.76,

    descrever: function() {
        return `Meu nome é ${this.nome}, eu tenho ${this.idade} anos, atualmente estou pesando ${this.peso}kg e tenho ${this.altura} de altura`
    }
}

console.log(pessoa.descrever())

console.log(pessoa['nome'])
console.log(pessoa['idade'])
console.log(pessoa['peso'])
console.log(pessoa['altura'])

class pessoa1 {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - this.idade;
    }

    descrever() {
        return `Meu nome é ${this.nome} e eu tenho ${this.idade} anos`
    }
}

const dafne = new pessoa1();
dafne.nome = 'Dafne Ester'
dafne.idade = 11

const vinicin = new pessoa1('Vinicius Miguel', 21)

console.log(dafne);
console.log(dafne.descrever())
console.log(vinicin)

function compararPessoas (p1, p2) {
    if (p1.idade > p2.idade) {
        return `${p1.nome} é mais velha que ${p2.nome}`
    } else if (p2.idade > p1.idade) {
        return `${p2.nome} é mais velha que ${p1.nome}`
    } else {
        return `${p1.nome} e ${p2.nome} tem a mesma idade`
    }
}

const beterraba = new pessoa1('beterraba', 17)
const abacate = new pessoa1('abacate', 15)

console.log(compararPessoas(beterraba, abacate))


// Teste a parte
class fichaMedica {
    nome;
    idade;
    peso;
    altura;

    constructor(nome, idade, peso, altura){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    imc(peso, altura){
        return `Seu nome é ${this.nome}, sua idade é ${this.idade}, seu peso é ${this.peso}, sua altura é ${this.altura} e seu imc é: ${(this.peso / (Math.pow(this.altura, 2))).toFixed(2)}`
    }
}

const veneceous = new fichaMedica('Vinicius Miguel', 21, 70, 1.76)
const daniela = new fichaMedica('Daniela da Silva Ferreira', 41, 75, 1.65)
console.log(veneceous.imc())
console.log(daniela.imc())