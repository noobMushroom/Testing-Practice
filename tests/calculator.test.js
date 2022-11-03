import {sum, subtract, multiply, divide} from "../code/calculator"


test('add two numbers', ()=>{
    expect(sum(4,5)).toBe(9);
})

test('add two decimal number', ()=>{
    expect(sum(4.5, 3.7)).toBeCloseTo(8.2)
})

test('subtract two numbers', ()=>{
    expect(subtract(3,2)).toEqual(1);
})

test('return negative number', ()=>{
    expect(subtract(1,5)).toEqual(-4);
})


test('multiply two numbers', ()=>{
    expect(multiply(5,3)).toEqual(15)
})

test('handling negative numbers', ()=>{
    expect(multiply(3,-4)).toEqual(-12);
})

test('dividing two numbers', ()=>{
    expect(divide(15,3)).toEqual(5);;
})

test('dividing two number', ()=>{
    expect(divide(17,3)).toBeCloseTo(5.67);
})

