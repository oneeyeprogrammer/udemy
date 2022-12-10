{
    const original = `Usep&Syaikal=Arifin`

    const encode = btoa(original)
    console.log(encode)

    const decode = atob(encode)
    console.log(decode)
}