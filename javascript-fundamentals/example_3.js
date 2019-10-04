/*jslint node: true*/
'use strict';

// function and block scope
// variables that can be accessed within functions and life cycle

function startCar(carId) {
    let message = 'Starting...';
}
startCar(123);
// console.log(message);// can't do this because message is out of scope

// this works because a function will look to it's parent if it can't find it in it's current scope.
function startCar2(carId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        console.log(message); // starting...
    };
    startFn();
}

startCar2(120);

function startCar3(carId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override'; // only visible within this function scope
    };
    startFn();
    console.log(message); // starting...
}

startCar3(120);


// block scope
if (5 === 5) {
    let message = 'Equal';
}
// console.log(message); // can't do because message is out of scope

let msg = 'Outside';
if (5 === 5) {
    let msg = 'Equal';
    console.log(msg); // equal
}
console.log(msg); // outside;


if (5 === 5) {
    var msg2 = 'Equal var hoisting';
}
console.log(msg2); // equal var hoisting // this works because var gets hoisted

// IIFE's

// immediately invoked function expression
(function() {
    console.log('in function IIFE');
})();

let app = (function() {
    let carId = 123;
    console.log('in function');
    return {};
})();
console.log(app);

// closures
let app1 = (function() {
    let carId = 123;
    let getId = function() {
        return carId;
    };
    return{
        getId:getId
    };
})();
console.log(app1.getId());

// the this keyword
let o = {
    carId: 123,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};
console.log(o.getId());

// the this object can be moved around

// call and apply -> change the value of 'this'

let newCar = {carId: 456};
console.log(o.getId.call(newCar));

let oo = {
    carId: 123,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};
console.log(oo.getId.apply(newCar, ['ID: ']));
// apply accepts array of args

// bind - makes a copy of the function
let newFn = o.getId.bind(newCar);
console.log('newfn() = ', newFn());

// arrow functions ecmascript2015
let getId2 = () => 123;
console.log(getId2());

let getId3 = prefix => prefix + 123;
console.log(getId3('ID: '));

let getId4 = (prefex, suffix) => prefex + 123 + suffix;
console.log(getId4('ID: ', '!'));
// arrow functions do not have their own this value

// default param
let trackCar = function(carId, city='NY') {
    console.log(`Tracking ${carId} in ${city}`);
};
console.log(trackCar(123));
console.log(trackCar(345, 'STL'));