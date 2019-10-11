/* jslint node: true */
'use strict';
// octal and binary literals

var value = 0o10;
console.log(value); // prints 8

value = 0O10;
console.log(value); // prints 8

value = 0b10; // binary
console.log(value); // prints 2

value = 0B10; // binary
console.log(value); // prints 2
