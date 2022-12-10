let result = 1 + 2
console.log(`1 + 2 = ${result}`)
let originalResult = result

result -= 1
console.log(`${originalResult} - 1 = ${result}`)
originalResult = result

result *= 2
console.log(`${originalResult} x 2 = ${result}`)
originalResult = result

result = +1
console.log(result)
result--
console.log(result)
result++
console.log(result)
result = -result
console.log(result)