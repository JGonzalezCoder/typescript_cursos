interface Human {
	id: string;
	name: string;
	age: number;
	isAlien: boolean;
}

function createHuman(name: Human["name"]) {
	console.log(name);
}

createHuman("Jesus Gonzalez");
