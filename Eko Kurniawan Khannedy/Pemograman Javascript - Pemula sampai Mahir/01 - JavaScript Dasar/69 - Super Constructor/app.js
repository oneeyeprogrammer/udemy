class Employee{
    constructor(nama, usia, pekerjaan){
        this.nama = nama, 
        this.usia = usia,
        this.pekerjaan = pekerjaan
    }

    sayHello = nama=>{
        return `Hai ${nama} my Name is ${this.nama}`
    }
}

class Manager extends Employee{
    constructor(nama, usia, pekerjaan, jabatan){
        super(nama, usia, pekerjaan)
        this.jabatan = jabatan
    }
}

const usep = new Manager(`Usep Syaikal Arifin`, 25, `ReactJs Developer`, `Manager`)
const asep = new Employee(`Asep Faisal Arifin`, 25, `Wiraswasta`)

console.log(usep)
console.log(asep)