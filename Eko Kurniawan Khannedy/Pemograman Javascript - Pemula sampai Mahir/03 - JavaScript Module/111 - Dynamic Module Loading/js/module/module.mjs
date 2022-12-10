export class Company{
    constructor(nama, bidang, usia){
        this.nama = nama,
        this.bidang = bidang,
        this.usia = usia
    }

    sayProfile = customer =>{
        return `Hai ${customer} Kami adalah Perusahaan ${this.nama}, kami bergerak dalam bidang ${this.bidang} sudah lebih dari ${this.usia} Tahun`
    }
}