const employee ={
    nama:`Usep Syaikal Arifin`,
    usia:25,
    status:`Bekerja`,
    pekerjaan:`ReactJs Developer`,
    address:{
        village:`Babakansari`,
        district:`Bantarujeg`,
        city:`Majalengka`,
        country:`Indonesia`
    },
    hobbies:[
        `Coding`, `Game`, `Membaca`
    ]
}

console.log(employee)
const jsonStringfy = JSON.stringify(employee)
console.log(jsonStringfy)
const jsonParse = JSON.parse(jsonStringfy)
console.log(jsonParse)