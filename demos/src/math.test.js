const {multiply, sum} = require('./math');

test("adds 1 + 3 should be 4", ()=>{
    const rslt = sum(1,3);
    expect(rslt).toBe(4);
})



test("multiply 2 * 3 should be 6", ()=>{
    const rslt = multiply(2,3);
    expect(rslt).toBe(6);
})