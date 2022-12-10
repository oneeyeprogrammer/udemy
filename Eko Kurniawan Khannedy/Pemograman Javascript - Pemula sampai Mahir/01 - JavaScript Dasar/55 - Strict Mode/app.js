'use strict'

function cekStrictMode() {
    console.log(this)
}
cekStrictMode()

const objectPerson = function (nama, usia, alamat, pekerjaan) {
    this.nama = nama,
        this.usia = usia,
        this.alamat = alamat,
        this.pekerjaan = pekerjaan
}
const usep = new objectPerson(`Usep Syaikal Arifin`, 25, `Majalengka`, `ReactJs Developer`)

console.log(usep.usia)