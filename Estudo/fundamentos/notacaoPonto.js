console.log(Math.ceil(6.1)) // Arredonda pra cima

const obj1 = {}
obj1.nome = "Bola"
obj1.preco = 10
console.log(obj1)
console.log(obj1.preco)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log("Exec...")
    }
}

const obj2 = new Obj("Abacate")
const obj3 = new Obj("Guacamole")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()