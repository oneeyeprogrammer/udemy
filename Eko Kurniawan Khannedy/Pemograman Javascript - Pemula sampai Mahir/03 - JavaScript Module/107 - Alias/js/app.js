import {
    namaPerusahaan,
    Perusahaan,
    total
} from "./module/aliasExport.mjs";
import {
    ageCompany as usiaKorporat,
    Company as Korporat,
    company as namaKorporat
} from "./module/aliasImport.mjs";



const nama = namaPerusahaan
const totalValue = total(15, 15)
const perusahaan = new Perusahaan(nama, `ReactJs Developer`, totalValue)

// console.log(perusahaan.nama)
// console.log(perusahaan.bidang)
// console.log(perusahaan.sayMyProfile(`Jackson`))

const korporatNama = namaKorporat
const korporatUsia = usiaKorporat(30)
const korporasi = new Korporat(korporatNama, `ReactJs`, korporatUsia)

console.log(korporasi.nama)
console.log(korporasi.bidang)
console.log(korporasi.showMyProfile(`Jackson`))