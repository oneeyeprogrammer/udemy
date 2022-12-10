const company = `ReactJs Applications`

const ageCompany = year =>{
    return year
}

class Company{
    constructor(nama, bidang, usia){
        this.nama = nama,
        this.bidang = bidang,
        this.usia = usia
    }
    showMyProfile = customer =>{
        return `Hai ${customer}, Perkenalkan ini adalah Perusahaan ${this.nama} yang berkarya pada bidang${this.bidang}. ${this.nama} sudah berkarir dalam bidang ${this.bidang} selama ${this.usia} Tahun`
    }
}

export {company, ageCompany, Company}