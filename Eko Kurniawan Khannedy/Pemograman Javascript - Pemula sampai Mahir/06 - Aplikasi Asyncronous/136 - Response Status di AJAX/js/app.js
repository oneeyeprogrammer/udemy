const ajax = new XMLHttpRequest()
ajax.open("GET", "api/hello.json")

ajax.addEventListener("load", () => {
    if(ajax.status === 200){
        const json = JSON.parse(ajax.responseText)
        import("./local-function.mjs").then(module => module.displayJSON(json))
    }else{
        import("./local-function.mjs").then(module => module.displayJSON({
            response:`Terjadi kesalahan dengan ${ajax.status}`
        }))
    }
})

ajax.send()