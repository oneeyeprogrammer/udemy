function sum(name, ...data) {
    let total = 0
    for (const item of data) {
        total += item
    }
    console.log(`${name} --- ${total}`)
}

sum(`Usep Syaikal Arifin`, 1, 2, 3, 4, 5, 6)

const arrayValues = [10, 10, 10, 10, 10]
sum(`Spread Syntax`, ...arrayValues)


function oldSum(){
    let total = 0
    for(const element of arguments){
        total+=element
    }
    console.log(`Total menggunakan Arguments Object : ${total}`)
}

oldSum(10, 10, 10, 10, 10)