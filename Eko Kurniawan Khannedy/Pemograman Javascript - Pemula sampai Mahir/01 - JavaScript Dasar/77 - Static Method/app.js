class MathUtil{
    static sum = (...numbers)=>{
        let total = 0
        for(const number of numbers){
            total += number
        }
        return total
    }
}

console.info(MathUtil.sum(1, 2, 3, 4, 5))