/* 
boolean
null
undefined
number
string
symbol
*/

// object

// +Infinity -Infinity e NaN
// Double Precision 64-bits binary format IEEE 754

const x = { nome: null };
console.log(JSON.stringify(x));

// "texto"
// 'texto'
// `texto`

console.log("<div id=\"10\">teste</div>")
console.log('<div id="10">teste</div>')

const id = 10
console.log('<div id="'+id+'">teste</div>')
console.log(`<div id="${id}">teste</div>`)

// symbol = objeto imutável único

const y = Symbol('10');
let z = Symbol('10');

console.log(y)
console.log(y === z)

z = y
console.log(y === z)