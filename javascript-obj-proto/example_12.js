/*jslint node:true*/
'use strict';

class Animal {
    constructor(voice) {
        this.voice = voice || 'grunt';
    }

    speak() {
        console.log(this.voice);
    }
}

class Dog extends Animal {
    constructor(name, color) {
        super('Woof');
        this.name = name;
        this.color = color;
    }
}

var snoopy = new Dog('Snoopy', 'White');
snoopy.speak();
console.log(snoopy);
console.log(snoopy.constructor);

// speak is not enumerial 
console.log(Object.keys(snoopy.__proto__.__proto__));
// but can see it.
console.log(snoopy.__proto__.__proto__.hasOwnProperty('speak'));

var animal = new Animal();
console.log(Object.keys(animal.__proto__));
console.log(animal.__proto__.hasOwnProperty('speak'));
animal.speak();
