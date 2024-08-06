const getValue = <myType>(value: myType): myType => {
	return value
}
console.log(getValue<number>(12).toFixed());
console.log(getValue<string>('ABC').toLowerCase());
