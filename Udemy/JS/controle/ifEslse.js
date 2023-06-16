const imprimirNota = function(nota) {
    if(nota >= 7) {
        console.log("Aprovado! " + nota)
    } else {
        console.log("Reprovado! " + nota)
    }
}

imprimirNota(1)
imprimirNota(2)
imprimirNota(3)
imprimirNota(7)
imprimirNota(8)
imprimirNota(9)
imprimirNota("Abacate") // Cuidado!!!!