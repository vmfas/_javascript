class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return `${(this.peso / (Math.pow(this.altura, 2))).toFixed(2)}`
    }

    indicarEstadoCorporal() {
        const imc = this.calcularImc()
        if (imc < 18.5) {
            return 'Abaixo do peso'
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso ideal'
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso'
        } else if (imc >=30 && imc < 40) {
            return 'Obesidade'
        } else {
            return 'Obesidade grave'
        }
    }
}

const Vinicius = new pessoa('Vinicius', 70, 1.76)
const dafne = new pessoa ('Dafne', 45, 1.50)

console.log(Vinicius.calcularImc())
console.log(Vinicius.indicarEstadoCorporal())
console.log(dafne.calcularImc())
console.log(dafne.indicarEstadoCorporal())

function teste (valor) {
    console.log(valor)
}
