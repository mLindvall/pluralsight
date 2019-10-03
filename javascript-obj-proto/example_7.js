/*jslint node: true */
'use strict';

// prototype is an object that exists on all functions in javascript
var myFunc = function() {};
console.log(myFunc.prototype);

// objects do not have a prototype object
var cat = {name:'Fluffy'};
console.log(cat.prototype); // prints undefined

// objects do have a proto property
console.log(cat.__proto__);


// A function's prototype: A function's prototype is the object 
//  instance that will become the prototype fo all objects 
//  created using this function as a constructor.

// An object's prototype (__proto__): An object's prototype is the 
//  objet instance from which the object is inherited.

// examples

function Dog(name, color) {
    this.name = name;
    this.color = color;
}

// lets look at the prototype
console.log(Dog.prototype);

var clifford = new Dog('Clifford', 'Red');
console.log(Dog.prototype, clifford.__proto__);
console.log('Are they equal?', Dog.prototype === clifford.__proto__);

// lets change the dog prototype
Dog.prototype.age = 5;
console.log(Dog.prototype, clifford.__proto__);
// age will print out in for both since they are the same object

