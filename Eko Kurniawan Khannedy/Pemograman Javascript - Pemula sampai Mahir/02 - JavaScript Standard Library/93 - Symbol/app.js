const firstName = Symbol(`firstName`)
const lastName = Symbol(`lastName`)

const person = {}
person[firstName] = `Usep Syaikal`
person[lastName] = `Arifin`

console.log(person)

console.log(person[firstName])
console.log(person[lastName])


{
    const person = {}

    person[Symbol.for(`firstName`)] = `Usep Syaikal`
    person[Symbol.for(`lastName`)] = `Arifin`

    console.log(person)
}