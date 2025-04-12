const prices: (number | string)[] = [2,3,5,7,11,13,17,19,23,29, "as"];
prices.push(1);
prices.push("1");

let user: [string, number, boolean] = ["jesus", 24, true];
let [username, age] = user;
console.log(username);
console.log(age);

