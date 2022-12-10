function* value(){
    yield 1
    yield 2
    yield 3
    yield 4
    return 5
}

const fGenerator = value()
console.log(fGenerator.next ().value)
console.log(fGenerator.next ())
console.log(fGenerator.next ())
console.log(fGenerator.next ())
console.log(fGenerator.next ())