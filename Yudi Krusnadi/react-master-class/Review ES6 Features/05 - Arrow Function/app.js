// 1. Function Declaration
function add(a = 0, b = 0) {
    return a + b
}

// 2. Function Expression
const  min = function(a=1, b=1){
    return a-b
}

// 3. Arrow Function
const multiple = (a=1, b=1) =>{
    return a*b
}

console.log(add())
console.log(min())
console.log(multiple())

