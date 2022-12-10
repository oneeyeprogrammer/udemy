let result = true && true;
console.log(result)

result = true && false;
console.log(result)

result = true || false;
console.log(result)

result = !true
console.log(result)

const nilaiUjian = 70
const nilaiAbsensi = 70 
const lulusUjian = nilaiUjian > 75
const lulusAbsesni = nilaiAbsensi > 75

const lulus = lulusUjian && lulusAbsesni
console.log(`Status Mahasiswa = ${lulus}`)