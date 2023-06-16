const { gets, print } = require('./funcoesAuxiliaresEx3');

const valorSalario = gets();
const valorBeneficios = gets()

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    if (salario >= 0 && salario <= 1100) {
        return (percentual = 5)
    } else if (salario > 1100.01 && salario <= 2500) {
        return (percentual = 10)
    } else {
        return (percentual = 15)
    }
}

const aliquotaImposto = pegarAliquota(valorSalario);
const valorImposto = calcularPorcentagem(valorSalario, aliquotaImposto);

const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir);

print(valorSalario)
print(valorBeneficios)