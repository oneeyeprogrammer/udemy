const company = `One Eye Company`

const sum = (value1, value2) =>{
    return value1+value2
}

class Company{
    constructor(nama, bidang, usia){
        this.nama = nama,
        this.bidang = bidang,
        this.usia = usia
    }

    myProfile = namaCustomer => {
        return `Hai ${namaCustomer}, Perusahaan ${this.nama} adalah perusahaan yang bergerak di bidang ${this.bidang} yang sudah berusia ${this.usia} Tahun`
    }
}

export {company, sum, Company}