/* jslint node: true */
'use strict';

// Number extensions

console.log(Number.parseInt === parseInt); // true
console.log(Number.parseFloat === parseFloat); // true

let s = 'NaN';
console.log(isNaN(s)); // true
console.log(Number.isNaN(s)); // false

let f = '8000';
console.log(isFinite(f)); // true converts string to number
console.log(Number.isFinite(f)); // false b/c it's a string

let sum = 408.2;
console.log(Number.isInteger(sum)); // false

console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger(undefined));// false
console.log(Number.isInteger(3)); // true

let a = Math.pow(2,53) -1;
console.log(a);
console.log(Number.isSafeInteger(a)); // true
a = Math.pow(2,53);
console.log(Number.isSafeInteger(a)); // false

console.log(Number.EPSILON); // 2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991


// Hyperbolic Function
// can look these up on developer.mozilla.org
// cosh() acosh() sinh() asinh() tanh() atanh() hypot()

// Arithmetic Function
// cbrt()    cube root
// clz32()   count leading zeros (32 bit integers)
// expm1()   equal to exp(x)-1
// log2()    log base 2
// log10()   log base 10
// log1p()   equal to log(x + 1)
// imul()    32 bit integer multiplication

// Miscellaneous Function
// sign()    the number's sign: 1, -1, 0, -0, NaN
// trunc()   the integer part of a number
// fround()  round to the nearest 32 bit floating-point value


console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign(-20)); // -1
console.log(Math.sign(20)); // 1
console.log(Math.sign(NaN)); // NaN

console.log(Math.cbrt(27)); // 3

console.log(Math.trunc(27.1)); // 27
console.log(Math.trunc(-27.9)); // -27

let pattern = /\u{1f3c4}/;
console.log(pattern.test('🏄')); // false

let pattern2 = /\u{1f3c4}/u; // <- use the u pattern to test for unicode
console.log(pattern2.test('🏄')); // true

let pattern3 = /^.Surfer/;
console.log(pattern3.test('🏄Surfer')); // false

let pattern4 = /^.Surfer/u; // <- same as above
console.log(pattern4.test('🏄Surfer')); // true

let pattern5 = /900/y; // <- the y flag search from the last index and the last index only
console.log(pattern5.lastIndex); // 0
console.log(pattern5.test('800900')); // false
console.log(pattern4.test('🏄Surfer')); // true

let pattern6 = /900/y; // <- the y flag search from the last index and the last index only
pattern6.lastIndex = 3;
console.log(pattern6.lastIndex); // 3
console.log(pattern6.test('800900')); // true

let pattern7 = /900/yg;
console.log(pattern7.flags); // <- new flag to see what flags are set // => gy (order will be gimuy (these are regext flags))

let fn = function calc() {
    return 0;
};
console.log(fn.name); // calc


let fn2 = function() {
    return 0;
};
console.log(fn2.name); // fn2

let newFn = fn2;
console.log(newFn.name); // fn2

class Calculator {
    constructor() {}
    add() {}
}
let c = new Calculator();
console.log(Calculator.name); // Calculator
console.log(c.add.name); // add
console.log(c.name); // undefined

/*
    Function.name isn't writable BUT it's configurable with Object.defineProperty()
*/
