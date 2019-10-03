/*jslint node: true*/
'use strict';

function Dog(name, color) {
    this.name = name;
    this.color = color;
}

Dog.prototype.age = 4;
var pluto = new Dog('Pluto', 'brown');
var clifford = new Dog('Clifford', 'red');

Dog.prototype = {age: 5};

var snoopy = new Dog('Snoopy', 'white');

var agePrinter = (dog) => console.log(`${dog.name} is ${dog.age} yrs old`);

// pluto and clifford still point to existing memory 
agePrinter(pluto);
agePrinter(clifford); 

// when we update the object's prototype it got a new pointer in memory
agePrinter(snoopy); // gets the new prototype age
console.log(Dog.prototype.age);