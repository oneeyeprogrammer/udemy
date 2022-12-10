document.getElementById("btn").addEventListener("click", () =>{
    import("./module/promise-manual.mjs")
        .then(module => module.getNamaPromise())
        .then(result =>{
            document.getElementById("promiseManual").innerHTML = result
        })
    
        import("./module/promise-async.mjs")
            .then(module => module.getNamaPromiseAsync())
            .then(result => {
                document.getElementById("promiseAsync").innerHTML = result
            })
})