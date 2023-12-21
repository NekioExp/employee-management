import { Routes } from '@angular/router';
import { RoleSelectorComponent } from './role-selector/role-selector.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [
  { path: 'role-selector', component: RoleSelectorComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: '**', component: RoleSelectorComponent },
];
