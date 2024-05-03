describe('Set up', ()=> {

    beforeAll(() => {
        console.log('beforeAll Set');
    });

    beforeEach(() => {
        console.log('beforeEach test');
    });

    afterEach(() => {
        console.log('fterEach test');
    });

    test('case 1', () => {
        expect(1+1).toBe(2);
    });
    test('case 2', () => {
        expect(3-1).toBe(2);
    });
    describe('Sub Set', ()=> {

        beforeAll(() => {
            console.log('beforeAll Sub Set');
        });

        test('case 3', () => {
            expect(1+1).toBe(2);
        });
        test('case 4', () => {
            expect(3-1).toBe(2);
        });
    });

    afterAll(() => {
        console.log('afterAll Bye Bye');
    });
});