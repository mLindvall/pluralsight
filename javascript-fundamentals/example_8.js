/* jslint node: true */
'use strict';

try {
    let car = newCar;
} catch (error) {
    console.error('error: ', error);
} finally {
    console.log('this always executes');
}
console.log('continuing...');

// developer thrown errors
try {
    // code here
    throw new Error('my custom error');
} catch (error) {
    console.error('error: ', error);
} finally {
    console.log('this always executes');
}


// creating a Promise - temp holder for an asynchronous call
let promise = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'someValue');
});

// promise.then((data) => console.log('success: ', data)).catch((err) => console.error('error: ', err));
promise.then(
    value => console.log('success: ', value),
    error => console.log('error: ', error)
);
console.log(promise);