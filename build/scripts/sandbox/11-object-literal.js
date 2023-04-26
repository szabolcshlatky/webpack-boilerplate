`use strict`;

/* OBJECT LITERAL */

let user = {
  name: `Coboly`, // key: value pair
  age: 29,
  email: `hlatkyszabolcs@ictys.hu`,
  location: `Sopron`,
  blogs: [`Galater 2:20`, `Ictys`],

  sites: [
    { title: `geo-karta`, likes: 100 },
    { title: `okos valas`, likes: 200 }
  ],

  login: function () {
    console.log(`The user logged in.`);
  },
  logout() { // This is also regular function.
    console.log(`The user logged out.`);
  },

  logBlogs: function () {
    console.log(this.blogs); // This will go out to the context (which is the 'blog' object) and returns the value of the 'blogs' key.

    this.blogs.forEach(blog => {
      console.log(blog);
    });

    this.sites.forEach(site => {
      console.log(site.title, site.likes);
    });
  }
};

console.log(user); // Returns all elements + Prototype (it will be important!)

  /* a) Get/change values using '.' notation */
console.log(user.name); // Returns the 'name' key's value.
user.age = 29.5; // Changes the 'age' key's value.

  /* b) Get/change values using the '[]' notation. */
console.log(user[`age`]); // Returns the 'age' key's value.
user[`name`] = `Sable`;
console.log(user[`name`]);

const locationKey = `location`;
console.log(user[locationKey]); // Same as: console.log(user[`location`]);

  /* c) Methods */
user.login(); // We invoked the login method on 'user' which is a function that we created as key: value pair. Methods defined as functions in object.

user.logout();

  /* d) This keyword */
user.logBlogs();
  
  /* e) Object literal in array */
const ninjaBlogs = [
  {
    title: `Why mac & cheese rules`,
    likes: 30
  },
  {
    title: `10 things to make with marmite`,
    points: 50
  }
];
  
console.log(ninjaBlogs);

  /* f) Constructor */

const literalWrapper = new Object();

console.log(literalWrapper);

  /* g) Object Oriented Programming
  
  The 'new' keyword
    1 - it creates a new empty object {}
    2 - it binds the value of 'this' to the new empty object
    3 - it calls the 'constructor()' function to 'build' the object
  */

  /* h) OOP Classes (preferred) */

class Person {
  constructor(username, email){
    // set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  // set up methods
  login(){
    console.log(`${this.username} just logged in`);
    return this; // We need return this to chaining methods.
  }
  logout(){
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore(){
    this.score++
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends Person {
  constructor(username, email, title) { // If we need extra properties, we need the constructor and the 'super()'.
    super(username, email);
    this.title = title;
  }
  deletePerson(p) {
    persons = persons.filter(person => person.username !== p.username);
  }
}

const personOne = new Person(`mario`, `mario@thenetninja.co.uk`);
const personTwo = new Person(`luigi`, `luigi@thenetninja.co.uk`);
console.log(personOne, personTwo);

personOne.login();
personTwo.logout();

personOne.incScore();
personOne.incScore(); // Its 2

personTwo
  .login()
  .incScore()
  .incScore()
  .logout();

const personThree = new Admin(`shaun`, `shaun@thenetninja.co.uk`, `black-belt-ninja`);
console.log(personThree);

let persons = [personOne, personTwo, personThree];
console.log(persons);

personThree.deletePerson(personTwo);
console.log(persons);

  /* i) OOP Constructor function */

function Hooman(username, email){
  this.username = username;
  this.email = email;
  /* this.login = function() {
    console.log(`${this.username} hooman has logged in`);
  }; */
}

const hoomanOne = new Hooman(`mario`, `mario@thenetninja.co.uk`);
const hoomanTwo = new Hooman(`luigi`, `luigi@thenetninja.co.uk`);

console.log(hoomanOne, hoomanTwo);

  /* j) OOP Prototype model
  
  object.__proto__.method(); // We don't need to write __proto__ when we use methods.
  - Every object in JS has a prototype.
  - Prototypes contain all the methods for that object type.
  */

console.log(Array.prototype); // Check the methods of the Array objects.

Hooman.prototype.login = function(){
  console.log(`${this.username} hooman has logged in`);
  return this;
};

Hooman.prototype.logout = function(){
  console.log(`${this.username} hooman has logged out`);
  return this;
};

console.log(Hooman.prototype);

hoomanOne
  .login()
  .logout();

  /* k) OOP Prototypal inheritance */

function Admina(username, email, title) {
  Hooman.call(this, username, email);
  this.title = title;
}

Admina.prototype = Object.create(Hooman.prototype);

Admina.prototype.deleteHooman = function() {
  // delete an user
};

const hoomanThree = new Admina(`shaun`, `shaun@thenetninja.co.uk`, `black-belt-ninja`);

console.log(hoomanOne, hoomanTwo, hoomanThree);
console.log(Admina.prototype);

   /* l) Spread syntax */

const wife = { name: `Eszter`, age: 26.5, job: `wifey` };
const wifeClone = { ...wife, woman: true };

console.log(wifeClone);