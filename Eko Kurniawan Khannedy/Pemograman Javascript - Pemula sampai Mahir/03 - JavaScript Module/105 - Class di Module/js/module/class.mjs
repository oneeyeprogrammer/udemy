export class Person{
    constructor(nama){
        this.nama = nama
    }

    sayHello = nama =>{
        return `Hai ${nama} my Name is ${this.nama}`
    }
}
