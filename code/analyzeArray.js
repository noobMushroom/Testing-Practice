const analyzeArray = (array) => {
    let total = array.reduce((cur, perv) => cur + perv, 0)
    let length = array.length;
    return {average:total/length, min:Math.min(...array), max:Math.max(...array),length:length}
}


export { analyzeArray }