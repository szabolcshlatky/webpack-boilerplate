// import * as jQuery from 'jquery';
// import 'bootstrap';

import './main.scss';

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

/* This code if the script lines are more above in the HTML.
$(document).ready(function() {
 ...
});

Firing event after the DOM loaded.

document.addEventListener('DOMContentLoaded', () => {
  // …
});
*/

const myHeading = $$('h1');
myHeading.textContent = 'Learning Syllabus & Roadmap';

const h6 = $$('h6');

/*
let iceCream = `chocolate`;
if(iceCream === `chocolate`) {
  alert(`Yay, I love chocolate ice cream!`);
} else {
  alert(`Awwww, but chocolate is my favorite...`);
}
*/

function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

console.log(multiply(4, 7), multiply(20, 20), multiply(0.5, 3));

h6.addEventListener('click', () => {
  alert('Check the console too! (F12)');
});

/* Same as:
document.querySelector('html').addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});
OR:
let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {
  alert('Ouch! Stop poking me!');
});
*/

const myImage = $$('.syntax img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/jawascript.png') {
    myImage.setAttribute('src', 'images/javascript.png');
  } else {
    myImage.setAttribute('src', 'images/jawascript.png');
  }
};

const myButton = $$('.btn');

/*
function setUserName() {
  let myName = prompt(`Please enter your name.`);
  localStorage.setItem(`name`, myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
UPDATED TO THIS: */

function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `JavaScript Engineer: ${myName}`;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `JAVASCRIPT Engineer: ${storedName}`;
}

myButton.onclick=() => {
  setUserName();
};
