/* jslint node: true */
'use strict';

// Map and WeakMaps

let employee1 = {name: 'Jake'};
let employee2 = {name: 'Janet'};

let employees = new Map();
employees.set(employee1, 'ABC');
employees.set(employee2, '123');

console.log(employees.get(employee1)); // ABC
console.log(employees.size); // 2

employees.delete(employee2);
console.log(employees.size); // 1

employees.clear();
console.log(employees.size); // 0

let arr = [
    [employee1, 'ABC'],
    [employee2, '123'],
];

employees = new Map(arr);
console.log(employees.size); // 2
console.log(employees.has(employee2)); // true

let list = [...employees.values()];
console.log(list); // [ 'ABC', '123' ]

list = [...employees.entries()];
console.log(list[0][1]); // ABC
console.log(list[0]); // [ { name: 'Jake' }, 'ABC' ]

// WeakMaps
employees = new WeakMap(arr);

employee1 = null;

console.log(employees.size); // undefined // we can't access size on WeakMap