"use strict";
var $ = function (id) { return document.getElementById(id); };
var $$ = function (query) { return document.querySelector(query); };
var $$$ = function (jquery) { return document.querySelectorAll(jquery); };
/* This code if the script lines are more above in the HTML.
$(document).ready(function() {
 ...
});

Firing event after the DOM loaded.

document.addEventListener('DOMContentLoaded', () => {
  // …
});
*/
var myHeading = $$("h1");
myHeading.textContent = "Learning Syllabus & Roadmap";
/*
let iceCream = `chocolate`;
if(iceCream === `chocolate`) {
  alert(`Yay, I love chocolate ice cream!`);
} else {
  alert(`Awwww, but chocolate is my favorite...`);
}
*/
function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}
console.log(multiply(4, 7), multiply(20, 20), multiply(0.5, 3));
myHeading.addEventListener("click", function () {
    alert("Check the console too! ( F12 )");
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
var myImage = $$("img");
myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "images/jawascript.png") {
        myImage.setAttribute("src", "images/javascript.png");
    }
    else {
        myImage.setAttribute("src", "images/jawascript.png");
    }
};
var myButton = $$("button");
/*
function setUserName() {
  let myName = prompt(`Please enter your name.`);
  localStorage.setItem(`name`, myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
UPDATED TO THIS:*/
function setUserName() {
    var myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = 'FullStack JavaScript Programmer & Web Developer: ' + myName;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "FullStack JavaScript Programmer & Web Developer: " + storedName;
}
myButton.onclick = function () {
    setUserName();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBRSxJQUFLLE9BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQztBQUM5QyxJQUFNLEVBQUUsR0FBRyxVQUFDLEtBQUssSUFBSyxPQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUM7QUFDcEQsSUFBTSxHQUFHLEdBQUcsVUFBQyxNQUFNLElBQUssT0FBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQWpDLENBQWlDLENBQUM7QUFFMUQ7Ozs7Ozs7Ozs7RUFVRTtBQUVGLElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixTQUFTLENBQUMsV0FBVyxHQUFHLDZCQUE2QixDQUFDO0FBRXREOzs7Ozs7O0VBT0U7QUFFRixTQUFTLFFBQVEsQ0FBQyxJQUFJLEVBQUMsSUFBSTtJQUN6QixJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFaEUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNsQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQztBQUVIOzs7Ozs7Ozs7RUFTRTtBQUVGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUV4QixPQUFPLENBQUMsT0FBTyxHQUFHO0lBQ2hCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsSUFBRyxLQUFLLEtBQUssdUJBQXVCLEVBQUU7UUFDcEMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUNyRDtTQUFNO1FBQ0wsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUNyRDtBQUNILENBQUMsQ0FBQTtBQUVELElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUU1Qjs7Ozs7O2tCQU1rQjtBQUVsQixTQUFTLFdBQVc7SUFDbEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDL0MsSUFBRyxDQUFDLE1BQU0sRUFBRTtRQUNWLFdBQVcsRUFBRSxDQUFDO0tBQ2Y7U0FBTTtRQUNMLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsbURBQW1ELEdBQUcsTUFBTSxDQUFDO0tBQ3RGO0FBQ0gsQ0FBQztBQUVELElBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQ2hDLFdBQVcsRUFBRSxDQUFDO0NBQ2Y7S0FBTTtJQUNMLElBQUksVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxtREFBbUQsR0FBRyxVQUFVLENBQUM7Q0FDMUY7QUFFRCxRQUFRLENBQUMsT0FBTyxHQUFHO0lBQ2pCLFdBQVcsRUFBRSxDQUFDO0FBQ2hCLENBQUMsQ0FBQSJ9