const value = `12345`
const valueNumber = Number(value)

console.log(value)
console.log(valueNumber.toLocaleString(`id-ID`))
console.log(valueNumber.toString(2))
console.log(typeof(value))
console.log(valueNumber)
console.log(typeof(valueNumber))
console.log(Number.isInteger(valueNumber))

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)

console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

const valueNaN = Number(`Salah`)
console.log(Number.isNaN(valueNaN))
