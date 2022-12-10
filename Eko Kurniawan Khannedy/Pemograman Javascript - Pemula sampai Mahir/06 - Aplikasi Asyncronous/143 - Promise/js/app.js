document.getElementById("btn").addEventListener("click", () => {
    import("./module/promise-function.mjs")
        .then(module => module.getProduct())
        .then(result => {
            import("./module/display-function.mjs")
                .then(module => module.displayData(result))
        })
        .catch(result =>{
            import("./module/display-function.mjs")
                .then(module => module.displayData(result))
        })
})