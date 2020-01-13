/* jslint node: true */
'use strict';

// String extensions

let title = 'Santa Barbara Surf Riders';
console.log(title.startsWith('Santa')); // true
console.log(title.endsWith('Rider')); // false
console.log(title.includes('ba')); // true

var surfTitle = `Surfer's \u{1f3c4} Blog`;
console.log(surfTitle);

var surfer = "\u{1f3c4}";
console.log(surfer.length);

var surfer2 = "\u{1f30a}\u{1f3c4}\u{1f40b}";
console.log(Array.from(surfer2).length);
console.log(surfer2);

var title2 = "Mazatla\u0301n";
console.log(title2 + ' ' + title2.length); // Mazatlán 9 // shows 9 as lenght instead of 8
console.log(title2 + ' ' + title2.normalize().length); // Mazatlán 8
console.log(title2.normalize().codePointAt(7).toString(16)); // 6e

console.log(String.fromCodePoint(0x1f3c4)); // 🏄

let title3 = 'Surfer';
let output = String.raw`${title3} \u{1f3c4}\n`;
console.log(output);

let wave = '\u{1f30a}';
console.log(wave.repeat(10));