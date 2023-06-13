function Pessoa() {
    this.idade = 0

    const self = this // Gambiarra
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // Da pra usar o bind p vincular ele na função ou fazer a gambiarra
}

new Pessoa