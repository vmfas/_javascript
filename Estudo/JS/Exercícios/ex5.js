function correctu (valor) {
    let moeda = valor.toFixed(2).toString().replace('.', ',')
    console.log(`R$ ${moeda}`)
}

correctu(0.30000000000000004)