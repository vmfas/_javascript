const ate10 = 180
const ate30 = 150
const ate60 = 195
const maisDe60 = 230

function identificador (idade) {
    if (idade < 10) {
        return (`O valor a ser pago é: ${ate10}`)
    } else if (idade < 30) {
        return (`O valor a ser pago é: ${ate30}`)
    } else if (idade < 60) {
        return (`O valor a ser pago é: ${ate60}`)
    } else if (idade > 60) {
        return (`O valor a ser pago é: ${maisDe60}`)
    }
}

console.log(identificador(5))
console.log(identificador(15))
console.log(identificador(35))
console.log(identificador(65))
console.log(identificador(21))