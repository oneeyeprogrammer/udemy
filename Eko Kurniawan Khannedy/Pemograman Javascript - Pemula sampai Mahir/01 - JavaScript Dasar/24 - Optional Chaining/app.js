const person = {}
let country
if(person.address === undefined && person.address === null){
    country = person.address.country
}
console.log(person.address)

const human = {
    address:{
        country:`Majalengka`
    }
}
console.log(human?.address?.country)