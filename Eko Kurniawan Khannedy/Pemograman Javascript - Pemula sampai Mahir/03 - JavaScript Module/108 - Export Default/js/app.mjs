import {
    default as sayHello
} from './module/default-function.mjs'
import {
    default as nama
} from './module/default-variable.mjs'
import {
    default as Perusahaan
} from './module/default-class.mjs'

const say = sayHello(nama)
console.log(say)

const company = new Perusahaan(nama, `ReactJs Developer`, 30)

console.log(company.nama)
console.log(company.bidang)
console.log(company.usia)
console.log(company.sayProfile(`Customer`))