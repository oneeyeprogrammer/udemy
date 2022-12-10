document.getElementById("btnLooping").addEventListener("click", async () =>{
    const valueLooping = document.getElementById("inputLooping").value
    const worker = await (await import("./worker.mjs")).workerModule("./js/looping.mjs")
    worker.postMessage(valueLooping)
    await (await import("./worker.mjs")).workerModuleListener(worker)
})