let precoEtanol = 3
let precoGasolina = 5
let gastoMedio = 10
let distanciaEmKm = 100
let tipoCombustivel = 'gasolina'

const litrosConsumidos = (distanciaEmKm / gastoMedio)

if (tipoCombustivel === 'etanol') {
    console.log(litrosConsumidos * precoEtanol)
} else if ('gasolina') {
    console.log(litrosConsumidos * precoGasolina)
}