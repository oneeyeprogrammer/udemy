export const displayData = ajax =>{
    const header = document.getElementById("respon")
    header.innerHTML = ajax.responseText
}