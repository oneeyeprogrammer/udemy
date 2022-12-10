const ajax = new XMLHttpRequest()

ajax.addEventListener("readystatechange", () =>{
    if(ajax.readyState === 4){
        ajax.addEventListener("load", () =>{
            if(ajax.status === 200){
                const json = JSON.parse(ajax.responseText)
                import("./local-function.mjs").then(module => module.displayJSON(json))
            }else{
                import("./local-function.mjs").then(module => module.displayJSON({
                    response:`Telah terjadi kesalahan dengan kode Error ${ajax.status}`
                }))
            }
        })
    }
})
ajax.open("GET", "api/helo.json")

ajax.send() 


