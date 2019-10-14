// static members

class Project {
    static getDefaultId() {
        return 0;
    }

    // static let id = 0;// can only do static method
}

console.log(Project.getDefaultId()); // returns 0

// can still create static properties this way
Project.id = 99;
console.log(Project.id);


// var p = new Project();
// console.log(p.getDefaultId()); // prints error