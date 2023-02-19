const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

//const {nombre, edad, clave} = persona;
/*console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);*/
/*console.log(nombre);
console.log(edad);
console.log(clave);*/

const usarContext = ({nombre, edad, clave, rango = 'Capitan'})=>{
    //console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:14.125,
            lng:69.42
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = usarContext(persona);
console.log(nombreClave, anios);
console.log(lat,lng);

