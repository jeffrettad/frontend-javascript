// 1. Let's build a Teacher interface
const teacher3: (Teacher: string){
  firstName: 'Peter',
  fullTimeEmployee: false,
  lastName: 'Olawale',
  location: 'Nigeria',
  contract: false,
}

console.log(teacher3);

// 2. Extending the Teacher class

  const director1:  (Directors: string){
  firstName: 'Lekan',
  fullTimeEmployee: true,
  lastName: 'Olawale',
  location: 'Nigeria',
  numberOfReports: 17,
}
console.log(director1);
// 3 Printing teachers

// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementing the function using the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe
