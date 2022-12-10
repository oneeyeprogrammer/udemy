class Employe{
    constructor(nama, usia, pekerjaan){
        this.nama = nama, 
        this.usia = usia,
        this.pekerjaan = pekerjaan
    }
    sayHello = nama=>{
        return `Hai ${nama} my Name is Employe ${this.nama}`
    }
}

class Manager extends Employe{
    sayHello = nama=>{
        return `Hai ${nama} my Name is Manager ${this.nama}`
    }
}

const usep = new Manager(`Usep Syaikal Arifin`, 25, `ReactJs Developer`)
const asep = new Manager(`Asep Faisal Arifin`, 25, `Wiraswasta`)

console.log(usep)
console.log(asep)
console.log(usep.sayHello(`Jackson`))