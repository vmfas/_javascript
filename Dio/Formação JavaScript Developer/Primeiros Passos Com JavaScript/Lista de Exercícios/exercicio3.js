let camiseta = 100

const debito = camiseta - (camiseta * 0.1)
const pixOuDinheiro = camiseta - (camiseta * 0.15)
const credito2x = camiseta
const credito3xOuMaior = camiseta + (camiseta * 0.1)

const formaDePagamento = 'cartão3x'

if (formaDePagamento === 'debito') {
    console.log(`Valor à pagar: ${debito}`)
}else if (formaDePagamento === 'pix') {
    console.log(`Valor à pagar: ${pixOuDinheiro}`)
}else if (formaDePagamento === 'cartão2x') {
    console.log(`Valor à pagar: ${credito2x}`)
}else if (formaDePagamento === 'cartão3x') {
    console.log(`Valor à pagar: ${credito3xOuMaior}`)
}

function valorProduto(valor, formaDePagamento) {
    const debito = valor - (valor * 0.1)
    const pixOuDinheiro = valor - (valor * 0.15)
    const credito2x = valor
    const credito3xOuMaior = valor + (valor * 0.1)

    if (formaDePagamento === 'debito') {
        return `Valor à pagar: ${debito}`
    }else if (formaDePagamento === 'pix') {
        return `Valor à pagar: ${pixOuDinheiro}`
    }else if (formaDePagamento === 'cartão2x') {
        return `Valor à pagar: ${credito2x}`
    }else if (formaDePagamento === 'cartão3x') {
        return `Valor à pagar: ${credito3xOuMaior}`
    }
}

console.log(valorProduto(100, 'cartão3x'))