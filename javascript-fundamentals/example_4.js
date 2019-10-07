/* jslint node:true */
'use strict';

// constructor function is used to instaniate a new objects

function Car(id) { // notice capital letter
    this.carId = id;
    // if we created 100,000 car instances, 
    // there would be 100,000 of these.  
    // Use protoytpe to only create one instance
    this.start = function () {
        console.log('start: ' + this.carId);
    };
}

let car = new Car(123);

console.log(car.carId);

car.start();


// prototypes
function Vehicle(id) {
    this.vehicleId = id;
}
// this will create on instance of the start function saving on memory
Vehicle.prototype.start = function () {
    console.log('start: ' + this.vehicleId);
};

let vehicle = new Vehicle(1);
vehicle.start();

//Polyfill
String.prototype.hello = function() {
    return this.toString() + ' Hello';
};
console.log('foo'.hello());


// JSON - JavaScript Object Notation
let carObject = {
    id: 123,
    style: 'convertible',
};
console.log( JSON.stringify(carObject));

let carIds = [
    {carId: 123},
    {carId: 124},
    {carId: 1},
];
console.log(JSON.stringify(carIds));

let jsonIn = 
`[
    {"carId":123},
    {"carId":124},
    {"carId":1}
]`;

let carIdsIn = JSON.parse(jsonIn);
console.log(carIdsIn);

console.log();
// array iteration
let arrCarIds = [
    {carId: 123, style: 'sedan'},
    {carId: 124, style: 'convertible'},
    {carId: 1, style: 'sedan'},
];
arrCarIds.forEach(car => console.log(car));
console.log();
arrCarIds.forEach((car,index) => console.log(car, index));

let convertibles = arrCarIds.filter(c => c.style === 'convertible');
console.log(convertibles);

// The every() method checks if all elements in an array pass a test (provided as a function).
let result = arrCarIds.every( c => c.carId > 0);
console.log(result);

// finds the first element
let firstElement = arrCarIds.find(c => c.carId > 100);
console.log(firstElement);