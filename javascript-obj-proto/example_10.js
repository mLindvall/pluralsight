/*jslint node: true*/
'use strict';

function Dog(name, color) {
    this.name = name;
    this.color = color;
}

Dog.prototype.age = 4;

var clifford = new Dog('Clifford', 'red');

console.log(clifford.__proto__);
console.log(clifford.__proto__.__proto__);
