const reverseString = (string) =>{
    let str=[];
    for (let letter of string){
        str.push(letter)
    }
    let revString= str.reverse()
    return revString.join('')
}

module.exports=reverseString;