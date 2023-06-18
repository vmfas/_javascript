const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo() {
    const arquivo = await fs.promises.readFile(filePath)
    const textoDoArquivo = arquivo.toString('utf8')
    console.log(textoDoArquivo)
}

buscarArquivo()