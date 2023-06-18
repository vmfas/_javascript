function funcao1() {
    console.log(this)
}

const funcao2 = () => {
    console.log(this)
}

const vinicius = {
    nome: 'Vinicius',
    funcao1,
    funcao2
}

vinicius.funcao1()
vinicius.funcao2()