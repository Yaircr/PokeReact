import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    test('usContext debe regresar un objeto', () => {
        const persona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman'
        };
        const avenger = usContext(persona)
        expect(avenger).toEqual({
            nombreClave: persona.clave,
            anios: persona.edad,
            latlng: expect.any(Object)
        })
    })
})