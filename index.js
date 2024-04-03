//function untuk menentukan bilangan ganjil, ketika paramter sama dengan ganjil maka kembalikan return true, jika sebaliknyya maka return false

function bilanganGanjil(input) {
    let result = input % 2 !== 0
    return result
}

console.log(bilanganGanjil(5))

//function untuk menentukan bilangan genap, ketika paramter sama dengan genap maka kembalikan return true, jika sebaliknyya maka return false
function bilanganGenap(input) {
    let result = input % 2 == 0
    return result
}

console.log(bilanganGenap(6))

//sebuah fungsi untuk menghitung luas lingkaran

const   PI = Math.PI
const r = 2

function luasLingkaran (PI,r) {
 result = PI * r * r
 return result
}


console.log(luasLingkaran(7))