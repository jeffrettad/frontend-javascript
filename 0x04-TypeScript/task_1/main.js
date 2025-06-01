"use strict";
// 1. Let's build a Teacher interface
const teacher3;
console.log(teacher3);
// 2. Extending the Teacher class
const director1;
console.log(director1);
// Implementing the function using the interface
const printTeacher = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("John", "Doe")); // Output: J. Doe
