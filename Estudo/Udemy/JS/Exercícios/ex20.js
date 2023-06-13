function valorSaque (valorSacado) {
    let valor100 = 0
    let valor50 = 0
    let valor10 = 0
    let valor5 = 0
    let valor1 = 0
    let valorNota = fazerWhileRodar(valorSacado)

        while (valorSacado >= valorNota) {
            switch (valorNota){
                case 100:
                    valorSacado -= 100
                    valor100++
                    break
                case 50:
                    valorSacado -= 50
                    valor50++
                    break
                case 10:
                    valorSacado -= 10
                    valor10++
                    break
                case 5:
                    valorSacado -= 5
                    valor5++
                    break
                case 1:
                    valorSacado -= 1
                    valor1++
                    break
            }
            
            valorNota = fazerWhileRodar(valorSacado) 

        }

        return distribuindoNotas(valor100, valor50, valor10, valor5 ,valor1)
}

function fazerWhileRodar (valorSacado) {
    if (valorSacado >= 100) {
        return 100
    } else if (valorSacado >= 50) {
        return 50
    } else if (valorSacado >= 10) {
        return 10
    } else if (valorSacado >= 5) {
        return 5
    } else if (valorSacado >= 1) {
        return 1
}
}

function distribuindoNotas (valor100, valor50, valor10, valor5 ,valor1) {
    let resultado = ''

    if (valor100 > 0) {
        resultado += `${valor100} nota(s) de R$ 100. `
    }

    if (valor50 > 0) {
        resultado += `${valor50} nota(s) de R$ 50. `
    }

    if (valor10 > 0) {
        resultado += `${valor10} nota(s) de R$ 10. `
    }

    if (valor5 > 0) {
        resultado += `${valor5} nota(s) de R$ 5. `
    }

    if (valor1 > 0) {
        resultado += `${valor1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(valorSaque(153));