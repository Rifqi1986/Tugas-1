function bilanganGanjil(input) {
    let result = input % 2 !== 0
    return result
}

console.log(bilanganGanjil(5))


function bilanganGenap(input) {
    let result = input % 2 == 0
    return result
}

console.log(bilanganGenap(6))