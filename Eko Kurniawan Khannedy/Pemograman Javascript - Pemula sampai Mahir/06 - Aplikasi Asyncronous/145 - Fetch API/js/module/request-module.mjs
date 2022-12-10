export const requestModule = () => {
    const request = new Request(
        `https://fetch-api.free.beeceptor.com`, {
            method: "POST",
            headers: {
                "Content-Type": "applications/json",
                "Accept": "applications/json"
            },
            body: JSON.stringify({
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            })
        }
    )
    return request
}