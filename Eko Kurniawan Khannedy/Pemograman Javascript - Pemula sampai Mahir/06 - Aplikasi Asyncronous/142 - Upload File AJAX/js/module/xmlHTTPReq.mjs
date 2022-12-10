export const doUpload = () => {
    const ajax = new XMLHttpRequest()

    ajax.open("POST", `https://test-ajax.free.beeceptor.com`)

    ajax.addEventListener("readystatechange", () => {
        ajax.addEventListener("load", () => {
            if (ajax.status === 200) {
                if (ajax.readyState === 4) {
                    import("./display-result.mjs")
                        .then(module => module.displayLog(ajax.responseText))
                }
            } else {
                import("./display-result.mjs")
                    .then(module => module.displayLog(ajax.response))
            }
        })
    })

    // const form = new FormData()
    // form.append("username", document.getElementById("username").value)
    // form.append("name", document.getElementById("name").value)
    // form.append("profile", document.getElementById("profile").files.item[0])

    // ajax.send(form)
    import("./form-data.mjs")
        .then(module => module.formData(ajax))
}