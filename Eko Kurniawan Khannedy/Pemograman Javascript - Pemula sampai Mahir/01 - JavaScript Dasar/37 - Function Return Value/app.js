function sayHello(firstName, lastName) {
    return `Hello ${firstName} ${lastName}`
}

const result = sayHello(`Usep Syaikal`, `Arifin`)
console.log(result)

function getFinalScore(value) {
    const result = value >= 90 ? `Good Job` : `Not Enough`
    return result
}

const value = getFinalScore(90)
console.log(value)

function isContains(array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true
        }
    }
    return false
}

const arrayValue = [1, 2, 3, 4, `Usep`, `Syaikal`, `Arifin`]
const statusContains = isContains(arrayValue, `Use`)
console.log(statusContains)