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
    setTimeout(resolve, 1000, 'someValue');
});

promise.then((r) => {console.log(r); return Promise.resolve("yes");})
.then((r) => console.log(r))
.catch((e) => console.log("error", e))
.finally(() => console.log("finally"));















let fnc = () => promise;
async function asyncCall() {
    console.log("calling");
    var result = await fnc();
    console.log(result);
}
asyncCall();
// prints calling
// then waits a second for the promise to return
// and prints someValue


// promise.then((data) => console.log('success: ', data)).catch((err) => console.error('error: ', err));