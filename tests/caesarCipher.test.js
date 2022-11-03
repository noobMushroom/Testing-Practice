import { cipher } from "../code/caesarCipher";

test('cipher single word', ()=>{
    expect(cipher('great', 2)).toBe('itgcv')
})

test('cipher a full sentence', ()=>{
    expect(cipher('hope this will work', 6)).toBe('nuvk znoy corr cuxq')
})

test('return the same case', ()=>{
    expect(cipher('Some cAp', 6)).toBe('Yusk iGv')
})

test('wraps a - z', ()=>{
    expect(cipher('amazing', 6)).toBe('gsgfotm')
})

test ('ignore numbers and special character', ()=>{
    expect(cipher("some random 44 sentence $", 6)).toBe('yusk xgtjus 44 yktzktik $')
})