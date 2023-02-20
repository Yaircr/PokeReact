import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe regresar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            done();
        })
    })
    test('getHeroeByIdAsync debe regresar un error con heroe inexistente', (done) => {
        const id = 123;
        getHeroeByIdAsync(id)
        .catch(
            error =>{
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
                done()
            }
        )
    })
})