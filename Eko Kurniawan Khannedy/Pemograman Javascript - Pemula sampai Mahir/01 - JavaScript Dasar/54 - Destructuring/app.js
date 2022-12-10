// 1. Destructuring Array
const [nama, alamat, umur, ...others] = [`Usep Syaikal Arifin`, `Majalengka`, 25, `ReactJs Developer`, `Python Antusias`]
console.log(nama)
console.log(alamat)
console.log(umur)
console.log(others)

// 2. Destructuirng Object
const person = {
    firstName: `Muhammad Benjamin`,
    lastName: `Sarmowidagdo`,
    address: {
        street: `Jalan Belum Ada`,
        city: `Jakarta`,
        country: `Indonesia`
    },
    hobby: `Game`,
    channel: `ReactJs Developer`
}

const {
    firstName,
    lastName,
    address: {
        street,
        city,
        country
    },
    ...etc
} = person

console.log(firstName)
console.log(street)
console.log(city)

// 3. Destructuring Function Parameter Object
const displayPerson = ({
    firstName,
    lastName,
    address: {
        street,
        city,
        country
    },
    ...etc
}) => {
    console.log(firstName)
    console.log(city)
    console.log(lastName)
}

displayPerson(person)

// 4. Destructuring Function Parameter Array
const displayName = ([first, Second]) => {
    console.log(`${first+Second}`)
}
displayName([10, 10])

// 5. Destructuring Function Parameter Array Default Value
const showName = ([firstName, middleName, lastName = `Jackson`]) => {
    console.log(firstName)
    console.log(middleName)
    console.log(lastName)
}
showName([`Usep`, `Syaikal`])

// 6. Destructuring Function Parameter Object Default Value
const showPerson = ({
    firstName,
    middleName = `Jackson`,
    lastName
}) => {
    console.log(firstName)
    console.log(middleName)
    console.log(lastName)
}
showPerson(person)

// 7. Destructuring & Rename Properti
const takePerson = ({
    firstName: namaDepan,
    middleName: namaTengah = `Michael`,
    lastName: namaAkhir,
    address: alamat,
    ...etc
}) => {
    console.log(namaDepan)
    console.log(namaTengah)
    console.log(namaAkhir)
    console.log(alamat)
    console.log(etc)
}
takePerson(person)