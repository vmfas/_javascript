let nota1 = 10
let nota2 = 4
let nota3 = 4

const media = (nota1 + nota2 + nota3) / 3

if (media >= 0 && media < 5) {
    console.log(`sua média foi:${media}, logo você foi reprovado`);
}  else if (media >= 5 && media < 7) {
    console.log(`sua média foi:${media}, logo você está na recuperação`);
} else if (media >= 7 && media <= 10) {
    console.log(`sua média foi:${media}, logo você foi aprovado`);
} else if (media < 0 || media > 10) {
    console.log('A média informada não é elegível');
}