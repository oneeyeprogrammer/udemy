export default class{
    constructor(nama, bidang, usia){
        this.nama = nama,
        this.bidang = bidang,
        this.usia = usia
    }

    sayProfile = customer =>{
        return `Hai ${customer} Perkenalkan kami adalaha perusahaan ${this.nama}, kami bergerak dalam bidang ${this.bidang}. Kami telah berkarya dalam bidang ${this.bidang} selama ${this.usia} tahun`
    }
}