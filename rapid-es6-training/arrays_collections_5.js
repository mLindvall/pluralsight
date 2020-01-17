/* jslint node: true */
'use strict';

// Set and WeakSet

// purpose of set is to guarantee uniqueness of its items

let perks = new Set();
perks.add('Car');
perks.add('Super Long Vacation');

console.log(perks.size); // 2

perks.add('Car');
console.log(perks.size); // 2

perks = new Set([
    'Car',
    '10 Weeks Vacation',
    'Jet',
]);

console.log(perks.size); // 3

let newPerks = new Set(perks);
console.log(newPerks.size); // 3

console.log(perks.has('Jet')); // true
console.log(perks.has('Cool Hat')); // false

console.log(...perks.keys()); // Car 10 Weeks Vacation Jet
console.log(...perks.values()); // Car 10 Weeks Vacation Jet
console.log(...perks.entries()); // [ 'Car', 'Car' ] [ '10 Weeks Vacation', '10 Weeks Vacation' ] [ 'Jet', 'Jet' ]

perks = new Set([{
        id: 800
    },
    {
        id: 800
    },
]);
console.log(perks.size); // 2 // two unique object literals

perks = new Set([1, '1']);
console.log(perks.size); // 2

// WeakSet
// perks = new WeakSet([1, 2, 3]); // Invalid value used in weak set
let p1 = {name: 'Car'}, p2 = {name: 'Jet'};
perks = new WeakSet([p1,p2]);
console.log(perks.size); // undefined // don't get access to what it's holds.
console.log(perks.has(p1)); // true

p1 = null;
console.log(perks.has(p1)); // false