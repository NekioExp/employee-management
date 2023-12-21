import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { EmployeeInterface } from '../interfaces/employee.interface';
import { AgePipe } from '../pipes/age.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatTableModule, AgePipe],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss',
})
export class EmployeeListComponent {
  employees: EmployeeInterface[] = [];
  filteredEmployees: EmployeeInterface[] = [];
  searchTerm: string = '';
  role: string = 'User';

  displayedColumns: string[] = ['name', 'surname', 'birthdate', 'details'];
  dataSource: EmployeeInterface[] = [
    { name: 'John Doe', surname: 'Doe', birthdate: new Date('1980-10-04') },
    { name: 'Jane Doe', surname: 'Smith', birthdate: new Date('1985-01-23') },
    { name: 'Peter Jones', surname: 'Brown', birthdate: new Date('1990-03-07') },
    { name: 'Mary Johnson', surname: 'Williams', birthdate: new Date('1995-05-10') },
    { name: 'David Smith', surname: 'Davis', birthdate: new Date('2000-07-13') },
  ];

  constructor(private router: Router) { }

  filterEmployees() {
    this.filteredEmployees = this.employees.filter(employee => {
      return employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        employee.surname.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  viewDetails(row: EmployeeInterface) {
    this.router.navigate(['/details']);
  }

}
