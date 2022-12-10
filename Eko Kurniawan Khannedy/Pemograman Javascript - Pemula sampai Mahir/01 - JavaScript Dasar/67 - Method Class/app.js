class Person{
    constructor(nama, usia, pekerjaan){
        this.nama = nama,
        this.usia = usia,
        this.pekerjaan = pekerjaan
    }
    sayHello = nama=>{
        return `Hai ${nama} my Name is ${this.nama}`
    }
}

const usep = new Person(`Usep Syaikal Arifin`, 25, `ReactJs Developer`)
const asep = new Person(`Asep Faisal Arifin`, 25, `Wiraswasta`)

console.log(usep.sayHello(`Linda`))
console.log(asep.sayHello(`Linda`))