export const displayJSON = json =>{
    const header = document.getElementById("response")
    header.innerHTML = json.response
}