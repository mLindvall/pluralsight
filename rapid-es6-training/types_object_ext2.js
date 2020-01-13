/* jslint node: true */
'use strict';

let a = { x: 1};
let b = { y: 2};

Object.setPrototypeOf(a,b);
console.log(a.y);

let c = {a:1}, d = {b:2};
let target = {};
Object.assign(target, c,d);
console.log(target);

let e = {a:1}, f = {a:6,b:2};
let target2 = {};
Object.assign(target2, e,f);
console.log(target2);

let g = {a:1}, h = {a:6,b:2};
Object.defineProperty(h, 'c', {
    value: 10,
    enumerable: false,
});
let target3 = {};
Object.assign(target3, g,h);
console.log(target3);
// -> property 'c' doesn't get include because it's not enumerable

let i = {a: 1}, j = {a: 5, b: 2}, k = {c: 20};
Object.setPrototypeOf(j, k);
let target4 = {};
Object.assign(target4, i,j);
console.log(target4);

let amount = NaN;
console.log(amount === amount); // false
console.log(Object.is(amount, amount));

amount = 0;
let total = -0;
console.log(amount === total);
console.log(Object.is(amount, total));