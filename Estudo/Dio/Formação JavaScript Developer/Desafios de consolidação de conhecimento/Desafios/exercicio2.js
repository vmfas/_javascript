const { gets, print } = require('./funcoesAuxiliaresEx2')

const n = gets()

let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < n; i++) {

    const numero = gets()

    if (numero % 2 === 0 && numero > maiorPar) {
        maiorPar = numero
    }
    else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero
        }
    }
}

print(maiorPar)
print(menorImpar)