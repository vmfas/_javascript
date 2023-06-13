function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case operacao = '+':
            console.log(valor1 + valor2)
            break
        case operacao = '-':
            console.log(valor1 - valor2)
            break
        case operacao = '*':
            console.log(valor1 * valor2)
                break
        case operacao = '/':
            console.log(valor1 / valor2)
            break
        default:
            console.log('Kiporra é isso?')
    }
}

calculadora(2, '+', 3)
calculadora(2, '-', 3)
calculadora(2, '*', 3)
calculadora(2, '/', 3)