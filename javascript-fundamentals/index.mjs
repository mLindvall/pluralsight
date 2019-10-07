/* jslint node: true */
'use strict';

import { Car }from './models/car.mjs';

let car = new Car(123);
console.log(car.id);

// need to run this example like this.
// node --experimental-modules index.mjs