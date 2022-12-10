let counter=0
function hitMe() {
    counter++
}
hitMe()
hitMe()
console.log(counter)

// Nested Function Scope
function first(){
    let firstName = `Usep Syaikal Arifin`
    function second(){
        console.log(`Hi ${firstName}`)
    }
    second()
}
first()