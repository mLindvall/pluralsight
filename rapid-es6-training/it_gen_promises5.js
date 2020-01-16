/* jslint node: true */
'use strict';

// promises - an object that is waiting for an async operation to complete, when it does complete it's either fulfilled or rejected


function doAsync() {
    let p = new Promise(function (resolve) {
        console.log('in promise code');
        setTimeout(function () {
            console.log('resolving...');
            resolve('OK');
        }, 2000);
    });
    return p;
}
/*
let promise = doAsync();    // in promise
                            // ( 2 second delay )
                            // resolving...
*/

function doAsync2() {
    let p = new Promise(function (resolve, reject) {
        console.log('in promise code');
        setTimeout(function () {
            console.log('rejecting...');
            reject('Database Error!');
        }, 2000);
    });
    return p;
}
/*
let promise2 = doAsync2();  // in promise
                            // ( 2 second delay )
                            // rejecting
                            // (node:26000) UnhandledPromiseRejectionWarning: undefined
*/
doAsync()
    .then(
        function (result) {
            console.log('Fulfilled! ' + result); // Fulfilled! OK
        },
        function (reason) {
            console.log('Rejected! ' + reason);
        }
    );

doAsync2()
    .then(
        function (result) {
            console.log('Fulfilled! ' + result);
        },
        function (reason) {
            console.log('Rejected! ' + reason); // Rejected! Database Error!
        }
    );


doAsync()
    .then((res) => {
        console.log('Fulfilled! ' + res);
        return 'For Sure';
    })
    .then((res) => console.log('Really! ' + res));

doAsync2().catch((err) => console.log('Error: ' + err));


/************************************************************/

function getAnotherPromise1() {
    return Promise.reject('Test');
}

function getAnotherPromise() {
    return Promise.resolve('Some String');
}

function doAsync3() {
    let p = new Promise((resolve) => {
        console.log('in promise code');
        setTimeout(function () {
            resolve(getAnotherPromise());
        }, 2000);
    });
    return p;
}

doAsync3()
    .then(
        function (res) {
            console.log('Ok ' + res);
        },
        function (err) {
            console.log('Nope ' + err);
        }
    );


function getAnotherPromise2() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('rejecting...');
            reject('Database Error!');
        }, 4000);
    });
    return p;
}

function getAnotherPromise3() {
    let p = new Promise(function (resolve) {
        setTimeout(function () {
            console.log('resolving...');
            resolve('Database Success!');
        }, 1000);
    });
    return p;
}
Promise.all([getAnotherPromise2(), getAnotherPromise3()]).then(
    function (res) {
        console.log('Ok ' + res);
    },
    function (err) {
        console.log('Nope ' + err);
    }
);

Promise.race([getAnotherPromise2(), getAnotherPromise3()]).then(
    function (res) {
        console.log('Ok ' + res);
    },
    function (err) {
        console.log('Nope ' + err);
    }
);