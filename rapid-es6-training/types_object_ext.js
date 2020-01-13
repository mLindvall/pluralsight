/* jslint node: true */
'use strict';

// purpose of a symbol is to generate a unique identifier

let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);
console.log(eventSymbol.toString());

// one way to use it
const CALCULATE_EVENT_SYMBOL = Symbol('calculate event');
console.log(CALCULATE_EVENT_SYMBOL.toString());

let s = Symbol('event');
let s2 = Symbol('event');
console.log(s === s2); // false

let sb = Symbol.for('event');
let sb2 = Symbol.for('event');
console.log( sb === sb2);

let sb3 = Symbol.for('event2');
let sb4 = Symbol.for('event');
console.log( sb3 === sb4);

let descriptionSymbol = Symbol.for('event');
let description = Symbol.keyFor(descriptionSymbol);
console.log(description);

let article = {
    title: 'Whiteface Mountain',
    [Symbol.for('article')]: 'My Article'
};

let value = article[Symbol.for('article')];
console.log(value);

console.log( Object.getOwnPropertyNames(article) );
console.log( Object.getOwnPropertySymbols(article) );