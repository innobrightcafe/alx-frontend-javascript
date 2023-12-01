const createEmployeesObject = (departmentName, employees) => {
  return {
    [departmentName]: employees,
  };
};

export default createEmployeesObject;
