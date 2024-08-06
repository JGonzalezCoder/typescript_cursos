import axios from 'axios';

const getProducts = async () => {
	const resp = await axios.get('https:api.escuelajs.co/api/v1/products');
	const data = await resp;
	console.log(data.data);
} 

getProducts();
