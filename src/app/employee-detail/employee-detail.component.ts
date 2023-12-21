import { Component } from '@angular/core';
import { EmployeeInterface } from '../interfaces/employee.interface';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss',
})
export class EmployeeDetailComponent {
  employee: EmployeeInterface;
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.employee = {
      name: 'John Doe',
      surname: 'Doe',
      birthdate: new Date('1980-10-04'),
      position: 'Other',
      otherPosition: 'test'
    };
    this.employeeForm = this.formBuilder.group({
      name: [
        this.employee.name,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      surname: [
        this.employee.surname,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      birthdate: [this.employee.birthdate, Validators.required],
      position: [this.employee.position, [Validators.required]],
      otherPosition: [
        this.employee.otherPosition || '',
        this.employee.position === 'Other' ? [Validators.required] : [],
      ],
    });
  }

  ngOnInit(): void {
    this.employeeForm.get('position')?.valueChanges.subscribe((value) => {
      this.employeeForm
        .get('otherPosition')
        ?.setValidators(value === 'Other' ? [Validators.required] : []);
      this.employeeForm.get('otherPosition')?.updateValueAndValidity();
    });
  }

  compareData(): boolean {
    return JSON.stringify(this.employeeForm.getRawValue()) === JSON.stringify(this.employee);
  }

  saveEmployee() {
    // Implement logic to save the employee
  }
}
