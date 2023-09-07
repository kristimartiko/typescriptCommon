import roles from './roles';

interface Employee {
    id: number,
    name: string,
    role: roles,
    salary: number
}

export default Employee;