let peso = 70;
let altura = 1.76;

const imc = peso / (Math.pow(altura, 2));

if (imc < 18.5) {
    console.log(`Seu Imc é: ${imc.toFixed(2)}, e indica que você está abaixo do peso`);
} else if (imc >= 18.5 && imc < 25) {
    console.log(`Seu Imc é: ${imc.toFixed(2)}, e indica que você está no peso ideal`);
} else if (imc >=25 && imc < 30) {
    console.log(`Seu Imc é: ${imc.toFixed(2)}, e indica que você está acima do peso`);
} else if (imc >=30 && imc < 40) {
    console.log(`Seu Imc é: ${imc.toFixed(2)}, e indica que você está obeso`);
} else if (imc > 40) {
    console.log(`Seu Imc é: ${imc.toFixed(2)}, e indica que você está com uma obesidade grave`);
}

function calcularImc (peso, altura) {

    const imc2 = peso / (Math.pow(altura, 2));
    
    if (imc2 < 18.5) {
        console.log(`Seu Imc é: ${imc2.toFixed(2)}, e indica que você está abaixo do peso`);
    } else if (imc2 >= 18.5 && imc2 < 25) {
        console.log(`Seu Imc é: ${imc2.toFixed(2)}, e indica que você está no peso ideal`);
    } else if (imc2 >=25 && imc2 < 30) {
        console.log(`Seu Imc é: ${imc2.toFixed(2)}, e indica que você está acima do peso`);
    } else if (imc2 >=30 && imc2 < 40) {
        console.log(`Seu Imc é: ${imc2.toFixed(2)}, e indica que você está obeso`);
    } else if (imc2 > 40) {
        console.log(`Seu Imc é: ${imc2.toFixed(2)}, e indica que você está com uma obesidade grave`);
    }
}

calcularImc(40, 1.50)