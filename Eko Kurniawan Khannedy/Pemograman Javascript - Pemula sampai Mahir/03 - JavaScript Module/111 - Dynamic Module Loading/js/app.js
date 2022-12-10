document.getElementById(`btnSay`).addEventListener(`click`, () => {
    import('./module/module.mjs').then(module => {
        const text = document.getElementById(`nama`).value
        const Company = new module.Company(`ReactJs Developer`, `Programming React Js`, 20)
        const cardE = document.querySelector(`.card`)
        cardE.innerHTML = `<p>${Company.sayProfile(text)}</p>`
    })
})