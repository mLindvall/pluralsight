import {projectId as id, projectName} from 'module1.js';
console.log(id);
console.log('in base.js');
console.log(`${projectName} has id: ${id}`);

// use as to use alias
// import statements get hoisted.  the module loader will scan for the import statement and move them to the top

// leaving off the curly braces the module loader will look for the default export
import someValue from 'module1a.js';
console.log(someValue);

// we can explicitly show we want the default and give it an alias
import {default as myProjectName} from 'module1a.js';
console.log(myProjectName);

import someValue2 from 'module1.js';
console.log(someValue2); // prints undefined because there is not default

// when you use the wildcare, the alias is required
import * as values from 'module1.js';
console.log(values); // {default: 999, projectId: 99, projectName: "BuildIt"}

import {project, showProject} from 'module1b.js';
project.projectId = 8000;
showProject();
console.log(project.projectId);

import {showProject2, updateFunction} from 'module1b.js';
showProject2();
updateFunction();
showProject2();
