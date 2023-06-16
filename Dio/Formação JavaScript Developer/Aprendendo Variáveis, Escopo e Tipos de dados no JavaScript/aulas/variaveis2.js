if (true) {  // var vaza do escopo criado (menos de funções)
    var var1 = 10
}

console.log(var1)



/*if (false) {       // Let não vaza do escopo, se usar o console.log ele diz q o var2 is not defined
    let var2 = 20
}

console.log(var2)*/

const x = 10 // valor atribuído a const não pode ser modificado pois é uma constanto
// x = 11 // exemplo: TypeError: Assignment to constant variable.