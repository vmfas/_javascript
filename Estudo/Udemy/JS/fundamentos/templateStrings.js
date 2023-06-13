const nome = "Rebeca";
const concatenacao = "Olá " + nome + "!"
const template = `
    Olá
    ${nome}!`;
console.log(concatenacao, template);

//Expressões...
console.log(`1 + 1 = ${1 + 1}`); // Usando a crase fica da forma literal, porém se usar ${} você consegue usar normal as consts e tls

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`)