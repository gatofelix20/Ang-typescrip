/*
    ===== Código de TypeScript =====
*/

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;

}

function curar(personaje: PersonajeLOR, curarx: number): void {
     
    personaje.pv += curarx;
   
}

const nuevoPersonaje: PersonajeLOR = {
     nombre:'Hector',
     pv: 50,
     mostrarHp() {
        console.log('Puntos de vida:', this.pv);
     }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();

