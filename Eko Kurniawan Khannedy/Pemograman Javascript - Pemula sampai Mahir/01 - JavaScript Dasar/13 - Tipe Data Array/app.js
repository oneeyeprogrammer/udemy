let arrayKosong = []
let arrayName = [`Usep Syaikal Arifin`]
const name = []

console.log(arrayKosong)
console.table(arrayName)
arrayName.push(`Asep Faisal Arifin`)
console.table(arrayName)

name.push(`Usep Syaikal Arifin`, `Asep Faisal Arifin`)
console.table(name)
name[0]=`Jackson Martinez`
name.push(`Annas Alatas Sukmahadi`)
console.table(name)
delete name[1]
name.push(`Kylian Mbappe`, `Ikta Solork`)
console.table(name)
name[1]=`Digunakan Lagi`
console.table(name)
name.push(1, 2, 3, 4, 5)
console.table(name)
name.push([`Usep`, 1, `Arifin`])
console.table(name)
