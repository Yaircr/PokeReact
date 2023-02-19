import heroes, {owners}  from '../data/heroes'

const getHeroeById = (id) =>{
    return (heroes.find(
        (heroe) =>heroe.id===id  
        )
    )
}
//console.log(getHeroeById(2))
const [ownerA, ownerB] = owners
const getHeroesByOwner = (owner) => {
    return (heroes.filter(
        (heroe) => heroe.owner===owner
    ))
}
//console.log(getHeroesByOwner(ownerA))
//console.log(getHeroesByOwner(ownerB))
export{
    getHeroeById as default,
    getHeroesByOwner
}