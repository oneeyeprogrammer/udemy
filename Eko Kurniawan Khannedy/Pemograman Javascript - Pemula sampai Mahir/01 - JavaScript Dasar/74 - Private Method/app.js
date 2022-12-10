class Person {
    say = nama =>{
        if (nama){
            this.#sayWithName(nama)
        }else{
            this.#sayWithoutName()
        }
    }
    #sayWithoutName = () => {
        console.info(`Hello`)
    }
    #sayWithName = nama => {
        console.info(`Hai ${nama}`)
    }
}

const usep = new Person()
usep.say(`Usep Syaikal Arifin`)
usep.say()