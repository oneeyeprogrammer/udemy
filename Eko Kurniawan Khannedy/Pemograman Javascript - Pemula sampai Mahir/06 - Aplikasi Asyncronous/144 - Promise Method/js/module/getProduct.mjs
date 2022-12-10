export const getProduct = () =>{
    return new Promise((resolve, reject) =>{
        const ajax = new XMLHttpRequest()
        ajax.open("GET", `./api/product.json`)

        ajax.addEventListener("readystatechange", () =>{
            ajax.addEventListener("load", () =>{
                if(ajax.status === 200){
                    if(ajax.readyState === 4){
                        resolve(JSON.parse(ajax.responseText))
                    }else{
                        reject(`Telah terjadi Error dengan Kode ${JSON.parse(ajax.readyState)}`)
                    }
                }else{
                    reject(`Telah Terjadi Error dengan Kode ${JSON.parse(ajax.status)}`)
                }
            })
        })

        ajax.send()
    })
}