class BaseHttpService<TypeClass> {
	//atributos
	private data: TypeClass[] = [];
	//otros metodos
	update<TypeMethod>(value: TypeMethod):TypeMethod {
		return value
	}
}

const service1 = new BaseHttpService<string>();
console.log(service1.update("Jesus Gonzalez"));
const service2 = new BaseHttpService<number>();
console.log(service2.update(12));
