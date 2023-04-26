`use strict`;

/*
VAR.IABLES
  In JavaScript, identifiers are case-sensitive and can contain Unicode letters, $, _, and digits (0-9), but may not start with a digit. Use camelCase naming with meaningful words. Reserved keywords: https://www.w3schools.com/js/js_reserved.asp

HOISTING
  - In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before it has been declared.
  - Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
  - Variables defined with let and const are hoisted to the top of the block, but not initialized. Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
  - Using a let variable before it is declared will result in a ReferenceError. The variable is in a "temporal dead zone" from the start of the block until it is declared.
  - Using a const variable before it is declared, is a syntax error, so the code will simply not run.
  - JavaScript only hoists declarations, not initializations.
  TIP:
  - Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
  - If a developer doesn't understand hoisting, programs may contain bugs (errors).
  - To avoid bugs, always declare all variables at the beginning of every scope.
  - Since this is how JavaScript interprets the code, it is always a good rule.
  - JavaScript in strict mode does not allow variables to be used if they are not declared.
  
SCOPING
  - In JavaScript, objects and functions are also variables.
  - The lifetime of a JavaScript variable starts when it is declared.
  - Scope determines the accessibility of variables, objects, and functions from different parts of the code.

Block Scope
  - Variables (let, const) declared inside a { } block cannot be accessed from outside the block.
  - Variables declared with the var keyword can NOT have block scope.
  - Variables (var) declared inside a { } block can be accessed from outside the block.

Local / Function Scope
  - Variables declared within a JavaScript function, become LOCAL to the function. They can only be accessed from within the function.
  - Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
  - Local variables are created when a function starts, and deleted when the function is completed.
  - JavaScript has function scope: Each function creates a new scope.
  - Variables defined inside a function are not accessible (visible) from outside the function.
  - Variables declared with var, let and const are quite similar when declared inside a function. They all have Function Scope.
  - Function (local) variables are deleted when the function is completed.
  - Function arguments (parameters) work as local variables inside functions.

Global Scope
  - A variable declared outside a function, becomes GLOBAL. A global variable has Global Scope: All scripts and functions on a web page can access it. 
  - Variables declared with var, let and const are quite similar when declared outside a block. They all have Global Scope.
  - If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
  - You can declare a global variable, even if the value is assigned inside a function.
  - In "Strict Mode", undeclared variables are not automatically global.
  - With JavaScript, the global scope is the JavaScript environment. 
    - In HTML, the global scope is the window object.
    - Global variables defined with the var keyword belong to the window object.
    - Global variables defined with the let keyword do not belong to the window object.
  - WARNING: Do NOT create global variables unless you intend to.
    - Your global variables (or functions) can overwrite window variables (or functions).
    - Any function, including the window object, can overwrite your global variables and functions.
    - In a web browser, global variables are deleted when you close the browser window (or tab).
*/

var define; // define variable
define = undefined; // assign value

var declare = null; // define & assign = declaration

var notANumber = `0`;
notANumber = NaN; // Re-assign with new value

console.log(
  define, // Return (retrieves) value
  declare,
  notANumber
);

/* SCOPING example */

let globalScope = 30; // global scope variable, cannot be redefined in the same scope.
const blockScope = 30;
  
if(true) { // if/else statements and etc. used to demonstrate code blocks. Scroll down for the statement itself.
  globalScope = 40;
  console.log(`Global variable inside: `, globalScope); // return 40
  
  const blockScope = 40; // Can be redefine inside block, but cannot be access from global scope.
  console.log(`Block Scope inside: `, blockScope); // return 40
  
  let nickName = `Coboly`;
  console.log(nickName);
  
  if (true) {
    console.log(`Inside nested code block: `, blockScope); // This returns 40 from one step above... or steps one to the global scope and returns 30 if it doesn't find the value. We also can redefine the variable like: let blockScope = 50;
  
    var scopeLess = `Don't use var`;
  }
}
  
console.log(`Global scope and block scope outside: `, globalScope, blockScope); // return 40 and 30 

// console.log(nickName); - It would return error.
console.log(scopeLess);