// 1. Let
let i = 20
for(let i = 0; i<10; i++){
    console.log(`Local Scope i - ${i}`)
}
console.log(`Global ${i}`)

// 2. var
var z = 20
for(var z = 0; z<10; z++){
    console.log(`Local Scope z - ${z}`)
}
console.log(`Global ${z}`)