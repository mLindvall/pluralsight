/* jslint node: true */
'use strict';

// data view and endianness

// see @docs https://developer.mozilla.org/en-US/docs/Glossary/Endianness

let buffer = new ArrayBuffer(1024);
let dv = new DataView(buffer);
console.log(dv.byteLength); // 1024

// work with a sub section of the buffer
dv = new DataView(buffer, 0, 32); // 0 -> start position of the buffer and 32 is the length we want
console.log(dv.byteLength); // 32

dv = new DataView(buffer);
dv.setUint8(0,1); // notice we're not working with [] we're working with methods
console.log(dv.getUint16(0)); // 256
console.log(dv.getUint16(0,true)); // 1 // by passing true we're telling the method to use little endian formating and not the default big endian