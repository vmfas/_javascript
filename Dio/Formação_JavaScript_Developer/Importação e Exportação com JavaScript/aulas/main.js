const { gets, print } = require('../aulas/funcoes_auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
}

print(numerosSorteados)

let maiorValor = 0.

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];

    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
}

print(maiorValor)

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let valorBig = [0]

for (let i = 0; i < lista.length; i++) {
    if (lista[i] > valorBig) {
        valorBig = lista[i]
    }
}

print(valorBig)