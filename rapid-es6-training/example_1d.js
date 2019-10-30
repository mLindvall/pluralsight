/* jslint node: true */
'use strict';

let invoiceNum = '1350';
console.log(`Invoice Number: ${invoiceNum}`); // Invoice Number: 1350

console.log(`Invoice Number: \${invoiceNum}`); //Invoice Number: ${invoiceNum}

let msg = `A
B
C`;
console.log(msg); //A
                  //B
                  //C

console.log(`Invoice Number: ${"INV-" + invoiceNum}`); //Invoice Number: INV-1350

function showMessage(msg) {
    let invoiceNum = '99';
    console.log(msg);
}
showMessage(`Invoice Number: ${invoiceNum}`); // Invoice Number: 1350

function processInvoice(segments) {
    console.log(segments);
}
processInvoice `template`; //[ 'template' ]


// tag template literals
function processInvoice2(segments, ...values) {
    console.log(segments);
    console.log(values);
}
let amount = '2000';
processInvoice2 `Invoice: ${invoiceNum} for ${amount}`; //[ 'Invoice: ', ' for ', '' ]
                                                        //[ '1350', '2000' ]
// segments are unqiue strings withing the template literal
// values holds our interpolated values