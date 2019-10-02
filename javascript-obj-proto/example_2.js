// new keyword followed by function to create
function Cat(name, color) {
    this.name = name;
    this.color = color;
    // this refers to which ever object is executing the code
}

// new keyword refers to new exmpty object
var cat = new Cat("Bill", "Yellow");
console.log(cat);

// var cat = Cat(); returns undefined
// console.log(color) returns the color defined in the function Cat()

var cat1 = Object.create(Object.prototype,
    {
        name: {
            value: 'Fluffy',
            enumerable: true,
            writable: true,
            configurable: true,
        },
        color: {
            value: 'White',
            enumerable: true,
            writable: true,
            configurable: true,
        }
    });

console.log(cat1);

//ECMASCript 6 Classes
class Kitty {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    speak() {
        console.log("Meeooow");
    }
}

var kitty = new Kitty('Mike', 'White');
console.log(kitty);
kitty.speak();