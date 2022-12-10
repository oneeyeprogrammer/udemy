const person = {
    nama : `Usep Syaikal Arifin`,
    sayHello : nama=>{
        console.log(`Hai ${nama}`)
    }
}

const usep = person
console.log(usep.nama)
usep.sayHello(`Zack`)