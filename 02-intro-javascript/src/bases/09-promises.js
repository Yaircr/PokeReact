import getHeroeById from './bases/08-imports-exports'
/*const promesa = new Promise(
    (resolve, reject) => {
       setTimeout(()=>{

        const heroe = getHeroeById(2);
        //console.log(heroe)
        resolve(heroe)
        //reject('No se pudo encontrar el heroe')
       },2000) 
    }
);

promesa.then(
    (heroe) => {
        console.log('heroe', heroe)
    }
).catch(
    err => console.warn(err)
)*/
const getHeroeByIdAsync = (id) => {
    return new Promise(
        (resolve, reject) => {
           setTimeout(()=>{
    
            const heroe = getHeroeById(id);
            //console.log(heroe)
            if(heroe){
                resolve(heroe)
            }else{
                reject('No se pudo encontrar el heroe')
            }
           },2000) 
        }
    );
}
getHeroeByIdAsync(3)
.then(console.log)
.catch(console.warn)