document.getElementById("btnLogin").addEventListener("click", () =>{
    import("./module/fetch-module.mjs")
        .then(module => module.fetchModule())
        .then(data => document.getElementById("respons").innerHTML = data.succes )
})  