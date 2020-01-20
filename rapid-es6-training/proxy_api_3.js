/* jslint node: true */
'use strict';

// proxy api - brand new to ES6

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/proxy
 * 
 * The Proxy object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).
 */

// revocable proxies

// Proxy.revocable(...);

var t = {
    tableId: 99,
};

let {proxy, revoke} = Proxy.revocable(t, {
    get: function(target, prop, receiver) {
        return Reflect.get(target, prop, receiver) + 100;
    }
});

console.log(proxy.tableId); // 199
revoke();
console.log(proxy.tableId); // error is thrown // TypeError: Cannot perform 'get' on a proxy that has been revoked