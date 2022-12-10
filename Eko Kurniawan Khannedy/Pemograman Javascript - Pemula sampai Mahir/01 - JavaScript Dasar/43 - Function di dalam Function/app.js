function outer(){
    function inner(){
        console.log(`Inner`)
    }
    inner()
}

outer()