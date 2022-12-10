const form = document.querySelector("form[name=commentForm]")

form.addEventListener("submit", e => {
    const comment = document.getElementById("comment").value
    const from = document.getElementById("from").value
    const commentList = document.getElementById("commentList")

    commentList.innerHTML += `<p>${comment} ${from}</p>`

    document.forms["commentForm"].reset()

    e.preventDefault()
})