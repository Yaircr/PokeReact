const personajes = ['Inu', 'Sessho', 'Kykio'];
const [,p2] = personajes;
console.log(p2)

const retornaArreglo= ()=>{
    return ['ABC', 123];
}
const [letras,numeros]= retornaArreglo();
console.log(letras)

const usarState=(valor)=>{
    return[valor, ()=>{console.log('Hola mudno')}];
}
const [nombre, setNombre] = usarState('Koku');
console.log(nombre)
setNombre()
