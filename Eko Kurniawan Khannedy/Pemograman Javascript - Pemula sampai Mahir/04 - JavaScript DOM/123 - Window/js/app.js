const content = document.getElementById("content")
const button = document.getElementsByTagName("button")[0]

const width = window.screen.width
const height =  window.screen.height
const loc = window.location

button.addEventListener("click", () => {
    content.innerHTML = `(${width}, ${height}) `
    content.innerHTML += `${location}`
})

