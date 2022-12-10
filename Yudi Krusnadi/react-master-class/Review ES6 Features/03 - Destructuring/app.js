const person = {
    nama:"Usep Syaikal Arifin",
    age:25,
    pekerjaan:"ReactJs"
}

const {nama, age, pekerjaan} = person
console.log(nama)
console.log(age)
console.log(pekerjaan)

for (const key in person) {
    if (Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element)
    }
}

const arrayPerson = Object.values(person)
for (const e of arrayPerson) {
    console.log(e)
}