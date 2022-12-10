setTimeout(() =>{
    const header = document.createElement("h1")
    header.innerHTML = "Programmer Zaman Now"
    document.body.appendChild(header)
}, 5000)

setInterval(() => {
    const header2 = document.getElementsByTagName("h2")[0]
    header2.innerHTML = new Date().toString()
}, 1000);