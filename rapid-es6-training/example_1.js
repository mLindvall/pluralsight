/* jslint node: true */
'use strict';

// let is a new keyword to declare variables and does away with hoisting

// this is an example of hoisting and productId is set to undefined because it was used before use
console.log(productId);
var productId = 12;

// compile error
// console.log(productId1);
// let productId1 = 12;

let productId2 = 12;
console.log(productId2);

let productId3;
console.log(productId3); // prints undefined

let productId4 = 12; 
// introduction to block scoping
{
    let productId4 = 2000;
} // will disappear after block
console.log(productId4); // prints 12

{
    let productId5 = 12;
}
// console.log(productId5); // reference error: won't compile

let productId6 = 42;
for (let productId6 = 0; productId6 < 10; productId6++) {

}
console.log(productId6); // prints 42 because of block scoping of the for loop

// es5 example
let updateFunctions = [];
for (var i = 0; i < 2; i++) {
    updateFunctions.push(function() { return i;});
}
console.log(updateFunctions[0]()); // prints 2

// es6 example - when using let, the closure will create an instance of each I
let updateFunctions2 = [];
for (let i = 0; i < 2; i++) {
    updateFunctions2.push(function() { return i;});
}
console.log(updateFunctions2[0]()); // prints 0


const MARKUP_PCT = 100;
console.log(MARKUP_PCT);

// MARKUP_PCT = 10; // type error assignment to const variable;

const MARKUP_PCT2 = 100;
if (MARKUP_PCT2 > 100) {
    const MARKUP_PCT2 = 20;
}
console.log(MARKUP_PCT2); // prints 100: block scope

// arrow functions (short hand)
var getPrice = () => 5.99;
console.log(typeof getPrice); // prints function
console.log(getPrice()); // prints 5.99

var getPrice2 = count => count * 4.00;
console.log(getPrice2(2));

var getPrice3 = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPrice3(2, 0.07));

var getPrice4 = (count, tax) => {
    var price = count * 4.00;
    price *= (1 + tax);
    return price;
};
console.log(getPrice4(2, 0.07));


var invoice = {
    number: 123,
    process: function() {
        console.log(this);
    }
};
invoice.process();

var invoice2 = {
    number: 123,
    process: () => console.log(this)
};
invoice2.process();