//los argumentos de la funcion tiene un determinado tipo de dato

type Sizes = 'S' | 'M' | 'L' | 'XL';

function createProductJson(
  title: string,
  createdAt: Date,
  stock?: number, // el argumento es opcional
  size?: Sizes // el argumento es opcional
){
  return {
    title,
    createdAt,
    stock,
    size
  }
}

const createProductJsonV2 = (
  title: string,
  createdAt: Date,
  stock?: number, // el argumento es opcional
  size?: Sizes // el argumento es opcional
) => {
  return {
    title,
    createdAt,
    stock,
    size
  }
}

const producto1 = createProductJson(
  "titulo",
  new Date('10/10/3030'),
  30,
  'M'
)

function randomFunc(title: string, amount?: number){} //CORRECTO

function otherFunc(title?: string, amount: number){} //ERROR

