export const workerModule = (urlFile, valueLooping) => {
    const worker = new Worker(urlFile)
    worker.postMessage(valueLooping)
    worker.addEventListener("message", e =>{
        document.getElementById("outputLooping").innerHTML = e.data
    })
}