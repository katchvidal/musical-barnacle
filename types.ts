/**Tipo de Variables -> Todo Javascript es de tipo Any que no es deseable cuando desarrollamos en Typescript
 * debido a que cualquier tipo de variable puede ser aceptada pero nuestras respuestas probablemente no seran ese tipo de 
 * respuestas
 * Si no especificamos que tipo de variables estamos especifcando typescript infiere
 * Si no definimos como deberia lucir una variable ( sus tipos ) en la escritura nos dara errores
 * Las interfaces es la apariencia que debe tener un objeto o respuesta definido con anterioridad para poder el maximo control
 * o restricciones de nuestro codigo
 */


let habilidades : (boolean | string | number)[] = ['A', 'B', 'C', 100] 

//  Como deberia lucir un objeto para eso typescript nos da las interfaces

interface IPersonaje{

    nombre: string;
    pueblo_nata? : string;
    hp: number;
    habilidades : (string | number | boolean )[]

}

const personaje : IPersonaje  = {
    nombre : 'Katch',
    hp : 100,
    habilidades : ['Bash', 'Counter', 'Healing']
}

console.log( 'Personaje', personaje);
