export const formData = ajax =>{
    const form = new FormData()
    form.append("username", document.getElementById("username").value)
    form.append("name", document.getElementById("name").value)
    form.append("profile", document.getElementById("profile").files.item(0))
    console.log("test")
    ajax.send(form)
}