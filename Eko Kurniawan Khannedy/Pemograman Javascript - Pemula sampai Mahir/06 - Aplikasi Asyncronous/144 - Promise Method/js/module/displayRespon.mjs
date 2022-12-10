export const displayResponError = result =>{
    const respon = document.getElementById("respon")
    respon.innerHTML = result
}

export const displayRespon = result =>{
    const id = document.getElementById("id")
    const nama = document.getElementById("nama")
    const harga = document.getElementById("harga")

    id.innerHTML = result.id
    nama.innerHTML = result.name
    harga.innerHTML = result.price
}