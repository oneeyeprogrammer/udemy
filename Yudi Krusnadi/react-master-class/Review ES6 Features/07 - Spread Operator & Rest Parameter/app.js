let arr1 = [1, 2, 3]
let arr2 = [...arr1, 4, 5, 6]
let arr3 = [1, 2, 3, ...arr1]

const club = {
    id:1,
    country:"Inggris"
}

const milan = {
    ...club,
    name:"Man UTD"
}

console.log(arr1)
console.log(arr2)
console.log(arr3)

console.log(club)
console.log(milan)