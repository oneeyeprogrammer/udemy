class Counter{
    #counter = 0
    increment = ()=>{
        this.#counter++
    }
    decrement = ()=>{
        this.#counter--
    }
    get = ()=>{
        return this.#counter
    }
}

const counter = new Counter()
console.info(counter.get())
counter.increment()
console.info(counter.get())