import employeeModel from './employee';
import employeeData from './data';
import roles from './roles';

//use filter
const findManagers = () => {
    return employeeData.filter(emp => emp.role === roles.MANAGER)
};

const findDevelopers = () => {
    return employeeData.filter(emp => emp.role === roles.DEVELOPER)
};

//use reduce
const getAllSalaries = () => {
    const listOfSalaries = employeeData.map(emp => emp.salary)
    return listOfSalaries.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

const addNewColumn = () => {
    return employeeData.map((emp) => ({
        ...emp, cool: true
    }));
}

const orderEmployees = () => {
    return employeeData.slice()
                    .sort((emp1, emp2) => emp2.salary - emp1.salary)
                    .map(emp => emp);
}



console.log(getAllSalaries())
console.log(addNewColumn());
console.log(orderEmployees())
