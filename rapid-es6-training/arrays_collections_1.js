/* jslint node: true */
'use strict';

// array extensions

let salaries = Array(9000); // sets the length of the array if value is numeric
console.log(salaries.length); // 9000;

salaries = Array.of(9000); // new way of creating an array
console.log(salaries.length); // 1


let amounts = [800, 810, 820];
salaries = Array.from(amounts, v => v + 100);
console.log(salaries); // [ 900, 910, 920 ]

salaries = Array.from(amounts,
    function (v) {
        return v + this.adjustment;
    }, {
        adjustment: 50 // this objects becomes the this object
    });
console.log(salaries); // [ 850, 860, 870 ]

salaries = Array.from(amounts, v => v + this.adjustment, {adjustment: 50});
console.log(salaries); // [ NaN, NaN, NaN ]  // arrow functions doesn't let you change this key words (scope issue)

salaries = [600,700,800];
salaries.fill(900);
console.log(salaries); // [ 900, 900, 900 ] // fill function fills the whole array with the value


salaries = [600,700,800];
salaries.fill(900, 1);
console.log(salaries); // [ 600, 900, 900 ] // the second arg means to start filling at that index

salaries = [600,700,800];
salaries.fill(900, 1,2);
console.log(salaries); // [ 600, 900, 800 ] // the third arg means to stop filling at that index


salaries = [600,700,800];
salaries.fill(900, -1);
console.log(salaries); // [ 600, 700, 900 ] // -1 means to start filling from the end of the array

salaries = [600,700,800];
let result = salaries.find(v => v >= 750);
console.log(result); // 800 // find will scan the whole array and for each element will call the function

result = salaries.find(v => v >= 650);
console.log(result); // 700 // as soon as the function finds something in the array it returns the value, not an array of all elements matching

result = salaries.findIndex(function (value, index, array) {
    return value == this;
}, 700);
console.log(result); // 1 //

salaries.copyWithin(2,0);
console.log(salaries); // [ 600, 700, 600 ]

let ids = [1,2,3,4,5];
ids.copyWithin(0,1);
console.log(ids); // [ 2, 3, 4, 5, 5 ]

ids = [1,2,3,4,5];
ids.copyWithin(3,0,2);
console.log(ids); // [ 1, 2, 3, 1, 2 ]

ids = ['A', 'B', 'C'];
console.log(...ids.entries()); // [ 0, 'A' ] [ 1, 'B' ] [ 2, 'C' ]
console.log(...ids.keys()); // 0 1 2
console.log(...ids.values()); // A B C