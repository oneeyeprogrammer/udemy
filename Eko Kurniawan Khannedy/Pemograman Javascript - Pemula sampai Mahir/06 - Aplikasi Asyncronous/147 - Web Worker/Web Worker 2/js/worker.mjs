export const workerModule = urlFile => new Worker(urlFile)

export const workerModuleListener = worker =>{
    worker.addEventListener("message", e =>{
        document.getElementById("displayLooping").innerHTML = e.data
    })
}