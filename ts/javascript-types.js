const name = "Bob";
console.log("Type of name:", typeof name);

const age = 30;
console.log("Type of age:", typeof age);

const cool = true;
console.log("Type of cool:", typeof cool);

const dateOfBirth = new Date(1989, 10, 5);
console.log("Type of dateOfBirth:", typeof dateOfBirth);

const count = BigInt(452947234234);
console.log("count", typeof count);

const address = null;
console.log("address", typeof address);

const phone = undefined;
console.log("phone", typeof phone);

const stars = Symbol("***");
console.log("stars", typeof stars);

let amount = 10;
console.log("amount", typeof amount);
amount = "Eight";
console.log("amount", typeof amount);

/*
[LOG]: "Type of name:",  "string" 
[LOG]: "Type of age:",  "number" 
[LOG]: "Type of cool:",  "boolean" 
[LOG]: "Type of dateOfBirth:",  "object" 
[LOG]: "count",  "bigint" 
[LOG]: "address",  "object" 
[LOG]: "phone",  "undefined" 
[LOG]: "stars",  "symbol" 

The amount variable starts as a number but then is assigned to a string.
There is nothing to prevent a variable from changing its type in JavaScript.
[LOG]: "amount",  "number" 
[LOG]: "amount",  "s
*/