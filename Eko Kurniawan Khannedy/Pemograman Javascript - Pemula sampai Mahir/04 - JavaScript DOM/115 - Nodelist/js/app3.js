const list = document.querySelectorAll('li')

console.log(list)

const menu1 = document.getElementById(`menu1`)
menu1.appendChild(document.createElement('li'))
menu1.appendChild(document.createElement('li'))

console.log(list)