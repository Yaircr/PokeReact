const saludar = function(nombre){
    return `Hola ${nombre}`;
}
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}
const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola mundo`;


console.log(saludar("Ben Kenobi"))
console.log(saludar2("Rei Kenobi"))
console.log(saludar3("Sheev Palpatine"))
console.log(saludar4())

const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'ToddPapy2023'
    });

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) =>
    ({
        uid: 'ABC567',
        username: nombre,
    });

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo)