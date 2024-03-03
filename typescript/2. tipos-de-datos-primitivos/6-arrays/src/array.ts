let prices = [1, 2, 3, 4, 5, "hello", false];
prices.push(6);
prices.push("texto");
console.log(prices);

let products = ["hola", true];
products.push(false);

let mixed : (number | string | boolean | Object)[] = ["hola", true];
mixed.push(12);
mixed.push('as');
mixed.push(true);
mixed.push({});
mixed.push([]);

let numbers = ['as'];
numbers.map(item => item * 2);
