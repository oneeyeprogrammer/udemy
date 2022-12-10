const menu = document.getElementById('menu')
console.log(menu)
console.log(menu.childNodes)

const liSecond = document.getElementById(`second`)
console.log(liSecond)
console.log(liSecond.textContent)
console.log(liSecond.previousSibling)
console.log(liSecond.nextSibling)

menu.removeChild(document.getElementById(`first`))
menu.removeChild(document.getElementById(`second`))
menu.removeChild(document.getElementById(`third`))