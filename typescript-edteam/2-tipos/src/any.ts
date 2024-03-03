const API: any = "https://ed.team";

let ping: any = 80;

ping = null;

// mil lineas

const validar = (): any => {
    if (typeof ping !== "undefined") {
        console.log("OK");
    } else {
    throw new Error("No hay conexion");
    }
}

validar();