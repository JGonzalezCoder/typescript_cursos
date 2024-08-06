class MyService {
	//Atributos
		static instance: MyService | null = null;
	//constructor
	private constructor(private name: string) {}
	//set y get
	getName() {
		return this.name;
	}
	//otras funciones
	static create(name: string) {
		if(MyService.instance === null) {
			MyService.instance = new MyService(name);
		}
		return MyService.instance;
	}
}

const myService1 = MyService.create('service 1');
console.log(myService1.getName());
const myService2 = MyService.create('service 2');
console.log(myService2.getName());
console.log(myService1 === myService2);
