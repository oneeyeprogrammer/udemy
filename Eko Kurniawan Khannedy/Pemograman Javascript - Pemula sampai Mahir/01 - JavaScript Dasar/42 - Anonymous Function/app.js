const say = function(name){
    console.log(`Hello nama saya ada ${name}`)
}
say(`Usep Syaikal Arifin, S.T., M.Eng, Ph.D`)

function giveMeName(callback){
    callback(`Usep`)
}

giveMeName(function(nama){
    console.log(nama)
})