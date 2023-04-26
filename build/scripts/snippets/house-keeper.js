let houseKeeper0 = {
  yearsOfExperience: 12,
  name: `Jane`,
  cleaningRepertoire: [`bathroom`, `lobby`, `bedroom`]
}

/* Constructor */

function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
  this.yearsOfExperience = yearsOfExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert(`Cleaning in progress...`);
  }
}

let houseKeeper1 = new HouseKeeper (9, `Tom`, [`lobby`, `bedroom`]);

let houseKeeper2 = new HouseKeeper (14, `Janet`, [`lobby`, `bathroom`]);

console.log(houseKeeper1, houseKeeper2);

let houseKeeper3 = new HouseKeeper (12, `James`, [`bedroom`]);

houseKeeper3.clean();