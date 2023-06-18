function adicao(x, y) {
    return x + y
}

function subtracao(x, y) {
    return x - y
}

function calculadora(x, operacao, y) {
    console.log(operacao(x, y))
}

calculadora(10, adicao, 20)
calculadora(20, subtracao, 10)

/*document.getElementById('btn1').addEventListener('click', () => {
    console.log('Clicou!')
})*/