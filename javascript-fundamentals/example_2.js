/*jslint node:true*/
'use strict';

// equality
// == will try to convert the types to be the same
// === won't do any type conversion

console.log(1 == 1); // true
console.log(1 == true); // true
console.log(1 === true); // false // 1 is number and true is boolean

//unary operators
// ++var1 will increment before use
// var1++ will increment after use

let year = 1984;
console.log(++year); //1985
console.log(year++); //1985
console.log(year); //1886

let year2 = "1984";
console.log(typeof (year2));
console.log(-year2); // -1984
console.log(+year2); // 1984
year2 = "-1984";
console.log(-year2);
console.log(+year2);

// logical operators
let userSettings = null;
let defaultSettigns = {
    name: 'Mike'
};
// truthy / falsy
console.log(userSettings || defaultSettigns);

// relational operators
// > < >= <=

let s1 = 'Zoo';
let s2 = 'alphabet';

console.log(`is ${s1} < ${s2}`, (s1 < s2));
console.log(`is ${s1.toUpperCase()} < ${s2.toUpperCase()}`, (s1.toUpperCase() < s2.toUpperCase()));

// conditional operator

console.log(`(55 > 5) ? 'yes' : 'no' = `, (55 > 5) ? 'yes' : 'no');
console.log(`55 > 5 ? 'yes' : 'no' = `, 55 > 5 ? 'yes' : 'no');

// assigment operators
// +=   -=   *=  /*  %= 
// shift operators
//    var1 <<= 1;
//    var1 >>= 1;
//    var2 >>>= 1;

let birthYr = 1984;
console.log(`plus 10`, birthYr += 10);
console.log(`minus 10`,birthYr -= 10);
console.log(`times 10`, birthYr *= 10);
console.log(`divide by 10`, birthYr /= 10);
console.log(`modolus by 10`, birthYr %= 10);
console.log(`shift to right by one bit (like dividing it by two)`, birthYr <<= 1);
console.log(`shift to left by one bit (like multiplying it by two)`, birthYr <<= 1);

// operators precedence
