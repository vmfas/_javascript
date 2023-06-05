// usando a notação literal de objetos
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarUmFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
    salarioBase,
    faltas,
    getSalario() {
        return (salarioBase / 30) * (30 - faltas)
    }
    }
}

const f1 = criarUmFuncionario('Vinicius', 7980, 4)
const f2 = criarUmFuncionario('Vinicin', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Dafne'
console.log(filha)

// Uma função famosa que retorna objeto...
const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson.info)