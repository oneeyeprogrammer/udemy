// Factorial
const valueFactorial = (value) => {
    let result = 1
    for (let i = value; i >= 1; i--) {
        result *= i
    }
    return result
}

console.log(valueFactorial(5))

//  
const recursiveFactorial = (value) => {
    if (value === 1) {
        return 1
    } else {
        return value * recursiveFactorial(value - 1)
    }
}

console.log(recursiveFactorial(7))