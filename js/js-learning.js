var names = ['Ed', 'John', 'Mike'];
var counter = 10;
var counter = 12;

/* 
NOTES

1.  In the older JS,
    ->  We could redeclare variables (BAD IDEA)
    ->  We had only function-scope (variables defined within a 
        function are only available within that function)

2.  In ES6: 
    ->  We have more types of variable definitions - 
        a. CONST    - a block scoped constant (cannot be re-assigned once initialized)
        b. LET      - a block-scoped variable declaration
        c. VAR      - a global-scoped variable declaration 

*/

// more ways to use variables

const myRealName = 'Sid';

console.log('Different types of variable use in console logs');
console.log(`Hello, ${myRealName}`);
console.log('Hello,', myRealName);
console.log('Hello, ' + myRealName);

// ====================================================================
// OBJECT LITERALS
// ====================================================================

console.log('\n\n\n\nObject literals');

function showBook(title, author) {
    return {
        title: title,
        author: author,
    };
}

var book = showBook('Harry Potter', 'JKR');
console.log(book);

// In ES6, we can make it a bit simpler, if we want the
// variable name and key name to be the same

function showBook(title, author) {
    return {
        title,
        author,
    };
}

var book = showBook('Harry Potter', 'JKR');
console.log(book);

// ====================================================================
// OBJECT DECONSTRUCTION
// ====================================================================

console.log('\n\n\n\nObject deconstruction');

var user = {
    name: 'Sid',
    age: 33,
};

var myName = user.name;
var myAge = user.age;

console.log(myName, myAge);

// In ES6, we can use destructuring

const { name, age } = user;

console.log(name, age);

// ====================================================================
// ARROW FUNCTIONS in ES6
// ====================================================================
// In older JS, we needed to define a function and use it like so:

console.log('\n\n\n\nArrow functions in ES6');

function sayName() {
    console.log('Hello, my name is Sid');
}

function sayAge() {
    console.log('Hello, my age is 33');
}

sayName();
sayAge();

// In ES6, we can use arrow functions:

// Arrow functions can have one line without brackets if the inner
// code is just one line
const sayLocation = (location) => console.log('My location is ' + location);

sayLocation('Paris');

// ====================================================================
// THIS in older JS
// ====================================================================

console.log('\n\n\n\nThe THIS pointer in JS');

var old_user = {
    name: 'Sid',
    age: 33,
    sayName: function () {
        console.log('My name is ', this.name);
        var fullName = function () {
            console.log('My name is ', this.name);
        };
        fullName(); // wont work
    },
};

old_user.sayName();

// in ES6,

var user = {
    name: 'Sid',
    age: 33,
    sayName: function () {
        console.log('My name is ', this.name);

        const fullName = () => {
            console.log('My name is' + this.name); //Works
        };
    },
};

user.sayName();

// ====================================================================
// DEFAULT PARAMETERS
// ====================================================================

console.log('\n\n\n\nDefault parameters in functions in ES6');

function multiplyMe(x, y) {
    var a = x || 1;
    var b = y || 1;
    console.log(a * b);
}

// In ES6, a function can have some default values assigned to parameters to
// allow the function to be called without values.

function multiplyNew(x = 1, y = 1) {
    console.log(x * y);
}

multiplyMe();
multiplyNew(10, 20);

// ====================================================================
// ADDITIONAL ARRAY METHODS IN ES6
// ====================================================================

console.log('\n\n\n\nArray forEach, Map, Filter methods in ES6');

const myList = ['Milk', 'Eggs', 'Honey', 'Bread', 'Butter'];

// FOREACH
// Loop through each item in the list, with an index if needed

myList.forEach((product, index) => {
    console.log(index + ' -> - ' + product + ' - Done');
});

// ARRAY MAP
// create a copy of an existing array and modify it as required

const newList = myList.map((item) => {
    return item + ' - new';
});

console.log(newList);

// ARRAY FILTER
// selectively copy elements from a list with a predefined constraint

const filteredList = myList.filter((item) => {
    return item !== 'Eggs';
});

console.log(filteredList);

// ====================================================================
// CONSTRUCTOR IN ES6
// ====================================================================

console.log('\n\n\n\nConstructors and Classes in ES6');

class ShoppingList {
    constructor(items, nr) {
        this.items = items;
        this.nr = nr;
    }

    sayList() {
        console.log(this.items);
    }
}

const myShoppingList = new ShoppingList(['Milk', 'Eggs', 'Honey', 'Bread', 'Butter'], 3);

class Product extends ShoppingList {
    constructor(items, nr, amount, cost) {
        // calls the constructor of the base class from which we are inheriting
        super(items, nr);

        this.amount = amount;
        this.cost = cost;
    }
}

const product = new Product(['Milk', 'Eggs', 'Honey'], 3, 2, 100);

product.sayList();

// ====================================================================
// PROMISES
// ====================================================================

console.log('\n\n\n\nPromises in ES6');

// In plain JS, here's what we would do:

console.log('Start');
function getData(data, callback) {
    setTimeout(() => {
        console.log('Reading from Database....');
        callback({ data: data });
    }, 2000);
}

getData(5, function (data) {
    console.log(data);
});

console.log('End');

// ES6 provides a better way: promise

const prm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: 200 });
    }, 2000);
});

prm.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
