/* 
boolean
null
undefined
number
string
symbol
*/

// object

const x = {
    nome: 'Vinicius',
    idade: 21,
    'peixe lua': 'inutil'
}

x.sobrenome = 'Miguel'

console.log(typeof x)
console.log(x)
console.log(x['nome'])

x.falar = function() {console.log(`Meu nome é ${x.nome}`)}
x.falar()