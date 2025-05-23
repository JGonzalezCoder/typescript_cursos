enum Color {
	Negro,
	Blanco,
	Morado
}

interface FiguraGeometrica {
	nombre: string;
	color: Color;
}

const rectangulo: FiguraGeometrica = {
	nombre: "rectangulo",
	color: Color.Morado
}

console.log(rectangulo)

type Coordenadas = [number,number]

interface Punto {
	ubicacion: Coordenadas;
	etiqueta: string;
}

const punto: Punto = {
	ubicacion: [10,5],
	etiqueta: "Punto A"
}

console.log(punto)

enum Size {
	Chico = "S",
	Mediano = "M",
	Grande = "L"
}

type Producto = {
	name: string;
	size: Size;
}

const camiseta: Producto = {
	name: "Camiseta",
	size: Size.Mediano
}

console.log(camiseta);

enum TipoVehiculo {
	Automovil,
	Motocicleta
}

type Especificaciones = {
	marca: string;
	modelo: string;
	ano: number;
}

interface Vehiculo {
	tipo: TipoVehiculo;
	especificaciones: Especificaciones;
}

const vehiculo: Vehiculo = {
	tipo: TipoVehiculo.Automovil,
	especificaciones: {
		marca: "Toyota",
		modelo: "Corolla",
		ano: 2020
	}
}

console.log(vehiculo)
