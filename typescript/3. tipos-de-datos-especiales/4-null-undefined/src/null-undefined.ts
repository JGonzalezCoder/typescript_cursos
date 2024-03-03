// null es para indicar un valor nulo.
// undefined para algo indefinido.

// Null y Undefined como tipoy any

let myVar = null // Tipo any
let otherVar = undefined; // Tipo any

let myNull : null = null; // Tipo null
let myUndefined : undefined = undefined; //Tipo undefined

// Union Types como emergencia

let myNumber : number | null = null;
myNumber = 50;

let myString : string | undefined = undefined;
myString = "Hola TypeScript";
