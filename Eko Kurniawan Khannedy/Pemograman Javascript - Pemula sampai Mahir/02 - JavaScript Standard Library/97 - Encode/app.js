{
    const url = `http://www.contoh.com/?name=Eko Kurniawan Khannedy`
    // console.info(url)

    const encode = encodeURI(url)
    // console.log(encode)

    const decoded = decodeURI(encode)
    // console.log(decoded)
}

{
    const value = `Eko&Kurniawan=Khannedy`
    const url = `http://www.contoh.com/?name=`

    const encode = encodeURIComponent(value)
    console.log(encode)

    const decoded = decodeURIComponent(encode)
    console.log(decoded)

    const newURL = `${url}${value}`
    console.log(newURL)
}