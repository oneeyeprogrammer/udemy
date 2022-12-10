import * as Company from './module/module.mjs'

const namaPerusahaan = Company.nama
const karirPerusahaan = Company.age(20)
const perusahaan = new Company.Company(namaPerusahaan, `ReactJs Developer`, karirPerusahaan)

console.log(perusahaan.nama)
console.log(perusahaan.bidang)
console.log(perusahaan.usia)
console.log(perusahaan.sayProfile(`Customer`))