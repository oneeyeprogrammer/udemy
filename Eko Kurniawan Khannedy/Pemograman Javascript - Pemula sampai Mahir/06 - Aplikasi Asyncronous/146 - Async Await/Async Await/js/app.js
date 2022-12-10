document.getElementById("btn").addEventListener("click", async () =>{
    const requestResult = await (await import("./module/requestModule.mjs")).requestModule()
    await (await import("./module/displayInfo.mjs")).displayInfo(requestResult)
})