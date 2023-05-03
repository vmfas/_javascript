let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // Essa forma tem prioridade
console.log(num1)

console.log(++num1 === num2--) // Pós fixo só é aplicado depois da ação, então ele usa o pré, compara e depois de tudo subtrai

// Exponenciação:
let exp = 2 ** 3 // 2 elevado a 3 = 8
console.log(exp)