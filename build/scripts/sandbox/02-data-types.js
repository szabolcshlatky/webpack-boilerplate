`use strict`;

/* TYPEOF keyword */

console.log(
  typeof null,
  typeof undefined,

  typeof NaN,
  typeof 0,

  typeof '0',
  typeof "string",
  typeof `template string`,

  typeof true,
  typeof false,

  typeof Symbol(`symbol`),

  typeof [`array`],

  typeof { object: `literal` },
  
  typeof function(parameter){}
);

/* PRIMITIVE vs. REFERENCE / Object DT 

Primitive types (I-VI.): All types except objects define immutable values (that is, values which can't be changed).
  For example, Strings are immutable. We refer to values of these types as "primitive values".
  Stack:
  - Primitive values and references
  - Size is known at compile time
  - Allocates a fixed amount of memory

  'new' constructor keyword: This way we can see the primitive values' methods and properties too.

Reference types - Everything in JS is an Object.
  In computer science, an object is a value in memory which is possibly referenced by an identifier.
  Heap:
  - Objects and functions
  - Size is known at run time
  - No limit per object
*/

  /* Primitive values */
let scoreOne = 50;
let scoreTwo = scoreOne; // Copied the '50' value.
  
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);
  
scoreOne = 100; // This won't change the original "50's" copy for the 'scoreTwo', so it stays 50.
  
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`); 
  
  /* Reference values */
const userOne = {
  name: `pelling`,
  age: 30
};

const userTwo = userOne; // This only copied the reference typed variable's pointer to the stack not the value itself.
  
console.log(userOne, userTwo);
  
userOne.age = 40; // This will change both to '40', because the value is changed in the heap. If we update one, it updates all and doesn't matter that if we would change the value at 'userTwo' either... same result.
  
console.log(userOne, userTwo);