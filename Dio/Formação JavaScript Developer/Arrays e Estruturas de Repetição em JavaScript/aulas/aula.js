let alunos = ['Vinicius', 'Miguel', 'Dafne'];

alunos.push('Isis');
alunos[4] = 'Daniela';

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[3]);

alunos = [];
alunos.push(1, 2, 3);
console.log(alunos);
console.log(alunos.pop()); // Tira o Ultimo
console.log(alunos);
console.log(alunos.shift()); // Tira o primeiro
console.log(alunos);

let notas = [];

notas.push(8);
notas.push(6);
notas.push(8);
notas.push(6);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(notas.length); // Tamanho do Array
console.log(soma / 5);

const nome = 'Vinicius Miguel Ferreira Ariel da Silva';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

let soma1 = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    soma1 = soma1 + nota
}

const media = soma1 / notas.length

console.log(media)