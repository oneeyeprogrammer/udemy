document.getElementById("btnLogin").addEventListener("click", () =>{
    import("./functions.mjs")
        .then(module => module.doLogin())
})
