/* jslint node: true */
'use strict';

// proxy api - brand new to ES6

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/proxy
 * 
 * The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
 */

// FROM THE LINK ABOVE
// In this simple example the number 37 gets returned as the default value when the property name is not in the object. It is using the get handler.

var handler = {
    get: function(obj, prop) {
        return prop in obj ?
            obj[prop] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37