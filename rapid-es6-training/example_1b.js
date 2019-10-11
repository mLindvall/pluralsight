/* jslint node: true */
'use strict';
var categories = ['hardware', 'software', 'vaporware'];
for (var item of categories) {
    console.log(item);
}

var c = [,,];
for (var i of c) {
    console.log(i);
} // undefined undefined

var codes = "ABCDF";
var count = 0;
for (var code of codes) {
    count++;
}
console.log(count); // prints 5