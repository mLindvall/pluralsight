/*jslint node: true */
'use strict';

function Dog(name, color) {
    this.name = name;
    this.color = color;
}

Dog.prototype.age = 5;

var pluto = new Dog('Pluto', 'brown');
var clifford = new Dog('Clifford', 'red');

console.log(pluto.age, clifford.age);

// can change the age of clifford and it doesn't affect plutto
clifford.age = 10;
console.log(clifford.age, pluto.age);

// we can still access the proto property age and it's still set to the default
console.log('proto', clifford.__proto__.age, 'updated', clifford.age);

// displaying the keys shows that pluto doesn't have an age property
console.log(Object.keys(pluto));
// but clifford does since we added it when setting his age to 10
console.log(Object.keys(clifford));

// check to see if it has own property
console.log(pluto.name, pluto.hasOwnProperty('age'), clifford.name, clifford.hasOwnProperty('age'));

// we can do pluto.age because js checks objects properties first and then checs the proto property
console.log(`${pluto.name} age is ${pluto.age}`);

// we can even do it with functions
Dog.prototype.bark = () => console.log("woof");
pluto.bark = () => console.log("woof woof");

clifford.bark();
pluto.bark();
