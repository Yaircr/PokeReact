const activo = true;

let mensaje = '';

if(activo){
    mensaje = 'activo'
}else{
    mensaje = 'inactivo'
}
console.log(mensaje)

const mensaje2 = (activo)?'Activo':'Inactivo';
console.log('Ternario ',mensaje2)

const mensaje3 = activo && 'Activo';
// const mensaje3 = (activo===true) && 'Activo';
console.log('Ternario/if corto ', mensaje3)