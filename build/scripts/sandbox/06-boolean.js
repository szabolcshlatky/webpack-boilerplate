`use strict`;

/* BOOLEAN: true / false */

console.log(true, false, `true`, `false`);

  /* a) Methods returns booleans */
let eMail = `info@ictys.hu`;

let includes_Boolean = eMail.includes(`.com`);
console.log(includes_Boolean); // Similar example with arrays below.

  /* b) Comparsion operators */
let Age = 29.5;

console.log(Age > 21);
console.log(Age < 21);
console.log(Age <= 18);
console.log(Age >= 18);

console.log(Age == 29.5); // Abstract-loose equality
console.log(Age != 29.5); // Abstract-loose non-equality
console.log(Age == `29.5`); // This returns true
console.log(true == `true`); // This returns false

let nickname = `Sable`;
console.log(nickname == `Sable`); // JS is case sensitive
console.log(nickname == `sable`);
console.log(nickname > `king`); // 's' comes later than 'k' in the alphabet so it returns true.
console.log(nickname > `sable`); // Lowercase letter is stronger so it returns false.

    /* c) Strict comparsion (different types cannot be equal) */
let year = 2022;
console.log(year === 2022); // Strict comparison true (in value and data type)
console.log(year === `2022`); // Strict comparison false
console.log(year !== 2022); // Strict comparison false
console.log(year !== `2022`); // Strict comparison true

  /* d) Type conversion */
let October = `10`;
let conBoolean = Boolean(October);
console.log(conBoolean); // returns true (truthy)
    
    /* e) Truthy & Falsy */ 
console.log(Boolean(64), Boolean(64 - 128)); // truthy (negative numbers too)
console.log(Boolean(0)); // falsy
console.log(Boolean(`0`)); // truthy (like all strings at any length)
console.log(Boolean(``)); // empty string is falsy
console.log(Boolean(null)); // falsy
console.log(Boolean(undefined)); // falsy

  /* f) Constructor */
const trueWrapper = new Boolean(true);
const falseWrapper = new Boolean(false);

console.log(trueWrapper, falseWrapper);