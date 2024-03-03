//Operaciones

let productPrice = 100;
productPrice = 12;
console.log('productPrice', productPrice);

let customerAge : number = 28
// customerAge = customerAge + "1" // 281
customerAge = customerAge + 1; //29
console.log('customerge',customerAge);

// uso de variables sin inicializar

let productInStock : number;
console.log('productInStock', productInStock);
if (productInStock > 10) {
  console.log('is greater');
}

//Conversion de numeros de tipo string a tipo number

let discount = parseInt('123');
console.log('discount', discount);
let descount = parseInt('100');
let otherdescount = parseInt("palabra"); // NaN
console.log('discount', discount);
if ( discount <= 200) {
  console.log('apply')
} else {
  console.log('not apply')
}

//Binarios y hexadecimales

//Hexadecimal: se define colocando "0x" al inicio del valor
let hex = 0xfff; //correcto
let otherhex = 0xffz; // Incorrecto
console.log('hex', hex); //4095

//Binarios: se definen colocando "0b" al inicio del valor
let bin = 0b1010; //correcto
let otherbin = 0b1210; //incorrecto
console.log('bin', bin); //10

//Consejos

let myNumber : number = 20; //buena practica
let otherNumber : Number = 20 //Mala practica
