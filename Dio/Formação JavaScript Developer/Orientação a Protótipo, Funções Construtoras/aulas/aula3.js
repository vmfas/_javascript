const pessoa = {
    genero: 'Masculino'
}

const vinicius = Object.create(pessoa)

vinicius.nome = 'Vinicius'
vinicius.idade = 21

console.log(vinicius)
console.log(vinicius.genero)