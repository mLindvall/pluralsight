/*jslint node: true */
'use strict';

// enumerable attribute

var dog = {
    name: {
        first: 'Tom',
        last: "Brady"
    },
    color: 'white',
};

// you can get the property names
for (var propertyName in dog) {
    console.log(propertyName);
}
console.log('');

// you can use the property name to get values
for (var p in dog) {
    console.log(`${p} : ${dog[p]}`);
}

console.log('');
console.log(JSON.stringify(dog));
console.log('');

Object.defineProperty(dog, 'name', {enumerable: false});

for (var p in dog) {
    console.log(`${p} : ${dog[p]}`);
}

console.log('');

console.log(JSON.stringify(dog));

Object.defineProperty(dog, 'name', {configurable: false});
// Object.defineProperty(dog, 'name', {enumerable: true}); // can't change this property
// Object.defineProperty(dog, 'name', {writable: true}); // can change this
// can't change the configurable property back
// Object.defineProperty(dog, 'name', {configurable: true});

// delete dog.name; // can't do once configuragle is false
// console.log(dog.name);

var doggie = {
    name: {
        first: 'Tom',
        last: "Brady"
    },
    color: 'white',
};
delete doggie.name;
console.log(doggie.name);

