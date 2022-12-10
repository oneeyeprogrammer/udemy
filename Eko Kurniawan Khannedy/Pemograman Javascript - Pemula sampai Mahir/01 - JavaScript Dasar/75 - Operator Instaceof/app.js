class Employee{
    #nama
    #usia
    #pekerjaan
    constructor(nama, usia, pekerjaan){
        this.#nama = nama,
        this.#usia = usia,
        this.#pekerjaan = pekerjaan
    }

    showProfile = profile=>{
        if(profile === `Profile`){
            return this.#sayProfile()
        }
    }

    #sayProfile = ()=>{
        return `Hai my Name is ${this.#nama} saya berusia ${this.#usia} tahun status pekerjaan ${this.#pekerjaan}`
    }
}

class Manager extends Employee{
    #nama
    #usia
    #pekerjaan
    #jabatan
    constructor(nama, usia, pekerjaan, jabatan){
        super(nama, usia, pekerjaan),
        this.#nama = nama,
        this.#usia = usia,
        this.#pekerjaan = pekerjaan,
        this.#jabatan = jabatan
    }
    showProfile = profile=>{
        if(profile === `Profile`){
            return this.#sayProfile()
        }
    }

    #sayProfile = ()=>{
        return `Hai my Name is ${this.#nama} saya berusia ${this.#usia} tahun status pekerjaan ${this.#pekerjaan} dengan jabatan ${this.#jabatan}`
    }
}

const usep = new Employee(`Usep Syaikal Arifin`, 25, `Jobseeker`)
const asep = new Manager(`Asep Faisal Arifin`, 26, `Bekerja`, `Manager`)

console.info(usep.showProfile(`Profile`))
console.info(asep.showProfile(`Profile`))

console.info(usep instanceof Employee)
console.info(asep instanceof Employee)
console.info(usep instanceof Manager)
console.info(asep instanceof Manager)