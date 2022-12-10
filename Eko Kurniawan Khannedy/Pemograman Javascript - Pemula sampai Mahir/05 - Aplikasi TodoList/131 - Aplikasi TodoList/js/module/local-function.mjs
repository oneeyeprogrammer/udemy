import {
    htmlDisplayList
} from "./html-fragments.mjs";

export const clearTodoList = () => {
    const todoListBody = document.getElementById("todoListBody")
    while (todoListBody.firstChild) {
        todoListBody.removeChild(todoListBody.firstChild)
    }
}


export const displayTodoList = todoList => {
    clearTodoList()
    todoList.forEach((value, index) => {
        const searchText = document.getElementById("search").value.toLowerCase()
        if (value.toLowerCase().includes(searchText)) {
            const todoListBody = document.getElementById("todoListBody")
            todoListBody.innerHTML += htmlDisplayList(value, index)
        }
    });
}
