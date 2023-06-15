const { gets, print } = require('./funcoesAuxiliaresEx1');

const media = gets();

function estadoDoAluno() {
    
    if (media > 10 || media < 0) {
        return 'Média inválida'
    } else if (media < 5)  {
        return 'Reprovado'
    } else if (media >=5 && media < 7) {
        return 'Recuperação'
    } else if (media >= 7) {
        return 'Aprovado' 
    }
}

console.log(estadoDoAluno());