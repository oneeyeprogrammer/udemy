const todoList = [
    "Belajar CSS Tailwind",
    "Belajar JavaScript Dasar",
    "Belajar JavaScript Advance"
]

const clearTodoList = () => {
    const todoListBody = document.getElementById("todoListBody")
    while (todoListBody.firstChild) {
        todoListBody.removeChild(todoListBody.firstChild)
    }
}

const displayTodoList = todoList => {
    clearTodoList()
    todoList.forEach((value, index) => {

        const searchText = document.getElementById("search").value.toLowerCase()

        if (value.toLowerCase().includes(searchText)) {
            const newTr = `<tr>
                                        <td><button type="submit" value="Done">Done</button></td>
                                        <td>${value}</td>
                                    </tr>`
            const todoListBody = document.getElementById("todoListBody")
            todoListBody.innerHTML += newTr
        }
    });
}

document.forms["todoForm"].addEventListener("submit", e => {
    e.preventDefault()

    const todo = document.forms["todoForm"]["todo"].value
    todoList.push(todo)

    document.forms["todoForm"].reset()

    displayTodoList(todoList)
})

document.getElementById("search").addEventListener("keypress", () =>{
    displayTodoList(todoList)
})

displayTodoList(todoList)