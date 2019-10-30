/* jslint node: true */
'use strict';

var obj = {};

// object literal
var price = 5.99, quantity = 10;
var productView = {price, quantity};
console.log(productView); // prints { price: 5.99, quantity: 10 }

var productView2 = {price, quantity, calculateValue() { return this.price * this.quantity;}};
console.log(productView2.calculateValue());  // 59.900000000000006

var productView3 = {price, quantity, "calculate value"() { return this.price * this.quantity;}};
console.log(productView3["calculate value"]()); // 59.900000000000006

var field = 'dynamicField';
var productView4 = {
    [field]:price, // can use an expression as a field name just need to wrap it in brackets
};
console.log(productView4); // { dynamicField: 5.99 }

var productView5 = {
    [field + "-001"]:price, // can use an expression as a field name just need to wrap it in brackets
};
console.log(productView5); // { 'dynamicField-001': 5.99 }

var method = 'doIt';
var productView6 = {
    [method + "-001"]() {
        console.log("in a method");
    }
};
productView6['doIt-001'](); // in a method

var ident = 'productId';
var productView7 = {
    get [ident] () {return true;},
    set [ident] (value){}
};
console.log(productView7.productId); // true