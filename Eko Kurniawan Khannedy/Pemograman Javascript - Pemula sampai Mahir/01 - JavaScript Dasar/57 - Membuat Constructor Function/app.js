// 1. Contructor Function
const Person = function (nama, usia, pekerjaan) {
    this.nama = nama,
        this.usia = usia,
        this.pekerjaan = pekerjaan
}

const usep = new Person(`Usep Syaikal Arifin`, 25, `ReactJs Developer`)
console.log(usep.nama)