const valueString = (`Usep Syaikal Arifin, S.T., M.Eng, Ph.d`).split(` `)
const arrayKosong = []
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbers = [1, 3, 2, 4, 1, 2, 3, 4, 1, 5, 6, 1, 2, 3, 4]

valueString.forEach((element, index) => {
    arrayKosong.push(element)
});

console.log(arrayKosong)
console.log(arrayKosong.shift())
console.log(arrayKosong.pop())
console.log(arrayKosong)
console.log(arrayKosong.shift())
console.log(arrayKosong.pop())
console.log(arrayKosong)

// Array Search
console.log(source.find(value => value > 3))
console.log(source.findIndex(value => value > 3))
console.log(source.includes(10))
console.log(source.indexOf(5))

// Array Filter
console.log(numbers.filter(value => value % 2 === 0))
console.log(numbers.filter(value => value % 2 !==0))

// Array Transform
console.log(valueString.map(value=>value.toLowerCase()))
console.log(valueString.map(value=>value.toUpperCase()))
console.log(valueString.reduce((acc, value)=> `${acc} ${value}`))
console.log(valueString.reduceRight((acc, value)=> `${acc} ${value}`))