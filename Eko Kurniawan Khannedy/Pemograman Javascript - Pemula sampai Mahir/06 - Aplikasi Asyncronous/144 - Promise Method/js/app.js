document.getElementById("btnGetData").addEventListener("click", () =>{
    import("./module/getProduct.mjs")
        .then(module => module.getProduct())
        .then(result =>{
            import("./module/displayRespon.mjs")
                .then(module => module.displayRespon(result))
        })
        .catch(result =>{
            import("./module/displayRespon.mjs")
                .then(module => module.displayResponError(result))
        })
        .finally(alert("Logging Selesai"))
})