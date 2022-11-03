const reverseString = require('../code/reverseSting')

test('reverseString',()=>{
    expect(reverseString('awesome')).toBe('emosewa');
})


test ('reverseString', ()=>{
    expect(reverseString('i will become a software developer')).toBe("repoleved erawtfos a emoceb lliw i")
})