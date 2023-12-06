interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Jamin",
  lastName: "Doe",
  age: 28,
  location: "San Francisco",
};
const student2: Student = {
  firstName: "Gladys",
  lastName: "Murphy",
  age: 25,
  location: "San Francisco",
};
const studentsList: Array<Student> = [student1, student2];
const table = document.createElement("table");
const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
headerCell1.innerHTML = "firstName";
headerCell2.innerHTML = "location";

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  cell1.innerHTML = student.firstName;
  cell2.innerHTML = student.location;
});
document.body.appendChild(table);
