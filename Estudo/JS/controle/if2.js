function teste1(num) {
    if(num > 7)
        console.log(num) // Apenas essa senteça se aplica ao IF
        
        console.log("Final") // Essa vai ativar anyway
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7) ; { // Não use ; em função
     console.log(num) // Por conta do ; o console não tá atrelado ao if, logo vai imprimir qualquer valor
    }
}
teste2(6)
teste2(8)
