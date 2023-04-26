`use strict`;

/* IF/ELSE statement */

let aGe = 28.5;

if (aGe >= 21) {
  console.log(`You are old enough to drink internationally.`)
}

let ninjaS = [`shaun`, `ryu`, `chun-li`];

const concat_ryu_Array = ninjaS.concat([`ryu`]);

if (concat_ryu_Array.length > 3) {
  console.log(`That's 6 ninjas`);
}

  /* a) Logical operators

    - OR : || // If one of the conditions are true the statement runs.
    - AND : && // If both condition is true the statement runs.
    - NOT : !
  */

const password = `p@ss`;

if (password.length >= 18 && password.includes(`@`)) { // 'if' runs only if the condition is true.
  console.log(`That password is mighty strong!`);
} else if (password.length >= 12 || password.includes(`@`) && password.length > 8) {
  console.log(`That password is strong enough!`); 
} else {
  console.log(`That password is not strong enough!`); // 'else' runs only if the previous 'if' condition is false.
}

let user_login = false;

if (!user_login) { // False need to be true to run the code. So 'user' need to be NOT (!) to be true...
 console.log(`User logged in is:`, user_login);
}

/* BREAK & CONTINUE keywords */

let NinjaAges = [20, 25, 30, 35];

const ninjasOld = NinjaAges.concat([0, 5, 40]);

for (let i = 0; i < ninjasOld.length; i++) {

  if (ninjasOld[i] === 0) {
    continue; // If this condition is true, 'continue' will ignore the actual iteration and jump on the next iteration.
  }

  console.log(`Ninja years old are: `, ninjasOld[i]);

  if (ninjasOld[i] === 40) {
    console.log(`Congrats, you are the oldest ninja!`);
    break; // If this condition is true, we break out from the loop completely and won't iterate forward.
  }
}

/* SWITCH conditional statement */

const grade = `D`;

switch(grade) { // Checking the value of the 'grade' variable with strict equality (===).
  case `A`:
    console.log(`You got an A!`);
    break;
  case `B`:
    console.log(`You got an B!`);
    break;
  case `C`:
    console.log(`You got an C!`);
    break;
  case `D`:
    console.log(`You got an D!`);
    break; // We need break, because if the 'case' is true ('D'), it starts to run all cases below.
  case `E`:
    console.log(`You got an E!`);
    break;
  
  default: 
    console.log(`Not a valid grade!`);
}