export const doLogin = () =>{
    const ajax = new XMLHttpRequest()
    ajax.open("POST", `https://test-ajax.free.beeceptor.com`)
    ajax.addEventListener("readystatechange", () =>{
        ajax.addEventListener("load", () =>{
            if(ajax.status === 200){
                if(ajax.readyState === 4){
                    import("./display-login.mjs")
                    .then(module => module.displayLogin(ajax.responseText))
                }
            }else{
                import("./display-login.mjs")
                .then(module => module.displayLogin(ajax.response))
            }
        })
    })
    
    ajax.setRequestHeader("Content-Type", "applications/x-www-form-urlencoded")

    const form = new URLSearchParams()
    form.append("username", document.getElementById("username").value)
    form.append("password", document.getElementById("password").value)

    ajax.send(form)
}