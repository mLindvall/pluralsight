export let project = {
    projectId: 99
};

export function showProject() {
    console.log(`in show project ${project.projectId}`);
}

export function showProject2() {
    console.log('in original');
}

export function updateFunction() {
    // this is not updating like in the pluralsight video
    showProject2 = function () {
        console.log('in updated');
    };
}