function div (inteiro) {
    if (inteiro % 3 != 0) {
        return 'Valor não é divisível / False'
    } else {
        return 'Valor divisível / True'
    }
}

console.log(div(5))
console.log(div(9))