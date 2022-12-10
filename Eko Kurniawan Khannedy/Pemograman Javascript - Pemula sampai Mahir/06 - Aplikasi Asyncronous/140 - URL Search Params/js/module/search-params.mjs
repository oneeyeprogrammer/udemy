export const searchParams = params =>{
    return  params.append("search", document.getElementById("search").value)
}