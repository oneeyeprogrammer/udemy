document.getElementById("btnRun").addEventListener("click", async () =>{
    const valueLooping = document.getElementById("inputLooping").value
    await (await import("./module/worker.mjs")).workerModule("./js/module/looping.mjs", valueLooping)
})