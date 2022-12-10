const Employee = function(nama, usia, status, pekerjaan){
    this.nama = nama,
    this.usia = usia,
    this.status = status,
    this.pekerjaan = pekerjaan
}

const Manager = function(nama, usia, status, pekerjaan){
    Employee.call(this, nama, usia, status, pekerjaan)
}

Manager.prototype = Object.create(Employee.prototype)

Employee.prototype.sayHello = function(nama){
    console.info(`Hai ${nama} my Name is Employee ${this.nama}`)
}

Manager.prototype.sayHello = function(nama){
    console.info(`Hai ${nama} my Name is Manager ${this.nama}`)
}

const usep = new Manager(`Usep Syaikal Arifin`, 25, `Manager`, `ReactJs Developer`)
const asep = new Employee(`Asep Faisal Arifin`, 25, `Employee`, `Wiraswasta`)

usep.sayHello(`Linda`)
asep.sayHello(`Linda`)