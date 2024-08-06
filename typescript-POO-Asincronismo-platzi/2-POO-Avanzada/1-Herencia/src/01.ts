class Animal {
	//Atributos y Constructor
	constructor(private name : string) {}
	//Otros metodos
	move(): void {
		console.log('Mobing along!');
	}
	greeting(): string {
		return `Hello, I'm ${this.name}`
	}
}

class Dog extends Animal {
	//Atributos y Constructor
	constructor(
		name : string,
		private owner : string
	) {
		super(name);
	}
	//Otros metodos
	woof(times : number): void {
		for(let index = 0; index < times; index++){
			console.log('woof!');
		}
	}
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'nico');
fifi.move();
console.log(cheis.greeting());
cheis.woof(5);
