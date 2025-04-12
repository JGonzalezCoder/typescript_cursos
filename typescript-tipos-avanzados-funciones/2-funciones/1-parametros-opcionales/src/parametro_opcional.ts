const createProduct = (
	id: string | number,
	isNew: boolean,
	stock?: number
) => {
	return {
		id,
		stock: stock ?? 10,
		isNew: isNew ?? true
	}
}

console.log(createProduct(1,false,0))
