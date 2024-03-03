const API = "https://ed.team";

let ping: unknown = 80;

ping = null;

// mil lineas

if (typeof ping === "number") {
    console.log("OK");
} else {
    throw new Error("No hay conexion");
}