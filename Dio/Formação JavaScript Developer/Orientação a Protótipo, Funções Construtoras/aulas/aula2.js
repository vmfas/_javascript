const pessoa = {
    idade: 18
}

const vinicius = {
    nome: 'Vinicius',
    idade: 21, // Se ele achar na const, ele usa esse, se n achar ele puxa no proto
    __proto__: pessoa
}

console.log(vinicius.idade)