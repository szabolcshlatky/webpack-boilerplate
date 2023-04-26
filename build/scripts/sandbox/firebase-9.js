`use strict`;

import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, onSnapshot, getDocs,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut, signInWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB5-_HgQMqXpSVBHOiLMv0UqNh8A5mOZrw",
  authDomain: "fir-9-dojo-61fe9.firebaseapp.com",
  projectId: "fir-9-dojo-61fe9",
  storageBucket: "fir-9-dojo-61fe9.appspot.com",
  messagingSenderId: "650914139744",
  appId: "1:650914139744:web:3f92b213694a63992dfd05"
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();
const auth = getAuth();

// collection ref
const colRef = collection(db, 'books');

// queries
const q = query(colRef, orderBy(`createdAt`)); // I can filter it with plus argument like: 'where(`author`, `==`, `patrick rothfuss`)'

// get real time collection data
getDocs(colRef)
  .then(snapshot => {
    console.log(snapshot.docs);
  })
  .catch(err => {
    console.log(err.message);
  });

const unsubCol = onSnapshot(q, snapshot => { // If the author is 'patrick rothfuss' it will fire this function.
  let books = []
  snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

// adding documents
const addBookForm = $$(`.add`);
addBookForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp()
  })
    .then(() => {
      addBookForm.reset()
    });
});

// deleting documents
const deleteBookForm = $$(`.delete`);
deleteBookForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const docRef = doc(db, 'books', deleteBookForm.id.value);
  deleteDoc(docRef)
    .then(() => {
      deleteBookForm.reset();
    })
});

// get a single document
const docRef = doc(db, `books`, `9CAx4uX7KsLBUddinJ7Y`);

getDoc(docRef)
  .then(doc => {
    console.log(doc.data(), doc.id);
  });

const unsubDoc = onSnapshot(docRef, () => {
  console.log(doc.data(), doc.id);
});

// updating a document
const updateForm = $$(`.update`);
updateForm.addEventListener(`submit`, e => {
  e.preventDefault();

  const docRef = doc(db, `books`, updateForm.id.value);

  updateDoc(docRef, {
    title: `updated title`
  })
    .then(() => {
      updateForm.reset();
    })
});

// signing users up
const signupForm = $$(`.signup`);
signupForm.addEventListener(`submit`, e => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log(`user created:`, cred.user);
      signupForm.reset();
    })
    .catch(err => {
      console.log(err.message);
    });
});

// logging in and out
const logoutButton = $$(`.logout`);
logoutButton.addEventListener(`click`, () => {
  signOut(auth)
    .then(() => {
      console.log(`the user signed out`);
    })
    .catch(err => {
      console.log(err.message);
    });
});

const loginForm = $$(`.login`);
loginForm.addEventListener(`submit`, e => {
  e.preventDefault();

  const email = loginForm.email.form;
  const password = loginForm.password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(cred => {
      console.log(`user logged in:`, cred.user);
    })
    .catch(err => {
      console.log(err.message);
    });
});

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, user => {
  console.log(`user status changed:`, user);
});

// unsubscribing from changes (auth & db)
const unsubButton = $$(`.unsub`)
unsubButton.addEventListener(`click`, () => {
  console.log(`unsubscribing`);
  unsubCol();
  unsubDoc();
  unsubAuth();
});