`use strict`;

/* FOR loop */

for(let i = 0; i < 5; i++) { // keyword (initialization variable; condition true / false; expression if the condition is true.)
  console.log(`in for loop:`, i);
}
console.log(`for loop finished`);

let Ninjas = [`shaun`, `ryu`, `chun-li`];

for (let i = 0; i < Ninjas.length; i++) {
  let ninjasHTML = `<div>${Ninjas[i]}</div>`;
  console.log(ninjasHTML);
}

/* WHILE loop */

let whilE = 0;

while (whilE < Ninjas.length) {
  console.log(Ninjas[whilE]);
  whilE++;
}

  /* a) do while loop */
let doWhile = 5;

do {
  console.log(`in do while loop:`, doWhile);
  doWhile++;
} while (doWhile < 5); // A do while loop is good, when I want to run a code at least once. If I would start with 4, it still runs once.