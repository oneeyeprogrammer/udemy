const Employee = function(firstName){
    this.firstName = firstName
    this.sayHello = nama=>{
        console.info(`Hallo ${nama} my name is ${this.firstName}`)
    }
}

const Manager = function(firstName, lastName){
    Employee.call(this, firstName)
    this.lastName = lastName
}

const usep = new Manager(`Usep Syaikal`, `Arifin`)
usep.sayHello(`Linda`)