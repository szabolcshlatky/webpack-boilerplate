function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.

  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining * 12;
    
  alert(`You have ` + days + ` days, ` + weeks + ` weeks, and ` + months + ` months left.`);
}

lifeInWeeks(prompt(`How old are you?`));