const person = {
    nama: `Usep Syaikal Arifin`,
    alamat: `Majalengka`,
    usia: 25,
    pekerjaan: `ReactJs Developer`,
    status: `Single`
}

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element)
    }
}

const nama = `Asep Faisal Arifin`
const alamat = `Tasikmalaya`

with(person) {
    console.log(nama)
    console.log(alamat)
    console.log(usia)
    console.log(pekerjaan)
    console.log(status)
}