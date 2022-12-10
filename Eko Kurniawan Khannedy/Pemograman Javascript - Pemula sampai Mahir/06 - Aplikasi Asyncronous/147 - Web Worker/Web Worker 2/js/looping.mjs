addEventListener("message", e =>{
    const totalLooping = e.data
    for (let i = 0; i < totalLooping; i++) {
        postMessage(i)     
    }
})