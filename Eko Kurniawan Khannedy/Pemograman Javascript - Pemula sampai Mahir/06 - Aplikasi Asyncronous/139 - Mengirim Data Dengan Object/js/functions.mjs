export const doLogin = () =>{
    const ajax = new XMLHttpRequest()
    ajax.open("POST", `https://test-ajax.free.beeceptor.com`)
    ajax.addEventListener("readystatechange", () =>{
        if(ajax.status === 200){
            if(ajax.readyState === 4){
                const header = document.getElementById("respon")
                header.innerHTML = ajax.responseText
            }
        }else{
            const header = document.getElementById("respon")
            header.innerHTML = `Telah terjadi error dengan kode error ${ajax.response}`
        }
    })
    ajax.setRequestHeader("Content-Type",  "applications/json")
    ajax.send(
        JSON.stringify({
            username : document.getElementById("username").value,
            password:document.getElementById("password").value
        })
    )
}