abstract class Animal {
	//Atributos y Constructor
	constructor(protected name : string) {}
	//Otros metodos
	move(): void {
		console.log('Mobing along!');
	}
	greeting(): string {
		return `Hello, I'm ${this.name}`
	}
	protected doSomething() {
		console.log('dooo');
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
			console.log(`woof! ${this.name}`);
		}
		this.doSomething();
	}
	
	move() {
		console.log('moving as a dog');
		super.move();
	}
}

const cheis = new Dog('cheis','nico');
cheis.greeting();
cheis.woof(2);
