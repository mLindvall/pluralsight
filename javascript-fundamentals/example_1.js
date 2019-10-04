/*jslint node:true*/
'use strict';

const carId = 100;

// carId = 4;


console.log(carId2);

var carId2 = 10;

console.log(carId2);


if (true) {
    var foo = 9;
}

console.log(foo);



if (true) {
    let bar = 9;
}
// can't access bar outside of scope.
// console.log(bar);


// rest param
function sendCars(...allCarIds) {
    allCarIds.forEach(i => console.log(i));
}


sendCars(100,200,244);

function sendCarsDay(day, ...allCarIds) {
    console.log(`Send cars on ${day}`);
    allCarIds.forEach(i => console.log(i));
}

sendCarsDay('Monday', 1,3,4);


// destructuring arrays
let carIds3 = [1,2,3];
let [car1, car2, car3] = carIds3;

console.log('destructing', car1, car2, car3);

let cars1, remainingCars; 
[cars1, ...remainingCars] = carIds3;
console.log('destructing 2:', cars1, remainingCars);

let remainingCars2;
// notice leading comma will skip the first element. 
// can have as many commas as you'd like
[, ...remainingCars2] = carIds3;
console.log('destructing 3:', remainingCars2);

// destructing objects
let car = {id: 5000, style: 'convertible'};
let {id, style} = car;
console.log(id, style);

let truck = {truckId: 5001, truckStyle: 'heavy duty'};
let truckId, truckStyle;

// {truckId, truckStyle} = car; // this does not work because the compliler doesn't know if you're starting a code block or desctructing
({truckId, truckStyle} = truck); // need to surround with parentheses
console.log(truckId, truckStyle);

// spread syntax
// takes an array and spread it out int parameters
function startCars(car1, car2, car3) {
    console.log(car1,car2,car3);
}

let carIds4 = [100,200,300];
startCars(...carIds4);

let carCodes = 'abc';
startCars(...carCodes);

// typeof
// built in function in javascript

console.log(typeof(1)); // number
console.log(typeof(true)); // boolean
console.log(typeof('hello')); // string
console.log(typeof(function(){})); // function
console.log(typeof({})); // object
console.log(typeof(null)); // object
console.log(typeof(NaN)); // number

// type conversons
// convert to string
console.log(carIds4.toString());

// convert string to integer
console.log(Number.parseInt('55'));

// convert string to number
console.log(Number.parseFloat('55.99'));


// loops
let i=0;
for(; i< 12; i++) {
    if (i === 8) {
        break;
    }
}
console.log(i);

for (i=0; i<4; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
