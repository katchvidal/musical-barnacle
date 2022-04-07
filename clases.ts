/** Clases en TypeScript 
 * Public   -> Acceder desde cualquier lado
 * Static   -> Acceder sin crear un nueva referencia
 * Private  -> Nadie puede acceder fuera del scope de la variable o funcion
*/

class Heroe {

    constructor(_name : string, _edad : number, _realname: string){
    }



}

interface Character {
    alter_Ego : string;
    edad : number;
    realname: string;
}

const Iroman = new Heroe('Tony Stark', 30, 'Tony')

const spiderman : Character = { alter_Ego  : 'Kia', edad :  16, realname : "abc"}
console.log( spiderman );
