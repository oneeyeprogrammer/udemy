var nama = "Usep Syaikal Arifin" // Global Variable

if(true){
    var b = 5  //Global Variable
    console.log(b)
    console.log(nama)
}

if(true){
    let c = 6
    console.log(c) //Local Variable
    console.log(nama)
}

const test = () =>{
    var a = 4 //Local Variable
    console.log(a)
    console.log(nama)
}

console.log(b)  
console.log(c)

test()