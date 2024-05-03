//o machers


test('test obj', ()=> {
   const data = {name: 'Isma'}; 
   data.lastname = 'Ferre';
   expect(data).toEqual({name: 'Isma', lastname: 'Ferre'});
});



test('null', ()=> {
   const data = null; 
   expect(data).toBeNull();
   expect(data).toBeDefined();
   expect(data).not.toBeUndefined();
});


test('booleans', ()=> {
   expect(true).toEqual(true);
   expect(false).toEqual(false);
   
   expect(0).toBeFalsy();
   expect('').toBeFalsy();
   expect(false).toBeFalsy();
});


test('strings', ()=> {
   expect('Christopher').toMatch(/stop/);
});

test('array', ()=> {
   const number = [1,2,3,4,5];
   expect(number).toContain(4);
});

