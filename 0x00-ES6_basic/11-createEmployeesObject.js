const createEmployeesObject = (departmentName, employees) => {
  const employeesObject = {};
  departments.forEach((department) => {
    const [name, employees] = department;
    employeesObject[name] = employees;
  });
  return employeesObject;
};

export default createEmployeesObject;
