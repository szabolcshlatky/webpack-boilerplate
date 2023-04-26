`use strict`;

/* ASYNC */

  /* Methods (on window object) */

setTimeout(() => {
  console.log(`setTimeout method after 3000ms`); // A callback function which fires after 3000 ms (3 seconds) of the page load. 
}, 3000); // By its time number, its called.

setTimeout(() => {
  console.log(`In between the Async functions`); // The Async functions jumping out and waiting until the page loads and their time. Until then the other sync codes will run.
}, 2000);

let i = 0;
const timer = setInterval(() => {
  console.log(`setInterval method in every 360000 ms`);

  i++;

  if(i === 5){ 
    clearInterval(timer); // This callback function wouldn't stop without the i, timer part and without the clearInterval() method.
  }
}, 1250);

  /* HTTP Request (XHR) */

const getTodos = (resource, callback) => {

  const request = new XMLHttpRequest();

  request.addEventListener(`readystatechange`, () => { // 'readystatechange' goes through the 4 phases of the http request.
    if(request.readyState === 4 && request.status === 200) { // The readyState returns the request's phase as a number. We only can work with 4 because at 0-3 the request is not ready. 404 error is not a good status, 200 is.
      const data = JSON.parse(request.responseText); // JSON is JavaScript Object Notation. Its stored in a blockscope constant.
      callback(undefined, data); // 'error' is undefined. 'parse()' method made (JSON) data to JS objects.
    } else if(request.readyState === 4){
      callback(`Could not fetch the data`, undefined); // The data is missing so its undefined.
    } else {
      console.log(request, request.readyState);
    }
  });

  request.open(`GET`, `https://jsonplaceholder.typicode.com/todos/`, /* - Absolute or Relative URL `scripts/todos.json` */ resource); // 'GET' or 'POST' is the data request type and the URL is the source to get data from.
  request.send();
};

  /* JSON data -> `https://jsonplaceholder.typicode.com/todos/` */

  /* Callback Hell:
 getTodos(`https://jsonplaceholder.typicode.com/todos/`, (error, data) => { // parameter variables: resource, callback
  console.log(data);


//  console.log(`callback fired`);

//  if(error){
//    console.log(error);
//  } else {
//    console.log(data);
//  }

//  Instead: 

  getTodos(`https://jsonplaceholder.typicode.com/todos/`, (error, data) => {
    console.log(data);

    getTodos(`https://jsonplaceholder.typicode.com/todos/`, (error, data) => {
      console.log(data);
    })
  })
});

*/

  /* Promise */

const getSomething = () => {
  return new Promise((resolve, reject) => { // Promise is a built-in API. Parameter resolve works when the request successful, reject works when the request has error.
    // fetch something

    resolve(`some data`);
    reject(`some error`);
  });
};

/*
getSomething().then(data => {
  console.log(data);
}, (error) => {
  console.log(error);
});
 Syntactic sugar:

getSomething().then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});

*/

const getPromiseTodos = resource => {
  return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener(`readystatechange`, () => { // 'readystatechange' goes through the 4 phases of the http request.
      if(request.readyState === 4 && request.status === 200) { // The readyState returns the request's phase as a number. We only can work with 4 because at 0-3 the request is not ready. 404 error is not a good status, 200 is.
        const data = JSON.parse(request.responseText); // JSON is JavaScript Object Notation. Its stored in a blockscope constant.
        resolve(data);
      } else if(request.readyState === 4){
        reject(`Error getting resource`);
      } else {
        console.log(request, request.readyState);
      }
    });
  
    request.open(`GET`, /* `https://jsonplaceholder.typicode.com/todos/` - Absolute or Relative URL `scripts/todos.json` */ resource); // 'GET' or 'POST' is the data request type and the URL is the source to get data from.
    request.send();
  });
};

getPromiseTodos(`https://jsonplaceholder.typicode.com/todos/`).then(data => {
  console.log(`promise resolved: `, data);
}).catch(error => {
  console.log(`promise rejected: `, error);
});

  /* Chaining promises */

getPromiseTodos(`https://jsonplaceholder.typicode.com/todos/`).then(data => {
  console.log(`promise resolved: `, data);
  return getPromiseTodos(`https://jsonplaceholder.typicode.com/todos/`);
}).then(data => {
  console.log(`promise 2 resolved: `, data);
  return getPromiseTodos(`https://jsonplaceholder.typicode.com/todos/`);
}).then(data => {
  console.log(`promise 3 resolved: `, data);
  return getPromiseTodos(`https://jsonplaceholder.typicode.com/todos/`);
}).catch(error => {
  console.log(`promise rejected: `, error);
});

  /* Fetch API */

fetch(`https://jsonplaceholder.typicode.com/todos/`).then((response) => { // This returns a promise which is only rejected at network errors.
  console.log(`Resolved: `, response);
  return response.json(); // This returns the parsed json's data.
}).then(data => {
  console.log(data);
}).catch((error) => {
  console.log(`rejected: `, error);
});

  /* Async & Await */

const getTodoss = async (url) => { // async always returns a promise

  const response = await fetch(url); // 'await' keyword stops the value assign to a variable until the promise resolves. So first the fetch finishes and assign the value to the 'response'.

  if(response.status !== 200) {
    throw new Error(`Cannot fetch the data`); // This message will be the error's message property.
  }

  const data = await response.json(); // We can stack any 'awaits', they will wait for the previous ones.
  return data;

};

getTodoss(`https://jsonplaceholder.typicode.com/todos/`) // This won't block the sync codes.
  .then(data => console.log(`resolved: `, data)) // Without then(), in a variable, it would return still a promise.
  .catch(error => console.log(`rejected: `, error.message));

