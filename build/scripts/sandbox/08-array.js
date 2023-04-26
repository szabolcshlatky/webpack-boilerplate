`use strict`;

/* ARRAY */

let ninjas = [`shaun`, `ryu`, `chun-li`];
console.log(ninjas);
console.log(ninjas[2]); // Third element in the array.
  
ninjas[1] = `ken`; // Rewrite the second element.
console.log(ninjas);
  
let ninjaAges = [20, 25, 30, 35];
console.log(ninjaAges[3]);
  
let ninjasRandom = [`mario`, `luigi`, 41, 39];
console.log(ninjasRandom);
  
  /* a) Properties */
console.log(ninjas.length);
  
  /* b) Methods - functions & objects & control flows explained below */
let join_Array = ninjas.join(`,`); // Makes a string out of them separated by ',';
console.log(join_Array);
  
let indexOf_Array = ninjas.indexOf(`shaun`);
console.log(indexOf_Array);
  
let concat_Array = ninjas.concat([`crystal`, `yoshi`]); // Adding extra elements.
console.log(concat_Array);
  
let push_Array = ninjas.push(`ryu`); // Adding a new value to the end.
console.log(push_Array); // Returns the length of the new array.
console.log(ninjas); // Destructive method (changes the original variable).
  
let pop_Array = ninjas.pop(); // Removes the last element.
console.log(pop_Array); // Returns the popped element.
console.log(ninjas); // Destructive method (changes the original variable).
  
console.log(ninjas.includes(`ryu`)); // This method returns a boolean. Is the array includes the written element?

  /* forEach() 
    By an example:
    
    // let concat_Array = [`shaun`, `ken`, `chun-li`, `crystal`, `yoshi`]; - Already declared.
      
    concat_Array.forEach(function (ninja, index) { 
      // This iterates over an array. After each element in the array it calls the function. The 'ninja' parameter is the array's elements one by one. 'index' is the optional parameter of the element.
    
      console.log(`Hello ${ninja}!`);
    }); 
  
    Convert to arrow function:
  
    concat_Array.forEach((ninja, index) => { 
      console.log(`Hello ${ninja}! Your index is: ${index}!`);
    }); 
  
    Make it as a callback & forEach function:
  */
  
const logNinja = (ninja, index) => {
  console.log(`Hello ${ninja}! Your index is: ${index}!`);
};
    
concat_Array.forEach(logNinja);
    
const ninjas_ul = $$(`.ninjas`); // Use forEach() on NodeList, but orherwise use map().
    
let ninja_li = ``;
    
/* concat_Array.forEach(function(ninja) {
  ninja_li += `<li style="color:purple;">${ninja}</li>`;
}); - To arrow function: */
    
concat_Array.forEach(ninja => {
  ninja_li += `<li style="color:purple; class="item">${ninja}</li>`;
});
    
console.log(ninja_li);
ninjas_ul.innerHTML = ninja_li;
  
    /* Chainable Array methods */

      /* CA/a) filter() */
const scores = [10, 30, 15, 25, 50, 40, 5];
  
const filteredScores = scores.filter(score => { // This fires a callback function after all item in the array. Score is the item like in forEach().
  return score > 20; // If it returns true it keeps the item in the array. If it returns false it takes out the element.
}); 
  
console.log(`scores: ${scores} and scores above twenty: ${filteredScores}`); // Non-destructive method, so it won't change the original array.

const ninja_users = [
  { name: `shaun`, premium: true },
  { name: `yoshi`, premium: false },
  { name: `mario`, premium: false },
  { name: `chun-li`, premium: true }
];

const premiumUsers = ninja_users.filter(ninja_user => ninja_user.premium);

console.log(premiumUsers);

    /* CA/b) map() */
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(price => { // This fires a callback function after all item in the array.
  return price / 2; // This changes the old values, right on their position to the new one, non-destructively.
});

console.log(`prices: ${prices} and salePrices behalved: ${salePrices}`);

const products = [
  { name: `gold star`, price: 20 },
  { name: `mushroom`, price: 40 },
  { name: `green shells`, price: 30 },
  { name: `banana skin`, price: 10 },
  { name: `red shells`, price: 50 }
];

const saleProducts = products.map(product => {
  if(product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product; // Without change it will give back the original.
  }
});

console.log(products, saleProducts);

    /* CA/c) reduce() */
const points = [10, 20, 60, 40, 70, 90, 30];

const reducedPoints = points.reduce((acc, curr) => { // After each item this callback function fires and the 'acc' remembers the item; 'curr' is the actual item in the iteration.
  if(curr > 50) {
    acc++;
  }
  return acc;
}, 0); // 0 is the initial value of acc.

console.log(reducedPoints); // This returns '3' as number, because 3 item is over '50'. Non-destructive.

const pointsTable = [
  { player: `mario`, score: 50 },
  { player: `yoshi`, score: 30 },
  { player: `mario`, score: 70 },
  { player: `crystal`, score: 60 }
];

const marioTotal = pointsTable.reduce((acc, curr) => {
  if(curr.player === `mario`){
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(pointsTable, marioTotal); // This returns '120' as number.

    /* CA/d) find() */
const scorings = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scorings.find(scoring => { // This iteration fires the callback function on the first true value and stop iterating.
  return scoring > 50; 
});

console.log(firstHighScore); // This returns 60 as number.

    /* CA/e) sort() & reverse() */
// let concat_Array = [`shaun`, `ken`, `chun-li`, `crystal`, `yoshi`]; - Already declared
// const scores = [10, 30, 15, 25, 50, 40, 5]; - Already declared

console.log(concat_Array.sort()); // This changes the original array and sort it to alphabetical order.
console.log(concat_Array.reverse());

console.log(scores.sort()); // This sort the numbers to ascending order. But only checks the first numbers. So '5' will come after '40'.
console.log(scores.reverse()); // This sort the numbers to descending order.

console.log(scores.sort((a,b) => b - a)); // This solve the 'first' number problem.);
  
scores.sort((a,b) => a - b); // This will reverse the numbers.
console.log(scores);

const players = [
  { name: `mario`, score: 20 },
  { name: `luigi`, score: 10 },
  { name: `chun-li`, score: 50 },
  { name: `yoshi`, score: 30 },
  { name: `shaun`, score: 70 }
];

    /* 
players.sort((a,b) => { // sort() by itself doesn't know how to sort objects. We fire a callback function on consecutive elements.
  if(a.score > b.score){ // 'a' and 'b' are the two elements next to each other. Example: 'luigi' is 'a'; 'chun-li' is 'b'
    return -1;
  } else if(b.score > a.score) {
    return 1; // If this happens 'b' will swapped with 'a'.
  } else {
    return 0;
  }
});

console.log(players);

Shorter version: */

console.log(
  players.sort((a,b) => b.score - a.score) // If 'b.score' greater than 'a.score', then it will be positive number and it comes first. But they will swap if it returns negative number.
);

    /* CA/f) Chaining methods */

const marioCarts = [
  { name: `gold star`, price: 30 },
  { name: `green shell`, price: 10 },
  { name: `red shell`, price: 40 },
  { name: `banana skin`, price: 5 },
  { name: `mushroom`, price: 50 }
];

/*
const filteredMario = marioCarts.filter(marioCart => marioCart.price > 20); // This returns an array.
const mappedMario = filteredMario.map(marioCart => { // This works on array.
  return `the ${marioCart.name} is ${marioCart.price / 2} pounds`;
});
*/

const mappedMario = marioCarts
  .filter(marioCart => marioCart.price > 20)
  .map(marioCart => `the ${marioCart.name} is ${marioCart.price / 2} pounds`);

console.log(mappedMario);

  /* c) Constructor */

const arrayWrapper = new Array(20, 25, 30); // Constructor way of creating objects.

console.log(arrayWrapper);

  /* d) Spread syntax */

const humans = [`shaun`, `ryu`, `crystal`] ;
console.log(...humans); // Strings separated with whitespace.

const humanMembers = [`mario`, `chun-li`, ...humans];
console.log(...humanMembers); // Strings separated with whitespace.