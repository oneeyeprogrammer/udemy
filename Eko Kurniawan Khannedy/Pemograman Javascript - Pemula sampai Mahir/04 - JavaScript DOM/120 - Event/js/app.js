const h1 = document.getElementById("header1")
const canvas = document.getElementsByTagName("Canvas")[0]

canvas.addEventListener('click', e=>{
    h1.textContent = `U Alredy Click in Kordinat x : ${e.x} y : ${e.y}`
})