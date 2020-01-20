/* jslint node: true */
'use strict';

// proxy api - brand new to ES6

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/proxy
 * 
 * The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
 */

/**
 * Available traps
 * 
 * handler.construct()                          handler.defineProperty()
 *                                              handler.deleteProperty()
 * handler.apply()                              handler.getOwnPropertyDescriptor()
 * 
 * handler.getPrototypeOf()                     handler.preventExtensions()
 * handler.setPrototypeOf()                     handler.isExtensible()
 * 
 * handler.get()
 * handler.set()
 * handler.has()
 * handler.ownKeys()
 * 
 */

function Employee() {
    this.name = 'Milton Waddams';
    this.salary = 0;
}

var e = new Employee();
var p = new Proxy(e, {
    get: function (target, prop, receiver) {
        return "Attempted access: " + prop;
    }
});
console.log(p.salary); // Attempted access: salary

var p = new Proxy(e, {
    get: function (target, prop, receiver) {
        return Reflect.get(target, prop, receiver);
    }
});
console.log(p.salary); // 0

var p = new Proxy(e, {
    get: function (target, prop, receiver) {
        if (prop === 'salary') {
            return 'Denied';
        }
        return Reflect.get(target, prop, receiver);
    }
});
console.log(p.salary); // Denied
console.log(p.name); // Milton Waddams


function getId() {
    return 55;
}
var p = new Proxy(getId, {
    apply: function (target, thisArg, argumentsList) {
        return Reflect.apply(target, thisArg, argumentsList);
    }
});
console.log(p()); // 55
