
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

/*   Using tuples  */
// Un tuple peut être considéré comme un tableau avec un nombre fixe d'éléments
// une annotation de type tuple fixe peut être définie en spécifiant les types des éléments dans une structure de tableau :
// [type1, type2, ...]
const tomScore: [string, number] = ["Tom", 70];

// Comme mentionné précédemment, un problème avec les tuples est qu'il n'est pas évident de savoir quelles données 
// doivent être placées dans ses éléments. 
// TypeScript 4.0 atténue ce problème grâce à la possibilité d'étiqueter les éléments au sein d'un tuple
const tomScore01: [nom:string, age:number] = ["Tom", 70];

/*  Creating open-ended tuples  */

let benScores: [name: string, ...scores: number[]];
benScores = ["Ben", 50, 75, 85];

// Le ...number[] est un "rest element", et cela signifie que nous pouvons avoir une quantité variable d'éléments numériques à la fin de la structure.

/* Les tuples TypeScript sont un moyen pratique de typage fort de structures de données petites et évidentes. 
   Il est essentiel d'utiliser une annotation de type avec ceux-ci plutôt que de s'appuyer sur l'inférence de type. */
   
   
   
/*    Using the never type       */   
// void is when the function returns without a value. In this example, the function never returns.

/*  Using the unknown type  */
//Le type inconnu nous permet de réduire notre utilisation de any et de créer du code plus fortement typé.


/*  Creating object types  */ 
const tomScore : { name: string; score?: number} = {
  name: "Tom"
};
console.log(tomScore);

type FirstName = string;
type PersonScore = number;

let firstName: FirstName = "Tom";
let personScore: PersonScore = 70;

type Log = (
    message: string,
    category?: string
) => void;

const log: Log = (message: string) => {
  console.log(message);
};


type Score = { 
    name: string; 
    score: number; 
    pass?: boolean; 
    log: Log   
 };


const tomScore: Score = {
  name: "Tom",
  score: 70,
  log
};

const bobScore: Score = {
  name: "Bob",
  score: 80,
  log
};
const janeScore: Score = {
  name: "Jane",
  score: 90,
  log
};



