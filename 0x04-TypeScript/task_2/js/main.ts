interface Director {
  workDirectorTasks(): string;
}

interface Teacher {
  workTeacherTasks(): string;
}

function createEmployee(salary: number): Director | Teacher {
  if (salary < 500) {
    return {
      workTeacherTasks: () => 'Getting to work'
    };
  } else {
    return {
      workDirectorTasks: () => 'Getting to director tasks'
    };
  }
}

//  Type predicate: checks if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Executes the appropriate work function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return (employee as Teacher).workTeacherTasks();
  }
}

// ✅ Expected results:
console.log(executeWork(createEmployee(200)));  // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

