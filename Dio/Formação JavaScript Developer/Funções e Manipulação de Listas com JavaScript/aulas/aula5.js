const pessoa = {
    nome: 'Vinicius',
    idade: 21
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

function teste() {
    console.log('teste')
}

teste()

gritar('Olaaaaa')
gritar.apply(pessoa, ['Olaaaaaaaaaa'])
gritar.call(pessoa, 'Olaaaaaaaaaa')

