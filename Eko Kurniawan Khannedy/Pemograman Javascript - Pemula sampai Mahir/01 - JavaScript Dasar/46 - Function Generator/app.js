function* createNames(){
    yield `Usep`
    yield `Syaikal`
    yield `Arifin`
}

const names = createNames()

for (const iterator of names) {
    console.log(iterator)
}
const buatGanjilArray = (value)=>{
    let result = []
    for (let i = 0; i<=value; i++){
        console.log(`Pengulangan ke = ${i}`)
        result.push(i)
    }
    return result
}

buatGanjilArray(10)

function* buatGanjil(value){
    for(let i = 1;i<=value;i++){
        if(i%2===1){
            console.info(`Yield ${i}`)
            yield i
        }
    }
}

buatGanjil(20).next().value
// for (const iterator of bilanganGanjil) {
//     console.log(iterator)
// }