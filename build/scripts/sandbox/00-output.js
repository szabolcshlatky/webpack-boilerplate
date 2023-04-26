`use strict`;

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

/* This code if the script lines are more above in the HTML.
$(document).ready(function() {
 ...
});
*/

/* OUTPUT */

console.clear();
console.log(console);

console.log(document.URL);
console.log(document.location);
console.log(document);

console.log(window);
// console.log(this); // This returns the scope where it is. Now it would return the window object.
  
/* We can leave the 'window.' part, because its the global object. I could use window.console.log(``) etc...

   alert(``); // Alert box
   prompt(``); // Alert box with text input field.
   scrollTo(0, 0); // Scrolling the window on x and y coordinates
  outerWidth; // Returns the width in pixels.
*/