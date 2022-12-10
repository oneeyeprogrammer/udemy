class Person {
    constructor(name, age, job) {
        this.name = name,
            this.age = age,
            this.job = job
    }

    myProfile(){
        return `Hallo nama saya ${this.name} saya berusia ${this.age} tahun, sekarang saya bekerja sebagai ${this.job} di PT Pertamina Indonesia`
    }
}

class Member extends Person{
    constructor(name, age, memberID){
        super(name, age)
        this.memberID = memberID
    } 
}

const usep = new Person(
    `Usep Syaikal Arifin`,
    25,
    `ReactJs Developer`
)

const asep = new Person(
    `Asep Faisal Arifin`,
    26,
    123
)

console.log(usep.name)
console.log(usep.job)
console.log(usep.myProfile())

console.log(asep.name)
console.log(asep.age)
console.log(asep.myProfile())