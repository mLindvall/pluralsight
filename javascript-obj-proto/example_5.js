/*jslint node: true */
'use strict';

var cat = {
    name: {first: 'Fluffy', last: 'Cat'},
    color: 'White',
};

Object.defineProperty(cat, 'fullname', {
    get:function() { return `${this.name.first} ${this.name.last}`;},
});
console.log(cat.fullname);

// lets add a setter
Object.defineProperty(cat, 'properName', {
    get:function() { return `${this.name.first} ${this.name.last}`;},
    set:function(value) { 
        var nameParts = value.split(' ');
        this.name.first = nameParts[0];
        this.name.last = nameParts[1];
    },
});

cat.properName = 'Smelly Kitty';
console.log(cat.properName);