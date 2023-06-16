class carros {
    marca;
    cor;
    gastoMedio;
    constructor(marca, cor, gastoMedio){
        this.marca = marca
        this.cor = cor
        this.gastoMedio = gastoMedio
    }

    GastoPorKm(distancia, preçoGasolina){
        return `Você gastará: R$ ${((distancia * this.gastoMedio) * preçoGasolina).toFixed(2)}`
    }
}

const fiatUno = new carros('Fiat', 'Branco', 1/12)
const Palio = new carros('Palio', 'Preto', 1/10)

console.log(fiatUno.GastoPorKm(70, 5))
console.log(fiatUno.marca)
console.log(fiatUno.cor)
console.log(Palio.GastoPorKm(70, 5))