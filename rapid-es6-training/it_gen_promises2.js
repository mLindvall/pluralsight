/* jslint node: true */
'use strict';

// generators - special kind of function that doesn't run necessary all the way through

function *process() {
    yield 8000;
    yield 8001;
}

let it = process();
console.log(it.next()); // { value: 8000, done: false }
console.log(it.next()); // { value: 8001, done: false }
console.log(it.next()); // { value: undefined, done: true }


// normally you wouldn't see generators with hardcoded values

function *process1() {
    let nextId = 7000;
    while(true)
        yield(nextId++);
}

let it2 = process1();
it2.next();
console.log(it2.next().value);
console.log();
for(let i = 0; i< 2; i++) {
    console.log(it2.next().value);
}
console.log();
for (let id of process1()){
    if (id > 7002) break;
    console.log(id);
}