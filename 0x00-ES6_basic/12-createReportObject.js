import createEmployeesObject from './11-createEmployeesObject';

const createReportObject = (employeesList) => {
  const allEmployees = { ...employeesList };

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
};

export default createReportObject;
