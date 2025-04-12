interface User {
	id: number;
	name: string;
	email: string;
}

type ReadonlyUser = Readonly<User>;

let readonlyUser: ReadonlyUser = {
	id: 1,
	name: "Jesus Gonzalez",
	email: "jesusgonzalez071099@gmail.com"
}

console.log(readonlyUser);
