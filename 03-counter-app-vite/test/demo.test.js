describe('Pruebas en Demo', () => {

    test('Cant fail', () => {
        // Init
        const message1= 'Hola mundo';
        // Estimulo
        const message2= message1.trim();
        // Assert
        expect(message1).toBe(message2);
    });
    
});