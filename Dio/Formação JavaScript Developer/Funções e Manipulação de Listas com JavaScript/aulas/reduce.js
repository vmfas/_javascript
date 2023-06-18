const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current
}, 0) // O 0 fica como valor inicial

console.log(somaDeTodosOsNumeros)