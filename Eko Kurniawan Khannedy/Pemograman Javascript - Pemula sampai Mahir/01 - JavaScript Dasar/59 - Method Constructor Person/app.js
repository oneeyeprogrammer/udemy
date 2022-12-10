const Person = function(nama, usia, pekerjaan){
    this.nama = nama,
    this.usia = usia,
    this.pekerjaan = pekerjaan,
    this.sayHello = (nama)=>{
        console.info(`Hello ${nama} my name is ${this.nama}`)
    }
}

const usep = new Person(`Usep`, 25, `ReactJs Developer`)
usep.sayHello(`Linda`)