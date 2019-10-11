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


// default function params
var getProduct = function(productId = 1000, type = 'software') {
    console.log(productId + ',' + type);
};
getProduct(undefined, 'hardware'); // 1000, hardware

var getTotal = function(price, tax = price* 0.07) {
    console.log(price + tax);
};

getTotal(5.00); // 5.35

var baseTax = 0.07;
var getTotal2 = function(price, tax = price * baseTax) {
    console.log(price + tax);
};
getTotal2(5.00); // 5.35

var generateBaseTax = () => 0.07;
var getTotal3 = function(price, tax = price * generateBaseTax()) {
    console.log(price + tax);
};
getTotal3(5.00); // 5.35

var getTotal4 = function(price, tax = 0.07) {
    console.log(arguments.length);
};
getTotal4(5.00);

var getTotal5 = function(price = adjustments, adjustments = 1.00) {  
    console.log(price + adjustments);
};
// getTotal5();// javascript doesn't know about the adjustments varible (use before declaration)
getTotal5(5.00);  // this works and prints 6

var getTotal6 = new Function("price = 20.00", "return price");
console.log(getTotal6());

// rest and spread

var showCategories = function (productId, ...categories) {
    console.log(categories instanceof Array);
};
showCategories(123,'search', 'advertising');

var showCategories2 = function (productId, ...categories) {
    console.log(categories);
};
showCategories2(123,'search', 'advertising');
showCategories2(123);

var showCategories3 = function (productId, ...categories) {
    console.log(arguments.length);
};
showCategories3(123,'search', 'advertising'); // prints 3

var showCategories4 = new Function("...categories", "return categories;");
console.log(showCategories4('search', 'advertising'));

var prices = [12,20,18];
var maxPrice = Math.max(...prices);
console.log(maxPrice);
var newPriceArray = [...prices];
console.log(newPriceArray);

var newPriceArray2 = Array(...[,,]);
console.log(newPriceArray2); // [undefined, undefined]
var newPriceArray3 = [...[,,]];
console.log(newPriceArray3);// [undefined, undefined]

var maxCode = Math.max(..."43210");
console.log(maxCode); // prints 4  // the spread will break out a string into individual characters

var codeArray = ["A", ..."BCD", "E"];
console.log(codeArray); // [ 'A', 'B', 'C', 'D', 'E' ]
