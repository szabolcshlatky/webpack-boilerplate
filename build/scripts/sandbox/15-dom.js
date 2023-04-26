`use strict`;

/* Document Object Model */

console.log(document);

  /* a) Quering Elements */
    /* QE/a) ElementChild & getElementsBy ways */
var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.style.color = `red`;
   
document.getElementsByTagName(`li`); // returns HTMLCollection (array-like) and we need to specify the [index].
document.getElementsByTagName(`li`)[0].style.color = `goldenrod`;
document.getElementsByTagName(`li`).length;
  
document.getElementsByClassName(`item`);
  
/* The best ways: */

/*
  const $ = (id) => document.getElementById(id);
  const $$ = (query) => document.querySelector(query);
  const $$$ = (jquery) => document.querySelectorAll(jquery);
*/

    /* QE/b) ID selector */

const title = $(`title`);
title.innerHTML = `
  <data value="Dokumentum Objektum Modell">
    <dfn>
      <abbr title="Document Object Model">DOM</abbr>
    </dfn>
  </data>
`;

    /* QE/c) CSS selector */

const para = $$(`p`);
console.log(para);

const errorPara = $$(`.error`);
console.log(errorPara);

const errorDiv = $$(`div.error`); 
console.log(errorDiv);

const domH2 = $$(`body > main > .dom > h2`); // To get an element's unique CSS selector - Right click, inspect and at the DevTools's HTML part, right click on the element and copy selector.
console.log(domH2);

  /* c) NodeList */
const paras = $$$(`p`);
console.log(paras); // Returns node-list which is not Array

const errors = $$$(`.error`);
console.log(errors);

    /* NL/a) Getting elements */
console.log(paras[0]);

    /* NL/b) Methods */
paras.forEach(para => {
  console.log(para);
});

  /* d) Page content properties */
// const para = $$(`p`); - Already declared

console.log(para.innerText); // Returns the element's visible text content.

para.innerText = `Ninjas are awesome!`; // Changes the element's content.
console.log(para.innerText);

para.innerText += ` Hello World!`; // Adding extra text content

// const paras = $$$(`p`); - Already declared
paras.forEach(par => {
  console.log(par.innerText);
  par.innerText += ` new text by forEach()`;
});

const textContent = $$(`.textcontent`);
console.log(textContent.textContent); // Returns (or changes) the visible and unvisible text content.

textContent.textContent = `Use innerHTML, instead of textContent or innerText.`;

const content = $$(`.content`);
console.log(content.innerHTML); // Returns the element's html.

content.innerHTML = `<h3>This is a new H3</h3>`; // This overwrites the content.
content.innerHTML += `<p>This is a new P</p>`; // This appends content.

let Concat_Array = [`shaun`, `ken`, `chun-li`, `crystal`, `yoshi`];

Concat_Array.forEach(ninja => {
  content.innerHTML += `<p>${ninja}</p>`;
});

  /* e) Attributes */
const aMDN = $$(`a`);

console.log(aMDN.attributes); // Returns attribute NamedNodeMap
console.log(aMDN.getAttribute(`rel`)); // Returns attribute value

aMDN.setAttribute(`target`, `_blank`); // Changes existing attribute's value.
aMDN.setAttribute(`style`, `text-decoration: overline`); // Adds new attribute with value.

  /* f) CSS Styles */
console.log(domH2.style); // Returns the CSS styles which can be use or already been used.

domH2.style.fontSize = `3rem`; // Camel case property names and string values. If I would use empty string it would removes the CSS property.
console.log(domH2.style.fontSize); // Returns the exact CSS style value.

$$(`ul`).style.backgroundColor = `yellow`;

  /* g) Classes */

$$$(`button`).forEach(btn => console.log(btn.classList)); // Returns all 'buttons' classes.
$$(`.reset`).classList.remove(`invisible`); // Removes class (and remove CSS)
$$(`.disabled`).classList.add(`invisible`); // Add class (and applies CSS)

const submitBTN = $$(`.submit`);
submitBTN.classList.toggle(`btn`); // Add 'btn' class if it's missing (or removes if its there).

$$(`.disabled`).classList.toggle(`invisible`); // Remove 'invisible' class because its there.

const loremTexts = $$$(`.lorem`);

loremTexts.forEach(loremText => {

  if (loremText.textContent.includes(`error`)) {
    loremText.classList.add(`errorText`);
  } else if (loremText.textContent.includes(`success`)) {
    loremText.classList.add(`successText`);
  }
});

// Method: contains() check a classname and returns boolean.

/* h) DOM Tree

  1) HTMLCollection methods
  - .item()
  - .namedItem()

  2) NodeList methods
  - .item()
  - .entries()
  - .forEach()
  - .keys()
  - .values()  
*/

const article = $$(`article`);
console.log(article.children); // Returns a HTMLCollection with all the children elements.

const arrayFrom_HTMLCollection = Array.from(article.children); // This makes an array from HTMLCollection to use forEach method on them.
console.log(arrayFrom_HTMLCollection); // This is not desctructive, so the original is still an HTMLCollection.

arrayFrom_HTMLCollection.map(child => {
  child.classList.add(`article-element`);
});

const h4 = $$(`h4`);
console.log(h4.parentElement); // Return with parent element.
console.log(h4.parentElement.parentElement); // Return with parent-parent element.
console.log(h4.nextElementSibling);
console.log(h4.previousElementSibling); // Returns null, because there is no prev. sibling.

console.log(h4.nextElementSibling.parentElement.children); // Chaining to children at the end, which returns HTMLCollection.

//   /* i) Event Listener */
// const todosBtn = $$(`.todosBtn`);
// const todosLi = $$$(`.todosLi`);
// const todosUl = $$(`.todoItems`);
// const todoItems = $$$(`.todoItem`);

// todosBtn.addEventListener(`click`, () => {
//   console.log(`You clicked me`);
//   todosUl.innerHTML += `<li>Added with innerHTML</li>`;

//   const somethingNew = document.createElement(`li`);
//   somethingNew.textContent = `Added with document.createElement() .append and .prepend`;
//   // todosUl.append(somethingNew); - Put it for the last child of the targeted 'ul' element.
//   todosUl.prepend(somethingNew); // Put it for the first child of the targeted 'ul' element.
// });

// todosLi.forEach(todoLi => {
//   todoLi.addEventListener(`click`, e => {
//     console.log(e); // Event object which created by the browser: 'e'. - About the event that happened.
//     console.log(`${todoLi.textContent} clicked `, e.target);
//     e.target.style.textDecoration = `line-through`;
//   });
// });

//     /* EL/a) Event Bubbling & Delegation 
    
//     If we have click event listener on 'li' and on 'ul' too. By clicking the 'li' event fires and 'bubbles' up to the 'ul' and fires it's click event too.
    
//     */

// todoItems.forEach(item => {
//   item.addEventListener(`click`, e => {
//     console.log(`event in LI`);
//     e.stopPropagation(); // This will stop event bubbling.
//     e.target.remove(); // This won't delete new 'li' elements.
//   });
// });

// todosUl.addEventListener(`click`, e => {
//   console.log(`event in UL`);
//   console.log(e);

//   if (e.target.tagName === `LI`) {
//     e.target.remove(); // This will remove the new 'li' elements too.
//   }
// });

    /* EL/b) copy event */
const copyme = $$(`.copy-me`);

copyme.addEventListener(`copy`, () => {
  console.log(`OI! My content is copyright`);
});

submitBTN.addEventListener(`click`, function (event) {
  alert(`I got clicked!`);
  console.log(event)
});

    /* EL/c) mousemove event */

const box = $$(`.box`);

box.addEventListener(`mousemove`, e => {
  box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`; // Offset is the cursor position in pixels relative to the 'box'.
});

    /* EL/d) mousemove event */
document.addEventListener(`wheel`, e => {
  console.log(e.pageX, e.pageY); // Page is the cursor position in pixels relative to the page.
});

    /* EL/e) keypress event */

function anotherAddEventListener(typeOfEvent, callback) {
  // Detect Event Code...

  let eventThatHappened = {
    eventType: `keypress`,
    key: `p`,
    durationOfKeypress: 2
  }

  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

anotherAddEventListener(`keypress`, function (event) {
  console.log(event);
});

    /* EL/f) keyup & keydown events below... */

  /* j) Form Events */

    /* FE/a) Regular Expressions patterns & methods 
    
      /ninja/ -> input matches with any text, which includes the word 'ninja'
      /^ninja$/ -> input matches with the word 'ninja' only
      /[a-z]{,10}/ -> input matches if it finds letters in it and length maximum is 10 characters.
      /^[a-z]$/ -> input matches with a single character between a-z
      /^[A-Z]$/ -> input matches with a single character between A-Z
      /^[a-zA-Z]$/ -> input matches with a single character between a-z or A-Z
      /^[a-zA-Z0-9]$/ -> input matches with a single character a-z or A-Z or 0-9
      /^[a-zA-Z0-9]{6,10}$/ -> input matches with 6 to 10 characters long a-z or A-Z or 0-9
      /^.{4,}$/ -> input matches with any character '.' at least with 4 characters 
    
    */
const username = `sable`;
let pattern = /[a-z]{6,}/;

let regex_result = pattern.test(username); // This RegEx method returns a boolean based on the parameter's value, that passed on the pattern or not.

console.log(regex_result); // This returns false. But if we would use 6 or more character long text it would be true, even if we put other characters too, because we forgot to use ^ and $. Those should be used!

pattern = /^[a-z]{5}$/;
regex_result = pattern.test(username);

if(regex_result){
  console.log(`RegEx test passed :)`);
} else {
  console.log(`RegEx test failed :(`);
}

let regEx_result = username.search(pattern); // This RegEx method returns an index number, on where it found the match.
console.log(regEx_result); // This returns 0 because from 0 position there is a match. If we would get -1, there is no match. This could return other index numbers too, if we don't use ^ and $.

  /* FE/b) RegEx validation */
const signupform = $$(`.signup-form`);
// const username = $(`username`);
const feedback = $$(`.feedback`);
const usernamePattern = /^[a-zA-Z]{6,12}$/;
  
signupform.addEventListener(`submit`, e => {
  e.preventDefault(); // Prevent the default 'refresh' action.
  // console.log(username.value); // Value gets the typed text.
  console.log(signupform.username); // This gets the 'username' id's input field's value.

  const username = signupform.username.value;

  if(usernamePattern.test(username)) {
    feedback.textContent = `That username is valid!`;
  } else {
    feedback.textContent = `Username must contain letters only & be between 6 to 12 characters long!`;
  }

});

  /* FE/c) Live feedback */
signupform.username.addEventListener(`keyup`, e => {
  console.log(e);
  console.log(e.target.value, signupform.username.value); // In two different ways: 'target' is the evented element and value is the user's in-put. Now its the 'username' input in 'signupform'.

  if(usernamePattern.test(e.target.value)){
    console.log(`passed`);
    signupform.username.setAttribute(`class`, `success`);
  } else {
    console.log(`failed`);
    signupform.username.setAttribute(`class`, `error`);
  }
});

  /* FE/d) Methods */
// .reset(); is clean the input field after the submit punched in.