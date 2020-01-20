/* jslint node: true */
'use strict';

// reflect api - brand new to ES6

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */


class Restaurant {
    constructor() {
        this.id = 8000;
    }
}

let r = new Restaurant();
console.log(Reflect.get(r, 'id')); // 8000

class Restaurant1 {
    constructor() {
        this._id = 9000;
    }
    get id() {
        return this._id;
    }
}

r = new Restaurant1();
console.log(Reflect.get(r, 'id', {
    _id: 88
})); // 88


r = new Restaurant();
Reflect.set(r, 'id', 88);
console.log(r.id); // 88

class Restaurant2 {
    constructor() {
        this._id = 9000;
    }
    /**
     * @param {number} value
     */
    set id(value) {
        this._id = value;
    }
}

r = new Restaurant2();
let alt = {
    id: 88
};
Reflect.set(r, '_id', 88, alt);
console.log(r._id); // 9000
console.log(alt._id); // 88

class Location {
    constructor() {
        this.city = 'Goleta';
    }
}
class RestaurantLocation extends Location {
    constructor() {
        super();
        this.id = 9000;
    }
}
r = new RestaurantLocation();
console.log(Reflect.has(r, 'id')); // true
console.log(Reflect.has(r, 'city')); // true

console.log(Reflect.ownKeys(r)); // [ 'city', 'id' ]

class Restaurant3 {

}

r = new Restaurant3();

Reflect.defineProperty(r, 'id', {
    value: 2000,
    configurable: true,
    enumerable: true,
});
console.log(r['id']); // 2000

let rest = {
    id: 200,
};

console.log(rest.id); // 200
Reflect.deleteProperty(rest, 'id');
console.log(rest.id); // undefined

rest = {
    id: 200,
};
let d = Reflect.getOwnPropertyDescriptor(rest, 'id');
console.log(d); // { value: 200, writable: true, enumerable: true, configurable: true }