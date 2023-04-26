`use strict`;

/* NUMBER: Integers & Floats */

const e = Math.E; // Euler's constant and the base of natural logarithms; approximately 2.718.
const ln2 = Math.LN2; // Natural logarithm of 2; approximately 0.693.
const ln10 = Math.LN10; // Natural logarithm of 10; approximately 2.303.
const log2e = Math.LOG2E; // Base-2 logarithm of E; approximately 1.443.
const log10e = Math.LOG10E; // Base-10 logarithm of E; approximately 0.434.
const pi = Math.PI; // Ratio of a circle's circumference to its diameter; approximately 3.14159.
const sqrt1_2 = Math.SQRT1_2; // Square root of ½; approximately 0.707.
const sqrt2 = Math.SQRT2; // Square root of 2; approximately 1.414.

let radius = 10;
console.log(radius, pi);

  /* a) Expressions with arithmetic operators

    () : Bracets
    ** : Indices // Same as Math.pow(base, exponent);
     / : Division
     * : Multiplication
     + : Addition
     - : Substraction
     % : Modulo // Remainder
  */

let moduloRemainder = radius % 3;
console.log(moduloRemainder);

let multiplicationPowered = pi * radius**2;
console.log(multiplicationPowered);

let bidmas = 5 * (10 - 3)**2; // Order of operations: BIDMAS
console.log(bidmas);

  /* b) Increment / Decrement Expressions */
let increment = 5;
increment++; // increment = increment + 1;
console.log(increment);

let decrement = 5;
decrement--; // decrement = decrement - 1;
console.log(decrement);

let crement = 5;
crement += 2; // crement = crement + 2;
console.log(crement);

crement = 5;
crement -= 2; // crement = crement - 2;
console.log(crement);

crement = 5;
crement *= 2; // crement = crement * 2;
console.log(crement);

crement = 5;
crement /= 2; // crement = crement / 2;
console.log(crement);

increment = 5;
decrement = 3;
console.log(increment += decrement);

  /* c) NaN */
var midName = `Réthalapi`;
console.log(pi / midName); // Non-sense calculations

let numberPlusString = pi + radius + ` Because I added this string, now the typeof is string.`;
console.log(numberPlusString);

  /* d) Math object methods */
console.log(Math);

let age = 28.5;
console.log(Math.round(age)); // Nearest integer
console.log(Math.floor(age)); // Round down to integer
console.log(Math.ceil(age)); // Round up to integer
console.log(Math.trunc(age)); // Takes away the decimal part
console.log(Math.pow(age, 2)); // Same as ** calculation

let pszeuD6 = Math.random(); // Returns number between 0 and 1.
pszeuD6 = Math.round(pszeuD6 * 6) + 1;
console.log(pszeuD6); // This return a pseudoRandom die roll.

  /* e) Type conversion */

let october = `10`;
console.log(october + 10); // returns 1010 string
  
october = Number(october);
console.log(october + 64); // returns 74 as number
  
let notaNumber = Number(`Not-a-Number`);
console.log(notANumber); // returns NaN

  /* f) Constructor */
const numberWrapper = new Number(0);
const nanWrapper = new Number(NaN);

console.log(numberWrapper, nanWrapper);