import { displayTodoList, } from "./module/local-function.mjs"

const todoList = [
    "Belajar CSS Taildwind",
    "Belajar JavaScript Advance"
]

document.forms["todoList-form"].addEventListener("submit", e => {
    e.preventDefault()
    todoList.push(e.target["todo"].value)
    e.target.reset()
    displayTodoList(todoList)
})

document.getElementById("search").addEventListener("keyup", () =>{
    displayTodoList(todoList)
})
document.getElementById("search").addEventListener("keydown", () =>{
    displayTodoList(todoList)
})

displayTodoList(todoList)

document.addEventListener("click", e =>{
    if(e.target.classList.contains("btnList")){
        todoList.splice(e.target.value, 1)
        displayTodoList(todoList)
    }
})