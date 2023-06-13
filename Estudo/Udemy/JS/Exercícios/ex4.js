function div (dividendo, divisor){
    const calc = Math.floor(dividendo / divisor)
    const rest = dividendo % divisor

    return `O resultado da sua divisão é: ${calc} e o resto é: ${rest} `
}

console.log(div(11, 4))