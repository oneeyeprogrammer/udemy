const buttons = document.getElementsByTagName("button")
for (const button of buttons) {
    button.addEventListener("click", e => {
        const canvas = document.getElementsByTagName("Canvas")[0]
        const color = e.target.value
        canvas.style.backgroundColor = color
    })
}