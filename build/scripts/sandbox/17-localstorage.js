`use strict`;

console.log(localStorage)

/* Store data in local storage */
localStorage.setItem(`name`, `mario`);
localStorage.setItem(`age`, 50); // Every data in the local storage is string. So 50 becomes `50`.

/* Get data from local storage */
let localName = localStorage.getItem(`name`);
let localAge = localStorage.getItem(`age`);

console.log(localName, localAge); // After the data have been set, we can get it anytime on the website until the browser keeps the data.

/* Updating data */
localStorage.setItem(`name`, `luigi`);
localStorage.age = 40;

localName = localStorage.getItem(`name`);
localAge = localStorage.getItem(`age`);
console.log(localName, localAge); // If we would comment out everything except the getItem it still would be 'luigi 40'.

/* Deleting data from local storage */
localStorage.removeItem(`name`);

localName = localStorage.getItem(`name`);
console.log(localName); // The returns null.

localStorage.clear(); // This removes all data.
console.log(localName, localAge); // These are null.

/* Stringifying & Parsing data */

const dotos = [
  { text: `play mariokart`, author: `shaun` },
  { text: `buy some milk`, author: `mario` },
  { text: `buy some bread`, author: `luigi` },
];

console.log(JSON.stringify(dotos)); // It becomes a JSON string. So now we can 'localStoring' it.

localStorage.setItem(`dotos`, JSON.stringify(dotos));

const stored = localStorage.getItem(`dotos`);

console.log(JSON.parse(stored)); // Its the original array again.