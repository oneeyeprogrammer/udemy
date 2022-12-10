const map = new Map()

map.set(`Nama`, `Usep Syaikal Arifin`)
map.set(`Address`, `Indonesia`)

console.log(map)
console.log(map[0])

for (const element of map) {
    console.log(element)    
}

map.forEach((value, key) => console.log(`${key} : ${value}`))