const person = {
    firstName : `Usep Syaikal`,
    lastName : `Arifin`,
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(nama){
        const parseName = nama.split(` `)
        this.firstName = parseName[0]
        this.lastName = parseName[1]
    }
}
console.log(person.fullName)
person.fullName = `Jackson Martinez`
console.log(person.fullName)