const add = (a, b, ...rest) =>{
    let total = 0;
    for(let i=0; i < rest.length; i++){
        total += rest[i]
    }
    return a + b + total
}

console.log(add(1, 2, 3, 4))