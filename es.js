// ########################################
// Variables - let and const
// ########################################

/*
var num = 10;
const greet = 'hello';

function add() {
  let num1 = 20;
  var num2 = 30;

  console.log(num1); // works
  console.log(greet); // works
}

// console.log(num1); // returns error (function scope)
// console.log(num2); // returns error (function block scope)
console.log(greet); // works (function block scope)
add();

*/

// ########################################
// Template Literals
// ########################################

/* 

let fName = 'Sid';
let lName = 'S';

let fullName = 'My name is ' + fName + ' ' + lName;
let fullNameWithTemplateLiterals = `my name is ${fName} ${lName}`;

console.log(fullName); // without template literals
console.log(fullNameWithTemplateLiterals); // with template literals

function myTLDisplay(name) {
  return `${name.toUpperCase()}`; // Template Literals can be used with methods too
}

console.log(myTLDisplay('sid')); // works

*/

// ########################################
// Rest Operator ...
// ########################################
/*
function myROpNums(...nums) {
  console.log(arguments); // OUT: [Arguments] { '0': 8, '1': 9, '2': 10 }
  console.log(nums); // OUT: [ 8, 9, 10]
}

myROpNums(8, 9, 10);
*/
// ########################################
// Split using rest operator
// ########################################
/*
let hello = ['Hello', 'World'];
console.log(...hello); // OUT: Hello World

let myName = 'Sid';
console.log(myName);
console.log(...myName); // Separates the characters with spaces - OUT: S i d

let obj1 = {
  fName: 'Sid',
  lName: 'S',
};

let obj2 = {
  email: 'sid@sid.com',
  phone: '12345',
  ...obj1, // we can concat obj/arrays like this
};

console.log(obj2); // OUT: { email: 'sid@sid.com', phone: '12345', fName: 'Sid', lName: 'S' }
*/

// ########################################
// Default Parameters
// ########################################

/* 
function add(a = 2, b = 3) {
  return a + b;
}

console.log(add()); // both default params used - OUT: 5
console.log(add(1)); // only second default param used - OUT: 4
console.log(add(2, 5)); // no default params used - OUT: 7
*/

// ########################################
// For-of & For-In loop
// ########################################

/*

const numberList = [1, 2, 3, 4, 5, 6, 7, 8];
for (x of numberList) {
  console.log(x); // prints elements one by one
}

for (x in numberList) {
  console.log(x); // prints index values one by one
  console.log(numberList[x]); // prints elements one by one
}

// entries
for (x of numberList.entries()) {
  console.log(x); // prints index + elements one by one
}

*/

// ########################################
// Symbol
// ########################################

/* 
const mySymbol = Symbol();
let fName = Symbol('fName');
let lName = Symbol('lName');

console.log(fName); // OUT: Symbol(fName)
console.log(lName); // OUT: Symbol(lName)
console.log(typeof lName); // OUT: symbol
*/

// ########################################
// Arrow Functions
// ########################################
/*

// An anonymous function
let anoName = 'Sid';
setTimeout(function () {
  console.log('Hi, ' + anoName);
});

// A basic arrow function
const arrowDisplay1 = (name) => {
  console.log('Hello, ' + name);
};

// Single line allowed if there's only one statement in function
const arrowDisplay2 = (name) => console.log('Hello, ' + name);

arrowDisplay1('Sid'); // Out Hello, Sid
arrowDisplay2('Sid'); // Out Hello, Sid

// MultiLine Arrow function in JS

const factorialFunc = (n) => {
  let prod = 1;
  for (let i = 1; i <= n; i++) prod *= i;
  return prod;
};

console.log(factorialFunc(4)); // 24

*/

// ########################################
// Object Destructuring
// ########################################
/* 

// Used to unpack values from an object

const personalInfo = {
  fname: 'Sid',
  lname: 'S',
  email: 'sid@sid.com',
  phoneNum: '12345',
};

// without destructuring
const personFName = personalInfo.fname;
const personLName = personalInfo.lname;

// With destructuring
const { fname, email } = personalInfo;
console.log(`${personFName} has this email: ${email}`); // OUT: Sid has this email: sid@sid.com

*/

// ########################################
// Array Destructuring
// ########################################
/*

// Used to unpack values from an array

const personalInfo = ['Sid', 'S', 'sid@sid.com', '12345'];

// without destructuring
const personFName = personalInfo[0];
const personLName = personalInfo[1];

// With destructuring
const [fname, lname, email] = personalInfo;
console.log(`${personFName} has this email: ${email}`); // OUT: Sid has this email: sid@sid.com

*/

// ########################################
// Set
// ########################################

/* 
let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);
mySet.add(3);
mySet.add(3);

console.log(mySet); // Duplicates are purged - OUT: Set(3) { 1, 2, 3}
console.log(mySet.size); // OUT: 3
console.log(mySet.has(2)); // OUT: true
console.log(mySet.has(5)); // OUT: false
*/

// ########################################
// Classes & Objects
// ########################################
/*

// this is a class in older JS
function MyDisplay(name) {
  this.name = name;
}

let myName = new MyDisplay('Sid');

console.log(myName.name); // OUT: Sid

// New way

class MyDisplay2 {
  // constructor - called when an instance of this class is created
  constructor(name) {
    this.name = name;
  }

  // a method to get the name
  getMyName() {
    console.log(`hi! your name is ${this.name}`);
  }
}

let myNewName = new MyDisplay2('Sid'); // constructor is called at this point
myNewName.getMyName(); // method is called here - OUT: hi! your name is Sid

*/

// ########################################
// Static Functions
// ########################################
/*

class MyDisplay3 {
  // constructor - called when an instance of this class is created
  constructor(name) {
    this.name = name;
  }

  // a method to get the name
  static greetings() {
    console.log('hi, there!');
  }
}

let myName3 = new MyDisplay3('Sid');
//myName3.greetings(); // ERROR - this function is not allowed to be called through the object
MyDisplay3.greetings(); // WORKS - OUT: hi, there!
*/

// ########################################
// Getters & Setters
// ########################################
/*

class MyDisplay {
  // constructor - called when an instance of this class is created
  constructor(name) {
    this.name = name;
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

let myDisplay = new MyDisplay('Sid');
console.log(myDisplay.name);
*/

// ########################################
// Class Inheritance
// ########################################
/*

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} made a sound`);
  }
}

// derived class
class Dog extends Animal {
  constructor(name) {
    super(name); // invokes the constructor of the base class
  }
}

let dog = new Dog('Julie');
dog.speak(); // we used a base class method - OUT: Julie made a sound
*/

// ########################################
// Promises
// ########################################
/*

let completed = false;

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (completed) {
      resolve('this promise has been completed');
    } else {
      reject('this promise is still pending');
    }
  }, 3000);
});

myPromise
  .then((res) => {
    console.log('Yay!', res); // after 3 seconds, prints if completed is set to true
  })
  .catch((err) => {
    console.log('Oh No!', err); // after 3 seconds, prints if completed is set to false
  });
*/

// ########################################
// API call using URL
// ########################################
/*

var XMLHttpRequest = require('xhr2');

let url = 'https://jsonplaceholder.typicode.com/todos/1';

let myPromise = new Promise((resolve, reject) => {
  let req = new XMLHttpRequest();
  req.open('GET', url);
  req.send();
  req.onload = () => {
    if (req.status === 200) {
      resolve(req.response);
    } else {
      reject(Error(req.statusText));
    }
  };
});

myPromise
  .then((res) => {
    console.table(res); // after 3 seconds, prints if completed is set to true
  })
  .catch((err) => {
    console.log(err); // after 3 seconds, prints if completed is set to false
  });
*/

// ########################################
// Includes method
// ########################################
/*

let names = ['Sid', 'Jon', 'Luke', 'Tom'];

console.log(names.includes('Sid')); // OUT: true
console.log(names.includes('Mark')); // OUT: false

*/

// ########################################
// Async/Await
// ########################################
/*

const myFunc = async () => {
  await setTimeout(() => {
    console.log('Hello World');
  }, 2000);
};

myFunc();
*/

// RANDOMS
// let myArr = [1, 2, 3];
// console.log(Object.prototype.toString.call(myArr)); // shows type of object OUT:

// let a = 'hello',
//   b = 'elloh';

// console.log(a.split('').sort().join(''));

// if (a.split('').sort().join('') === b.split('').sort().join('')) {
//   console.log(true);
// }
