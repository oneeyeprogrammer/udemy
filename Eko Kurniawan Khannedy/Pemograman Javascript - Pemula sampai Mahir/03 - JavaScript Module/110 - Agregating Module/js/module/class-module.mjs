export class Company{
    constructor(nama, bidang, usia){
        this.nama = nama,
        this.bidang = bidang,
        this.usia = usia
    }

    sayProfile = customer =>{
        return `Hai ${customer} perkenalkan ini adalah Perusahaan ${this.nama} yang bergerak dalam bidang ${this.bidang} selama ${this.usia} Tahun`
    }
}