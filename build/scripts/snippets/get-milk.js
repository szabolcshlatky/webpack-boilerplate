function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveUp");

  alert(`buy ` + calcBottles(money, costPerBottle) + ` bottles of milk`);

  console.log("moveLeft");
  console.log("moveDown");
  console.log("enterHouse");

  return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {

  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles
}

function calcChange(startingAmount, costPerBottle) {
  
  var change = startingAmount % costPerBottle;
  return change;
}

alert(`Hello master, here is your ` + getMilk(prompt(`Starting forints to getMilk for?`), 240) + `Ft change.`);