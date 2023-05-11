function salarioNovo (plano , salario) {
    switch (plano) {
        case 'A':
            return `Seu novo salário é ${salario + (salario * 0.10)}`
        case 'B':
            return `Seu novo salário é ${salario + (salario * 0.15)}`
        case 'C':
            return `Seu novo salário é ${salario + (salario * 0.20)}`
        default:
            return 'Plano inválido'
    }
}

console.log(salarioNovo('A', 1000))
console.log(salarioNovo('B', 1000))
console.log(salarioNovo('C', 1000))
console.log(salarioNovo('D', 1000))