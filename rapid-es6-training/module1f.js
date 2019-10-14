// properties for class instances

class Project {
    constructor() {
        this.location = 'Mazatlan';
    }
}

class SoftwareProject extends Project {
    constructor() {
        super();
    }
}

let p = new SoftwareProject();
console.log(p.location);


class Project1 {
    constructor() {
        let location = 'Mazatlan';
    }
}

class SoftwareProject1 extends Project1 {
    constructor() {
        super();
    }
}

p = new SoftwareProject1();
console.log(p.location); // prints undefined



class SoftwareProject2 extends Project {
    constructor() {
        super();
        this.location = this.location + ' Beach';
    }
}

p = new SoftwareProject2();
console.log(p.location); // prints Mazatlan Beach