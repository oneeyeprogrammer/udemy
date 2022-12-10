const Person = function(nama, usia, pekerjaan){
    this.nama = nama,
    this.usia = usia,
    this.pekerjaan = pekerjaan,
    this.sayHello = nama=>{
        console.info(`Hallo ${nama} my nama ${this.nama}`)
    }
}

const usep = new Person(`Usep Syaikal Arifin`, 25, `ReactJs Developer`)
usep.sayHello(`Linda`)