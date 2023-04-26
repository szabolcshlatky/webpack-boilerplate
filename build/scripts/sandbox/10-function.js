`use strict`;

/* FUNCTION

  a) Functions & Methods

    In JavaScript every function is an object. An object is a collection of key:value pairs. If a value is a primitive (number, string, boolean), or another object, the value is considered a property. If a value is a function, it is called a 'method'.

    Within the scope of an object, a function is referred to as a method of that object. It is invoked from the object namespace 'MyObj.theMethod()'. Since we said that a function is an object, a function within a function can be considered a method of that function.

    You could say things like “I am going to use the save method of my object.” And "This save method accepts a function as a parameter.” But you generally wouldn't say that a function accepts a method as a parameter.

    We invoke method with '.', we invoke function like this: functionName();

  b) Parameters & Arguments

    Parameters are properties of a function.
    - Parameters (if any) define the method signature.

    Arguments are properties of a particular call to a function.
    - Arguments are values passed into a function.
   
    When you define a function, the variables that represent the values that will be passed to it for processing are called parameters. However, when you use a function, the value you pass to it is called an argument.
*/

function welcome() { // Function declaration
  console.log(`Welcome!`);
}

welcome(); // Calling the function.

const greet = function () { // Function expression: the function name becomes 'greet'. Expressions are not hoisted like declarations. (Neither is hoisted in strict mode.)
  console.log(`Greetings!`);
}; // Only function expressions (!) use ';' at the end of the code block.

greet(); // Calling the function expression.

  /* a) Arguments & Parameters */

const hello = function (forname) { // 'forname' is a local variable, which we can use inside the code block.
  console.log(`Hello there ${forname}!`);
};
  
// console.log(forname); - Doesn't work because we can't access 'forname' from outside the block.
  
hello(`Net`); // `Net` is the value of 'forname'.
  
const goodTime = function (forname, fortime) { 
  console.log(`Good ${fortime} ${forname}!`);
};
  
goodTime(`Net`, `sunset`); // The order of the arguments must match with the order of parameters.
goodTime(); // The parameter variable's value will be undefined. So arguments are 'undefined'.
  
const goodMidnight = function (forname = `Net`, fortime = `midnight`) { 
  console.log(`Good ${fortime} ${forname}!`);
};
  
goodMidnight(); // Now the parameter variables have default values, it will return those.
goodMidnight(`Net`, `dawn`); // Now the new values as arguments, change the default values.
goodMidnight(`Ninja`); // Now the 'forname' changes only.
goodMidnight(``, `midday`); // Now the 'fortime' changes only.
  
  /* c) Return keyword */
const calcArea = function (circle) {
  let area = Math.PI * circle**2;
  console.log(area);
  return area; // Without 'return', after the calculation I couldn't work with the value (printed in the console) anymore.
};
  
const circleArea = calcArea(5); // Now the area's value stored in the global 'circleArea' variable.
console.log(circleArea);
  
const shorterCalcArea = function (circle) {
  return Math.PI * circle**2;
};
  
const shorterCircleArea = calcArea(3);
console.log(shorterCircleArea);
  
const calcVol = function (shorterCircleArea) {
  console.log(shorterCircleArea - 0.274333882308138);
};
  
calcVol(shorterCircleArea); // Now the value of the 'shorterCircleArea' is passed to 'calcVol' as an argument to work with.
  
  /* d) Arrow functions 
    Conversation from this example:
  
      const shorterCalcArea = function (circle) {
        return Math.PI * circle**2;
      };
    
  */
  
const arrowCalcArea = circle => Math.PI * circle**2; // When we have only one (no more, no less) parameter, we can leave the (). When we have only one simple (return) line, we can leave the 'return' keyword with the {};
  
const area = arrowCalcArea(4);
console.log(`area is: `, area);
  
  /* Practise arrow functions 
    1) const bye = function(){
      return `Bye-bye!`;
    };
      
    2) const bill = function(products, tax) {
      let total = 0;
      for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
      }
      return total;
    };
      
  */
  
const bye = () => `Bye-bye!`;
const byeBye = bye();
console.log(byeBye);
  
const bill = (products, tax) => {
let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};
  
console.log(bill([3, 5, 10], 0.3)); // We logging the results directly to the console.
  
  /* e) Callbacks
    
    The explanation of the callback function example below:
    - We declare 'myFunc' function expression which (variable) parameter is another function.
      - In its code block we declare the 'value' variable with the value of '50' 
      - After in the code block we call the parameter function itself with the parameter of the 'value' variable.
    
    - We call 'myFunc' and we need to pass an argument between the (). This argument is the value of the 'callbackFunc' (variable) parameter which is a function.
      - So we expand a function with its code block.
      - This function's parameter is value (declared variable in myFunc).
    
    - As we called 'myFunc' by its code block, we call 'callbackFunc' too with 'value' of '50'.
    - [We converted it to arrow function]
    */
  
const myFunc = (callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value);
};
  
/*
  myFunc(function(value) {
    // do something
    console.log(value);
  });
*/
  
myFunc(value => {
  // do something
  console.log(value);
});

  /* f) Rest parameter */

/* const double = (num1, num2, num3) => {
  // do something
}; 

Syntactic sugar:
*/

const double = (...nums) => {
  console.log(nums); // This will bundle up all the parameters to an array.
  return nums.map(num => num*2);
};

const doubleResult = double(1,3,5,7,9,2,4,6,8);
console.log(doubleResult);