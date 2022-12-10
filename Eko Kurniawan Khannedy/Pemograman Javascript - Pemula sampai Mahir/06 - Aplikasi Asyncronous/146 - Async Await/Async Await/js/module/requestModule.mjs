export const requestModule = () =>{
    const request = new Request("./api/product.json", {
        method:"GET"
    })
    return fetch(request)
                    .then(response => response.json())
}