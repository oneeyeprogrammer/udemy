document.getElementById("btnLog").addEventListener("click", () =>{
    import("./module/xmlHTTPReq.mjs")
        .then(module => module.doUpload())
})