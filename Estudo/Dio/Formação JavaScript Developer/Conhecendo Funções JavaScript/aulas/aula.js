function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Vinicius');
sayMyName('Miguel');

function quantidade(valor) {
    return valor * valor
}

const quadradoDeDez = quantidade(10)
console.log(quadradoDeDez)

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo
}
console.log(incrementarJuros(100, 10))
console.log(incrementarJuros(150, 15))

function main(){
    console.log('Programa principal')
}

main()