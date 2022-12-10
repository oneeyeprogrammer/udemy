const Person = function (nama, usia, pekerjaan) {
    this.nama = nama,
        this.usia = usia,
        this.pekerjaan = pekerjaan,
        this.sayHello = nama => {
            return `Hello ${nama} My name ${this.nama}`
        }
}
Person.prototype.sayBye=()=>{
    console.info(`Good Bye`)
}

const usep = new Person(`Usep Syaikal Arifin`, 25, `ReactJs Developer`)
const asep = new Person(`Asep Faisal Arifin`, 25, `Wiraswasta`)

usep.sayBye()