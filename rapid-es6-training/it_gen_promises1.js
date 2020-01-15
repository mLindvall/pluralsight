/* jslint node: true */
'use strict';

// iterators are a major new feature

let ids = [9000, 9001, 9002];
console.log(typeof ids[Symbol.iterator]);
let it = ids[Symbol.iterator]();
console.log(it.next()); // { value: 9000, done: false }

it.next();
console.log(it.next()); // { value: 9002, done: false }
console.log(it.next()); // { value: undefined, done: true }


let idMaker = {
    [Symbol.iterator]() {
        let nextId = 8000;
        return {
            next() {
                return {
                    value: nextId++,
                    done: false,
                };
            }
        };
    }
};
let it2 = idMaker[Symbol.iterator]();
console.log(it2.next().value); // 8000
console.log(it2.next().value); // 8001

for (let v of idMaker) {
    if (v > 8002) break;
    console.log(v); // 8000 // 8001 // 8002
}

let idMaker2 = {
    [Symbol.iterator]() {
        let nextId = 8000;
        return {
            next() {
                let value = nextId > 8002 ? undefined : nextId++;
                let done = !value;
                return {
                    value,
                    done
                };
            }
        };
    }
};

for (let v of idMaker2) {
    console.log(v); // 8000 // 8001 // 8002
}


let ids2 = [9000, 9001, 9002];
function process(id1,id2,id3) {
    console.log(id3);
}

process(...ids2); // 9002