const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < lista.length; i++) {

    const par = lista[i] % 2 === 0

    if (par) {
        console.log(lista[i])
    } else {
        console.log('Só mostro número par')
    }
}