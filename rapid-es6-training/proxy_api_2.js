/* jslint node: true */
'use strict';

// proxy api - brand new to ES6

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/proxy
 * 
 * The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
 */

// proxy as a prototype

var t = {
    tableId: 99,
};

var p = new Proxy({}, {
    get: function (target, prop, receiver) {
        return 'Property ' + prop + ' doesn\'t exist...';
    }
});

Object.setPrototypeOf(t,p);
console.log(t.tableId); // 99
console.log(t.size); // Property size doesn't exist...