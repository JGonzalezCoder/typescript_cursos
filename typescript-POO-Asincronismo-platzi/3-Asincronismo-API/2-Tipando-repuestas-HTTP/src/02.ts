import axios from 'axios';

interface Category {
	id: number;
	name: string;
	image: string;
}

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: Category;
	images: string[];
	categoryId: number;
}

const getProducts = async () => {
	const resp = await axios.get<Product[]>('https:api.escuelajs.co/api/v1/products');
	const data = await resp;
	console.log(data.data);
} 

getProducts();
