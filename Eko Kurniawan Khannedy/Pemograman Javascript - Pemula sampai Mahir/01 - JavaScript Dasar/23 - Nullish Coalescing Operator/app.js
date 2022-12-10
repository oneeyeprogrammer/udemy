let parameter

let data = parameter

if (data === null || data === undefined) {
    console.log(`Nullish`)
} else {
    console.log(`Data Bukan Nullish`)
}

let value = parameter
const result = value ?? `Nilai Default`
console.log(result)