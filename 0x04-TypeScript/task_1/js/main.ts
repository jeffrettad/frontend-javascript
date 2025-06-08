
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



// 4. Interface for the class structure
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class implementing the interface
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}



// 5. Advanced types Part 1
//  Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing the interface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing the interface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create an employee
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
}

export interface Teacher {
}
export interface Teacher {
  fullTimeEmployee: boolean;
  location: string;
}
export interface Teacher {
  yearsOfExperience?: number;}
  
  export interface Teacher {
  [propName: string]: any}