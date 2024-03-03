let myDynamicVar : any;

myDynamicVar = 100; // number
myDynamicVar = null;
myDynamicVar = {}; // Object
myDynamicVar = ""; // string

// Recomiendacion

// no usar este tipo de dato.
// pues se considera mala practica.

//Importancia

// radica cuando se quiere migrar de a pocos a
// typescript desde javascript

//Tratar Any como un primitivo

myDynamicVar = "Hola";
const otherString = (myDynamicVar as string).toLowerCase();
myDynamicVar = 123456789;
const otherNumber = (<number>myDynamicVar).toFixed();