class usuario {
    //propiedades
    private name: string;
    private email:string;
    private age: number;
    //constructor
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    // SET/GET
    getName(): string {
        return this.name;
    }
    setName(anotheName: string): void {
        this.name = anotheName;
    }
}

const user = new usuario("jesus","jesusgonzalez071099@gmail.com",24);
user.setName("Ernesto");
console.log(user.getName());