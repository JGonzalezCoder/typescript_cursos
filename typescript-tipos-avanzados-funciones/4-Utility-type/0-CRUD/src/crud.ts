// roles de usuario.
enum UserRole {
	Admin = "ADMIN",
	User = "USER"
}

//Estructura de los usuarios.
interface User {
	id: number;
	name: string;
	email: string;
	role: UserRole;
	phoneNumber?: string;
}

//creacion de nuevos usuarios.
class UserCRUD {
	private users: User[] = [];
	//Crear	
	createUser(id:number,name:string,email:string,role:UserRole,phoneNumber?:string):User{
		const newUser: User = {
			id,
			name,
			email,
			role,
			phoneNumber
		}
		this.users.push(newUser);
		return newUser;
	}
	//Leer
	getUser(id:number): User | undefined {
		return this.users.find(user => user.id === id);
	}
	//Actualizar
	updateUser(id:number,fieldsToUpdate:Partial<User>): User | "Usuario no encontrado" {
		const user = this.users.find(user => user.id === id);
		if(!user){
			return "Usuario no encontrado";
		}
		Object.assign(user,fieldsToUpdate);
		return user;
	}
	//Borrar
	deleteUser(id:number): "Usuario eliminado" | "Usuario no encontrado" {
		const index = this.users.findIndex(user => user.id === id);
		if(index === -1){
			return "Usuario no encontrado";
		}
		this.users.splice(index,1);
		return "Usuario eliminado";
	}
}

const userCRUD = new UserCRUD();
userCRUD.createUser(1,"Jesus Gonzalez","jesusgonzalez071099@gmail.com",UserRole.Admin,"04249085477");
console.log("Usuario creado:\n",userCRUD);
console.log("Usuario obtenido:\n",userCRUD.getUser(1));
console.log("Usuario actualizado:\n",userCRUD.updateUser(1,{name:"Ernesto Acevedo"}));
console.log(userCRUD.deleteUser(1));
