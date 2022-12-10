const person = {
    nama:`Usep Syaikal Arifin`,
    alamat:`Majalengka`,
    pekerjaan:`ReactJs Developer`,
    status:`Single`
}

const names = [`Usep`, `Syaikal`, `Arifin`]


for (const property in person){
    console.log(`${property}`)
}

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element)
    }
}

for (const index in names) {
    if (Object.hasOwnProperty.call(names, index)) {
        const element = names[index];
        console.log(element)
    }
}