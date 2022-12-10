class Employee {
    constructor(nama, usia, pekerjaan) {
        this.nama = nama,
            this.usia = usia,
            this.pekerjaan = pekerjaan
    }
    sayHello = nama => {
        return `Hai ${nama} my Name is ${this.nama}`
    }

    get fullName(){
        return `${this.nama}`
    }

    set fullName(nama){
        this.nama = nama
    }
}

class Manager extends Employee{
    constructor(nama, usia, pekerjaan, jabatan){
        super(nama, usia, pekerjaan)
        this.jabatan = jabatan
    }
}

const usep = new Employee(`Usep Syaikal Arifin`, 25, `ReactJs Developer`)
const asep = new Manager(`Asep Faisal Arifin`, 26, `Manager`)

console.log(usep.nama)
console.log(usep.usia)
console.log(usep.sayHello(`Linda`))

console.log(asep.nama)
console.log(asep.usia)
console.log(asep.sayHello(`Linda`))

console.log(usep.fullName)
usep.fullName = `Usep Syaikal Arifin, S.T., M.Eng., Ph.D`
console.log(usep.fullName)

console.log(asep.fullName)
asep.fullName = `Asep Faisal Arifin, A.md., S.E.`
console.log(asep.fullName)