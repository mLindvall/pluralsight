/* jslint node: true */
'use strict';

// yeilding

function *process() {
    yield 8000;
}

let it = process();
console.log(it.next());

function *process1() {
    yield ;
}

let it2 = process1();
console.log(it2.next());

function *process2() {
    let result = yield;
    console.log(`result is ${result}`);
}
let it3 = process2();
it3.next();
it3.next(200);

console.log();
function *process3() {
    let result = yield;
    console.log(`result is ${result}`);
}
let it4 = process2();
it4.next();
console.log(it4.next(200));

console.log();
function *process5() {
    let newArray = [yield, yield, yield];
    console.log(newArray[2]);
}
let it5 = process5();
it5.next();  // initialize function
it5.next(2);
it5.next(4);
it5.next(42);

console.log();
/*
function *process6() {
    let value = 4 * yield 42; // causes a sytax error // Unexpected strict mode reserved word
    console.log(value);
}
let it6 = process6();
it6.next();
it6.next(10);
*/

function *process6() {
    let value = 4 * (yield 42); // causes a sytax error // Unexpected strict mode reserved word
    console.log(value);
}
let it6 = process6();
it6.next();
it6.next(10); // 40 // yield 42 is discarded because we're not capturing the result from the function call

console.log();

function *process7() {
    yield 42;
    yield [1,2,3];
}
let it7 = process7();
console.log(it7.next().value); // 42
console.log(it7.next().value); // [1,2,3]
console.log(it7.next().value); // undefined

// what if we wanted to yield each value in the array?
console.log();
function *process8() {
    yield 42;
    yield* [1,2,3];
}
let it8 = process7();
console.log(it8.next().value); // 42
console.log(it8.next().value); // 1
console.log(it8.next().value); // 2
console.log(it8.next().value); // 3
console.log(it8.next().value); // undefined
