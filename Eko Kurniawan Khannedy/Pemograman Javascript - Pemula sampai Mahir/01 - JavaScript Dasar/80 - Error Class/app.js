class ValidationError extends Error{
    #field
    constructor(message, field){
        super(message)
        this.#field = field
    }
    getFieldError = ()=>{
        return this.#field
    }
}

class MathUtil{
    static sum = (...numbers)=>{
        if(numbers.length === 0){
            throw new ValidationError(`Masukan Minimal 1 Parameter Data`, `Numbers`)
        }else{
            let total = 0
            for (const number of numbers) {
                total+=number
            }
            return total
        }
    }
}

try {
    console.log(MathUtil.sum())
} catch (error) {
    if(error instanceof ValidationError){
        console.log(`Telah terjadi error : ${error.message} field ${error.getFieldError()}`)
    }else{
        console.log(`Telah terjadi error : ${error.message}`)
    }
}finally{
    console.log(`Kode Program Selesai di Eksekusi`)
}