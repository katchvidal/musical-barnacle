/**Funciones en TypeScript 
 * Podemos inferir tipo de variable son las variables requeridas en una funcion
 * Podemos inferir tipo de variable es las respuesta de una funcion
*/


const suma = ( a:number, b:number) : number => {
    return (a + b)
}

const resta = (a:number, b:number) : number => ( a + b) 

const multi = (a:number = 30, b: number, c?: number) : number => {
    //  Si un argumento es opcional se debe colocar despues de los argumentos requeridos
    return ( a * b )
}


const resultado = suma(1,2)
console.log( 'Suma:' ,resultado );

const res = resta(5,3)
console.log('Resta:', res);

const mult = multi(10, 1, 0)
console.log('Multiplicacion', mult);
