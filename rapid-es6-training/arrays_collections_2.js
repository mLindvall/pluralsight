/* jslint node: true */
'use strict';

// array buffer and typed arrays

let buffer = new ArrayBuffer(1024);
console.log(buffer.byteLength); // 1024

buffer[0] = 0xff;
console.log(buffer[0]); // 255

/*
Typed Arrays
    * Uint -> unsigned

    Int8Array()                 Int32Array()
    Uint8Array()                Uint32Array()
    Uint8ClampedArray()

    Int16Array()                Float32Array()
    Uint16Array()               Float64Array()
*/

buffer = new ArrayBuffer(1024);
let a = new Int8Array(buffer);
a[0] = 0xff;
console.log(a[0]); // -1 // since Int8Array is signed 0xff actually refers to -1

a = new Uint8Array(buffer);
a[0] = 0xff;
console.log(a[0]); // 255

a = new Uint8ClampedArray(buffer);
a[0] = -12;
console.log(a[0]); // 0 working with clamped numbers less then 0 will be set to zero and numbers over 255 will be set o 255


buffer = new ArrayBuffer(1024);
a = new Uint8Array(buffer);
let b = new Uint16Array(buffer);
a[0] = 1;
console.log(b[0]); // 1 // both these array using the same underlining buffer / data


buffer = new ArrayBuffer(1024);
a = new Uint8Array(buffer);
b = new Uint16Array(buffer);
a[1] = 1;
console.log(b[0]); // 256