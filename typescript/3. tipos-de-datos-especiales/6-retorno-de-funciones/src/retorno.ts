// funciones sin retorno

const imprimirNombre = (yourName: string): void => {
  console.log(`${yourName}`);
}

// funciones con retorno

const suma = (a: number, b: number): number =>{
  return a + b;
}

const holaMundo = (): string => {
  return "Hello, world!";
}

// funciones con mas de un retorno

const devolverMayor = (a: number, b: number): number | string =>{
  if(a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return `los numeros ${a} y ${b} son iguales`
  }
}
