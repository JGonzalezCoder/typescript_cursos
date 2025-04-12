interface Animal {
	nombre: string;
	comer(): void;
}

interface Mascota extends Animal {
	jugar(): void;
}

class Perro implements Mascota {
	nombre: string;
	
	constructor(nombre: string) {
		this.nombre = nombre;
	}
	
	comer() {
		console.log(this.nombre + " esta comiendo.");
	}
	jugar() {
		console.log(this.nombre + " esta jugando.");
	}
}

const miPerro = new Perro("Firulais");
miPerro.comer();
miPerro.jugar();
