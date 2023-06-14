// % = resto da divisão
const numero = 10;
const numero2 = 11;
const numero3 = 0;

const numeroPar = (numero % 2) === 0 ;
const numeroPar2 = (numero2 % 2) === 0;

console.log(numeroPar);
console.log(numeroPar2);

if (numeroPar) {
    console.log('Par');
} else {
    console.log('Impar')
}

if (numeroPar2) {
    console.log('Par');
} else {
    console.log('Impar')
}

// Negação = ! se usar o ! ele vai mostrar o oposto
// Exemplo:
if (!numeroPar) {
    console.log('Par');
} else {
    console.log('Impar')
}
// Antes esse mesmo if tinha dado Par

const numeroDivisivel = (numero % 5) === 0;
const numeroDivisivel2 = (numero2 % 5) === 0;

if (numero === 0){
    console.log('Número Inválido')
}
else if (numeroDivisivel) {
    console.log(`${numero} é Divisível por 5`)
} else {
    console.log(`${numero} é Indivisível por 5`)
}

if (numero2 === 0){
    console.log('Número Inválido')
}
else if (numeroDivisivel2) {
    console.log(`${numero2} é Divisível por 5`)
} else {
    console.log(`${numero2} é Indivisível por 5`)
}

if (numero3 === 0){
    console.log(`${numero3} é um Número Inválido`)
}
else if (numeroDivisivel) {
    console.log(`${numero3} é Divisível por 5`)
} else {
    console.log(`${numero3} é Indivisível por 5`)
}