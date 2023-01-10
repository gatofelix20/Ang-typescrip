/*
    ===== Código de TypeScript =====
*/

//Arreglos
let habilidades: (boolean | string | number) [] = ['Bash', 'Counter', 'Healing', 200];

 habilidades.push(true)

//interfaces

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;  //? es opcional
 }


 //Objetos
 const personaje: Personaje = {
    nombre: 'Javier',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']

 }

 personaje.puebloNatal = 'Pueblo Paleta';

 console.table( personaje );

 