type AUTENTICAR = {
    id: string;
    name: string;
    rol: string;
    lvl: number;
}
type ARGS = number | string | boolean;

type formato = number | string;

const usuario = {
    name: "jesus",
    email: "jesusgonzalez071099@gmail.com",
    year: 24
}

const autenticar = (id: string, name: string = "", rol: string = "cliente", lvl?: number): AUTENTICAR => {
    return {
        id,
        name,
        rol,
        lvl: lvl ?? 10
    }
}

const argumentos = (...args: any[]): any[] => {
    return args;
}

function transformar(num: number): number;

function transformar(num: string): string;

function transformar(num: formato): formato {
    // toda la logica
    return num;
}


// 0 -> false
// '' -> false
// ...ANY

const respuesta_01 = autenticar("Jesus", "24", "administrador", 0);
const respuesta_02 = argumentos(usuario);
const resultado_03 = transformar(1);