class Project {
    constructor(name = 'default') {
        console.log('constructing Project: ' + name);
    }
    getTaskCount() {
        return 50;
    }
}

class SoftwareProject extends Project {
    constructor() {
        super(); // need to call super when extending a class
        console.log('constructing SoftewareProject');
    }
    // don't need to provide any override syntax
    getTaskCount() {
        return 66;
    }
    getSuperTaskCount() {
        return super.getTaskCount() + 6;
    }
}

let p = new SoftwareProject('Mazatlan');

console.log(p.getTaskCount());
console.log(p.getSuperTaskCount());
