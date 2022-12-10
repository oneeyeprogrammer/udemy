const logo = document.getElementById("logo")
const attr = logo.getAttributeNode(`src`)
const alt = logo.getAttributeNode(`alt`)
const src = logo.getAttribute(`src`)

console.log(attr.name)
console.log(attr.value)
console.log(alt)
console.log(src)