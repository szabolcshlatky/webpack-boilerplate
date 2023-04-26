`use strict`;

/* SYMBOL */

const symbolOne = Symbol(`a generic name`);
const symbolTwo = Symbol(`a generic name`);

console.log(symbolOne, typeof symbolTwo);
console.log(symbolOne == symbolTwo); // Two symbols are never the same.

const ninnja = {

};

ninnja.age = 30;
ninnja[`belt`] = `orange`;
ninnja[`belt`] = `black`;
ninnja[symbolOne] = `ryu`;
ninnja[symbolTwo] = `shaun`;

console.log(ninnja);