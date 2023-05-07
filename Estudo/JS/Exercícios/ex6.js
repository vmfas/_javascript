function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}  

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}  

console.log(jurosSimples(200, 20/100, 2));
console.log(jurosCompostos(200, 20/100, 2));
