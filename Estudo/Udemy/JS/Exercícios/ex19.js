function lanchonete (codigo, quantidade) {
    switch (codigo){
        case 100:
            console.log(`A quantidade desejada do produto 'Cachorro Quente' custará: R$ ${(quantidade * 3)}`)
            break
        case 200:
            console.log(`A quantidade desejada do produto 'Hambúrguer Simples' custará: R$ ${(quantidade * 4)}`)
            break
        case 300:
            console.log(`A quantidade desejada do produto 'Cheeseburguer' custará: R$ ${(quantidade * 5.50)}`)
            break
        case 400:
            console.log(`A quantidade desejada do produto 'Bauru' custará: R$ ${(quantidade * 7.50)}`)
            break
        case 500:
            console.log(`A quantidade desejada do produto 'Refrigerante' custará: R$ ${(quantidade * 3.50)}`)
            break
        case 600:
            console.log(`A quantidade desejada do produto 'Suco' custará: R$ ${(quantidade * 2.80).toFixed(2)}`)
            break
        default:
            console.log('Produto Inexistente')
    }
}

lanchonete(100, 3)
lanchonete(200, 3)
lanchonete(300, 3)
lanchonete(400, 3)
lanchonete(500, 3)
lanchonete(600, 3)
lanchonete(700, 3)