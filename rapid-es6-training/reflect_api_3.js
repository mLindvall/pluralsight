/* jslint node: true */
'use strict';

// reflect api - brand new to ES6

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */


let rest = {
    id: 2000,
};

rest.location = 'Goleta';

console.log(rest.location); // Goleta


rest = {
    id: 2000,
};
Reflect.preventExtensions(rest);
/*
rest.location = 'Goleta'; // TypeError: Cannot add property location, object is not extensible
console.log(rest.location);
*/
rest = {
    id: 2000,
};
console.log(Reflect.isExtensible(rest)); // true
Reflect.preventExtensions(rest);
console.log(Reflect.isExtensible(rest)); // false