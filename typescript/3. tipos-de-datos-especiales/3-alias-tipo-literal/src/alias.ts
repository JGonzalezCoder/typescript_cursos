//Alias

type userID = string | boolean | number;

let dynamicVar : userID = "300";

function helloUser(userId : userID){
  console.log(`${userId}`);
}

//Tipos literales - Literal types

let shirtSize : "S" | "M" | "L" | "XL";

shirtSize = "M"; // correcto
shirtSize = "S"; // correcto
shirtSize = "qwrty"; // error
shirtSize = "SS"; // error
shirtSize = "m"; // error

//Alias + Tipos literales

type sizes = "S" | "M" | "L" | "XL";

let shirtsize : sizes;
shirtsize = "M";

function yourSize( userSize: sizes) {
console.log(`${userSize}`);
}
