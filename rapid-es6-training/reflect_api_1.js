/* jslint node: true */
'use strict';

// reflect api - brand new to ES6

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */

// construction and method calls

class Location {
    constructor() {
        console.log('constructing Location');
    }
}
class Restaurant extends Location {

}

console.log(Reflect.getPrototypeOf(Restaurant));

class Restaurant1 {

}
let setup = {
    getId() {return 88;}
};

let r = new Restaurant1();
Reflect.setPrototypeOf(r, setup);
console.log(r.getId()); // 88

