`use strict`;

import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
import { HasFormatter } from "./interfaces/HasFormatter";
import { ListTemplate } from "./classes/ListTemplate";

const $ = (id: any) => document.getElementById(id);
const $$ = (query: any) => document.querySelector(query);
const $$$ = (jquery: any) => document.querySelectorAll(jquery);

/* TypeScript SANDBOX */

  /* Primitive types */

let string =  `Not-A-Number`;
let number = 0;
let boolean = false;

// boolean = `true`; -> We can't change data type in TS.
boolean = true;

    /* Explicit types */

let explicitString: string; // Initialize this variable, but don't give it a value. It will be a string in the future.
let explicitNumber: number;
let explicitBoolean: boolean;

      /* Union types */

let unionTypes: string|number; // This can be string and number in the future.

    /* Any type */

let anyType: any /* This can change datatypes even if its declared. */ = null;

  /* Arrays */

let arrayOfStrings = [`mario`, `luigi`, `yoshi`];
arrayOfStrings.push(`toad`);
// arrayOfStrings.push(number); -> We can't push different datatype.

let arrayOfNumbers = [10, 20, 30, 40];
arrayOfNumbers.push(25);
// arrayOfNumbers[0] = boolean; -> We can't change to a different datatype.

let arrayMixed = [`ken`, 4, `chun-li`, 8, 9];
arrayMixed.push(`ryu`);
arrayMixed[0] = 3; // We can change to already existing datatypes.

/* let explicitArrayOfStrings: string[];
  explicitArrayOfStrings.push(`shaun`); -> This wouldn't compile because this is not an empty array yet.
*/

let explicitArrayOfStrings: string[] = [];
explicitArrayOfStrings.push(`shaun`);

let explicitArrayUnion: (string|number|boolean)[] = [];
explicitArrayUnion.push(string, number, boolean);

let anyMixedArray: any[] = [];

  /* Objects */

let object = {
  name: `mario`,
  age: 30,
  gender: true
};

object.age = 40;
// object.age = `30`; -> We can't change property value's datatype.
// object.array = [string, number, boolean]; -> We can't add properties to existing object.

/* I can't take off properties, it has to be in the same structure with the same datatypes. ->
  object = {
    name: `yoshi`,
    age: 50
  };
*/

let explicitObject: object; // This can be array too because array is object datatype.

let expObjLiteral: { name: string, age: number, gender: boolean };

let anyObjLiteral: { name: any, age: any, gender: any };

  /* Functions */

const circ = diameter => diameter * Math.PI;
console.log(circ(string)); // This would return NaN.
  
const circa = (diameter: number) => diameter * Math.PI;
console.log(circa(number)); // The 'diameter' has to be a number.

let explicitFunction: Function;

explicitFunction = () => {
  console.log(`Hello there!`);
};

explicitFunction();

const add = (a: number, b: number, c?: number | string) => { // ? means 'c' is optional parameter.
  console.log(a + b);
  console.log(c); // This will be undefined without default value.
  // Without 'return' statement the function returns 'void' which is the complete lack of value, which is also undefined in JS.
};

add(5, 10);

const minus = (a: number, b: number): number => { // after the (...) the optional ': number' part shows that the function returns a number.
  return a - b;
};

let minusResult = minus(10, 7); // The returned value in 'minus' function decides the 'minusResult's datatype.
console.log(minusResult);

    /* Type Aliases */

type StrOrNum = string | number;
type objWithName = { name: string, uid: StrOrNum };

const logDetails = (uid: StrOrNum, item: string) => {
  console.log(`${item} has an uid of ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

    /* Signatures */

let welcome: Function;

let signatureEx1: (a: string, b: string) => void; // The parameters don't have to be 'a' and 'b', just it must be string.
signatureEx1 = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

let signatureEx2: (a: number, b: number, c: string) => number;
signatureEx2 = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add'){
    return numOne + numTwo;
  } else { // Without else this would return error because it has to return a number.
    return numOne - numTwo;
  }
};

let signatureEx3: (obj: { name: string, age: number }) => void;

type person = { name: string, age: number };

signatureEx3 = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old.`);
}

  /* Generics */

const addUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
};

let docFirst = addUID(`Hello`);
console.log(docFirst);

const addUID_2 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
};

let docSecond = addUID_2({name: `peach`, age: 40});
console.log(docSecond.age); // With the '<T>' mark we can refer to the object's part.

const addUID_3 = <T extends {name: string}>(obj: T) => { // The object needs to have a 'name' property which value is a string.
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
};

let docThird = addUID_3({name: `wario`, age: 40});
console.log(docThird.name);

    /* with interfaces */

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T; // Type 'T' means whatever datatype we add.
}

const docThree: Resource<string[]> = {
  uid: 1,
  resourceName: `shoppingList`,
  data: [`bread`, `milk`, `toilet roll`]
};

console.log(docThree);

  /* Enums */

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Source<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docFour: Source<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: `name of the wind` }
};

const docFive: Source<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { name: `crystal` }
};

console.log(docFour, docFive);

  /* Tuples */

let tup: [string, number, boolean] = [`ryu`, 25, true]; // In tuple 'arrays' the datatype orders has to match.

  /* Interfaces */

interface IsPerson { // This is not constructor like class, just give a structure for the IsPerson objects.
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
  
const netninja: IsPerson = {
  name: `shaun`,
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent`, amount);
    return amount;
  }
};
  
let someone: IsPerson;
  
const greetPerson = (person: IsPerson) => {
  console.log(`General`, person.name);
};
  
greetPerson(netninja);

/* Finance Logger PROJECT */

  /* DOM  */

const anchor = $$(`a`)!; // ! means we surely know that this would find an <a> element.

if(anchor){
  console.log(anchor.href);
}

  /* Type Casting */

const form = $$(`.new-item-form`) as HTMLFormElement; // By class or ID TS doesn't know what type of element we use.
console.log(form.children);
  
const type = $(`type`) as HTMLSelectElement;
const tofrom = $(`tofrom`) as HTMLInputElement;
const details = $(`details`) as HTMLInputElement;
const amount = $(`amount`) as HTMLInputElement;
  
    /* List template instance */
const ul = $$(`ul`)!;
const list = new ListTemplate(ul);

  /* Classes & Access modifiers -> classes/invoice.ts file */

const invOne = new Invoice(`mario`, `work on the mario website`, 250);
const invTwo = new Invoice(`luigi`, `work on the luigi website`, 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invOne.client = `yoshi`;
invTwo.amount = 400;

console.log(invOne, invTwo);

invoices.forEach(inv => {
  console.log(inv.client, inv.details, inv.amount, inv.format());
});

  /* Interfaces -> HasFormatter */

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice(`mushroom`, `web work`, 250);
docTwo = new Payment(`toad`, `plumbing work`, 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

form.addEventListener(`submit`, (e: Event) => {
  e.preventDefault();

  let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]; // As an array we couldn't use because TS doesn't know which value has what datatypes.

  let doc: HasFormatter;

  if (type.value === `invoice`) {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(...values); // Tuple works with spread operator.
  }

  console.log(
    /*
      type.value,
      tofrom.value,
      details.value,
      amount.valueAsNumber // This turns the basic string value to a number.

      Instead:
    */
    doc
  );

  list.render(doc, type.value, `end`);
});