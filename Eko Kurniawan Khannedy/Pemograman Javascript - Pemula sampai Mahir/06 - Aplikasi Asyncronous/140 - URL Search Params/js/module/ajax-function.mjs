// import { searchParams } from "./search-params.mjs"

export const ajaxLog =  () =>{
    const ajax = new XMLHttpRequest()
    const params = new URLSearchParams()
    params.append("search", document.getElementById("search").value)

    ajax.open("GET", `https://test-ajax.free.beeceptor.com?${params.toString()}`)
        
        ajax.addEventListener("readystatechange", () => {
            if(ajax.status === 400){
                if(ajax.readyState === 4){
                    import("./display-function.mjs")
                    .then(module => module.displayData(ajax))
                }
            }else{
                import("./display-function.mjs")
                .then(module => module.displayData(ajax))
            }
        })
        // console.log(param)
        ajax.send()
}