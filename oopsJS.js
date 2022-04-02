// CLASSES

class Person {
  // create constructur that runs when an object of this class is instantiated
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._job = '';
  }

  // method
  getName = () => {
    return this._name;
  };

  // method
  getAge = () => {
    return this._age;
  };

  // method
  setJob = (job) => {
    this._job = job;
  };
}

class House {
  // constructor
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }

  getAddress = () => {
    return this.address;
  };

  getPrice = () => {
    return this.price;
  };

  getResidents = () => {
    return this.residents;
  };

  addResident = (resident) => {
    this.residents.push(resident);
    // return this.residents;
  };
}

let myPerson = new Person('Sid', 34);
let myPerson2 = new Person('Rikki', 33);

console.log(myPerson.getName());
console.log(myPerson2.getName());

let myHouse = new House('238 lane', 238000, [myPerson, myPerson2]);
console.log(myHouse.getResidents());

let newBaby = new Person('Baby', 1);
myHouse.addResident(newBaby);
console.log(myHouse.getResidents());

let myNewHouse = new House('2380 lane', 239000, []);
let stranger = new Person('stranger', 20);
myNewHouse.addResident(stranger);
stranger.setJob('Developer');

console.log(myNewHouse.getResidents());

// FOUR PILLARS OF JS IN OOPS

/*
  ABSTRACTION - Data Hiding 
  
  Hiding a complex piece of code or implementation so that we don't need to access 
  that piece of code and it can be reused.

  For example, above, the person class has a addJob method which can be called without 
  knowing how it is being executed.
*/

/*
  ENCAPSULATION - protecting the data
  
  Protecting some fields in a class or objects, so that they cannot be directly accessed externally. 
  These fields can only be called using getters and setters predefined within the class.

  In javascript, we dont really have a clear way of making variables private and inaccessible. However,
  we can add the methods into the constructor itself, but this is not clean code. 

  One way to alert developers to private variables, is to have an underscore preceeding the names, 
  and using getters and setters.

*/

/*
  INHERITANCE - Extending the classes with new functionality.

  Below, Programmer extends person (a programmer is a person)   
*/

/*
  
*/

class Programmer extends Person {
  constructor(name, age, company, sal, language) {
    super(name, age); // call base class constructor
    this.company = company;
    this.sal = sal;
    this.language = language;
  }

  sayHi = () => {
    console.log(
      `Hello! My name is ${this.getName()} and I am ${this.getAge()} years old. I am a ${
        this.language
      } programmer and I work with ${this.company}.`
    );
  };
}

let myProgrammer = new Programmer('Sidd', 34, 'Cerner', 3400000, 'JavaScript');
myProgrammer.sayHi();

// CLOSURES

const x = 5;

function makeAdder() {
  let y = 10;
  return function addMore() {
    let z = 20;
    console.log(x + y + z);
  };
}

makeAdder()();
