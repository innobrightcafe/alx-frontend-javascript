import createEmployeesObject from "./11-createEmployeesObject";

const createReportObject = (employeesList) => {
  const employeesObject = createEmployeesObject(employeesList);
   
  return {
    allEmployees: employeesObject,
    getNumberOfDepartments: () => Object.keys(employeesObject).length,
    getDepartments: () => Object.keys(employeesObject),
  };
};

export default createReportObject;
