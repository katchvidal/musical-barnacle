/**Funciones ejercicios 03 */


interface ISuperHeroe{
    nombre : string;
    edad: number;
    direccion : IDireccion;
    mostrarDireccion: () => string
}

interface IDireccion {
    calle : string;
    pais : string;
    ciudad : string;
}


const superheroe = {
    nombre : 'Spierman',
    edad : 30,
    direccion : {
        calle : 'Main',
        pais : 'USA',
        ciudad : 'NY city'
    },
    mostrarDireccion() {
        return `Ciudad: ${this.direccion.calle} ${this.direccion.ciudad} `
    }
}

const direccioon = superheroe.mostrarDireccion()
console.log( direccioon );

console.log(superheroe.direccion.ciudad.toString())