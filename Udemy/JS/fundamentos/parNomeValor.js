// par Nome/Valor
const saudacao = "Opa" // Contexto Léxico 1

function exec() {
    const saudacao = "Falaaaa" // Contexto Léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Vinicin",
    idade: 21,
    peso: 68,
    endereco: "Av. Hildebrando de Vasconcelos, 56"
}

console.log(saudacao)
console.log(exec())
console.log(cliente)