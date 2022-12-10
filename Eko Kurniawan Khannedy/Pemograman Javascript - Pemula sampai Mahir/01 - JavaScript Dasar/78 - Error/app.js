 class MathUtil{
    static sum = (...numbers) =>{
        if(numbers.length === 0){
            throw new Error(`Masukan Minimal 1 Data!!!`)
        }else{
            let total = 0
            for (const number of numbers) {
                total+=number
            }
            return total
        }
    }
 }

const result = MathUtil.sum(1, 2, 3, 4, 5)
console.log(result)
const result2 = MathUtil.sum()
console.log(result2)