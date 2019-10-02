/*jslint node: true */
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'White',
};

// bracket notation
console.log(cat['name']);
cat['Eye color'] = 'Green';
console.log(cat['Eye color']);

// dot notation
console.log(cat.name);

var kitty = {
    name: 'Fluffy',
    color: 'white',
};

//Gets the own property descriptor of the specified object. 
// An own property descriptor is one that is defined directly on 
// the object and is not inherited from the object's prototype.
console.log(Object.getOwnPropertyDescriptor(kitty, 'name'));

// make name writable false
Object.defineProperty(kitty, 'name', {writable: false});
// kitty.name = 'Fatty'; // can't do
console.log(kitty.name);


var dog = {
    name: {first: 'Tom', last: "Brady"},
    color: 'white',
};

Object.defineProperty(dog, 'name', {writable: false});
dog.name.first = 'Tommy';
console.log(dog.name.first);

// you can stop the change of the object name by freezing it
Object.freeze(dog.name);
// dog.name.last = "Boy"; // this will throw an error
console.log(dog.name);


