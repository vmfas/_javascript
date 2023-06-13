const escola = "Cod3r";

console.log(escola.charAt(0))
console.log(escola.charAt(1))
console.log(escola.charAt(2))
console.log(escola.charAt(3))
console.log(escola.charAt(4))
console.log(escola.charCodeAt(3)) // Código html do número 3
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // Do indice 1 em diante
console.log(escola.substring(0, 3)) // Do indice 0 até o 3 (sem incluir ele)

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, "e"))

console.log("Ana, Maria, Pedro".split(",")) // Array