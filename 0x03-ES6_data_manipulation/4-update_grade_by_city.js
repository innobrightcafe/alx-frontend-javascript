export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  return getListStudents
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.filter(
        (newGrade) => newGrade.studentId === student.id,
      )[0];

      const updateStudent = { ...student };
      if (newGrade) {
        updateStudent.grade = newGrade.grade;
      } else {
        updateStudent.grade = 'N/A';
      }
      return updateStudent;
    });
}
