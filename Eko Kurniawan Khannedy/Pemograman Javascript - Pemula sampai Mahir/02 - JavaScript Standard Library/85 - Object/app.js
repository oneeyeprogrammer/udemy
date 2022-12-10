{
    const Employee = function (nama, usia, pekerjaan) {
        this.nama = nama,
            this.usia = usia,
            this.pekerjaan = pekerjaan
    }

    const usep = Object.freeze(new Employee(`Usep Syaikal Arifin`, 25, `Jobseeker`))
    const asep = Object.seal(new Employee(`Asep Faisal Arifin`, 25, `Joobseeker`))

    usep.nama = `Jackson Martinez`
    asep.nama = `Jackson Martinez`

    console.log(usep)
    console.log(asep)

}

{
    const target = {
        firstname: `Usep Syaikal Arifin`
    }
    const source = {
        lastname:`, S.T., M.Eng,. Ph.D`
    }

    Object.assign(target, source)
    console.log(target)
}

{
    // Object Property Name
    const employee = {
        nama:`Usep Syaikal Arifin`,
        usia:25,
        status:`Bekerja`,
        pekerjaan:`ReactJs Developer`
    }
    console.log(Object.values(employee))
    console.log(Object.getOwnPropertyNames(employee))
}