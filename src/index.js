`use strict`;

/**
 * These commented out imports are the alternative to:
 * "useBuiltIns": "usage"
 * in the .babelrc
 */
import "core-js/modules/es.object.values";
import "core-js/modules/es.promise";

/**
 * This is required for generators, including async/await
 * Note: It seems that async/await is not built on generators,
 * but babel transpiles is to one for backwards support.
 */

import "regenerator-runtime/runtime";
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */


import './style.scss';
import getClasses from "./characters/getClasses";
import includesExample from "./characters/includesExamples";

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

getClasses();

const obj = { a: `alpha`, b: `bravo` };
const newObj = { ...obj, c: `charlie` };

console.log(newObj);

console.log(['a', 'b', 'c'].includes('b'));

const headline = `Welcome to the webpage`;
$$(`h1`).innerText = headline;

includesExample(['a', 'b', 'c'], 'b');

const eventCards = {
  weather: 2,
  robbers: 1,
  beasts: 4
};

// ES7 Object spread example
const monkEvents = {
  ...eventCards,
  heal: 1,
  conversion: 1,
  curse: 1
};
console.log("ES7 Object spread example: ", monkEvents);

// ES8 Object.values example
// Note: Will not transpile without babel/imported polyfills because it is a new method
console.log("ES8 Object.values example", Object.values(monkEvents));

// Event queue block scoping example
// Check babel output to see that `let` isn't simply switched to `var`
// because the code would not have the same output.
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1);
}

// async/await example from MDN
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();