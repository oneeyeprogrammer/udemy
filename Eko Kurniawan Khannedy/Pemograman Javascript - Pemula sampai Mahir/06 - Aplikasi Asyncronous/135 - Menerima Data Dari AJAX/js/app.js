const ajax = new XMLHttpRequest()
ajax.open("GET", "api/hello.json")

ajax.addEventListener("load", () =>{
    const json = JSON.parse(ajax.responseText)
    const response = document.getElementById("response")
    response.innerHTML = json.response
})
ajax.send()