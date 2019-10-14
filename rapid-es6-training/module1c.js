// classes are not hoisted so you can't use it before it's declared
class Task {
    // let taskId = 9000;  class body is not a place to declare variables
    constructor() {
        console.log('constructing Task');
    } //, can't use comma when working with class only with object literals
    showId() {
        console.log('99');
    }
}

console.log(typeof Task); // prints out function

let task = new Task();
console.log(typeof task); // prints object
console.log(task instanceof Task); // true
task.showId(); 

console.log(task.showId === Task.prototype.showId); // true

// we can assign classes to variables and use them in expressions in a similar
// way we did with function variables
let newClass = class Task1 {
    constructor() {
        console.log('constructing Task1');
    }
};
new newClass(); // prints constructing Task1

// valid es5
let Task2 = function() {
    console.log('constructing Task2');
};
let task2 = {};
Task2.call(task2); // prints constructing Task2

// es6
class Task3 {
    constructor() {
        console.log('constructing Task3');
    }
}
let task3 = {};
Task3.call(task3); // task constructor cannot be called without new keyword


