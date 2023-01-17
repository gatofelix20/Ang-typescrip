/*
    ===== Código de TypeScript =====
*/
class PersonaNormal {

  constructor(
    public nombre: string,
    public direccion: string) 
    { }
}

class Heroe extends PersonaNormal {
   /* alterEgo: string;
    edad: number;
     nombreReal: number;*/

    /*imprimirNombre() {
        return this.alterEgo + '  ' + this.nombreReal; //puedo hacer
    }*/

    constructor(
        public alterGo: string,
        public edad: number,
        public nombreReal: string

        ) {
           super( nombreReal, 'New York, USA'); 
        }
}

/*interface Personaje2 {
    alterEgo?: string;
    edad?: number;
    nombreReal?: number;

    imprimirNombre:() => string; //hasta aqui se puede hacer
}*/

const iroman = new Heroe('Iromamn',  45, 'Tony');
//const spiderman: Personaje2 = {};

console.log(iroman);


