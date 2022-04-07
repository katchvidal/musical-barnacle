/**Desestructuracion de objeto */


interface IReproductor{
    volumen : number;
    segundo : number;
    cancion : string;
    detalles: IDetalles
}

interface IDetalles{
    author : string;
    year: number;
}


const reproductor : IReproductor = {
    volumen : 15,
    segundo: 65,
    cancion : 'La Santa',
    detalles : {
        author : 'Bad Bunny',
        year: 2018
    }
}


console.log(' Volumen Actual es ', reproductor.volumen );
console.log(' Segundo Actual es ', reproductor.segundo);
console.log(' Cancion Actual es ', reproductor.cancion );
console.log( reproductor );

//  Desestructuracion de un objeto -> Extraer propiedad directamente del objeto

const { volumen, segundo, cancion, detalles : { author , year }} = reproductor
//console.log(  volumen, segundo, cancion, author, year );


//  Desestructurando un Arreglo
const dbz : string[] = ['goku', 'vegueta', 'gohan', 'trunks'];
//const [ a, b ,c  ] = dbz;
const [ , , c  ] = dbz;
//console.log( a,b,c);
//console.log( c );



export interface IProducto {
    describcion : string;
    precio : number
}

const telefono : IProducto = {
    describcion: 'Iphone 10',
    precio: 100
}

const tableta : IProducto = {
    describcion: 'Ipad Air',
    precio: 100
};

export const  calculaISV = ( productos: IProducto[]) : number => {
    let total = 0;

    productos.forEach( ({ precio }, i ) => {
       total +=  precio ;
    })

    return (total * 0.16) + total

}

const articulos = [ telefono, tableta]
const isv = calculaISV( articulos )
//console.log( isv );

export const calcTotal = ( productos : IProducto[]) : number => {
    let total = 0;

    productos.forEach( ( { precio }) => {
        total += (precio * 1.16);
    } )

    return total;
}

const tot = calcTotal( articulos )
//console.log( tot );

