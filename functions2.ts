/**Funciones ejercicios 02 */


interface IPersonaje{
    name : string;
    hp: number;
    mostrarHp?: () => void;
    

}

const Batman : IPersonaje ={
    name : 'Batman',
    hp: 50,
    mostrarHp() {
        console.log( this.hp );
    }
}


const healer = ( character : IPersonaje, hppoints : number  ) => {
    character.hp += hppoints
    console.log( character );
    
}


const Superman : IPersonaje = {
    name : 'Supermane',
    hp : 10
} 

console.log(healer(Batman, 10))
console.log( Batman )
