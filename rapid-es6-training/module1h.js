// new.target is mainly used on constructor
// new.target is a function


// new.target is pointing to the constructor
class Project {
    constructor() {
        console.log(new.target);
        console.count("stuff i count");
    }
}
var p = new Project(); // prints constructor() { console.log(new.target)}


class SoftwareProject extends Project {
    constructor() {
        super();
    }
}
p = new SoftwareProject(); // prints constructor from SoftewareProject

class DatabaseProject extends Project {

}

p = new DatabaseProject(); // prints constructor(...args) {super(...args)}

console.time("hi");
console.timeEnd("hi");
