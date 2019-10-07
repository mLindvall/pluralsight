/* jslint node: true */
'use strict';
// classes

// use class keyword to create a class object

class Car {
    constructor(id) {
        this.id = id;
    }
    identify(suffix) {
        return `Car Id: ${this.id} ${suffix}`;
    }
}

let car = new Car(12);
console.log(car);
car.id = 456;
console.log(car.id);
console.log(car.identify("!!!!"));

// inhertance
class Vehicle{
    constructor() {
        this.type = 'vehicle';
    }
    start() {
        return `Starting: ${this.type}`;
    }
}

class Truck extends Vehicle{
    constructor(){
        super(); // need to call when extending
    }
    start() {
        return `In truck ${super.start()}`;
    }
}

let truck = new Truck();
console.log(truck.type);
console.log(truck.start());


// console.log([1,2,5].map((n) => n + 1));