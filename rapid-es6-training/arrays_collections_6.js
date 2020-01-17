/* jslint node: true */
'use strict';

// Sub classing - ability to extend arrays and other objects

/** 
 *  @see https://kangax.github.io/compat-table/es6
 * 
 * we can subclass
 *  - Array
 *  - RegExp
 *  - Function
 *  - miscellaneous
 *    - Boolean
 *    - Number
 *    - String
 *    - Map
 *    - Set
 * 
 */

class Perks extends Array {

}

let a = Perks.from([5, 10, 15]);

console.log(a instanceof Perks); // true
console.log(a.length); // 3

let newArray = a.reverse();
console.log(newArray instanceof Perks); // true // still an of Perks that extends array
console.log(newArray instanceof Array); // true

class Perks1 extends Array {
    sum() {
        let total = 0;
        this.map(v => total += v);
        return total;
    }
}

a = Perks1.from([5, 10, 15]);
console.log(a.sum()); // 30