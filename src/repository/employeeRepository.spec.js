const employeeRepository = require('./employeeRepository');

describe('find employee', () => {
    it('shoud return employee when input a valid employee id', () => {
        // Arrange
        const id = '1';
        // Act 
        const result = employeeRepository.find(id);
        // Assert 
        expect(result.id).toBe(id);
    }) 
})