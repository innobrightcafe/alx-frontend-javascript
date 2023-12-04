// Write a function named getListStudentIds that returns an array of ids from a list of objects.
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
