


"use strict";
const student1 = {
    firstName: 'John',
    lastName: 'Adewale',
    age: 20,
    location: 'Osun',
};
const student2 = {
    firstName: 'Olaide',
    lastName: 'Dele',
    age: 22,
    location: 'Oyo',
};
const studentsList = [student1, student2];
const table = document.createElement('table');
const tableBody = document.createElement('tbody');
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});
table.appendChild(tableBody);
document.body.appendChild(table);
