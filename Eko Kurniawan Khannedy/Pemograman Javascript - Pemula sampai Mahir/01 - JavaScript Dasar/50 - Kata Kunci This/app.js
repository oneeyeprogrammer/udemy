// 1. Global Scope
console.log(this)

// 2. Function
function sample(){
    console.log(this)
    function sampleInner(){
        console.log(this)
    }
    sampleInner()
}
sample()

// 3. Function expression
const expressionFunc1 = function(){
    console.log(this)
}
expressionFunc1()

// 4. Object
const person = {
    nama : `Usep Syaikal Arifin`,
    sayHello : function(nama){
        console.log(`Hello ${nama} my Name is ${this.nama}`)
    }
}

person.sayHello(`Jack`)