const runningPop = confirm(`Anda yakin mau masuk`)

if (runningPop) {
    const inputPrompt = prompt(`Masukan nama anda : `)

    if (inputPrompt === `Usep Syaikal Arifin`) {
        alert(inputPrompt)
    } else {
        alert(`Not Valid`)
    }
}else{
    alert(`Bye Bye`)
}