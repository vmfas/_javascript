console.log(soma(3, 4)) // Assim pode chamar mesmo antes da declaração
// console.log(sub(3, 4)) // Assim ele não reconhece funções que foram apresentadas dps do console
// Mesma coisa com a named fuction expression

// Function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}