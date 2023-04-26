/* DOM */

var heading = document.firstElementChild.lastElementChild.firstElementChild;

heading.innerHTML = `<strong>DOM</strong>`;
heading.style.color = `red`;

console.log(
  heading.textContent, // returns (or changes only the content). 
  heading.innerHTML // returns (changes or expands the content even with new html elements).
);

document.getElementsByTagName(`li`); // returns HTMLCollection (array) and we need to specify the [index].
document.getElementsByTagName(`li`)[1].style.color = `goldenrod`;
document.getElementsByTagName(`li`).length;

document.getElementsByClassName(`item`);

var title = document.getElementById(`title`);
title.innerHTML = `<h1>Document Object Model</h1>`;

/* CSS selector */

document.querySelector(`input`).click();

document.querySelector(`.li3rd`).innerHTML = `<code>document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML = "Angela"</code>`;

document.querySelectorAll(`.item`).length; // returns NodeList (array) and we need to specify the [index].

/* const nodeList = document.querySelectorAll(".item");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.backgroundColor = "red";
} */


document.querySelector(`li a`).style.color = `silver`;

/* Changing style */

heading.style.fontSize = `3rem`; // Camel case property names and string values.

document.querySelector(`.btn`).style.backgroundColor = `yellow`;

/* Classes */

document.querySelector(`button`).classList;
document.querySelector(`button`).classList.add(`invisible`);
document.querySelector(`button`).classList.remove(`invisible`);

document.querySelector(`a`).classList.toggle(`huge`);

/* Attributes */

document.querySelector(`a`).attributes;
document.querySelector(`a`).getAttribute(`href`);
document.querySelector(`a`).setAttribute(`target`, `_self`);
document.querySelector(`a`).setAttribute(`href`, `#`);

/* Event Listener */

heading.addEventListener(`click`, function (event) {
  alert(`I got clicked!`);
  console.log(event)
});


function anotherAddEventListener(typeOfEvent, callback) {
  // Detect Event Code...

  var eventThatHappened = {
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

/* jQUERY */

/* CSS */

console.log($(`h1`).css);
console.log($(`h2`).css(`font-size`));

$(`h2`).css(`color`, `red`);

/* Class */

$(`h2`).addClass(`huge margin-50`);
$(`h2`).hasClass(`margin-50`);

$(`a`).removeClass(`huge`);

/* innerHTML, textContent */

$(`h3`).html(`<em>Bye</em>`);

$(`a`).text(`LINK`);

/* Attributes */

console.log($(`img`).attr(`src`));
console.log($(`h1`).attr(`class`));

$(`a`).attr(`href`, `scripts/jquery-dom.js`);

/* Event Listener */

$(`h3`).click(function() {
  $(`h3`).css(`color`, `purple`);
});

$(`button`).click(function() {
  $(`h3`).css(`font-size`, `3rem`);
});

$(`#text`).keypress(function(event) {
  console.log(event.key);
  $(`a`).text(event.key);
});

$(`h3`).on(`mouseover`, function() {
  $(`#text`).css(`background-color`, `lightgreen`);
});

/* Adding & removing elements */

$(`br`).before(`<button>Before</button>`);
$(`br`).after(`<button>After</button>`);

$(`br`).prepend(`<button>Prepend</button>`); // Putting the element inside before the content.
$(`br`).append(`<button>Append</button>`); // Putting the element inside after the content.

$(`hr`).remove();

/* Animations */

$(`.hide`).on(`click`, function() {
  $(`img`).hide();
});

$(`.show`).on(`click`, function() {
  $(`img`).show();
});

$(`.toggle`).on(`click`, function() {
  $(`img`).toggle();
});

$(`.fadeOut`).on(`click`, function() {
  $(`img`).fadeOut();
});

$(`.fadeIn`).on(`click`, function() {
  $(`img`).fadeIn();
});

$(`.fadeToggle`).on(`click`, function() {
  $(`img`).fadeToggle();
});

$(`.slideUp`).on(`click`, function() {
  $(`img`).slideUp();
});

$(`.slideDown`).on(`click`, function() {
  $(`img`).slideDown();
});

$(`.slideToggle`).on(`click`, function() {
  $(`img`).slideToggle();
});

$(`.animate-opacity`).on(`click`, function() {
  $(`img`).animate({
    opacity: 0.5
  });
});

$(`.animate-margin`).on(`click`, function() {
  $(`img`).animate({
    margin: `20%`
  });
});

$(`.animate-css`).on(`click`, function() {
  $(`img`).slideUp().slideDown().animate({
    opacity: 0.5
  });
});