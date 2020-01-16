/* jslint node: true */
'use strict';

// throw and return

function *process() {
    try {
        yield 9000;
        yield 9001;
        yield 9002;
    } catch (e) {

    }
}

let it = process();
console.log(it.next().value); // 9000
console.log(it.throw('foo')); // { value: undefined, done: true }
console.log(it.next()); // { value: undefined, done: true } // => the generator is completed

/* commented out so rest of code runs
console.log();
function *process2() {
    yield 9000;
    yield 9001;
    yield 9002;
}
let it2 = process2();
console.log(it2.next().value); // 9000
console.log(it2.throw('foo')); // foo // exception: foo (exception terminates)
console.log(it2.next());
*/

console.log();
function *process3() {
    yield 9000;
    yield 9001;
    yield 9002;
}
let it3 = process3();
console.log(it3.next().value);
console.log(it3.return('foo'));
console.log(it.next());
