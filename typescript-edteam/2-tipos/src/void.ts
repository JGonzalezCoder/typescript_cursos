const API: string = "https://ed.team";

let ping: unknown = 80;

ping = null;

// mil lineas

const validar = (): void => {
    if (typeof ping !== "undefined") {
        console.log("OK");
    } else {
    throw new Error("No hay conexion");
    }
}

validar();