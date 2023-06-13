function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Parabéns você passou, tirou: " + nota)
    }
    else {
        console.log("Se fudeu, tirou: " + nota) // Coisa minha não tava na aula
    }   
}

soBoaNoticia(6)
soBoaNoticia(8)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})