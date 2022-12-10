class MathUtil{
    static sum = (...numbers)=>{
        if(numbers.length === 0){
            throw new Error(`Masukan Minimal 1 Data Number`)
        }else{
            let total = 0
        for (const number of numbers) {
            total+=number
        }
        return total
        }
    }
}

try {
    console.log(MathUtil.sum())
    // console.log(`Kode Error`)
} catch (error) {
    console.log(`${error.message}`)
    console.log(`Error Tertangkap`)
}finally{
    console.log(`Kode Program Selesai`)
}

class Counter{
    #counter
    constructor(){
        this.#counter = 0
    }
    next = ()=>{
        try{
           return this.#counter 
        }finally{
            this.#counter++
        }
    }
}

const counter = new Counter()
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())