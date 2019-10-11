/* jslint node: true */
'use strict';

// advanced destructuring

let [high, low] = [,];
console.log(`high: ${high} low: ${low}`); //high: undefined low: undefined



// [high, low] = undefined;
// console.log(`high: ${high} low: ${low}`); //TypeError: undefined is not iterable

// [high, low] = null;
// console.log(`high: ${high} low: ${low}`); //TypeError: undefined is not iterable

try {
    [high, low] = undefined;
} catch (e) {
    console.log(e.name); // TypeError
}

// trailing commas are fine
[high, low,] = [500,200];
console.log(`high: ${high} low: ${low}`); // high: 500 low: 200

for (let [a,b] of [[5,10]]) {
    console.log(`${a} ${b}`);
} // 5 10

let count = 0;
for (let [a,b] of [[5,10]]) {
    console.log(`${a} ${b}`);
    count++;
} // 5 10
console.log(count); // 1