const say = function sayHello(name){
    return `Hello nama saya ${name}`
}

const runningSay = (callback)=>{
   return callback
}

const result = runningSay(say(`Usep Syaikal`))

console.log(result)