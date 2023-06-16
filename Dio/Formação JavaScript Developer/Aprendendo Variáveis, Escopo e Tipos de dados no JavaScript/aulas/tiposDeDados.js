/* 
    boolean
    null
    undefined
    number
    string
    synbol
*/

// object

let x = 10;
x = 'abacate';

let y = 10;
y = 20

let z = { nome: 'abacate' }
z.nome = 'peixe'
console.log(z.nome)

true, false

new Boolean(true)

function minhaFuncao() {
    console.log("Função original");
}

function funcaoWrapper(funcaoOriginal) {
    return function () {
        console.log("Antes da função original");
        funcaoOriginal();
        console.log("Depois da função original");
    };
}

const minhaFuncaoComWrapper = funcaoWrapper(minhaFuncao);
minhaFuncaoComWrapper();

console.log(20 + '10')
console.log(20 - '10')
console.log(10 == '10') // Aqui os 2 são 10
console.log(10 === '10') // Aqui um é 10 (number) e o outro é 10 (string) logo é diferente

console.log('Proxima parte')

console.log(!'')
console.log(!!'')
console.log(!'1')
console.log(!!'1')

let nome = ''; // Vazio não dá resposta

if (nome) {
    console.log('Preenchido')
}

nome = ' ' // Quando tem alguma coisa ele continua o if (mesmo que seja só um espaço)

if (nome) {
    console.log('Preenchido')
}

const nulo = { nome:  null };
console.log(nulo)

let undefined;
console.log(undefined)

const vini = { nome: 'Vinicius', peso: undefined }
console.log(vini.nome)
console.log(vini.idade)
console.log(vini.peso)

console.log(JSON.stringify(nulo))