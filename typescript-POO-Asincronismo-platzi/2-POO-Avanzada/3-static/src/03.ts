class MyMath {
	//Atributos
	static readonly PI = 3.14;
	//Otros metodos
	static max(...numbers : number[]) {
		return numbers.reduce((max, item) => max >= item? max : item, 0);
;	}
}

console.log(MyMath.PI);
console.log(MyMath.max(29,21,45,2,3,7,51,11));
