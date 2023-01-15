/*
    ===== Código de TypeScript =====
*/

class Heroe {
    alterEgo: string;
    edad: number;
    nombreReal: number;

    /*imprimirNombre() {
        return this.alterEgo + '  ' + this.nombreReal; //puedo hacer
    }*/
}

/*interface Personaje2 {
    alterEgo?: string;
    edad?: number;
    nombreReal?: number;

    imprimirNombre:() => string; //hasta aqui se puede hacer
}*/

const iroman = new Heroe();
//const spiderman: Personaje2 = {};

console.log(iroman);
