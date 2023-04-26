`use strict`;

/* STRING: Between 'Apostrophes', "Quotemarks" or `Backticks (AltGr + 7)` */

console.log(`Hello World!`);

let email = `info@ictys.hu`;
console.log(email);

  /* a) Concatenation */
let firstName = 'Szabolcs';
let lastName = "Hlatky";
let fullName = firstName + ' ' + lastName;
console.log(fullName);

  /* b) Template `string` literal */
let template_String_literal = `My name is ${fullName}. You can email me here: ${email}`;
console.log(template_String_literal);

  /* c) HTML template */
let htmlTemplate = `
  <h1>${fullName}</h1>
  <em>${email}</em>
`;
console.log(htmlTemplate);

  /* d) Getting characters */
console.log(fullName[0]); // JS starts counting from 0.

  /* e) Properties */
console.log(fullName.length);

  /* f) Methods */
console.log(fullName.toUpperCase()); // This method won't change the original value of the variable.
let toLowerCase_String = fullName.toLowerCase(); // The variable keeps the results of the method.
console.log(toLowerCase_String); // This returns the results of the method (in the variable).
  
let indexOf_String = email.indexOf(`@`);
console.log(indexOf_String); // Returns the index number of the character.
let lastIndexOf_String = email.lastIndexOf(`s`);
console.log(lastIndexOf_String); // Returns the index number of the last 's' character.

let slice_String = email.slice(10,13); // Slicing characters (from,to) excluding the last count.
console.log(slice_String); // Returns the sliced part.

let substr_Ing = email.substr(0,4); // Substring characters (index to count from, amount).
console.log(substr_Ing) // Returns the substringed part.
  
let replace_String = email.replace(`hu`, `com`); // Replace the first 'hu' part to 'com'.
console.log(replace_String); // Returns 'email' value with the replaced part.

let trim = `         white spaces          `
console.log(trim.trim()); // Trim removes the extra whitespaces before and after the string.

  /* g) Type conversion */
let conString = String(NaN);
console.log(conString); // returns NaN as string

  /* h) Constructor */
const stringWrapper = new String(`ryu`);
console.log(stringWrapper);