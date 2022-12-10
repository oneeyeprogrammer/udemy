console.log(`hello` || ``)
console.log(`` || [])
console.log(`0` || `null`)
console.log(0 || `null`)
console.log(undefined || null)
console.log(null || undefined)

const person = {
    firstName:`Usep Syaikal`,
    lastName:`Syaikal`
}

const name = person.firstName || person.lastName

// console.log(name)

console.log(`-------------------------`)


console.log(`hello` && ``)
console.log(`` && [])
console.log(`0` && `null`)
console.log(0 && `null`)
console.log(undefined && null)
console.log(null && undefined)