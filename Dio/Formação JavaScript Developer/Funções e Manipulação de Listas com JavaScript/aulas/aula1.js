// First class functions
// Higher Order Functions

function falarMeuNome() {
    console.log(`Meu nome é Vinicius`)
}
const referenciaNova = falarMeuNome

referenciaNova()

function falarMeuNomeCompleto (){
    falarMeuNome()
    console.log('Miguel Ferreira Ariel da Silva')
}

falarMeuNomeCompleto(falarMeuNome)