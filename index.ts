/**Iniciando TypeScript Course
 * 1.   Hola Mundo
 * El objetivo de typescript es tener todas las caracteristicas y funcionalidades para un desarrollo limpio
 * evitar continuar con errores durante el desarrollo antes de pasar a codigo de produccion en versio de javascript que 
 * queramos subir a produccion 
 */

console.log('Hello World')

//  Declarar una variable en TypeScript -> Typical are Let or Const
let nombre : string = 'Katch';
let num01 : number = 10;
console.log('Nombre:', nombre);

//  Multitud de Tipo de datos en una variable
let healthpower : number | string = 100;
console.log('healthpower:' , healthpower);

healthpower = 'Low'
console.log( 'healthpower:' ,healthpower);
