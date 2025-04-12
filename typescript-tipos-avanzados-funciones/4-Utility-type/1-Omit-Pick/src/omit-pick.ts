interface User{
	id: number;
	name: string;
	email: string;
	phoneNumber: string;
}

type UserWithoutContact = Omit<User, "email" | "phoneNumber">;

let user: UserWithoutContact = {
	id: 1,
	name: "Jesus Gonzalez",
}

console.log(user);

type UserContactinfo = Pick<User, "email" | "phoneNumber">;

let contactinfo: UserContactinfo = {
	email: "jesus@gmail.com",
	phoneNumber: "04249085477",
}

console.log(contactinfo);
