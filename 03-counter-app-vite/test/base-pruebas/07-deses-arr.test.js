import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => {
    test('Debe regresar un string y numero', () => {
        const [cadena, numero] = retornaArreglo();

        expect(cadena).toBe('ABC');
        expect(numero).toBe(123);
        expect(typeof(cadena)).toBe('string')
        expect(typeof(numero)).toBe('number')
        expect(cadena).toEqual(expect.any(String))
    })
})