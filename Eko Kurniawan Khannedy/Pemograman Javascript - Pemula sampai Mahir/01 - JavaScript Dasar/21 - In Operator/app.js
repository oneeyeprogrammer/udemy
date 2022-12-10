const person = {
    nama:`Usep Syaikal Arifin`,
    alamat:`Majalengka`,
    status:`Single`,
    cek:undefined
}

const student = {
    nama:`Asep Faisal Arifin`,
    alamat:undefined
}

const arrayNama = [null, `Usep Syaikal Arifin`, null]

const result = `nama` in person
console.log(result)
console.log(`cek` in person)
console.log(3 in arrayNama)