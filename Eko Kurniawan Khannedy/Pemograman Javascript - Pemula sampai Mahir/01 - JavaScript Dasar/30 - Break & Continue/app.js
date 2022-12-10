let i = 0

while(true){
    if(i>10){
        break
    }
    console.log(`Pengulangan While Loop ke ${i}`)
    i++
}

for(let z=0; z<=10;z++){
    if(z%2===0){
        continue
    }
    console.log(`Pengulangan For Loop ke ${z}`)
}