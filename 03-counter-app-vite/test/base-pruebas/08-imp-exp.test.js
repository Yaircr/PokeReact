import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe regresar un objeto heroe mediante ID', () => {
        const id=1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({ 
            id: 1,
            name: 'Batman',
            owner: 'DC' 
        })
    })
    test('getHeroeById debe regresar undefined si no existe el heroe', () => {
        const id=10;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual(undefined)
    })
    test('getHeroesByOwner regresa arreglo de DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        expect(heroes).toHaveLength(3)
        expect(heroes).toEqual([{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }])        
    })
    test('getHeroesByOwner regresa arreglo de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        expect(heroes).toHaveLength(2)
        expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner ))        
    })
})