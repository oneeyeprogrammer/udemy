document.getElementById("login").addEventListener("click", () =>{
    import("./module/ajax-function.mjs")
        .then(module => module.ajaxLog())
})