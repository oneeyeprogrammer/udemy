class Person{
    constructor(nama, usia, pekerjaan){
        this.nama = nama,
        this.usia = usia,
        this.pekerjaan = pekerjaan
    }
    sayHello = nama =>{
        return `Hai ${nama} my Name is ${this.nama}`
    }
}

const usep = new Person(`Usep Syaikal Arifin`, 25, `ReactJs Developer`)
console.info(usep.sayHello(`Linda`))