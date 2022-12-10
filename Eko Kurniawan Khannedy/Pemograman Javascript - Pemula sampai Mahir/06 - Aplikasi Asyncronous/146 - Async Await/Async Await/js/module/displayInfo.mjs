export const displayInfo = result =>{
    document.getElementById("ID").innerHTML = result.id
    document.getElementById("name").innerHTML = result.name 
    document.getElementById("price").innerHTML = result.price
}