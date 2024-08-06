class BaseHttpService<TypeClass> {
	private data: TypeClass[] = [];
}

const service1 = new BaseHttpService<string>();
const service2 = new BaseHttpService<number>();
