const createProduct = (
	id: string | number,
	isNew: boolean = true,
	stock: number = 10
) => {
	return {
		id,
		stock,
		isNew
	}
}

console.log(createProduct(1));
