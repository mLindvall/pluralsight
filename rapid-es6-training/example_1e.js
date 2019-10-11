/* jslint node: true */
'use strict';

// destructuring

let salary = ['32000', '50000', '75000'];
let [low, average, high] = salary;
console.log(average); // 50000

salary = ['32000', '50000'];
[low, average, high] = salary;
console.log(high); // undefined

salary = ['32000', '50000', '75000'];
[low,,high] = salary;
console.log(high); // 75000

let remaining;
[low, ...remaining] = salary;
console.log(remaining); // [ '50000', '75000' ]

salary = ['32000', '50000'];
[low, average, high = '88000'] = salary;
console.log(high); // 88000

salary = ['32000', '50000', ['88000', '99000']];
let actualHigh, actualLow;
[low, average, [actualLow, actualHigh]] = salary;
console.log(actualLow); // 88000
console.log(actualHigh); // 99000

function reviewSalary([low, average], high = '88000') {
    console.log(average);
}
reviewSalary(['32000', '50000']); // 50000


// use curly brackets for objects and square brackets for arrays
salary = {
    low1: '32000',
    average1: '50000',
    high1: '75000'
};

let {low1, average1, high1} = salary;
console.log(high1);

let {low1: newLow, average1:newAverage, high1: newHigh} = salary;
console.log(newHigh);

salary = {
    low1: '320001',
    average1: '500001',
    high1: '750001'
};

let newLow2, newAverage2, newHigh2;

// {low1: newLow2, average1:newAverage2, high1: newHigh2} = salary; // will not work
({low1: newLow2, average1:newAverage2, high1: newHigh2} = salary); // will work
console.log(newHigh2);

let [maxCode, minCode] = 'AZ';
console.log(`min: ${minCode} max: ${maxCode}`);
