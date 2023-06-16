let a = 1;
let b = 2;

console.log(a + " " + b);

let temp = 1
a = b
b = temp;

console.log(a + " " + b);

// Ou

[a, b] = [b, a]

console.log(a + " " + b);