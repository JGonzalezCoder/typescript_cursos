let userId : string | number;

userId = 10;
userId = "10";

function helloUser(id: string | number) {
  if (typeof id === "string") {
    console.log(`hola usuario con el numero de id ${id.toLowerCase}`);
  }else {
    console.log(`Hola usuario con el numero de id ${id}]`);
  }
}

//Una mejor practica

/*
  En lugar de usar any, es mejor hacer uso de los Union Types.
*/
