`use strict`;

/* SET */

const namesArray = [`ryu`, `chun-li`, `ryu`, `shaun`];
console.log(namesArray);

const namesSet = new Set([`ryu`, `chun-li`, `ryu`, `shaun`]);
console.log(namesSet); // It returns without the second `ryu`.

const uniqueNames = [...namesSet];
console.log(uniqueNames);

const uniqueNamen = [...new Set(namesArray)];
console.log(uniqueNamen);

  /* a) Methods */

const agen = new Set();
agen.add(20);
agen.add(25).add(30);
agen.add(25);
agen.delete(30);

console.log(agen, agen.size); // size is the length property
console.log(agen.has(30)); // return boolean

agen.clear();
console.log(agen);

const ninijas = new Set([
  { name: `shaun`, age: 30 },
  { name: `crystal`, age: 29 },
  { name: `chun-li`, age: 32 }
]);

ninijas.forEach(ninija => {
  console.log(ninija.name, ninija.age);
});