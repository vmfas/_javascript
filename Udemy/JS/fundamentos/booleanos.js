let isAtivo = false
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // ! = negação / !! = não não
console.log(!true);

console.log("Os verdadeiros: ");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Os falsoss: ");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!(isAtivo = false));

console.log("Pra finalizar: ");
console.log(!!("" || null || 0 || " "));

let nome = ""
console.log(nome || "Desconhecido"); // || = Ou

nome = "Abacate";
console.log(nome || "Desconhecido");