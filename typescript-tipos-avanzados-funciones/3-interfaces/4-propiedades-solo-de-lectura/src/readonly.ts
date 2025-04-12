class Persona {
	readonly nombre: string;
	readonly edad: number;
	
	constructor(nombre:string,edad:number) {
		this.nombre = nombre;
		this.edad = edad;
	}
	
	saludar() {
		console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} ano.`)
	}
}

const persona = new Persona("Freddy", 35)
persona.saludar();
