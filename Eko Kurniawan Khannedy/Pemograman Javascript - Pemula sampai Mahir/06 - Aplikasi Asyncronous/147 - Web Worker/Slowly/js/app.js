document.getElementById("btnCounter").addEventListener("click", async () =>{
    const value = document.getElementById("inputValue").value
    await (await import("./module/showLog.mjs")).showLog(value)
})