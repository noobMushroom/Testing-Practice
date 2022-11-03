const capitalize = (string)=>{
    let cap= `${string[0].toUpperCase()}${string.substring(1).toLowerCase()}`
    return cap
}

module.exports=capitalize;