// Faça um codigo para calcular o valor gasto de combustível em uma viagem
// 3 variáveis: Preço do combustível, valor médio de gasto do carro, distancia em KM

function calcular (preco, gasto, distancia) {
    const formula = (distancia / gasto) * preco
    console.log(formula)
}

calcular(5.79, 10, 100)

let precoVar = 5.79
let gastoVar = 10
let distanciaVar = 100

const resultado = distanciaVar / gastoVar * precoVar

console.log(resultado)