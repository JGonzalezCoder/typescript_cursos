const sum = (...args: number[]) => {
	const suma = args.reduce((acumulador,num) => acumulador + num,0)
	return suma
}

console.log(sum(1,2))
console.log(sum(1,2,3,4,5))
console.log(sum(1,2,3,4,5,6,7,8,9,10))
