// Credit : https://learntypescript.dev

// We can also add a type annotation for the return value by adding a colon followed by the type after the function's parentheses
function add(a: number, b: number): number {
  return a + b;
}

// Types can also be added to function expressions
const minus = function (a: number, b: number): number {
  return a - b;
};

// types can be added to arrow functions:
const multiply = (a: number, b: number): number => a * b;

//Expected 2 arguments, but got 1.
add(3);

// We can define that a parameter is optional by putting a question mark (?) before the colon. 
// It is important to note that optional parameters can only be at the end of the parameter list.

function add2(a: number, b?: number): number {
  return a + b;
}

// 'b' is possibly 'undefined'.
add2(3);

// in our add function, 0 will be added to a if b isn't passed by the caller.
function add3(a: number, b?: number): number {
  return a + (b || 0);
}
