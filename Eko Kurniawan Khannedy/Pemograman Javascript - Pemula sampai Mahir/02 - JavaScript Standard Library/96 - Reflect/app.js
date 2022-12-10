const person = {}

Reflect.set(person, `firstName`, `Usep Syaikal Arifin`)
Reflect.set(person, `lastName`, `, S.T., M.Eng, Ph.D`)

console.info(person)

console.info(Reflect.has(person, `fristName`))
console.info(Reflect.has(person, `lastName`))
console.info(Reflect.has(person, `middleName`))