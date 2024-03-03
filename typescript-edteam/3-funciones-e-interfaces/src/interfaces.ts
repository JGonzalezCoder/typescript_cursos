type address = string | undefined;

type city = address & {
    place: string;
}

interface base {
    id: string;
    address?: address;
}

interface Username extends base{
    name: string;
    email: string;
    age: number;
    materia: Materia;
}

interface Persona extends base{
    phone: string;
}

interface Materia {
    name: string;
    age: number;

}

const username: Username = {
    id: "28255353",
    name: "jesus",
    email: "jesusgonzalez071099@gmail.com",
    age: 24,
    materia: {
        name: "Algoritmios",
        age: 2023
    }
}

const persona: Persona = {
    id: "venezolano",
    phone: "+584249085477"
}

console.log(usuario.email);