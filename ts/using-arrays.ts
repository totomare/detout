
// Credit: https://learntypescript.dev
// https://www.typescriptlang.org

//The type of the array elements hasn’t been declared, so they are of type any.

const items = [];
items.push(1);
items.push("two");
items.push(false);

console.log(items);

// [LOG]: [1, "two", false] 



// We pass the type we want the items to have in angle brackets after the word Array.
const numbers: Array<number> = [];
numbers.push(1);
numbers.push("two");
numbers.push(false);

// Argument of type 'string' is not assignable to parameter of type 'number'.
// Argument of type 'boolean' is not assignable to parameter of type 'number'.

const numbers: Array<number> = [1, "two", false];
console.log(numbers);

// Cannot redeclare block-scoped variable 'numbers'.
// Type 'string' is not assignable to type 'number'.
// Type 'boolean' is not assignable to type 'number'.

//Using the square bracket notation
const itemss: number[] = [];

const strings: string[] =["one","two","three"]

// Using type inference. 
// TypeScript peut intelligemment déduire le type d'un tableau.
const array = [1, 2, 3];
console.log(array);

// Strongly-typing rest parameters
// The plain JavaScript function below takes the name of a person and a varying number of scores and then outputs these to the console:
function logScores(firstName: string, ...scores: number[]) {
  console.log(firstName, scores);
}

logScores("Ben", 50, 75, 85)

// [LOG]: "Ben",  [50, 75, 85] 
