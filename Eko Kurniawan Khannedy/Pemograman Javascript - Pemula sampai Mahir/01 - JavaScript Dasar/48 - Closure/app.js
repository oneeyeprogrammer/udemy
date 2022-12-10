const createrAdder = value =>{
    const owner = `Usep Syaikal Arifin`
    const add = param=>{
        console.log(owner)
        return value + param
    }
    return add
}

const addTwo = createrAdder(2)
const addTen = createrAdder(10)
console.log(addTwo(20))
console.log(addTen(30))