document.getElementById("btnLogin").addEventListener("click", () =>{
    import("./module/login-function.mjs")
        .then(module => module.doLogin())
})