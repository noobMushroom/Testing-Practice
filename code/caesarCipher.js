const cipher = (value, key) => {
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let ciphered = []
    for (let letter of value) {
        let newLetter = letters.find(ltr => ltr === (letter.toLowerCase()));
        let index = letters.indexOf(newLetter)
        let num = index + key
        if (num > 25) num = num-26  
        if (isLetter(letter)) {
            const cipheredLetter = letters[(num) % 26]
            isCapital(letter) ? ciphered.push(cipheredLetter.toUpperCase()) : ciphered.push(cipheredLetter);
        } else {
            ciphered.push(letter)
        }
    }
    return ciphered.join('')
}


function isCapital(letter) {
    let pattern = /[A-Z]/
    return pattern.test(letter)
}

function isLetter(letter) {
    let pattern = /[A-Za-z]/
    return pattern.test(letter)
}



export { cipher }