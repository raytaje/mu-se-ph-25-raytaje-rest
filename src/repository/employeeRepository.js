import data from '../data/employees'

const filter = (query) => {
  const { department } = query;

  if (department) {
    
    const employees = data.employees.filter(
      (emp) => emp.department === department
    );

    return employees;
  } else {
    return data.employees;
  }
};

const find = (id) => {
  const employee = data.employees.find((emp) => emp.id === id);
  if (employee) {
    return employee;
  } else {
    throw Error('Employee not found');
  }
};
const employeeRepository = {
  filter,
  find,
};
export default employeeRepository;  
