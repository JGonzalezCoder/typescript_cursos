interface User1 {
	id: number;
	name: string;
	email: string;
	phoneNumber: string;
}

type PartialUser= Partial<User1>;

let partialUser: PartialUser = {
	id: 1,
	name: "Jesus Gonzalez",
}

console.log(partialUser);

interface User2 {
	id: number;
	name: string;
	email?: string;
	phoneNumber?: string;
}

type RequiredUser = Required<User2>;

let requiredUser: RequiredUser = {
	id: 1,
	name: "Jesus Gonzalez",
	email: "jesusgonzalez071099@gmail.com",
	phoneNumber: "04249085477"
}

console.log(requiredUser);
