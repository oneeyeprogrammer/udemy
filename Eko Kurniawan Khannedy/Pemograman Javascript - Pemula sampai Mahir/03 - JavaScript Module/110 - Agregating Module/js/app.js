import {
    nama,
    age,
    Company
} from './module/aggregating-module.mjs'

const namaPerusahaan = nama
const usiaPerusahaan = age(20)
const perusahaan = new Company(namaPerusahaan, `ReactJs Developer`, usiaPerusahaan)

console.log(perusahaan.nama)
console.log(perusahaan.bidang)
console.log(perusahaan.usia)
console.log(perusahaan.sayProfile(`Customer`))