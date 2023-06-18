class Pessoa {
    constructor(name) {
        this.name = name
    }
}

const lista = [new Pessoa('Vinicius'), new Pessoa('Miguel'), new Pessoa('Dafne')]

const listaNomes = lista.map((element) => {
    return element.name
})

const listaNomesComIndice = lista.map((element, i) => {
    return `${i} - ${element.name}`
})


console.log(listaNomes)
console.log(listaNomesComIndice)