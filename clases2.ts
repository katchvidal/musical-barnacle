/**Clases propiedades public, private, static 
 *  si definimos las propiedades dentrro del constructor podemos ahorrarno el paso de 
 *  definir antes los atributos
 *  exteneder una clase de otra clase para añadir propiedades diferentes ( Programacion Orientada a objetos )
*/

class PersonaNormal {

    constructor( 
        public _name : string, 
        public _direccion : string 
        ) {

    }
}

class Hero extends PersonaNormal {
    /*
    alter_ego : string;
    edad: number;
    realname : string; */

    constructor(public _alter_ego : string, public _edad : number, public _realname : string ){
        super(_realname,'New York City');
    }

}

const batman = new Hero('Batman', 30, 'Bruce Wayne')
//console.log( batman );


//  Genericos <T> infiere que son genericos -> < que recibimos > () : ( que retornamos )

const queTipoSoy = <T>(arg : T ) => {
    return arg;
};

let soyString = queTipoSoy('Hello World')
let soyNumber = queTipoSoy(1)