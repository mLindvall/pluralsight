/* jslint node: true */
'use strict';

// well known symbols

let Blog = function () {};
Blog.prototype[Symbol.toStringTag] = 'Blog Class';
let blog = new Blog();
console.log( blog.toString() );

let values = [8,12,16];
console.log([].concat(values));

let values2 = [8,12,16];
values2[Symbol.isConcatSpreadable] = false;
console.log([].concat(values2));

let sum = values + 100;
console.log(sum);


let values3 = [8,12,16];
values3[Symbol.toPrimitive] = hint => {console.log(hint); return 42;};
let sum2 = values3 + 100;
console.log(sum2);

// well known symbols can be found at https://developer.mozilla.org and search for Symbols