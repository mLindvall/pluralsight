/*jslint node:true*/
'use strict';

function Animal(voice) {
    this.voice = voice || 'grunt';
}

Animal.prototype.speak = function () {
    console.log(this.voice);
};

function Dog(name, color) {
    Animal.call(this, 'Woof');  // need to know
    this.name = name;
    this.color = color;
}

Dog.prototype = Object.create(Animal.prototype); // need to know

var snoopy = new Dog('Snoopy', 'White');

snoopy.speak();

console.log(snoopy, snoopy instanceof Dog, snoopy instanceof Animal);

Dog.prototype.constructor = Dog; // need to know

console.log(snoopy, snoopy instanceof Dog, snoopy instanceof Animal);
console.log(snoopy.__proto__, snoopy.__proto__.__proto__);
