/* jslint node: true */
'use strict';

// reflect api - brand new to ES6

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */

// construction and method calls

console.log(typeof Reflect); // object


class Restaurant {
}

let r = Reflect.construct(Restaurant,[]); // can't get this work :(
console.log(r instanceof Restaurant); // true


class Restaurant1 {
    constructor(name, city) {
        console.log(`${name} in ${city}`);
    }
}

r = Reflect.construct(Restaurant1, ["Mike's", "STL"]);

class Restaurant2 {
    constructor() {
        console.log(`new.target: ${new.target}`);
    }
}
function restaurantMaker() {
    console.log(`in restaurantMaker`);
}
r = Reflect.construct(Restaurant2, ["Kate's", "Vegas"], restaurantMaker);


class Restaurant3 {
    constructor() {
        this.id = 33;
    }
    show() {
        console.log(this.id);
    }
}

Reflect.apply(Restaurant3.prototype.show, {id:99},[]);

class Restaurant4 {
    constructor() {
        this.id = 33;
    }
    show(prefix) {
        console.log(prefix + this.id);
    }
}
Reflect.apply(Restaurant4.prototype.show, {id:99},['rest: '] );