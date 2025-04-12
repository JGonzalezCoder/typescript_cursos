enum ROLES {
	ADMIN = "admin",
	SELLER = "seller",
	CUSTOMER = "customer",
}

type User = {
	username: string;
	role: ROLES;
}

const person: User = {
	username: "jesus",
	role: ROLES.ADMIN
}

console.log(person);
