const company = `One Eye Programmer`

const sum = (value1, value2) =>{
    return value1 + value2
}

class Company{
    constructor(nama, bidang, usia){
        this.nama = nama, 
        this.bidang = bidang,
        this.usia = usia
    }

    sayMyProfile = (customer) =>{
        return `Hai ${customer} Perusahaan ${this.nama} adalaha perusahaan yang berderak di bidang ${this.bidang} sudah beroperasi selama ${this.usia}`
    }
}

export {company as namaPerusahaan, sum as total, Company as Perusahaan}