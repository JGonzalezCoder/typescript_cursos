// 1. comillas simples

let productTitle = 'My amazing product';
productTitle = 'My amazing product change';
console.log('productTitle', productTitle);

// 2. comillas dobles
let productDescription = "bla bla bla";
console.log("productDescription", productDescription);


// 3. usando backticks
let summary = `
  title : ${productTitle};
  description : ${productDescription};
`;
console.log(`sumary`, summary);
