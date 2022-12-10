export const nama = `ReactJs Developer Solo`
export const age = value =>{
    return value*2
}
export class Company{
    constructor(nama, bidang, usia){
        this.nama = nama,
        this.bidang = bidang,
        this.usia = usia
    }

    sayProfile = customer =>{
        return `Hai ${customer} perkenalan saya adalah perusahaan ${this.nama} yang bergerak dalam bidang ${this.bidang}. Perusahan ${this.nama} telah berkarya di bidang ${this.bidang} selama ${this.usia} Tahun`
    }
}