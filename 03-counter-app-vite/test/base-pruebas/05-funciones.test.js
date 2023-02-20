import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    test('getUser debe regresar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        expect(testUser).toEqual(user);
    })
    test('getUsuarioActivo debe regresar un objeto', () => {
        const name = 'Fernando';
        const activo = getUsuarioActivo(name);
        expect(activo).toEqual({
            uid: 'ABC567',
            username: name
        })
    })
 })