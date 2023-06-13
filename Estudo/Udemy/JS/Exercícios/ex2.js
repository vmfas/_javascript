function triangulos(a, b, c) {
    if (a == b == c) {
        return 'Equilátero'
    } else if (a == b || b ==c || c == a) {
        return 'Isosceles'
    } else {
        return 'Escaleno'
    }
}

console.log(triangulos(1, 1, 1))
console.log(triangulos(1, 1, 2))
console.log(triangulos(1, 2, 3))