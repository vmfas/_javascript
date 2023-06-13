function CalAnoBissexto (ano) {
    let bissexto400 = (ano % 400)
    let naoBissexto = (ano % 100)
    let bissexto4 = (ano % 4)
    if (ano <= 0){
        return 'False'
    }
    else if (bissexto400 == 0) {
        return 'True'
    } else if (naoBissexto == 0) {
        return 'False'
    } else if (bissexto4 == 0) {
        return 'True'
    } else {
        return 'False'
    }
}

console.log(CalAnoBissexto(2002))
