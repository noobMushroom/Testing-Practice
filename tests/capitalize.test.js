const capitalize = require('../code/capitalize')

test('return capitalize', ()=>{
    expect(capitalize('cat')).toBe('Cat')
})

test('work with many string', ()=>{
    expect(capitalize('my cat\'s name is chloe')).toBe("My cat's name is chloe")
})

test('work with any kind of letter',()=>{
    expect(capitalize('gREAT')).toBe('Great');
})


test('work with any kind of letter', ()=>{
    expect(capitalize('gReaT')).toBe('Great')
})