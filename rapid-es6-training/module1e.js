let project = {
    getTaskCount() { return 50;}
};

let softwareProject = {
    getTaskCount() {
        return super.getTaskCount() + 7;
    }
};

// link these two together
Object.setPrototypeOf(softwareProject, project);
console.log(softwareProject.getTaskCount());