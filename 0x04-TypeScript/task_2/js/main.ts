interface Director {
  workDirectorTasks(): string;
}

interface Teacher {
  workTeacherTasks(): string;
}

export function createEmployee(salary: number): Director | Teacher {
  if (salary < 500) {
    return { workTeacherTasks: () => 'Getting to work' };
  } else {
    return { workDirectorTasks: () => 'Getting to director tasks' };
  }
}

export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// For testing only
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

