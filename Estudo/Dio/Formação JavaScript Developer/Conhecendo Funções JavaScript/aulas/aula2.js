function escrevaMeuNome(nome) {
    return `Meu nome é ${nome}`
}

console.log(escrevaMeuNome('Vinicius'));
console.log(escrevaMeuNome('Miguel'));

function identificadorDeMaioridade(idade) {
    if (idade < 0) {
        return 'Idade inválida'
    } else if (idade < 18) {
        return escrevaMeuNome('Vinicius') + ', eu tenho ' + idade + ' anos e sou menor de idade'
    } else if (idade >= 18) {
        return escrevaMeuNome('Miguel') + ', eu tenho ' + idade + ' anos e sou maior de idade'
    }
}

console.log(identificadorDeMaioridade(-6))
console.log(identificadorDeMaioridade(11))
console.log(identificadorDeMaioridade(21))