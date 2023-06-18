const listaDeNumeros = [1, 2, 3]

const lista = [{ nome: 'Vinicius' }, { nome: 'Miguel' }, { nome: 'Dafne' }, { nome: 'Vladmir' }]

console.log(listaDeNumeros.join('/'))

console.log(
    lista.map(e => e.nome)
        .filter((e) => e.startsWith('V'))
        .join(' ; ')
)

const elementosEmHtml = lista.filter((nome) => nome.nome.startsWith('V'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)