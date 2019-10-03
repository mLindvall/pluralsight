/*jslint node: true */
'use strict';

// prototypes

var arr = ['red', 'blue', 'green'];

var last = arr[arr.length - 1];
console.log(last);

// js is dymnamic and can add our own last property
Object.defineProperty(arr, 'last', {
    get: function () {
        return this[this.length - 1];
    }
});

console.log(arr.last);

// if you create another array, last doesn't work. will return undefined
var arr2 = ['one', 'two', 'three'];
console.log(arr2.last);

// we need to add this onto the array object prototype
Object.defineProperty(Array.prototype, 'lastValue', {
    get: function() {return this[this.length -1];}
});

console.log('');
console.log(arr.lastValue);
console.log(arr2.lastValue);