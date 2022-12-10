const value1 = `1`
const value2 = 1
const value3 = `1.1`
const sum1 = parseInt(value1) + value2
const sum2 = value2 + parseInt(value1)

console.log(sum1.toString())
console.log(sum2)

console.log(parseInt(value3))
console.log(parseFloat(value3))
console.log(Number(value3))

console.log(value3.toString())

console.log(parseFloat(`a`))
console.log(parseFloat(`1.1salah`))
console.log(Number(`1.1salah`))
console.log(NaN + NaN)
console.log(NaN.toString())
console.log(100 + NaN)
console.log(isNaN(NaN))
console.log(isNaN(1))
