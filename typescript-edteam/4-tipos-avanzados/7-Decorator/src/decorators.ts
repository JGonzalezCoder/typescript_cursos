function Decorator() {
    return function(target: any) {
        target.prototype.dni = new Map();
        target.prototype.email = "jesusgonzalez071099@gmail.com";
        target.prototype.generateKey = function () {
            target.prototype.email = "otro valor";
        }; 
    }
}

interface User {
    name: string;
    age: number;
    email: string;
}

@Decorator()
class User {
    //Propiedades
    name: string;
    age: number;
    // Construtor
     Constructor() {
        this.name = "";
        this.age = 0;
    }
}

const user = new User();
console.log(user);