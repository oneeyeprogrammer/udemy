export const getProduct = () => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest()
        ajax.open("GET", `./api/prduct.json`)
        ajax.addEventListener("readystatechange", () => {
            ajax.addEventListener("load", () => {
                if (ajax.status === 200) {
                    if (ajax.readyState === 4) {
                        resolve(JSON.parse(ajax.responseText))
                    }else{
                        reject(JSON.parse(ajax.response))
                    }
                }else{
                    reject(`Telah terjadi Error dengan Error ${ajax.status}`)
                }
            })
        })
        ajax.send()
    })
}   