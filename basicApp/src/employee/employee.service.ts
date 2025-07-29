import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private employees = [
        { id: 1, name: 'John Doe', position: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', position: 'Project Manager' },
        { id: 3, name: 'Peter Jones', position: 'UI/UX Designer' },
    ];

    getAllEmployees() {
        return this.employees;
    }

    getEmployeeById(id: number) {
        return this.employees.find(employee => employee.id === id);
    }

}
