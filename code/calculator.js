const sum = (a, b) => {
    return a + b
}
const subtract = (a, b) => {
    return a - b
}
const multiply = (a, b) => {
    return a * b
}
const divide = (a, b) => {
    let num=(a / b).toFixed(2)
    return Number(num)
}


export{sum, subtract, multiply,divide}