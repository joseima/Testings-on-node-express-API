const Person = require('./person');


describe('Tests for person', () => {
    // Arrange
    let person
    beforeAll(() => {
        person = new Person('Subject ', 45, 1.7);
    })
    test('should return down', () => {
        // Arrange
        person.weight = 45;
        //Act
        const imc = person.calcIMC();
        // Assert
        expect(imc).toBe('down');
    })
    
    test('should return normal', () => {
        person.weight = 65;
        const imc = person.calcIMC();
        expect(imc).toBe('normal');
    })
})
