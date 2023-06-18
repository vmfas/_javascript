const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

const promessaDeLeituraDoArquivo = fs.promises.readFile('tarefas.csv')

promessaDeLeituraDoArquivo.then((arquivo) => {
    console.log(arquivo.toString('utf8'))
}) .then((texto) => {
    console.log(texto.split('\n').slice(1))
})
.catch((error) => {
    console.log('Deu Ruim!', error)
})