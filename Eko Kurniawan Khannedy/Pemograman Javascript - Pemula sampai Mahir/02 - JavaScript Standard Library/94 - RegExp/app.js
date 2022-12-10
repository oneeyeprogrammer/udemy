{
    const text = `Halo nama saya Usep Syaikal Arifin
    asal saya dari Majalengka Jawa Barat
    sekarang saya bekerja di PT Telkomsel Indonesia sebagai
    ReactJs Developer & AWS Developer`

    const regex1 = /saya/i

    const result1 = regex1.exec(text)

    // console.log(result1)
}

{
    const text = `Halo nama saya Usep Syaikal Arifin
    asal saya dari Majalengka Jawa Barat
    sekarang saya bekerja di PT Telkomsel Indonesia sebagai
    ReactJs Developer & AWS Developer`

    const regex1 = /saya/ig

    let result1
    while((result1 = regex1.exec(text))!==null){
        // console.log(result1)
    }

    // console.log(result1)
}

{
    const text = "Halo nama saya Usep Syaikal Arifin\nHalo asal saya dari Majalengka Jawa Barat\nHalo sekarang saya bekerja di PT Telkomsel Indonesia sebagai\nHalo ReactJs Developer & AWS Developer"

    const regex1 = /^h..o/igm

    let result1
    while((result1 = regex1.exec(text))!==null){
        // console.log(result1)
    }

    // console.log(result1)
}

{
    const text = "usep asep isep qsep jsep ksep"
    const regex1 = /u.ep/igm

    let result
    while((result = regex1.exec(text)) !== null){
        // console.log(result)
    }
}

{
    const text = "eka eki eku eke eko eda edi edu ede edo"
    const regex1 = /ek[aiueo]/igm

    let result
    while((result = regex1.exec(text)) !== null){
        // console.log(result)
    }
}

{
    const text = "Halo nama saya Usep Syaikal Arifin\nHalo asal saya dari Majalengka Jawa Barat\nHalo sekarang saya bekerja di PT Telkomsel Indonesia sebagai\nHalo ReactJs Developer & AWS Developer"

    const result = text.match(/saya/igm)

    console.log(result)
}
{
    const text = "Halo nama saya Usep Syaikal Arifin\nHalo asal saya dari Majalengka Jawa Barat\nHalo sekarang saya bekerja di PT Telkomsel Indonesia sebagai\nHalo ReactJs Developer & AWS Developer"

    const result = text.search(/saya/igm)

    console.log(result)
}
{
    const text = "Halo nama saya Usep Syaikal Arifin\nHalo asal saya dari Majalengka Jawa Barat\nHalo sekarang saya bekerja di PT Telkomsel Indonesia sebagai\nHalo ReactJs Developer & AWS Developer"

    const result = text.split(/saya/igm)

    console.log(result)
}
{
    const text = "Halo nama saya Usep Syaikal Arifin\nHalo asal saya dari Majalengka Jawa Barat\nHalo sekarang saya bekerja di PT Telkomsel Indonesia sebagai\nHalo ReactJs Developer & AWS Developer"

    const result = text.replace(/saya/ig, "kamu")

    console.log(result)
}